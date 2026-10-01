// App de repaso GH-300: lee QUESTIONS (data/questions.js) y gestiona el flujo del quiz.
(() => {
  const setupScreen = document.getElementById("setup-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  const categorySelect = document.getElementById("category-select");
  const questionCountInput = document.getElementById("question-count");
  const shuffleOptionsCheckbox = document.getElementById("shuffle-options");
  const onlyConfirmedCheckbox = document.getElementById("only-confirmed");
  const startBtn = document.getElementById("start-btn");

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

  let session = null; // { questions, index, score, answers }

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
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestion();
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
  checkBtn.addEventListener("click", checkAnswer);
  nextBtn.addEventListener("click", nextQuestion);
  quitBtn.addEventListener("click", quitQuiz);
  restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");
  });

  populateCategories();
})();
