# GH-300 Quiz

Aplicación web estática (sin backend ni dependencias) para repasar el examen **GH-300 (GitHub Copilot)** mediante una batería de preguntas tipo test.

## Uso

Abre [index.html](index.html) directamente en el navegador, o sirve la carpeta con cualquier servidor estático:

```powershell
python -m http.server 8080
```

Y visita `http://localhost:8080`.

## Características

- Banco de 212 preguntas de práctica, incluidas 80 preguntas originales alineadas con las áreas de la guía oficial GH-300.
- Selección de categoría y número de preguntas.
- Preguntas de selección única y múltiple.
- Mezcla aleatoria de preguntas y opciones.
- Feedback inmediato con explicación tras cada respuesta.
- Marca las preguntas cuya respuesta no fue confirmada oficialmente (`confidence: "proposed"`), con opción de excluirlas del repaso.
- Resumen final con puntuación y desglose por pregunta.

## Estructura

```
index.html        # Maquetado de la app
style.css         # Estilos
app.js            # Lógica del quiz
data/questions.js # Banco de preguntas (array QUESTIONS)
```

## Añadir o editar preguntas

Edita [data/questions.js](data/questions.js). Cada pregunta tiene el formato:

```js
{
  id: 1,
  category: "Nombre de categoría",
  question: "Texto de la pregunta",
  type: "single" | "multiple",
  options: ["Opción A", "Opción B", ...],
  correct: [0, 2],            // índices 0-based de las opciones correctas
  confidence: "correct" | "proposed",
  explanation: "Explicación opcional"
}
```

## Origen

Preguntas extraídas y organizadas a partir de un banco de repaso en castellano sobre GitHub Copilot / GH-300.

Se ha añadido además un bloque de 38 preguntas de la categoría **"Banco comunidad (ghcertified.com)"**, traducidas al castellano a partir del proyecto open-source [ghcertified](https://github.com/v-fidelusaleksander/ghcertified) (licencia GPLv3), que recopila preguntas de práctica no oficiales creadas por la comunidad para la certificación GH-300. Estas preguntas se marcan con `confidence: "community"` y no son preguntas reales del examen oficial.

El banco incluye también 80 preguntas originales de práctica alineadas con las áreas de evaluación de la [guía oficial de estudio GH-300 de Microsoft Learn](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300) y, para CLI y sesiones de agente, con la [documentación de GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) y [gestión de sesiones de VS Code](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions). Son material de preparación no oficial, no preguntas reales del examen.

> ⚠️ Se han evitado deliberadamente sitios de tipo "exam dump" (p. ej. ExamTopics) que publican supuestas preguntas reales del examen, ya que ir en contra de los términos de servicio de la certificación y plantea problemas éticos/legales. Para el temario oficial consulta la [guía de estudio de Microsoft Learn para GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300).

