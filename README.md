# GH-300 Quiz

Aplicación web estática (sin backend ni dependencias) para repasar el examen **GH-300 (GitHub Copilot)** mediante una batería de preguntas tipo test.

## Uso

Abre [index.html](index.html) directamente en el navegador, o sirve la carpeta con cualquier servidor estático:

```powershell
python -m http.server 8080
```

Y visita `http://localhost:8080`.

## Características

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
