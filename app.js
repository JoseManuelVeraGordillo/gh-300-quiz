// App de repaso GH-300: lee QUESTIONS (data/questions.js) y gestiona el flujo del quiz.
(() => {
  const setupScreen = document.getElementById("setup-screen");
  const studyScreen = document.getElementById("study-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  const categorySelect = document.getElementById("category-select");
  const questionCountInput = document.getElementById("question-count");
  const shuffleOptionsCheckbox = document.getElementById("shuffle-options");
  const onlyConfirmedCheckbox = document.getElementById("only-confirmed");
  const startBtn = document.getElementById("start-btn");
  const studyOpenBtn = document.getElementById("study-open-btn");
  const studyBackBtn = document.getElementById("study-back-btn");
  const studyQuizBtn = document.getElementById("study-quiz-btn");
  const studyTabs = [...document.querySelectorAll(".study-tab")];
  const studyGuides = [...document.querySelectorAll(".study-guide")];

  const progressLabel = document.getElementById("progress-label");
  const progressFill = document.getElementById("progress-fill");
  const questionCategoryEl = document.getElementById("question-category");
  const questionTextEl = document.getElementById("question-text");
  const questionHintEl = document.getElementById("question-hint");
  const optionsListEl = document.getElementById("options-list");
  const feedbackEl = document.getElementById("feedback");
  const checkBtn = document.getElementById("check-btn");
  const nextBtn = document.getElementById("next-btn");
  const quitBtn = document.getElementById("quit-btn");

  const resultSummaryEl = document.getElementById("result-summary");
  const resultBreakdownEl = document.getElementById("result-breakdown");
  const restartBtn = document.getElementById("restart-btn");

  const statsToggleBtn = document.getElementById("stats-toggle");
  const statsCloseBtn = document.getElementById("stats-close");
  const statsOverlayEl = document.getElementById("stats-overlay");
  const statsSidebarEl = document.getElementById("stats-sidebar");
  const resetStatsBtn = document.getElementById("reset-stats");
  const accuracyDonutEl = document.getElementById("accuracy-donut");
  const accuracyPctEl = document.getElementById("accuracy-pct");
  const statCorrectEl = document.getElementById("stat-correct");
  const statWrongEl = document.getElementById("stat-wrong");
  const statTotalEl = document.getElementById("stat-total");
  const categoryBarsEl = document.getElementById("category-bars");
  const sessionBarsEl = document.getElementById("session-bars");
  const goalInputEl = document.getElementById("goal-input");
  const readinessBadgeEl = document.getElementById("readiness-badge");

  let session = null; // { questions, index, score, answers }

  // --- Estadísticas persistentes (localStorage) ---
  const STATS_KEY = "gh300QuizStats";
  const GOAL_KEY = "gh300QuizGoal";
  const MIN_ANSWERS_FOR_READINESS = 20;

  function loadGoal() {
    const raw = Number(localStorage.getItem(GOAL_KEY));
    return raw >= 1 && raw <= 100 ? raw : 90;
  }

  function saveGoal(goal) {
    localStorage.setItem(GOAL_KEY, String(goal));
  }

  function loadStats() {
    try {
      const raw = localStorage.getItem(STATS_KEY);
      if (!raw) throw new Error("no stats");
      const parsed = JSON.parse(raw);
      return {
        totalAnswered: parsed.totalAnswered || 0,
        totalCorrect: parsed.totalCorrect || 0,
        byCategory: parsed.byCategory || {},
        sessions: Array.isArray(parsed.sessions) ? parsed.sessions : []
      };
    } catch {
      return { totalAnswered: 0, totalCorrect: 0, byCategory: {}, sessions: [] };
    }
  }

  function saveStats(stats) {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }

  function recordAnswer(question, isCorrect) {
    const stats = loadStats();
    stats.totalAnswered += 1;
    if (isCorrect) stats.totalCorrect += 1;

    const cat = stats.byCategory[question.category] || { correct: 0, total: 0 };
    cat.total += 1;
    if (isCorrect) cat.correct += 1;
    stats.byCategory[question.category] = cat;

    saveStats(stats);
  }

  function recordSession(score, total) {
    const stats = loadStats();
    stats.sessions.push({ date: new Date().toISOString(), score, total });
    stats.sessions = stats.sessions.slice(-12);
    saveStats(stats);
  }

  function renderStats() {
    const stats = loadStats();
    const pct = stats.totalAnswered ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0;

    accuracyPctEl.textContent = `${pct}%`;
    accuracyDonutEl.style.background = `conic-gradient(var(--correct) 0% ${pct}%, var(--wrong) ${pct}% 100%)`;
    statCorrectEl.textContent = stats.totalCorrect;
    statWrongEl.textContent = stats.totalAnswered - stats.totalCorrect;
    statTotalEl.textContent = stats.totalAnswered;

    const categories = Object.keys(stats.byCategory);
    if (categories.length === 0) {
      categoryBarsEl.innerHTML = '<p class="empty-note">Aún no hay datos. ¡Responde alguna pregunta!</p>';
    } else {
      categoryBarsEl.innerHTML = categories
        .map((cat) => {
          const { correct, total } = stats.byCategory[cat];
          const catPct = total ? Math.round((correct / total) * 100) : 0;
          return `
            <div class="category-bar-row">
              <div class="label"><span>${cat}</span><span>${correct}/${total} (${catPct}%)</span></div>
              <div class="bar-track"><div class="bar-fill" style="width:${catPct}%"></div></div>
            </div>
          `;
        })
        .join("");
    }

    if (stats.sessions.length === 0) {
      sessionBarsEl.innerHTML = '<p class="empty-note">Todavía no has completado ningún quiz.</p>';
    } else {
      sessionBarsEl.innerHTML = stats.sessions
        .map((s) => {
          const sPct = s.total ? Math.round((s.score / s.total) * 100) : 0;
          const date = new Date(s.date).toLocaleDateString();
          return `<div class="session-bar" style="height:${Math.max(sPct, 4)}%" title="${date}: ${s.score}/${s.total} (${sPct}%)"></div>`;
        })
        .join("");
    }

    renderReadiness(stats.totalAnswered, pct);
  }

  function renderReadiness(totalAnswered, pct) {
    const goal = loadGoal();
    goalInputEl.value = goal;

    readinessBadgeEl.classList.remove("ready", "close", "not-ready", "no-data");

    if (totalAnswered < MIN_ANSWERS_FOR_READINESS) {
      readinessBadgeEl.classList.add("no-data");
      readinessBadgeEl.textContent = `Responde al menos ${MIN_ANSWERS_FOR_READINESS} preguntas para estimar tu nivel (llevas ${totalAnswered})`;
      return;
    }

    if (pct >= goal) {
      readinessBadgeEl.classList.add("ready");
      readinessBadgeEl.textContent = `✅ Listo para el examen (${pct}% ≥ ${goal}%)`;
    } else if (pct >= goal - 10) {
      readinessBadgeEl.classList.add("close");
      readinessBadgeEl.textContent = `⚠️ Casi listo: te faltan ${goal - pct} puntos para tu objetivo`;
    } else {
      readinessBadgeEl.classList.add("not-ready");
      readinessBadgeEl.textContent = `❌ Sigue repasando: ${pct}% frente al objetivo del ${goal}%`;
    }
  }

  function openStats() {
    statsSidebarEl.classList.remove("hidden");
    statsOverlayEl.classList.remove("hidden");
    statsSidebarEl.setAttribute("aria-hidden", "false");
    renderStats();
  }

  function closeStats() {
    statsSidebarEl.classList.add("hidden");
    statsOverlayEl.classList.add("hidden");
    statsSidebarEl.setAttribute("aria-hidden", "true");
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function populateCategories() {
    const categories = [...new Set(QUESTIONS.map((q) => q.category))];
    categorySelect.innerHTML = '<option value="all">Todas las categorías</option>';
    categories.forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });
  }

  function buildSessionQuestions() {
    const category = categorySelect.value;
    const onlyConfirmed = onlyConfirmedCheckbox.checked;
    let pool = QUESTIONS.filter((q) => category === "all" || q.category === category);
    if (onlyConfirmed) pool = pool.filter((q) => q.confidence === "correct");

    const requested = Math.max(1, parseInt(questionCountInput.value, 10) || 10);
    const count = Math.min(requested, pool.length);
    const chosen = shuffle(pool).slice(0, count);

    return chosen.map((q) => {
      let options = q.options.map((text, idx) => ({ text, idx }));
      if (shuffleOptionsCheckbox.checked) options = shuffle(options);
      return { ...q, renderedOptions: options };
    });
  }

  function startQuiz() {
    const questions = buildSessionQuestions();
    if (questions.length === 0) {
      alert("No hay preguntas disponibles con esos filtros.");
      return;
    }
    session = { questions, index: 0, score: 0, answers: [] };
    setupScreen.classList.add("hidden");
    studyScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestion();
  }

  function openStudyGuide() {
    setupScreen.classList.add("hidden");
    studyScreen.classList.remove("hidden");
  }

  function selectStudyGuide(guideId) {
    studyGuides.forEach((guide) => {
      const selected = guide.id === guideId;
      guide.hidden = !selected;
      guide.classList.toggle("hidden", !selected);
    });

    studyTabs.forEach((tab) => {
      const selected = tab.getAttribute("aria-controls") === guideId;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
  }

  function startStudyQuiz() {
    categorySelect.value = "Fundamentos de GitHub Copilot";
    questionCountInput.value = "5";
    onlyConfirmedCheckbox.checked = false;
    startQuiz();
  }

  function renderQuestion() {
    const q = session.questions[session.index];
    const total = session.questions.length;

    progressLabel.textContent = `Pregunta ${session.index + 1} de ${total}`;
    progressFill.style.width = `${(session.index / total) * 100}%`;

    questionCategoryEl.textContent = q.category;
    questionTextEl.textContent = q.question;
    questionHintEl.textContent =
      q.type === "multiple" ? "Selección múltiple: marca todas las correctas." : "Selección única.";

    optionsListEl.innerHTML = "";
    q.renderedOptions.forEach((opt) => {
      const li = document.createElement("li");
      li.className = "option-item";
      li.dataset.idx = opt.idx;
      li.textContent = opt.text;
      li.addEventListener("click", () => toggleOption(li, q.type));
      optionsListEl.appendChild(li);
    });

    feedbackEl.classList.add("hidden");
    feedbackEl.textContent = "";
    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    checkBtn.disabled = false;
  }

  function toggleOption(li, type) {
    if (li.classList.contains("disabled")) return;
    if (type === "single") {
      [...optionsListEl.children].forEach((el) => el.classList.remove("selected"));
      li.classList.add("selected");
    } else {
      li.classList.toggle("selected");
    }
  }

  function checkAnswer() {
    const q = session.questions[session.index];
    const selected = [...optionsListEl.children]
      .filter((el) => el.classList.contains("selected"))
      .map((el) => parseInt(el.dataset.idx, 10));

    if (selected.length === 0) {
      alert("Selecciona al menos una opción.");
      return;
    }

    const correctSet = new Set(q.correct);
    const selectedSet = new Set(selected);
    const isCorrect =
      correctSet.size === selectedSet.size && [...correctSet].every((v) => selectedSet.has(v));

    [...optionsListEl.children].forEach((el) => {
      el.classList.add("disabled");
      const idx = parseInt(el.dataset.idx, 10);
      if (correctSet.has(idx)) el.classList.add("correct");
      else if (selectedSet.has(idx)) el.classList.add("incorrect");
    });

    feedbackEl.classList.remove("hidden", "ok", "ko");
    feedbackEl.classList.add(isCorrect ? "ok" : "ko");
    let html = isCorrect ? "✅ ¡Correcto!" : "❌ Incorrecto.";
    if (q.explanation) html += ` ${q.explanation}`;
    if (q.confidence === "proposed") {
      html += `<span class="proposed-note">⚠️ Respuesta propuesta: no confirmada oficialmente, revisa el material original.</span>`;
    } else if (q.confidence === "community") {
      html += `<span class="proposed-note">ℹ️ Pregunta de la comunidad (ghcertified.com), no es una pregunta oficial del examen.</span>`;
    }
    feedbackEl.innerHTML = html;

    if (isCorrect) session.score += 1;
    session.answers.push({ question: q, selected, isCorrect });
    recordAnswer(q, isCorrect);

    checkBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }

  function nextQuestion() {
    session.index += 1;
    if (session.index >= session.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const total = session.questions.length;
    const pct = Math.round((session.score / total) * 100);
    resultSummaryEl.textContent = `Has acertado ${session.score} de ${total} preguntas (${pct}%).`;
    recordSession(session.score, total);
    renderStats();

    resultBreakdownEl.innerHTML = "";
    session.answers.forEach((a, i) => {
      const row = document.createElement("div");
      row.className = "result-row";
      row.innerHTML = `<span>${i + 1}. ${a.question.question}</span><span>${a.isCorrect ? "✅" : "❌"}</span>`;
      resultBreakdownEl.appendChild(row);
    });
  }

  function quitQuiz() {
    quizScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");
    session = null;
  }

  startBtn.addEventListener("click", startQuiz);
  studyOpenBtn.addEventListener("click", openStudyGuide);
  studyBackBtn.addEventListener("click", () => {
    studyScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");
  });
  studyTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectStudyGuide(tab.getAttribute("aria-controls")));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === "Home"
        ? 0
        : event.key === "End"
          ? studyTabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + studyTabs.length) % studyTabs.length;
      studyTabs[nextIndex].click();
      studyTabs[nextIndex].focus();
    });
  });
  studyQuizBtn.addEventListener("click", startStudyQuiz);
  checkBtn.addEventListener("click", checkAnswer);
  nextBtn.addEventListener("click", nextQuestion);
  quitBtn.addEventListener("click", quitQuiz);
  restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");
  });

  statsToggleBtn.addEventListener("click", openStats);
  statsCloseBtn.addEventListener("click", closeStats);
  statsOverlayEl.addEventListener("click", closeStats);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeStats();
  });
  resetStatsBtn.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres borrar todas las estadísticas guardadas?")) {
      localStorage.removeItem(STATS_KEY);
      renderStats();
    }
  });
  goalInputEl.addEventListener("change", () => {
    const goal = Math.min(100, Math.max(1, Number(goalInputEl.value) || 90));
    saveGoal(goal);
    renderStats();
  });

  populateCategories();
  renderStats();
})();
