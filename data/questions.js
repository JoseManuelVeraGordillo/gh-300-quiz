// Banco de preguntas GH-300 (GitHub Copilot)
// type: "single" | "multiple"
// correct: array de índices 0-based de las opciones correctas
// confidence: "correct" (confirmada) | "proposed" (propuesta, no confirmada oficialmente)
const QUESTIONS = [
  // 1. Pruebas de GitHub Copilot
  {
    id: 1,
    category: "Pruebas de GitHub Copilot",
    question: "¿Cómo puede Copilot ayudar a mejorar la eficiencia de las pruebas en un entorno de equipo?",
    type: "multiple",
    options: [
      "Puede añadir pruebas estándar.",
      "Copilot puede realizar pruebas de integración.",
      "Puede encontrar pruebas similares en Internet.",
      "Copilot puede realizar pruebas más rápido que los humanos.",
      "Copilot puede estandarizar las pruebas."
    ],
    correct: [0, 3, 4],
    confidence: "correct",
    explanation: "Copilot acelera la creación de pruebas, ayuda a incorporar pruebas estándar y favorece patrones homogéneos en el equipo."
  },
  {
    id: 2,
    category: "Pruebas de GitHub Copilot",
    question: "¿Qué tipo de pruebas puedes añadir a un proyecto de desarrollo web usando Copilot?",
    type: "multiple",
    options: ["Pruebas de control.", "Pruebas unitarias.", "Pruebas del sistema.", "Pruebas de integración."],
    correct: [1, 3],
    confidence: "proposed",
    explanation: "Copilot puede ayudar a generar pruebas unitarias y de integración mediante frameworks habituales."
  },
  {
    id: 3,
    category: "Pruebas de GitHub Copilot",
    question: "¿Qué tareas puede realizar GitHub Copilot al probar una aplicación web?",
    type: "multiple",
    options: [
      "Eliminar código no utilizado.",
      "Ejecutar comandos de prueba.",
      "Añadir archivos de prueba específicos.",
      "Añadir bibliotecas de pruebas.",
      "Construir una base de datos."
    ],
    correct: [1, 2, 3],
    confidence: "proposed",
    explanation: "Puede asistir con la ejecución de comandos, crear archivos de pruebas y ayudar a incorporar bibliotecas o frameworks de testing."
  },

  // 2. Fundamentos de la privacidad de GitHub Copilot
  {
    id: 4,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "¿Cuál es una buena razón para aplicar la exclusión de contenido en GitHub Copilot?",
    type: "single",
    options: ["Excluir instrucciones de estilo.", "Ocultar código obsoleto o antiguo.", "Eliminar repositorios.", "Filtrar bloques de código."],
    correct: [1],
    confidence: "correct",
    explanation: "La exclusión evita que Copilot utilice determinado contenido como contexto, por ejemplo código heredado, obsoleto o que no debería influir en las sugerencias."
  },
  {
    id: 5,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "¿Cuál es un lugar típico para guardar el archivo github-instructions.md?",
    type: "single",
    options: ["En el alojamiento del sitio web.", "En la raíz del proyecto.", "En cualquier archivo del proyecto.", "En un repositorio de GitHub.com."],
    correct: [1],
    confidence: "correct",
    explanation: "La ubicación habitual actual es .github/copilot-instructions.md, dentro de la carpeta .github situada en la raíz del repositorio."
  },
  {
    id: 6,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "¿Qué elementos se ajustan con mayor probabilidad a los Términos de Servicio de GitHub Copilot?",
    type: "multiple",
    options: ["Responsabilidad y cumplimiento.", "Pérdida de datos.", "Uso indebido del código público.", "Indemnización."],
    correct: [0, 3],
    confidence: "proposed",
    explanation: "Los términos contractuales suelen contemplar responsabilidades, cumplimiento e indemnización."
  },
  {
    id: 7,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "Con el modo agente de Copilot introduciendo un nuevo nivel de seguridad, ¿qué se puede controlar ahora?",
    type: "multiple",
    options: ["Acceso al agente de codificación de Copilot.", "Acceso a archivos.", "Almacenamiento local del navegador.", "Modelos alternativos de IA.", "Búsqueda en la web."],
    correct: [0, 3, 4],
    confidence: "correct",
    explanation: "Se centra en controles sobre el acceso al agente, los modelos disponibles y la búsqueda web."
  },
  {
    id: 8,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "¿Qué dos configuraciones de privacidad están disponibles en un plan individual de GitHub Copilot?",
    type: "multiple",
    options: ["Indemnización de propiedad intelectual.", "Scripting entre sitios.", "Exclusión de datos del entrenamiento.", "Filtro de código público."],
    correct: [2, 3],
    confidence: "proposed",
    explanation: "Los usuarios individuales pueden controlar el uso de datos para entrenamiento y las sugerencias coincidentes con código público."
  },
  {
    id: 9,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "Cuando la exclusión de contenido no funciona como se espera, ¿qué archivo debería comprobarse?",
    type: "single",
    options: ["home.html", "package.json", "index.js", "settings.json"],
    correct: [3],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 10,
    category: "Fundamentos de la privacidad de GitHub Copilot",
    question: "¿Qué pasos debes seguir para llegar a los pares elemento-valor específicos de GitHub Copilot en VS Code?",
    type: "single",
    options: [
      "Engranaje → Extensiones → buscar “GitHub”.",
      "Engranaje → Extensiones → buscar “GitHub Copilot”.",
      "Engranaje → Configuración → buscar “GitHub Copilot”.",
      "Engranaje → Ajustes → buscar “GitHub”."
    ],
    correct: [2],
    confidence: "proposed",
    explanation: "Las opciones específicas se localizan en Configuración filtrando por “GitHub Copilot”."
  },

  // 3. Uso responsable, validación y solución de problemas
  {
    id: 11,
    category: "Uso responsable, validación y solución de problemas",
    question: "¿Qué es esencial al incorporar código generado por IA en sistemas de producción?",
    type: "single",
    options: [
      "Técnicas de validación y estrategias de mitigación.",
      "Usar el código exactamente como se generó, sin revisión.",
      "Probar únicamente la funcionalidad final de la aplicación.",
      "Desplegar inmediatamente en producción para recibir comentarios."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 12,
    category: "Uso responsable, validación y solución de problemas",
    question: "Las sugerencias de Copilot han dejado de aparecer en el editor. ¿Cuál debería ser el primer paso?",
    type: "single",
    options: [
      "Comprobar el indicador de estado de Copilot y verificar que la extensión esté habilitada.",
      "Desinstalar y reinstalar inmediatamente todo VS Code.",
      "Reescribir el código existente para activar sugerencias.",
      "Contactar con soporte antes de revisar la configuración."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 13,
    category: "Uso responsable, validación y solución de problemas",
    question: "¿Qué enfoque deben adoptar los desarrolladores respecto a las salidas de GitHub Copilot?",
    type: "single",
    options: [
      "Garantizar la calidad mediante verificación, dejando la seguridad según el contexto.",
      "Aplicar estrategias de verificación adecuadas debido a sus limitaciones conocidas.",
      "Aplicar control de calidad, considerando que las limitaciones afectan principalmente a casos complejos.",
      "Aplicar verificación, confiando en que la experiencia permita gestionar las limitaciones."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 14,
    category: "Uso responsable, validación y solución de problemas",
    question: "¿Cómo deben manejarse las sugerencias de GitHub Copilot Chat dentro de los proyectos?",
    type: "single",
    options: [
      "Centrarse en la evaluación y tratar la integración como secundaria.",
      "Evaluarlas e integrarlas, pero omitir el refinamiento.",
      "Evaluar, integrar y refinar mediante un proceso estructurado de retroalimentación.",
      "Evaluarlas rápidamente e integrar de inmediato las más prometedoras."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 15,
    category: "Uso responsable, validación y solución de problemas",
    question: "¿Cómo deben abordar los desarrolladores los problemas con las sugerencias de GitHub Copilot?",
    type: "single",
    options: [
      "Con metodologías de solución de problemas especialmente para incidencias recurrentes.",
      "Mediante enfoques estructurados de diagnóstico y resolución.",
      "Según la experiencia del desarrollador y los recursos disponibles.",
      "Adaptando el diagnóstico y la resolución a la complejidad de cada incidencia."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 16,
    category: "Uso responsable, validación y solución de problemas",
    question: "¿Qué puede hacerse cuando las exclusiones de contenido no funcionan correctamente?",
    type: "single",
    options: [
      "Identificar y resolver los problemas mediante una solución sistemática de incidencias.",
      "Usar enfoques sistemáticos cuya resolución dependa de la complejidad.",
      "Analizar sistemáticamente y verificar o ajustar la configuración.",
      "Revisar sistemáticamente la configuración para identificar el problema."
    ],
    correct: [0],
    confidence: "proposed",
    explanation: ""
  },

  // 4. Infraestructura y capacidades de pruebas
  {
    id: 17,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Cómo puede GitHub Copilot ayudar a establecer una infraestructura de pruebas en VS Code?",
    type: "single",
    options: [
      "Generando código base, con una estandarización más eficaz en patrones comunes.",
      "Creando código base, pero requiriendo configuración adicional para ser coherente.",
      "Creando código base estandarizado de pruebas mediante sus capacidades de generación de código.",
      "Generando plantillas cuya estandarización depende del framework."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 18,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Qué permite a GitHub Copilot crear aserciones de prueba eficaces?",
    type: "single",
    options: [
      "Comprensión contextual mejorada mediante refinamiento iterativo.",
      "Análisis de escenarios, siendo la comprensión contextual complementaria.",
      "Generación precisa de aserciones, especialmente para patrones estándar.",
      "Comprensión contextual que permite aserciones precisas para distintos escenarios."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 19,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Cómo puede GitHub Copilot mejorar los enfoques de pruebas existentes?",
    type: "single",
    options: [
      "Mediante funciones interpretativas que evalúan patrones y mejoran cobertura y calidad.",
      "Evaluando patrones, con funciones interpretativas para cobertura y calidad.",
      "Mejorando la calidad, dejando la evaluación de patrones y la cobertura como funciones secundarias.",
      "Mediante análisis integral, especialmente eficaz en suites complejas."
    ],
    correct: [0],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 20,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Qué capacidades de prueba ofrece GitHub Copilot para las bases de código?",
    type: "single",
    options: [
      "Integración con frameworks y generación condicionada por la complejidad.",
      "Generación estándar, siendo las pruebas unitarias más completas.",
      "Generación de pruebas unitarias y de integración mediante frameworks estándar del sector.",
      "Generación de pruebas unitarias, requiriendo especificar el framework para integración."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 21,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Cómo puede ayudar GitHub Copilot con las necesidades de pruebas durante el desarrollo?",
    type: "single",
    options: [
      "Creando conjuntos de datos realistas y escenarios de prueba.",
      "Creando datos, pero requiriendo otra solicitud para los escenarios.",
      "Generando escenarios, siendo los datos una función complementaria.",
      "Generando datos, mientras los escenarios dependen de frameworks existentes."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 22,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Cómo ayuda Copilot a identificar casos límite al probar una función que procesa cadenas?",
    type: "single",
    options: [
      "Sugiere valores vacíos y nulos, pero requiere analizar por separado longitud y caracteres.",
      "Identifica casos de validación, pero los límites de salida dependen de la complejidad.",
      "Sugiere casos comunes, requiriendo especificar los especializados.",
      "Sugiere cadenas vacías, valores nulos, valores límite y caracteres especiales."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 23,
    category: "Infraestructura y capacidades de pruebas",
    question: "¿Cómo mejora GitHub Copilot Enterprise los flujos de pruebas en equipo?",
    type: "single",
    options: [
      "Combinando colaboración y revisión de código para optimizar las pruebas.",
      "Mejorando las pruebas y usando la revisión colaborativa como complemento.",
      "Mediante técnicas colaborativas de revisión de código que mejoran las prácticas de pruebas del equipo.",
      "Mediante colaboración, integrando la revisión con las prácticas de pruebas."
    ],
    correct: [2],
    confidence: "proposed",
    explanation: ""
  },

  // 5. SDLC, aprendizaje, documentación y productividad
  {
    id: 24,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "¿En qué parte del proceso de desarrollo puede GitHub Copilot aportar valor?",
    type: "single",
    options: [
      "En todo el SDLC: planificación, desarrollo, pruebas y mantenimiento.",
      "Principalmente en desarrollo y pruebas.",
      "En la mayoría de fases, requiriendo enfoques especializados en planificación y mantenimiento.",
      "En los flujos de desarrollo, con estrategias específicas para otras fases."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 25,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "Un desarrollador conoce componentes de clase y quiere aprender React Hooks. ¿Cómo puede ayudarle mejor Copilot?",
    type: "single",
    options: [
      "Generar un ejemplo sencillo del hook más común, con instrucciones paso a paso y explicaciones.",
      "Convertir automáticamente todos los componentes de clase.",
      "Recomendar documentación externa.",
      "Proporcionar alternativas basadas en clases."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 26,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "¿Cómo puede GitHub Copilot ayudar a aprender tecnologías nuevas?",
    type: "single",
    options: [
      "Explicando tecnologías y generando ejemplos bajo demanda.",
      "Generando ejemplos relevantes y explicaciones para nuevos lenguajes y frameworks.",
      "Ofreciendo recursos complementarios a la generación de código.",
      "Generando código y dejando las explicaciones para solicitudes separadas."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 27,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "¿Qué capacidades de documentación ofrece GitHub Copilot?",
    type: "single",
    options: [
      "Documentación integral mejorada mediante refinamiento iterativo.",
      "Documentación clara cuya coherencia y cobertura dependen del contenido.",
      "Documentación clara y coherente, requiriendo indicaciones adicionales para una cobertura integral.",
      "Documentación clara, coherente e integral para código, API y procesos, incluidos archivos README."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 28,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "¿Cuál es un caso de alto valor para GitHub Copilot Chat que mejora significativamente la productividad?",
    type: "single",
    options: [
      "Depurar un algoritmo complejo con orientación paso a paso.",
      "Consultar la sintaxis de bucles y condicionales.",
      "Generar nombres de variables.",
      "Recibir ayuda con formato e indentación."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 29,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "¿Qué tarea de documentación NO es adecuada para GitHub Copilot en el contexto de un endpoint complejo?",
    type: "single",
    options: [
      "Crear especificaciones técnicas y guías de referencia de API.",
      "Crear documentación de marketing dirigida a usuarios.",
      "Documentar parámetros, solicitudes de ejemplo y formatos de respuesta.",
      "Documentar arquitectura e implementación."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 30,
    category: "SDLC, aprendizaje, documentación y productividad",
    question: "Un desarrollador pide ayuda sobre estrategia de marketing y posicionamiento de marca. ¿Cuál es la respuesta apropiada?",
    type: "single",
    options: [
      "El marketing forma parte de la funcionalidad principal de Copilot.",
      "Copilot puede proporcionar una estrategia integral de marketing.",
      "La solicitud está fuera de las capacidades y limitaciones centradas en código de GitHub Copilot.",
      "La herramienta se adaptará automáticamente como experta en marketing."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },

  // 6. Prompt engineering y contexto
  {
    id: 31,
    category: "Prompt engineering y contexto",
    question: "¿Qué diferencia el prompting zero-shot del few-shot?",
    type: "single",
    options: [
      "Difieren en la aplicación, pero usan estrategias de ejemplos similares.",
      "Difieren en el enfoque de aplicación y en la provisión de ejemplos.",
      "Difieren en los ejemplos, pero sus enfoques se solapan considerablemente.",
      "Usan ejemplos diferentes, pero métodos de aplicación comparables."
    ],
    correct: [1],
    confidence: "correct",
    explanation: "Zero-shot no aporta ejemplos; few-shot proporciona ejemplos del patrón deseado."
  },
  {
    id: 32,
    category: "Prompt engineering y contexto",
    question: "¿Qué factores determinan la eficacia de los prompts para GitHub Copilot?",
    type: "single",
    options: [
      "Componentes esenciales, siendo el contexto complementario.",
      "Información contextual, usando los componentes esenciales solo como formato.",
      "Componentes equilibrados, aunque el contexto influye poco.",
      "Componentes esenciales e información contextual: instrucción, contexto, restricciones y ejemplos."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 33,
    category: "Prompt engineering y contexto",
    question: "¿Cómo pueden optimizar los desarrolladores sus prompts?",
    type: "single",
    options: [
      "Aplicando experiencia sin una metodología concreta.",
      "Siguiendo buenas prácticas: especificidad, historial del chat, refinamiento, contexto e iteración.",
      "Siguiendo directrices generales adaptadas a preferencias individuales.",
      "Experimentando hasta encontrar una estrategia personal."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 34,
    category: "Prompt engineering y contexto",
    question: "¿Qué principio es más crítico para obtener sugerencias específicas y accionables?",
    type: "single",
    options: [
      "Contexto claro, pero requisitos flexibles.",
      "Equilibrar contexto y requisitos con terminología técnica.",
      "Proporcionar contexto claro y requisitos específicos.",
      "Incluir requisitos específicos minimizando el contexto."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 35,
    category: "Prompt engineering y contexto",
    question: "Un equipo quiere generar manejadores de API siguiendo un patrón propio de errores. ¿Qué enfoque es más eficaz?",
    type: "single",
    options: [
      "No proporcionar ejemplos.",
      "Zero-shot sin ejemplos ni contexto.",
      "Usar siempre prompts idénticos.",
      "Few-shot, aportando ejemplos de manejadores existentes con el patrón deseado."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 36,
    category: "Prompt engineering y contexto",
    question: "¿Cómo mejora el historial del chat las interacciones con Copilot?",
    type: "single",
    options: [
      "Mantiene contexto, pero las respuestas son independientes de él.",
      "Mantiene el contexto para mejorar las respuestas.",
      "Mejora por reconocimiento de patrones, siendo secundario el contexto.",
      "Guarda interacciones sin influir en la respuesta actual."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 37,
    category: "Prompt engineering y contexto",
    question: "¿Cómo maneja GitHub Copilot Chat distintos tipos de prompts?",
    type: "single",
    options: [
      "Reconoce los tipos, pero los procesa por vías estandarizadas.",
      "Los procesa aplicando la misma optimización.",
      "Usa procesamiento adaptativo sin optimización específica.",
      "Procesa diferentes tipos de prompts, cada uno con casos de uso óptimos."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 38,
    category: "Prompt engineering y contexto",
    question: "¿Qué técnica ayuda a refinar las sugerencias de código de Copilot?",
    type: "single",
    options: ["Usar nombres de variables más largos.", "Añadir más importaciones.", "Manipular el contexto y refinar el prompt.", "Aumentar el número de comentarios."],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 39,
    category: "Prompt engineering y contexto",
    question: "¿Qué ayuda a optimizar las interacciones con GitHub Copilot?",
    type: "single",
    options: [
      "Un flujo eficiente apoyado en patrones intuitivos.",
      "Un flujo eficiente del proceso de prompting.",
      "Interacciones intuitivas apoyadas en organización sistemática.",
      "Equilibrio entre eficiencia y estructura."
    ],
    correct: [1],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 40,
    category: "Prompt engineering y contexto",
    question: "Copilot Chat responde de forma demasiado genérica para un dominio especializado. ¿Qué debe hacerse?",
    type: "single",
    options: [
      "Esperar que comprenda perfectamente el dominio.",
      "Reducir la complejidad de las preguntas.",
      "Evitar Chat para trabajos especializados.",
      "Usar ajustes específicos y contexto detallado, reconociendo sus limitaciones."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 41,
    category: "Prompt engineering y contexto",
    question: "¿Cómo finaliza GitHub Copilot los prompts para obtener sugerencias relevantes?",
    type: "single",
    options: [
      "Construye prompts sin análisis contextual.",
      "Analiza el contexto sin construir un prompt explícito.",
      "Recopila contexto, pero usa plantillas predefinidas.",
      "Recopila información contextual y construye prompts."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },

  // 7. Chat, Inline Chat, comandos y CLI
  {
    id: 42,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "¿Qué función permite conversar en tiempo real con GitHub Copilot sin salir del editor?",
    type: "single",
    options: ["Interacciones mediante línea de comandos.", "Sugerencias de autocompletado.", "Chat externo en el navegador.", "Funcionalidad Inline Chat."],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 43,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "¿Qué comando con barra es apropiado para entender una función compleja?",
    type: "single",
    options: ["/review", "/doc", "/test", "/explain"],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 44,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "¿Qué escenarios se benefician de Inline Chat?",
    type: "single",
    options: [
      "Depurar toda la aplicación y generar documentación de aplicación.",
      "Planificación y arquitectura de alto nivel.",
      "Ediciones en varios archivos.",
      "Depurar o refactorizar un bloque, añadir comentarios y pruebas de función."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 45,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "¿Cómo puede GitHub Copilot CLI mejorar los flujos de desarrollo?",
    type: "single",
    options: [
      "Priorizando comandos avanzados sobre los fundamentos.",
      "Centrándose en configuración y no en comandos.",
      "Con comandos esenciales, pero sin ajustes personalizables.",
      "Con comandos y ajustes esenciales para optimizar el flujo."
    ],
    correct: [3],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 46,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "¿Qué aspecto NO puede configurarse mediante los ajustes de GitHub Copilot?",
    type: "single",
    options: [
      "Comportamiento de respuestas y opciones de interfaz.",
      "Seguimiento del chat, selección de alcance y ubicación del chat de terminal.",
      "Preferencias por lenguaje y ubicación del chat.",
      "Los algoritmos centrales de generación de código."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 47,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "Después de descargar la extensión de GitHub Copilot en VS Code, ¿cuál es el siguiente paso obligatorio?",
    type: "single",
    options: [
      "Iniciar sesión en GitHub para autenticar la extensión.",
      "Reiniciar el ordenador.",
      "Configurar preferencias de idioma del sistema.",
      "Instalar dependencias de terceros."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 48,
    category: "Chat, Inline Chat, comandos y CLI",
    question: "¿Cuál es el propósito principal del indicador de estado de Copilot en VS Code?",
    type: "single",
    options: [
      "Mostrar espacio disponible en disco.",
      "Mostrar métricas de rendimiento del editor.",
      "Mostrar el lenguaje actual.",
      "Mostrar el estado de conexión y dar acceso rápido a ajustes e información de cuenta."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },

  // 8. Lenguajes, modernización y depuración
  {
    id: 49,
    category: "Lenguajes, modernización y depuración",
    question: "¿Cómo se adapta GitHub Copilot a distintas pilas tecnológicas?",
    type: "single",
    options: [
      "Mediante capacidades de cambio de contexto entre tecnologías.",
      "Mediante asistencia adaptativa, más eficaz entre tecnologías similares.",
      "Reconociendo tecnologías en entornos compatibles.",
      "Cambiando de contexto, pero requiriendo configuración adicional."
    ],
    correct: [0],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 50,
    category: "Lenguajes, modernización y depuración",
    question: "¿Qué puede hacer GitHub Copilot al trabajar con varios lenguajes?",
    type: "single",
    options: [
      "Traducir código, conservando mejor la funcionalidad que la intención.",
      "Traducir preservando funcionalidad, pero requiriendo verificar manualmente la intención.",
      "Detectar y traducir automáticamente código preservando funcionalidad e intención.",
      "Preservar funcionalidad, dependiendo la intención de la complejidad."
    ],
    correct: [2],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 51,
    category: "Lenguajes, modernización y depuración",
    question: "Un equipo debe migrar una función Python de procesamiento de datos a JavaScript. ¿Cómo puede ayudar Copilot?",
    type: "single",
    options: [
      "Traducir la lógica preservando funcionalidad e intención de negocio.",
      "Convertir solo la sintaxis sin preservar la lógica.",
      "Exigir una reescritura manual completa.",
      "Convertir nombres de variables y dejar la lógica igual."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 52,
    category: "Lenguajes, modernización y depuración",
    question: "En un proyecto Python, ¿cómo se consiguen sugerencias específicas de Python?",
    type: "single",
    options: [
      "Usar sintaxis Python evitando referencias al lenguaje en comentarios.",
      "Depender solo de la extensión y estructura del proyecto.",
      "Incluir el lenguaje en comentarios o usar sintaxis específica de Python.",
      "Mencionar Python en comentarios y depender de la detección automática para la sintaxis."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 53,
    category: "Lenguajes, modernización y depuración",
    question: "¿Cómo puede ayudar GitHub Copilot con código heredado u obsoleto?",
    type: "single",
    options: [
      "Modernizando patrones, siendo identificación y refactorización pasos preparatorios.",
      "Refactorizando y actualizando, dependiendo la identificación del desarrollador.",
      "Identificando y refactorizando, requiriendo más análisis para modernizar.",
      "Identificando, refactorizando y actualizando a estándares y patrones modernos."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 54,
    category: "Lenguajes, modernización y depuración",
    question: "Un equipo heredó JavaScript ES5 y quiere modernizarlo a ES6+. ¿Cómo puede ayudar Copilot?",
    type: "single",
    options: [
      "Identificar patrones obsoletos y sugerir alternativas modernas ES6+.",
      "Añadir comentarios al código antiguo.",
      "Mantener todos los patrones sin cambios.",
      "Crear un archivo nuevo con código ES6+."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 55,
    category: "Lenguajes, modernización y depuración",
    question: "¿Qué asistencia de depuración proporciona GitHub Copilot?",
    type: "single",
    options: [
      "Analizar errores, sugerir soluciones e identificar causas raíz en problemas complejos.",
      "Sugerir soluciones, requiriendo investigación adicional para la causa raíz.",
      "Analizar y sugerir soluciones, identificando causas solo en problemas sistemáticos.",
      "Analizar errores, variando sus resultados según la complejidad."
    ],
    correct: [0],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 56,
    category: "Lenguajes, modernización y depuración",
    question: "¿Cómo puede contribuir Copilot a optimizar el rendimiento de una aplicación?",
    type: "single",
    options: [
      "Sugiriendo optimización, pero requiriendo otro enfoque para las pruebas.",
      "Mejorando pruebas, siendo secundario el rendimiento.",
      "Sugiriendo optimizaciones dependientes de la arquitectura.",
      "Sugiriendo código optimizado que mejore rendimiento y eficiencia de las pruebas."
    ],
    correct: [3],
    confidence: "proposed",
    explanation: ""
  },

  // 9. Planes, Business y Enterprise
  {
    id: 57,
    category: "Planes, Business y Enterprise",
    question: "¿Cuántos niveles de suscripción ofrece GitHub Copilot según este cuestionario?",
    type: "single",
    options: ["Cinco niveles.", "Solo dos: Free y Paid.", "Cuatro: Free, Pro, Business y Enterprise.", "Tres: Basic, Professional y Premium."],
    correct: [2],
    confidence: "correct",
    explanation: "Corresponde al material del examen compartido; la oferta comercial pública puede cambiar con el tiempo."
  },
  {
    id: 58,
    category: "Planes, Business y Enterprise",
    question: "¿Qué incluye Copilot Pro para desarrolladores individuales?",
    type: "single",
    options: [
      "Modelos avanzados y solicitudes premium ilimitadas.",
      "Bases de conocimiento y políticas organizativas.",
      "Colaboración de equipo y espacios compartidos.",
      "Integración con IDE, sugerencias y límites de uso definidos."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 59,
    category: "Planes, Business y Enterprise",
    question: "¿Dónde pueden las organizaciones configurar el comportamiento de las sugerencias de Copilot?",
    type: "single",
    options: [
      "En múltiples niveles con configuración jerárquica.",
      "En equipos de desarrollo, con políticas más amplias en la organización.",
      "En la organización, con personalización individual.",
      "En el nivel de organización para cubrir necesidades de desarrollo específicas."
    ],
    correct: [3],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 60,
    category: "Planes, Business y Enterprise",
    question: "¿Dónde pueden configurarse exclusiones de contenido para proteger código sensible?",
    type: "single",
    options: [
      "En repositorio u organización, sin diferencias.",
      "Tanto en el nivel de repositorio como en el de organización.",
      "Solo mediante políticas organizativas jerárquicas.",
      "Principalmente en organización, siendo complementario el repositorio."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 61,
    category: "Planes, Business y Enterprise",
    question: "¿Qué deben considerar las organizaciones al elegir un nivel de suscripción?",
    type: "single",
    options: [
      "Privacidad y funciones, dejando el coste en segundo plano.",
      "Privacidad según el sector y el cumplimiento.",
      "Funciones, privacidad y coste según la escala.",
      "Las distintas implicaciones de privacidad de cada nivel."
    ],
    correct: [3],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 62,
    category: "Planes, Business y Enterprise",
    question: "¿Qué capacidad NO está disponible en GitHub Copilot Business?",
    type: "single",
    options: ["Registro de auditoría.", "Configuración de bases de conocimiento.", "Gestión de políticas.", "Exclusiones de archivos."],
    correct: [1],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 63,
    category: "Planes, Business y Enterprise",
    question: "¿Qué funciones avanzadas están disponibles en GitHub Copilot Enterprise?",
    type: "single",
    options: [
      "Ajustes individuales y preferencias personales.",
      "Colaboración, gestión de proyectos y solicitudes premium.",
      "Políticas, seguridad y entrenamiento de modelos personalizados.",
      "Gestión de políticas y accesos, análisis de uso y herramientas de seguridad."
    ],
    correct: [3],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 64,
    category: "Planes, Business y Enterprise",
    question: "Una organización quiere seguir el uso por equipos y cumplir políticas de seguridad. ¿Qué función Enterprise NO está disponible?",
    type: "single",
    options: [
      "Flujos automatizados de revisión y aprobación de código.",
      "Analítica de uso junto con gestión de políticas y accesos.",
      "Informes organizativos de cumplimiento.",
      "Seguimiento de uso por equipos y controles de seguridad."
    ],
    correct: [0],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 65,
    category: "Planes, Business y Enterprise",
    question: "¿Cuál es el beneficio principal de configurar bases de conocimiento de Copilot Enterprise en GitHub.com?",
    type: "single",
    options: [
      "Alinearse con estándares del sector en lugar de prácticas internas.",
      "Mejorar sugerencias solo en repositorios públicos.",
      "Proporcionar contexto organizativo y mejorar sugerencias alineadas con estándares internos.",
      "Proporcionar contexto solo para documentación."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },

  // 10. Privacidad, procesamiento, seguridad y aspectos legales
  {
    id: 66,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Cómo varía el tratamiento de datos entre tipos de suscripción?",
    type: "single",
    options: [
      "El procesamiento cambia, pero las políticas de compartición son iguales.",
      "El uso cambia, pero procesamiento y compartición están estandarizados.",
      "Procesamiento, uso y compartición difieren entre contextos individuales y organizativos.",
      "Solo varía el procesamiento."
    ],
    correct: [2],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 67,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Qué componentes forman la canalización de procesamiento de GitHub Copilot?",
    type: "single",
    options: [
      "Generación del modelo con proxy y filtrado complementarios.",
      "Servicios proxy, mecanismos de filtrado y generación de respuestas mediante un modelo de lenguaje grande.",
      "Filtrado y generación administrados por proxies externos.",
      "Proxy y generación, con filtrado opcional."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 68,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Qué riesgo potencial conocido está asociado con herramientas generativas como Copilot?",
    type: "single",
    options: [
      "Sesgo de datos en las sugerencias de código.",
      "Reducción de oportunidades de aprendizaje.",
      "Eliminación automática de todo el código existente.",
      "Aumento del tiempo de desarrollo."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 69,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Qué protecciones legales existen para el código generado por GitHub Copilot?",
    type: "single",
    options: [
      "Derechos de propiedad definidos y protecciones contractuales para los usuarios.",
      "Protecciones mediante marcos legales con propiedad y contrato interrelacionados.",
      "Protecciones contractuales y propiedad establecida por aceptar el acuerdo.",
      "Derechos definidos con protecciones variables según plan y contexto."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 70,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Qué configuraciones relacionadas con seguridad están disponibles en GitHub Copilot?",
    type: "single",
    options: [
      "Gestión integral con funciones mejoradas de duplicación y recopilación.",
      "Detección de duplicación y recopilación con controles adicionales.",
      "Opciones de detección de duplicación y recopilación de sugerencias.",
      "Configuración de seguridad con duplicación y recopilación como controles principales."
    ],
    correct: [2],
    confidence: "proposed",
    explanation: ""
  },
  {
    id: 71,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Qué asistencia relacionada con seguridad proporciona GitHub Copilot?",
    type: "single",
    options: [
      "Identificar posibles vulnerabilidades y apoyar soluciones de pruebas adecuadas.",
      "Identificar vulnerabilidades, requiriendo integración adicional para las pruebas.",
      "Análisis integral variable según la complejidad.",
      "Apoyar pruebas, siendo más eficaz con ataques comunes."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 72,
    category: "Privacidad, procesamiento, seguridad y aspectos legales",
    question: "¿Cómo difieren el autocompletado y Chat en el procesamiento de datos?",
    type: "single",
    options: [
      "Comparten arquitectura, pero usan canales distintos.",
      "Empiezan con flujos diferentes y convergen en un procesamiento idéntico.",
      "Tienen flujos distintos, pero comparten los mismos endpoints.",
      "Tienen flujos completos distintos según el contexto procesado y el objetivo de la salida."
    ],
    correct: [3],
    confidence: "proposed",
    explanation: ""
  },

  // 11. Personalización del proyecto
  {
    id: 73,
    category: "Personalización del proyecto",
    question: "¿Cómo puede un equipo adaptar el comportamiento de Copilot a sus estándares y requisitos?",
    type: "single",
    options: [
      "Crear archivos o ajustes de proyecto que definan patrones preferidos y excluyan archivos sensibles.",
      "Definir patrones mediante ajustes que requieran coordinación de todo el equipo.",
      "Personalizar, dependiendo de la adopción del equipo.",
      "Crear archivos de configuración, requiriendo ajustes organizativos separados para exclusiones."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },

  // 12. Banco comunitario adicional (fuente: ghcertified.com / GitHub v-fidelusaleksander/ghcertified, licencia GPLv3)
  {
    id: 74,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿GitHub Copilot es gratuito para todo el mundo?",
    type: "single",
    options: ["No", "Sí"],
    correct: [1],
    confidence: "community",
    explanation: "Existe un plan gratuito con límites de uso además de los planes de pago. Consulta github.com/features/copilot/plans."
  },
  {
    id: 75,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuál de las siguientes NO es una forma posible de conceder acceso a Copilot a miembros de una organización?",
    type: "single",
    options: [
      "Como miembro de una organización, puedes activar Copilot directamente desde la configuración de tu cuenta.",
      "Desde la configuración de Enterprise, habilitar GitHub Copilot para organizaciones seleccionadas o para todas.",
      "Desde la configuración de la Organización, habilitar GitHub Copilot para equipos o usuarios seleccionados, o para toda la organización.",
      "Usando la API REST de GitHub para conceder acceso a Copilot a equipos o usuarios específicos de tu organización."
    ],
    correct: [0],
    confidence: "community",
    explanation: "El acceso lo concede la organización/empresa, no el propio usuario desde su cuenta personal."
  },
  {
    id: 76,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué IDEs NO están soportados por GitHub Copilot?",
    type: "multiple",
    options: ["NetBeans", "BlueJ", "Code::Blocks", "Visual Studio Code", "Eclipse", "Xcode"],
    correct: [0, 1, 2],
    confidence: "community",
    explanation: ""
  },
  {
    id: 77,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué comando instala GitHub Copilot CLI?",
    type: "single",
    options: [
      "npm install -g @github/copilot",
      "gh install -g github/copilot-cli",
      "npm install -g gh-copilot",
      "gh extension install github/gh-copilot"
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 78,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuáles son algunos de los principios de Prompt Engineering?",
    type: "multiple",
    options: [
      "Centrarse en una tarea única y bien definida.",
      "Asegurar que las instrucciones sean detalladas y explícitas.",
      "Proporcionar contexto rico para la IA.",
      "Escribir instrucciones largas y complejas."
    ],
    correct: [0, 1, 2],
    confidence: "community",
    explanation: "Si quieres que Copilot complete una tarea compleja o grande, divide la tarea en varias tareas simples y pequeñas."
  },
  {
    id: 79,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cómo puedes excluir archivos específicos de GitHub Copilot?",
    type: "single",
    options: [
      "Editando el archivo .gitignore.",
      "Yendo a la configuración del repositorio en GitHub y añadiendo las rutas a excluir.",
      "Configurando exclusiones en el archivo de configuración de Copilot.",
      "Usando un comando en la terminal."
    ],
    correct: [1],
    confidence: "community",
    explanation: ".gitignore excluye el archivo de git, no de Copilot."
  },
  {
    id: 80,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué es cierto sobre las exclusiones de contenido de Copilot?",
    type: "multiple",
    options: [
      "Las exclusiones de contexto pueden configurarse a nivel de repositorio y de organización.",
      "Copilot ofrece distintos planes con diferentes consideraciones de privacidad.",
      "Copilot ignora completamente los archivos excluidos.",
      "Las exclusiones de contenido no afectan al autocompletado de código.",
      "Las exclusiones de contenido se aplican instantáneamente."
    ],
    correct: [0, 1],
    confidence: "community",
    explanation: "Copilot puede usar información de un archivo excluido si la proporciona el IDE de forma indirecta, y los cambios pueden tardar hasta 30 minutos en aplicarse."
  },
  {
    id: 81,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué describe mejor el archivo de configuración del editor de GitHub Copilot (instrucciones personalizadas)?",
    type: "single",
    options: [
      "Un archivo JSON con ajustes de seguridad.",
      "Un archivo Markdown con instrucciones en lenguaje natural para personalizar las respuestas de Copilot Chat.",
      "Un archivo YAML con instrucciones de build.",
      "Un archivo XML con ajustes de despliegue."
    ],
    correct: [1],
    confidence: "community",
    explanation: ""
  },
  {
    id: 82,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Para qué sirve la Productivity API de GitHub Copilot?",
    type: "single",
    options: [
      "Para recopilar registros de auditoría.",
      "Para excluir archivos específicos.",
      "Para recopilar métricas de uso de los miembros de la organización.",
      "Para actualizar Copilot automáticamente."
    ],
    correct: [2],
    confidence: "community",
    explanation: ""
  },
  {
    id: 83,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué integra GitHub Copilot Chat con herramientas externas?",
    type: "single",
    options: [
      "GitHub Copilot Extensions",
      "GitHub Copilot Marketplace",
      "GitHub Copilot Integrations",
      "GitHub Copilot Open"
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 84,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cómo puedes dar a GitHub Copilot contexto para generar respuestas adaptadas a tu repositorio?",
    type: "single",
    options: [
      "Creando un archivo llamado .github/copilot-instructions.md en el repositorio.",
      "Enviando un correo a soporte de GitHub con los detalles del proyecto.",
      "Modificando el archivo .gitconfig para incluir instrucciones personalizadas.",
      "Creando un issue de GitHub llamado copilot-instructions con el contexto necesario."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 85,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Puede GitHub Copilot usar información semántica de un archivo ignorado por las exclusiones de contenido?",
    type: "single",
    options: [
      "Sí, si la información se la proporciona el IDE de forma indirecta.",
      "No, ignorará toda la información de los archivos excluidos."
    ],
    correct: [0],
    confidence: "community",
    explanation: "Copilot puede usar información semántica de un archivo excluido si el IDE la proporciona indirectamente (p. ej. tipos, definiciones al pasar el ratón, configuración de build)."
  },
  {
    id: 86,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué ocurre cuando excluyes contenido de GitHub Copilot?",
    type: "multiple",
    options: [
      "El autocompletado no estará disponible en los archivos afectados.",
      "El contenido de los archivos afectados no influirá en las sugerencias de otros archivos.",
      "El contenido de los archivos afectados seguirá influyendo en las respuestas de Copilot Chat.",
      "El autocompletado no se verá afectado en los archivos afectados."
    ],
    correct: [0, 1],
    confidence: "community",
    explanation: ""
  },
  {
    id: 87,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuál es la forma más sencilla de empezar a usar GitHub Copilot?",
    type: "single",
    options: [
      "Solicitar acceso a soporte de GitHub y esperar aprobación.",
      "Usar la web de Copilot y pegar tu código para pedir sugerencias.",
      "Instalar la extensión de Copilot en tu entorno preferido, como Visual Studio Code.",
      "Crear un repositorio público nuevo y activar Copilot para que escanee tu código."
    ],
    correct: [2],
    confidence: "community",
    explanation: ""
  },
  {
    id: 88,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué analiza GitHub Copilot para ofrecer sugerencias relevantes mientras desarrollas código?",
    type: "single",
    options: [
      "Analiza el contexto de todos los archivos del repositorio.",
      "Analiza el contexto del archivo actual y archivos relacionados.",
      "Analiza únicamente el contexto dentro del archivo actual.",
      "Analiza únicamente el contexto de la línea de código actual."
    ],
    correct: [1],
    confidence: "community",
    explanation: ""
  },
  {
    id: 89,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuál de las siguientes describe mejor a GitHub Copilot?",
    type: "single",
    options: [
      "Un asistente de codificación con IA que ayuda sugiriendo y completando código.",
      "Un sistema de control de versiones que rastrea cambios en el código.",
      "Un editor de código con funciones de depuración y detección de errores.",
      "Una herramienta que prueba y despliega código automáticamente a producción."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 90,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cómo gestiona GitHub Copilot la retención de datos de las sugerencias de código en el IDE?",
    type: "single",
    options: [
      "Las sugerencias se mantienen temporalmente en memoria y se descartan tras su uso, sin escribirse en disco.",
      "Todas las sugerencias se almacenan permanentemente en una base de datos local.",
      "Las sugerencias se guardan automáticamente en repositorios de GitHub.",
      "Los fragmentos de código se cachean en disco durante 30 días antes de borrarse."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 91,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué pasos ocurren cuando el servicio proxy de GitHub Copilot procesa un prompt?",
    type: "single",
    options: [
      "Pruebas de lenguaje tóxico, comprobaciones de relevancia y detección de intentos de prompt hacking.",
      "Traducción a varios lenguajes de programación y validación de sintaxis.",
      "Compilación y ejecución automática del código en un sandbox.",
      "Envío directo a repositorios públicos para comprobación de referencias."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 92,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué conjunto de principios representa correctamente los seis principios clave de IA responsable de Microsoft que guían el desarrollo de GitHub Copilot?",
    type: "single",
    options: [
      "Equidad (Fairness), Fiabilidad y Seguridad, Privacidad y Seguridad, Inclusión, Transparencia y Responsabilidad.",
      "Eficiencia, Velocidad, Precisión, Innovación, Fiabilidad y Seguridad.",
      "Privacidad, Rendimiento, Accesibilidad, Escalabilidad, Mantenibilidad y Pruebas.",
      "Seguridad, Desarrollo, Operaciones, Mantenimiento, Soporte y Documentación."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 93,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuál de las siguientes es un beneficio potencial de usar GitHub Copilot para mejorar los flujos de trabajo de desarrollo?",
    type: "single",
    options: [
      "Puede sugerir fragmentos de código para aumentar la productividad del desarrollador.",
      "Elimina por completo la necesidad de revisión de código en todos los proyectos.",
      "Fusiona automáticamente las pull requests sin aprobación humana.",
      "Solo funciona con software escrito en un único lenguaje de programación."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 94,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué afirmación describe correctamente a GitHub Copilot CLI?",
    type: "single",
    options: [
      "Permite usar Copilot desde tu terminal para responder preguntas, escribir y depurar código, e interactuar con GitHub.com.",
      "Se limita a generar alias de shell para gh copilot suggest y gh copilot explain.",
      "Solo funciona dentro de la interfaz web de GitHub y no puede acceder a archivos locales del proyecto.",
      "Ejecuta automáticamente cada comando de shell sugerido sin pedir aprobación."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 95,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuál es el propósito principal del comando con barra '/tests' en GitHub Copilot?",
    type: "single",
    options: [
      "Genera un conjunto de pruebas unitarias para el archivo actualmente abierto, usando contexto de pruebas existentes si las hay.",
      "Ejecuta todas las pruebas unitarias existentes del proyecto sin generar nuevas.",
      "Solo valida la sintaxis de los archivos de prueba existentes sin crear nuevas pruebas.",
      "Elimina permanentemente todos los archivos de prueba existentes para empezar de cero."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 96,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cómo se calcula el uso de asientos (seats) de GitHub Copilot a nivel enterprise durante un ciclo de facturación?",
    type: "single",
    options: [
      "Número de asientos × (días transcurridos / días totales del ciclo de facturación).",
      "Número total de commits × número de desarrolladores activos.",
      "Número de sugerencias de código × número de finalizaciones aceptadas.",
      "Tamaño total del repositorio × número de organizaciones."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 97,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cómo funciona la función de coincidencia de código público (matching public code) de GitHub Copilot?",
    type: "single",
    options: [
      "Busca coincidencias comparando las sugerencias con un índice de repositorios públicos de GitHub, que se actualiza cada pocos meses.",
      "Realiza búsquedas en tiempo real en todos los repositorios de GitHub, incluidos los privados.",
      "Solo compara código de repositorios creados en las últimas 24 horas.",
      "Compara el código con plataformas externas de alojamiento de código fuera de GitHub."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 98,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué comprobaciones de post-procesamiento se realizan sobre las respuestas de GitHub Copilot?",
    type: "single",
    options: [
      "Lenguaje tóxico, relevancia, calidad del código (incluidas vulnerabilidades de seguridad), identificadores únicos y coincidencia opcional con código público.",
      "Únicamente validación de sintaxis y formato de código.",
      "Benchmarking de rendimiento y optimización del uso de memoria.",
      "Solo comprobación de errores de compilación y excepciones en tiempo de ejecución."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 99,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué elementos puede usar GitHub Copilot como contexto al generar sugerencias?",
    type: "single",
    options: [
      "Contenido del archivo actual, archivos vecinos, URLs de repositorio, rutas de archivo e interacciones de chat previas.",
      "Solo la línea de código actual que se está editando, sin contexto adicional.",
      "Exclusivamente documentación externa de Internet.",
      "Solo el archivo README del proyecto y nada más."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 100,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuál de los siguientes NO es un modo seleccionable en GitHub Copilot Chat?",
    type: "single",
    options: ["Ask", "Plan", "Translate", "Agent"],
    correct: [2],
    confidence: "community",
    explanation: ""
  },
  {
    id: 101,
    category: "Banco comunidad (ghcertified.com)",
    question: "Al añadir contexto en el chat, es posible añadir archivos individuales pero no carpetas enteras. Esta afirmación es:",
    type: "single",
    options: ["Falsa", "Verdadera"],
    correct: [0],
    confidence: "community",
    explanation: "También es posible añadir carpetas enteras como contexto."
  },
  {
    id: 102,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuáles de los siguientes se pueden añadir como contexto en tu prompt de GitHub Copilot Chat?",
    type: "multiple",
    options: [
      "Símbolos",
      "Salida de comandos de terminal",
      "Fallos de pruebas (test failures)",
      "Repositorios externos",
      "Variables de entorno (como PATH)"
    ],
    correct: [0, 1, 2],
    confidence: "community",
    explanation: ""
  },
  {
    id: 103,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué son las \"smart actions\"?",
    type: "single",
    options: [
      "Tareas comunes y predefinidas, como explicar código, corregirlo o generar pruebas y documentación, que Copilot Chat puede ejecutar sin necesidad de redactar un prompt.",
      "Una modalidad avanzada de Copilot usada para depurar y corregir pruebas fallidas.",
      "Tareas predefinidas para tareas de codificación comunes dentro de una organización, configurables a nivel de repositorio y organización."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 104,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué funciones están disponibles en GitHub Copilot y GitHub Copilot Chat?",
    type: "single",
    options: [
      "Autocompletado de línea de código, inline chat, vista de chat, quick chat y smart actions.",
      "Autocompletado de línea de código, inline chat, vista de chat, smart actions y code research.",
      "Autocompletado de línea de código, inline chat, code container y quick chat."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 105,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Cuáles de las siguientes frases son correctas?",
    type: "multiple",
    options: [
      "Los chat participants (como @workspace o @vscode) se usan para aportar contexto extra sobre la base de código, un dominio o una tecnología.",
      "Los comandos con barra (como /tests, /fix o /explain) son una forma concisa de indicar qué quieres lograr con el prompt.",
      "No es posible combinar chat participants, comandos y variables de chat en un mismo prompt.",
      "Los chat participants solo sirven para etiquetar a otros miembros de la organización."
    ],
    correct: [0, 1],
    confidence: "community",
    explanation: "Los chat participants como @workspace o @vscode están pensados para aportar contexto, no para etiquetar personas."
  },
  {
    id: 106,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Para qué se usa un alias al trabajar con GitHub Copilot CLI?",
    type: "single",
    options: [
      "Permite que Copilot CLI ejecute automáticamente comandos en la línea de comandos.",
      "Permite indicar en los commits de Git que GitHub Copilot los autoró.",
      "Permite que GitHub revise y autore pull requests en tu nombre."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 107,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué afirmaciones son correctas sobre GitHub Copilot CLI?",
    type: "multiple",
    options: [
      "Los prompts no se retienen, mientras que las analíticas de uso sí se retienen por defecto.",
      "Es posible desactivar (opt out) las analíticas de uso opcionales.",
      "Las respuestas generadas por Copilot CLI pueden revisarse después de cada sugerencia.",
      "Tanto los prompts como las analíticas de uso se retienen por defecto.",
      "No es posible desactivar las analíticas de uso porque están anonimizadas.",
      "GitHub Copilot CLI solo puede explicar o sugerir comandos, pero no ejecutarlos en nombre del usuario."
    ],
    correct: [0, 1, 2],
    confidence: "community",
    explanation: "Los prompts no se retienen por defecto."
  },
  {
    id: 108,
    category: "Banco comunidad (ghcertified.com)",
    question: "Estás desarrollando una aplicación en Kotlin. ¿Qué debes tener en cuenta al usar GitHub Copilot?",
    type: "single",
    options: [
      "Kotlin no está entre los lenguajes con soporte fuerte de Copilot, por lo que las sugerencias pueden ser de menor calidad que en lenguajes mejor soportados como Ruby, Java o C#.",
      "Kotlin no está soportado, por lo que Copilot no podrá explicar ni corregir código.",
      "Kotlin no está soportado, pero Copilot podrá explicar o corregir código, solo que no ofrecerá sugerencias.",
      "Ninguna es correcta, ya que Kotlin sí está entre los lenguajes con soporte fuerte de Copilot."
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 109,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Dónde puedes encontrar información sobre seguridad, propiedad intelectual y privacidad relacionadas con el uso de GitHub Copilot?",
    type: "single",
    options: [
      "GitHub Copilot Trust Center",
      "GitHub Copilot Compliance Center",
      "GitHub Copilot Compliance Hub",
      "GitHub Copilot Legal Center",
      "GitHub Copilot Legal and Trust Center"
    ],
    correct: [0],
    confidence: "community",
    explanation: ""
  },
  {
    id: 110,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué planes de suscripción de GitHub Copilot soportan instrucciones personalizadas a nivel de organización?",
    type: "single",
    options: [
      "Todos los planes que incluyen GitHub Copilot.",
      "Copilot Pro+ y superiores.",
      "Copilot Business y Copilot Enterprise.",
      "Solo Copilot Enterprise."
    ],
    correct: [2],
    confidence: "community",
    explanation: "Las instrucciones personalizadas de organización se configuran en los ajustes de la organización y requieren un plan Business o Enterprise. Las instrucciones a nivel de repositorio están disponibles en todos los planes."
  },
  {
    id: 111,
    category: "Banco comunidad (ghcertified.com)",
    question: "¿Qué afirmaciones son correctas sobre el uso de @workspace y #codebase?",
    type: "multiple",
    options: [
      "Aunque @workspace y #codebase permiten hacer preguntas sobre toda la base de código, se recomienda usar #codebase.",
      "La palabra clave #codebase puede usarse en todos los modos de chat.",
      "La palabra clave @workspace puede usarse en todos los modos de chat.",
      "La palabra clave @workspace controla el prompt del usuario y por tanto puede usar otras herramientas."
    ],
    correct: [0, 1],
    confidence: "community",
    explanation: ""
  },

  // 13. Preguntas originales basadas en el temario oficial 2026 del examen GH-300
  // (Microsoft Learn: "Study guide for Exam GH-300: GitHub Copilot"). No son preguntas
  // reales del examen, sino preguntas de elaboración propia para cubrir "Skills measured".
  {
    id: 112,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué es el Agent Mode de GitHub Copilot?",
    type: "single",
    options: [
      "Un modo de chat que únicamente responde preguntas sobre el código sin poder modificarlo.",
      "Un modo autónomo en el que Copilot puede planificar varios pasos, editar múltiples archivos, ejecutar comandos y corregir sus propios errores para completar una tarea.",
      "Una API para entrenar un modelo de lenguaje personalizado con el código de tu organización.",
      "Un plan de suscripción exclusivo de Copilot Enterprise."
    ],
    correct: [1],
    confidence: "correct",
    explanation: "Agent Mode permite a Copilot trabajar de forma más autónoma: planifica, edita varios archivos, ejecuta comandos de terminal y corrige errores de forma iterativa."
  },
  {
    id: 113,
    category: "Temario oficial 2026 (original)",
    question: "¿Para qué sirve el Model Context Protocol (MCP) en GitHub Copilot?",
    type: "single",
    options: [
      "Para cifrar las comunicaciones entre el IDE y los servidores de Copilot.",
      "Para estandarizar cómo Copilot se conecta con herramientas y fuentes de datos externas (APIs, bases de datos, otros servicios) y así ampliar su contexto y capacidades.",
      "Para limitar el número de tokens que puede usar un prompt.",
      "Para convertir código entre distintos lenguajes de programación."
    ],
    correct: [1],
    confidence: "correct",
    explanation: "MCP es un protocolo abierto que permite conectar Copilot con servidores que exponen herramientas, datos o contexto adicional."
  },
  {
    id: 114,
    category: "Temario oficial 2026 (original)",
    question: "En el contexto de Agent Mode, ¿qué es un \"Sub-Agent\"?",
    type: "single",
    options: [
      "Una cuenta secundaria de GitHub usada solo para pruebas.",
      "Un agente delegado al que la sesión principal puede encargar una subtarea concreta, ayudando a optimizar el uso del contexto de la tarea principal.",
      "Un bot que responde automáticamente a issues y pull requests.",
      "Una extensión de VS Code instalada junto a Copilot."
    ],
    correct: [1],
    confidence: "correct",
    explanation: "Los Sub-Agents permiten delegar tareas concretas dentro de una sesión de agente para optimizar el uso del contexto disponible."
  },
  {
    id: 115,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué es GitHub Spark?",
    type: "single",
    options: [
      "Una herramienta para crear aplicaciones completas a partir de descripciones en lenguaje natural, con ayuda de IA generativa.",
      "Un linter de código integrado en GitHub Actions.",
      "El nombre interno del motor de autocompletado de Copilot.",
      "Una funcionalidad para firmar commits digitalmente."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 116,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué son los \"Spaces\" de GitHub Copilot?",
    type: "single",
    options: [
      "Repositorios privados especiales que no cuentan para el límite de almacenamiento.",
      "Colecciones organizadas de contenido (código, documentación, issues, etc.) que se usan como contexto curado y reutilizable para Copilot Chat.",
      "Las salas de videollamada integradas en GitHub Codespaces.",
      "Un sinónimo de los Codespaces."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 117,
    category: "Temario oficial 2026 (original)",
    question: "¿Para qué sirven los resúmenes automáticos (summaries) de pull requests generados por Copilot?",
    type: "single",
    options: [
      "Para sustituir por completo la descripción escrita por el autor de la PR.",
      "Para generar automáticamente un resumen de los cambios propuestos, facilitando la revisión de código.",
      "Para calcular métricas de rendimiento del pipeline de CI/CD.",
      "Para traducir automáticamente los comentarios de la PR a otros idiomas."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 118,
    category: "Temario oficial 2026 (original)",
    question: "¿Cómo se pueden personalizar los estándares de revisión de código de Copilot en una organización?",
    type: "single",
    options: [
      "Mediante archivos de instrucciones personalizables (custom instructions) que definen las convenciones y criterios que Copilot debe aplicar al revisar código.",
      "Enviando un ticket de soporte a GitHub para cada repositorio.",
      "Solo es posible a través de GitHub Actions y un archivo YAML de reglas.",
      "No es posible personalizar los criterios de revisión de Copilot."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 119,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué permite configurar la gestión de políticas (policy management) de Copilot a nivel de organización?",
    type: "single",
    options: [
      "Únicamente el precio de las licencias de Copilot.",
      "Qué funciones de Copilot están disponibles (por ejemplo, Copilot Code Review) y en qué IDEs o en github.com puede usarse.",
      "El color de la interfaz de Copilot Chat para todos los miembros.",
      "El número máximo de commits diarios por desarrollador."
    ],
    correct: [1],
    confidence: "correct",
    explanation: "Las políticas de organización permiten habilitar/deshabilitar funciones como Copilot Code Review y controlar su disponibilidad por IDE o en github.com."
  },
  {
    id: 120,
    category: "Temario oficial 2026 (original)",
    question: "¿Para qué sirven los eventos del registro de auditoría (audit log) relacionados con Copilot?",
    type: "single",
    options: [
      "Para ver el código fuente completo que generó cada sugerencia.",
      "Para que los administradores de la organización puedan rastrear cambios de configuración y actividad relevante relacionada con Copilot con fines de seguridad y cumplimiento.",
      "Para facturar a cada usuario según el número de sugerencias aceptadas.",
      "Para entrenar un modelo personalizado con el historial de uso."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 121,
    category: "Temario oficial 2026 (original)",
    question: "¿Cómo se pueden gestionar las suscripciones de Copilot de forma programática a gran escala?",
    type: "single",
    options: [
      "Mediante la API REST de GitHub, que permite asignar y gestionar licencias de Copilot de forma automatizada.",
      "Solo manualmente, usuario por usuario, desde la interfaz web.",
      "Mediante un archivo copilot.yml en la raíz del repositorio.",
      "No es posible gestionar suscripciones de forma programática."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 122,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué permiten los archivos de \"prompt\" reutilizables (prompt files) en GitHub Copilot Chat?",
    type: "single",
    options: [
      "Guardar un prompt junto con su configuración para reutilizarlo y obtener respuestas más consistentes ante tareas recurrentes.",
      "Cifrar los prompts enviados a Copilot para que no puedan auditarse.",
      "Ejecutar automáticamente el prompt cada vez que se hace un commit.",
      "Sustituir el archivo .github/copilot-instructions.md."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 123,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué describe mejor el flujo de datos cuando escribes un prompt en GitHub Copilot Chat?",
    type: "single",
    options: [
      "El prompt se envía directamente al modelo sin ningún procesamiento adicional.",
      "El prompt pasa por un proxy que aplica filtros (p. ej. detección de contenido tóxico o intentos de prompt hacking), se construye el contexto, se genera la respuesta con el modelo y después se aplican comprobaciones de post-procesamiento antes de mostrarla.",
      "El prompt se guarda primero en un repositorio público para ser indexado.",
      "El prompt se traduce siempre a inglés antes de procesarse."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 124,
    category: "Temario oficial 2026 (original)",
    question: "¿Cuál de las siguientes es una limitación conocida de los modelos de lenguaje grandes (LLMs) como los que usa Copilot?",
    type: "single",
    options: [
      "Pueden generar código con errores, sesgos o inexactitudes (\"alucinaciones\"), por lo que sus sugerencias deben revisarse y validarse siempre.",
      "No pueden generar código en ningún lenguaje distinto de Python.",
      "Solo funcionan si el repositorio es público.",
      "Requieren conexión directa a una base de datos SQL para funcionar."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 125,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué diferencia hay entre el prompting zero-shot y few-shot al trabajar con GitHub Copilot?",
    type: "single",
    options: [
      "El zero-shot no incluye ejemplos y se apoya solo en la instrucción y el contexto disponible; el few-shot incluye uno o varios ejemplos del resultado deseado para guiar mejor la respuesta.",
      "El zero-shot solo funciona en Copilot Chat y el few-shot solo en el autocompletado.",
      "El few-shot requiere una suscripción Enterprise y el zero-shot está disponible en todos los planes.",
      "No hay ninguna diferencia real entre ambos enfoques."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 126,
    category: "Temario oficial 2026 (original)",
    question: "¿Cómo determina GitHub Copilot el contexto relevante para una sugerencia dentro del IDE?",
    type: "single",
    options: [
      "Usa exclusivamente el nombre del archivo actual.",
      "Analiza el archivo abierto, archivos relacionados o abiertos recientemente, el historial de chat y otros elementos que el usuario añade explícitamente (símbolos, selección, salida de terminal, etc.).",
      "Solo usa información que el usuario introduce manualmente en un formulario de configuración.",
      "Analiza todos los repositorios públicos de GitHub en tiempo real."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 127,
    category: "Temario oficial 2026 (original)",
    question: "¿Cómo puede GitHub Copilot ayudar a generar datos de prueba realistas (sample data)?",
    type: "single",
    options: [
      "Describiendo la estructura o el esquema necesario, Copilot puede generar conjuntos de datos de ejemplo coherentes para pruebas o demos.",
      "Copilot solo puede generar datos aleatorios sin ninguna estructura.",
      "Esta funcionalidad requiere un plugin de terceros no relacionado con Copilot.",
      "Solo es posible generar datos de prueba para bases de datos SQL."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 128,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué papel juega Copilot en la identificación de mejoras de seguridad y rendimiento en el código?",
    type: "single",
    options: [
      "Puede sugerir correcciones ante patrones de código potencialmente inseguros o ineficientes, aunque sus sugerencias deben validarse como cualquier otra.",
      "Garantiza al 100% que el código resultante estará libre de vulnerabilidades.",
      "Solo detecta problemas de rendimiento, nunca de seguridad.",
      "No tiene ninguna capacidad relacionada con seguridad o rendimiento."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 129,
    category: "Temario oficial 2026 (original)",
    question: "¿Qué ocurre si configuras una exclusión de contenido para un archivo concreto en un repositorio?",
    type: "single",
    options: [
      "Copilot dejará de ofrecer autocompletado dentro de ese archivo y no usará su contenido para sugerencias en otros archivos, aunque puede tardar hasta 30 minutos en aplicarse.",
      "El archivo se elimina automáticamente del repositorio.",
      "El archivo deja de ser visible para el resto de colaboradores del repositorio.",
      "La exclusión se aplica de forma instantánea e irreversible."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 130,
    category: "Temario oficial 2026 (original)",
    question: "Si una sugerencia de Copilot deja de aparecer y sospechas que es por una exclusión de contenido mal configurada, ¿cuál sería un primer paso razonable para solucionarlo?",
    type: "single",
    options: [
      "Reinstalar todo el sistema operativo.",
      "Revisar la configuración de exclusiones de contenido a nivel de repositorio y organización, y comprobar el estado/ajustes de la extensión de Copilot en el editor.",
      "Eliminar el repositorio y crear uno nuevo.",
      "Esperar sin hacer nada, ya que no existe forma de solucionarlo."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 131,
    category: "Temario oficial 2026 (original)",
    question: "Respecto a la propiedad (ownership) del código generado por GitHub Copilot, ¿cuál es la afirmación más correcta?",
    type: "single",
    options: [
      "GitHub Copilot nunca puede generarse código ya que todo el código debe ser escrito manualmente para tener propiedad legal.",
      "Existen términos contractuales y protecciones que varían según el plan, por lo que conviene revisar los términos de servicio vigentes y, en casos dudosos, consultar asesoría legal.",
      "El código generado siempre pertenece exclusivamente a GitHub.",
      "La propiedad del código generado es siempre pública independientemente del plan contratado."
    ],
    correct: [1],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 132,
    category: "Temario oficial 2026 (original)",
    question: "¿En qué consiste la función de filtrado de coincidencia con código público (\"matching public code\")?",
    type: "single",
    options: [
      "Puede activarse para bloquear o marcar sugerencias que coincidan sustancialmente con código público conocido, ayudando a mitigar riesgos de propiedad intelectual.",
      "Bloquea automáticamente todos los repositorios públicos de tu organización.",
      "Convierte automáticamente tus repositorios privados en públicos.",
      "Solo está disponible para organizaciones con sede en Estados Unidos."
    ],
    correct: [0],
    confidence: "correct",
    explanation: ""
  },
  {
    id: 133,
    category: "IA responsable y validación",
    question: "Copilot propone una función sin pruebas para sus casos límite. ¿Qué debería hacer el equipo antes de integrarla?",
    type: "single",
    options: ["Integrarla si compila.", "Revisar la lógica y probar el comportamiento esperado y casos límite.", "Pedir a Copilot que confirme su respuesta.", "Desactivar las pruebas para evitar falsos positivos."],
    correct: [1], confidence: "correct",
    explanation: "Una salida puede parecer plausible y aun así fallar. La revisión y las pruebas validan su comportamiento."
  },
  {
    id: 148,
    category: "IDE, CLI y agentes",
    question: "Un agente propone ejecutar un comando que elimina archivos. ¿Qué debes hacer?",
    type: "single",
    options: ["Ejecutarlo porque lo propuso el agente.", "Revisar el comando y confirmar su alcance antes de ejecutarlo.", "Ocultarlo del historial.", "Ejecutarlo sin leerlo desde otra interfaz."],
    correct: [1], confidence: "correct",
    explanation: "Los comandos pueden tener efectos destructivos. Comprende qué rutas afectan antes de ejecutarlos."
  },
  {
    id: 149,
    category: "IDE, CLI y agentes",
    question: "¿Para qué resulta útil GitHub Copilot CLI?",
    type: "single",
    options: ["Para recibir asistencia y generar comandos o scripts desde el terminal.", "Para sustituir Git y alojar repositorios.", "Para garantizar que cualquier comando sea seguro.", "Para administrar solo la facturación."],
    correct: [0], confidence: "correct",
    explanation: "Copilot CLI lleva asistencia al terminal; los comandos sugeridos deben revisarse antes de ejecutarlos."
  },
  {
    id: 150,
    category: "IDE, CLI y agentes",
    question: "Copilot CLI propone un comando que no conoces. ¿Cuál es el paso más prudente?",
    type: "single",
    options: ["Ejecutarlo con permisos elevados.", "Inspeccionar sus argumentos y efectos, y probarlo en un contexto seguro si hace falta.", "Añadirlo a un script de inicio.", "Ejecutarlo varias veces hasta que funcione."],
    correct: [1], confidence: "correct",
    explanation: "Los comandos sugeridos pueden modificar o borrar datos; entiende sus efectos antes de ejecutarlos."
  },
  {
    id: 151,
    category: "IDE, CLI y agentes",
    question: "¿Qué diferencia describe mejor las instrucciones personalizadas y un prompt file?",
    type: "single",
    options: ["Las instrucciones orientan respuestas de forma recurrente; un prompt file guarda una solicitud reutilizable para una tarea.", "Las instrucciones cifran el repositorio; el prompt file ejecuta pruebas.", "Ambos se aplican siempre globalmente.", "El prompt file sustituye las políticas de la organización."],
    correct: [0], confidence: "correct",
    explanation: "Las instrucciones aportan orientación estable; los prompt files permiten reutilizar solicitudes específicas."
  },
  {
    id: 152,
    category: "IDE, CLI y agentes",
    question: "¿Qué información es apropiada para las instrucciones personalizadas de un repositorio?",
    type: "multiple",
    options: ["Convenciones de arquitectura y estilo.", "Comandos habituales de compilación y pruebas.", "Restricciones relevantes para modificar el proyecto.", "Contraseñas compartidas del equipo."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "Las instrucciones deben aportar contexto estable y útil, nunca secretos ni credenciales."
  },
  {
    id: 153,
    category: "IDE, CLI y agentes",
    question: "¿Por qué conviene mantener un prompt file enfocado en una tarea concreta?",
    type: "single",
    options: ["Aclara la solicitud y facilita repetirla con menos variación.", "Hace que Copilot ignore las instrucciones del repositorio.", "Garantiza resultados idénticos.", "Evita que el usuario revise el resultado."],
    correct: [0], confidence: "correct",
    explanation: "Una plantilla enfocada expresa pasos y formato, aunque las respuestas pueden variar y deben revisarse."
  },
  {
    id: 154,
    category: "IDE, CLI y agentes",
    question: "¿Qué evidencia ayuda a diagnosticar una prueba fallida con Copilot Chat?",
    type: "single",
    options: ["La salida de la prueba, el código relacionado y el comportamiento esperado.", "El nombre del equipo.", "Una captura de una aplicación distinta.", "El historial completo del navegador."],
    correct: [0], confidence: "correct",
    explanation: "La salida, el código pertinente y la expectativa permiten relacionar el fallo con el comportamiento observado."
  },
  {
    id: 155,
    category: "IDE, CLI y agentes",
    question: "Al revisar cambios de agente en varios archivos, ¿qué evidencia debes consultar?",
    type: "multiple",
    options: ["El diff de los archivos modificados.", "Las comprobaciones ejecutadas y sus resultados.", "Los criterios de aceptación.", "La afirmación del agente de que no hace falta revisar."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "El diff, las validaciones y los criterios permiten evaluar el trabajo sin depender de la autoevaluación del agente."
  },
  {
    id: 156,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué aporta MCP a una experiencia de Copilot compatible?",
    type: "single",
    options: ["Una forma estandarizada de conectar herramientas o fuentes de contexto externas.", "Una licencia automática para el contenido recuperado.", "Una garantía de exactitud de datos externos.", "Un reemplazo de los controles de acceso."],
    correct: [0], confidence: "correct",
    explanation: "MCP facilita conexiones con herramientas y fuentes de contexto; no concede permisos ni garantiza la calidad de los datos."
  },
  {
    id: 157,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué revisar antes de habilitar un servidor MCP para un agente?",
    type: "multiple",
    options: ["Qué herramientas y datos expone.", "Qué permisos y credenciales requiere.", "Su procedencia y controles.", "Solo si su nombre parece oficial."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "Una integración puede ampliar las acciones y el contexto disponibles; evalúa su origen y superficie de acceso."
  },
  {
    id: 158,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Cuándo resulta más útil delegar una subtarea a un subagente?",
    type: "single",
    options: ["Cuando puede delimitarse, describirse y revisarse de forma independiente.", "Cuando todavía no se entiende el objetivo.", "Cuando requiere compartir todas las credenciales.", "Cuando se quiere evitar integrar resultados."],
    correct: [0], confidence: "correct",
    explanation: "Las subtareas acotadas, con entradas y resultados esperados, facilitan la delegación y la integración."
  },
  {
    id: 159,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué práctica ayuda a mantener útil una sesión de agente durante una tarea extensa?",
    type: "single",
    options: ["Mantener claros el objetivo y el estado relevante, y dividir el trabajo en etapas verificables.", "Añadir todos los archivos disponibles.", "Cambiar el objetivo sin indicar prioridades.", "Evitar resumir decisiones previas."],
    correct: [0], confidence: "correct",
    explanation: "El contexto enfocado y las etapas explícitas reducen ambigüedad y facilitan retomar y validar el trabajo."
  },
  {
    id: 160,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Cómo debe utilizarse un resumen de pull request generado por Copilot?",
    type: "single",
    options: ["Como ayuda inicial que se contrasta con el diff y el propósito del cambio.", "Como sustituto del diff y de la revisión.", "Como prueba de que se cubrieron todos los requisitos.", "Como aprobación automática para fusionar."],
    correct: [0], confidence: "correct",
    explanation: "El resumen puede acelerar la comprensión, pero debe verificarse y no reemplaza la revisión."
  },
  {
    id: 161,
    category: "Agentes, MCP y flujos de GitHub",
    question: "Una revisión de código de Copilot no detecta un defecto. ¿Qué conclusión es razonable?",
    type: "single",
    options: ["El cambio es necesariamente correcto.", "La revisión automatizada tiene límites y debe complementarse con pruebas y juicio humano.", "El defecto no puede reproducirse.", "Hay que desactivar todas las revisiones automatizadas."],
    correct: [1], confidence: "correct",
    explanation: "La ausencia de hallazgos automatizados no demuestra que un cambio esté libre de defectos."
  },
  {
    id: 162,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Para qué sirven los estándares personalizados de revisión de código?",
    type: "single",
    options: ["Comunicar criterios del proyecto que orientan las revisiones.", "Garantizar que todas las sugerencias sean correctas.", "Reemplazar las pruebas.", "Conceder permisos de escritura al revisor."],
    correct: [0], confidence: "correct",
    explanation: "Los estándares expresan expectativas del equipo, pero no garantizan que se detecten todos los problemas."
  },
  {
    id: 163,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué utilidad pueden tener los GitHub Copilot Spaces?",
    type: "single",
    options: ["Organizar contexto y recursos relacionados para un tema o proyecto.", "Sustituir las políticas de acceso a repositorios.", "Garantizar que todos los documentos estén actualizados.", "Convertir contenido en documentación oficial."],
    correct: [0], confidence: "correct",
    explanation: "Spaces ayuda a reunir contexto relacionado; la exactitud, vigencia y autorización de los recursos requieren atención."
  },
  {
    id: 164,
    category: "Agentes, MCP y flujos de GitHub",
    question: "Antes de habilitar una nueva capacidad de Copilot para una organización, ¿qué conviene comprobar?",
    type: "multiple",
    options: ["Su disponibilidad en el plan y la superficie de producto.", "Las políticas de la organización y quién puede usarla.", "Los requisitos de privacidad y seguridad.", "Que se comporte igual en todos los IDE."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "La disponibilidad y configuración pueden depender del plan, producto y políticas aplicadas."
  },
  {
    id: 165,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué utilidad tiene un registro de auditoría en la administración de Copilot?",
    type: "single",
    options: ["Consultar eventos administrativos registrados para supervisión y trazabilidad.", "Demostrar que cada línea generada es segura.", "Guardar el código fuente de todos los prompts.", "Reemplazar la gestión de identidades."],
    correct: [0], confidence: "correct",
    explanation: "Los registros ayudan a rastrear eventos administrativos disponibles; no prueban la calidad del código."
  },
  {
    id: 166,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué ventaja puede aportar una API REST para administrar suscripciones de Copilot?",
    type: "single",
    options: ["Automatizar operaciones administrativas compatibles e integrarlas en procesos.", "Obtener funciones excluidas del plan.", "Evitar las políticas de organización.", "Eliminar la necesidad de autenticación."],
    correct: [0], confidence: "correct",
    explanation: "Las API permiten automatizar operaciones compatibles, sujetas a autenticación, permisos y límites."
  },
  {
    id: 167,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué criterio es importante al configurar políticas de Copilot en una organización?",
    type: "single",
    options: ["Alinear disponibilidad y uso con necesidades y riesgos de la organización.", "Habilitar todas las funciones para todos.", "Basarse solo en la popularidad de una función.", "Permitir que la política ignore controles de seguridad."],
    correct: [0], confidence: "correct",
    explanation: "La gestión centralizada permite alinear el uso con los requisitos y opciones actuales del producto."
  },
  {
    id: 168,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué debería hacer un equipo después de que Copilot sugiera cambios para una pull request?",
    type: "single",
    options: ["Revisar los cambios, comprobar las pruebas y decidir si los acepta.", "Fusionarlos automáticamente.", "Cerrar las conversaciones sin leerlas.", "Eliminar la revisión humana."],
    correct: [0], confidence: "correct",
    explanation: "La aceptación de cambios es una decisión del equipo y debe basarse en revisión, pruebas y requisitos."
  },
  {
    id: 169,
    category: "Agentes, MCP y flujos de GitHub",
    question: "¿Qué señal indica que un recurso añadido como contexto necesita validación?",
    type: "single",
    options: ["Es antiguo o no tiene una fuente verificable.", "Tiene un título descriptivo.", "Trata el mismo tema general.", "Está en formato Markdown."],
    correct: [0], confidence: "correct",
    explanation: "La antigüedad y la falta de procedencia pueden hacer que el contexto sea engañoso; verifica fuente y vigencia."
  },
  {
    id: 170,
    category: "Agentes, MCP y flujos de GitHub",
    question: "Una integración requiere credenciales para acceder a un servicio. ¿Qué práctica es correcta?",
    type: "single",
    options: ["Usar mecanismos aprobados de secretos con los permisos mínimos necesarios.", "Escribirlas en las instrucciones personalizadas.", "Incluirlas en cada prompt.", "Compartir una credencial administrativa sin caducidad."],
    correct: [0], confidence: "correct",
    explanation: "Gestiona credenciales mediante mecanismos aprobados y mínimo privilegio; no las incrustes en prompts o archivos compartidos."
  },
  {
    id: 134,
    category: "IA responsable y validación",
    question: "Copilot cita una referencia técnica que no reconoces. ¿Qué conviene hacer?",
    type: "single",
    options: ["Confiar en ella porque la respuesta es detallada.", "Verificarla en documentación fiable antes de tomar decisiones.", "Repetir la pregunta hasta obtener la misma respuesta.", "Eliminar la cita y asumir que el resto es correcto."],
    correct: [1], confidence: "correct",
    explanation: "Los modelos pueden producir referencias inexactas; repetir una respuesta tampoco demuestra que sea correcta."
  },
  {
    id: 135,
    category: "IA responsable y validación",
    question: "Un prompt de depuración contiene un token real. ¿Cuál es la opción más segura?",
    type: "single",
    options: ["Compartirlo solo en un chat individual.", "Sustituirlo por un valor ficticio y seguir las políticas de datos.", "Pedir a Copilot que no lo almacene.", "Incluirlo en el prompt, pero no en Git."],
    correct: [1], confidence: "correct",
    explanation: "No incluyas credenciales reales en prompts; usa valores ficticios y sigue las políticas de manejo de datos."
  },
  {
    id: 136,
    category: "IA responsable y validación",
    question: "¿Qué ayuda a evaluar posibles sesgos en una función de clasificación sugerida por Copilot?",
    type: "single",
    options: ["Aceptar el código si usa una biblioteca conocida.", "Examinar los datos y criterios, y probar resultados en casos representativos.", "Probar solo el caso promedio.", "Pedir a Copilot que garantice que no hay sesgo."],
    correct: [1], confidence: "correct",
    explanation: "El uso responsable requiere evaluar los datos y los resultados en el contexto de las personas afectadas."
  },
  {
    id: 137,
    category: "IA responsable y validación",
    question: "¿Quién es responsable de revisar una sugerencia antes de desplegarla?",
    type: "single",
    options: ["El modelo que generó el código.", "La persona o el equipo que decide incorporarla.", "El proveedor de alojamiento.", "Nadie, si la sugerencia incluye comentarios."],
    correct: [1], confidence: "correct",
    explanation: "Copilot asiste al desarrollo, pero no sustituye la responsabilidad del equipo sobre el código desplegado."
  },
  {
    id: 138,
    category: "IA responsable y validación",
    question: "Un agente puede ejecutar comandos en un repositorio. ¿Qué reduce el impacto de una acción equivocada?",
    type: "single",
    options: ["Dar acceso administrativo a toda la organización.", "Limitar permisos y alcance, y revisar acciones con efectos importantes.", "Desactivar registros.", "Permitir que el agente apruebe sus propios cambios."],
    correct: [1], confidence: "correct",
    explanation: "El mínimo privilegio limita el impacto posible y los controles mantienen supervisión sobre acciones relevantes."
  },
  {
    id: 139,
    category: "IA responsable y validación",
    question: "Copilot sugiere concatenar texto del usuario en una consulta SQL. ¿Qué debes hacer?",
    type: "single",
    options: ["Integrarla si funciona con datos de prueba.", "Usar consultas parametrizadas y probar la seguridad antes de aceptarla.", "Pedir más comentarios.", "Cambiar el nombre de la variable."],
    correct: [1], confidence: "correct",
    explanation: "La revisión debe detectar riesgos de inyección y aplicar prácticas seguras, como parametrizar consultas."
  },
  {
    id: 140,
    category: "IA responsable y validación",
    question: "¿Cómo se debe tratar código externo incluido en el contexto de un agente?",
    type: "single",
    options: ["Como instrucciones confiables.", "Como contenido no confiable que debe evaluarse antes de seguir sus instrucciones.", "Como prueba de licencia compatible.", "Como contenido incapaz de influir en la respuesta."],
    correct: [1], confidence: "correct",
    explanation: "El contenido externo puede incluir instrucciones maliciosas o erróneas y no debe recibir autoridad automáticamente."
  },
  {
    id: 141,
    category: "IA responsable y validación",
    question: "¿Qué conviene comprobar antes de añadir una dependencia propuesta por Copilot?",
    type: "multiple",
    options: ["Procedencia y mantenimiento.", "Licencia y compatibilidad con las políticas del proyecto.", "Riesgos de seguridad y versiones disponibles.", "Solo que el nombre parezca conocido."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "Evalúa identidad, mantenimiento, licencia, compatibilidad y seguridad como con cualquier dependencia nueva."
  },
  {
    id: 142,
    category: "IA responsable y validación",
    question: "¿Qué evidencia respalda que una solución de Copilot es adecuada para producción?",
    type: "single",
    options: ["Que se haya generado en modo agente.", "Que haya pasado revisión y validaciones apropiadas para sus requisitos y riesgos.", "Que no tenga errores de sintaxis.", "Que otra conversación la recomiende."],
    correct: [1], confidence: "correct",
    explanation: "La adecuación depende de requisitos y riesgos; generar o compilar código no basta por sí solo."
  },
  {
    id: 143,
    category: "IA responsable y validación",
    question: "Una salida puede afectar a una decisión sensible y no dominas el tema. ¿Qué hacer?",
    type: "single",
    options: ["Usarla sin cambios.", "Contrastar con fuentes autorizadas y solicitar revisión competente.", "Pedir una respuesta más larga al mismo modelo.", "Eliminar las advertencias."],
    correct: [1], confidence: "correct",
    explanation: "Las decisiones de alto impacto requieren verificación proporcional al riesgo y revisión experta cuando corresponda."
  },
  {
    id: 144,
    category: "IDE, CLI y agentes",
    question: "¿Qué diferencia describe mejor las sugerencias inline y el chat del IDE?",
    type: "single",
    options: ["Inline ayuda a completar código en el editor; el chat permite solicitudes conversacionales.", "Inline ejecuta pruebas y chat solo cambia el tema.", "Ambas modifican siempre todo el repositorio.", "Chat responde solo sobre documentación externa."],
    correct: [0], confidence: "correct",
    explanation: "Las sugerencias inline completan código en contexto; el chat permite intercambiar instrucciones y contexto."
  },
  {
    id: 145,
    category: "IDE, CLI y agentes",
    question: "¿Qué contexto resulta útil para pedir a Copilot que explique un error?",
    type: "multiple",
    options: ["El mensaje de error completo.", "El código relacionado y el resultado esperado.", "Los pasos para reproducirlo.", "Todos los archivos personales del equipo."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "El error, el código, la expectativa y los pasos reproducibles aportan evidencia pertinente para el diagnóstico."
  },
  {
    id: 146,
    category: "IDE, CLI y agentes",
    question: "Al pedir a Copilot Edits un cambio en varios archivos, ¿cómo mantienes el control?",
    type: "single",
    options: ["Definir alcance y restricciones, revisar cada cambio y ejecutar pruebas pertinentes.", "Modificar todo el repositorio para descubrir dependencias.", "Aceptar todas las ediciones antes de ver el diff.", "Omitir restricciones."],
    correct: [0], confidence: "correct",
    explanation: "El alcance explícito, la revisión del diff y las pruebas ayudan a confirmar que los cambios son necesarios y coherentes."
  },
  {
    id: 147,
    category: "IDE, CLI y agentes",
    question: "¿Qué conviene especificar al iniciar una tarea de varios pasos con modo agente?",
    type: "single",
    options: ["Objetivo, límites, criterios de aceptación y comprobaciones.", "Solo el lenguaje de programación.", "Credenciales para evitar preguntas.", "Que omita pruebas y revisión."],
    correct: [0], confidence: "correct",
    explanation: "Objetivos y criterios explícitos orientan el plan del agente y permiten verificar el resultado."
  },
  {
    id: 171,
    category: "Datos, arquitectura y contexto",
    question: "¿Qué describe mejor el contexto que recibe Copilot al generar una respuesta?",
    type: "single",
    options: ["Se construye con señales relevantes disponibles para la función; no necesariamente incluye todo el repositorio.", "Siempre incluye todos los repositorios del usuario.", "Solo incluye el último mensaje.", "Incluye automáticamente cualquier archivo privado."],
    correct: [0], confidence: "correct",
    explanation: "El contexto depende de la función y de las señales disponibles o seleccionadas; no debe asumirse que Copilot ve todo."
  },
  {
    id: 172,
    category: "Datos, arquitectura y contexto",
    question: "¿Qué puede hacer el procesamiento previo de una solicitud antes de enviarla a un modelo?",
    type: "multiple",
    options: ["Preparar el prompt y reunir contexto pertinente.", "Aplicar filtros o controles configurados.", "Determinar qué datos y políticas son pertinentes.", "Garantizar que la respuesta no contenga errores."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "El flujo puede preparar contexto y aplicar controles, pero no elimina la posibilidad de errores en la respuesta."
  },
  {
    id: 173,
    category: "Datos, arquitectura y contexto",
    question: "¿Por qué puede afectar a una tarea de programación la ventana de contexto de un modelo?",
    type: "single",
    options: ["La cantidad y pertinencia del contexto disponible influye en la información usada para responder.", "Determina la licencia del código generado.", "Hace que el modelo ejecute todas las pruebas.", "Elimina la necesidad de indicar el objetivo."],
    correct: [0], confidence: "correct",
    explanation: "Los modelos procesan una cantidad limitada de contexto; seleccionar información pertinente ayuda a enfocar la respuesta."
  },
  {
    id: 174,
    category: "Datos, arquitectura y contexto",
    question: "¿Qué práctica es recomendable al añadir contexto manualmente a una conversación?",
    type: "single",
    options: ["Incluir fragmentos pertinentes y explicar por qué importan.", "Adjuntar todos los archivos sin indicar la tarea.", "Incluir datos personales reales.", "Repetir contexto que ya no aplica."],
    correct: [0], confidence: "correct",
    explanation: "El contexto conciso y relevante reduce ruido y evita compartir información innecesaria."
  },
  {
    id: 175,
    category: "Datos, arquitectura y contexto",
    question: "¿Qué afirmación sobre filtros y respuestas de modelos es más precisa?",
    type: "single",
    options: ["Los controles pueden mitigar riesgos, pero no garantizan que toda salida sea correcta.", "Un filtro garantiza que se cumplen todos los requisitos.", "El postprocesamiento comprueba formalmente cada programa.", "Los filtros hacen innecesaria la revisión."],
    correct: [0], confidence: "correct",
    explanation: "Los controles mitigan ciertos riesgos, pero no sustituyen pruebas, revisión ni validación contextual."
  },
  {
    id: 176,
    category: "Datos, arquitectura y contexto",
    question: "¿Qué consultar para entender cómo se manejan los datos de Copilot en tu situación?",
    type: "single",
    options: ["La documentación y configuración vigentes para el plan y las políticas aplicables.", "Una respuesta sin referencias de Copilot.", "La configuración de otra empresa.", "El nombre del modelo como única fuente."],
    correct: [0], confidence: "correct",
    explanation: "El manejo de datos depende del producto, plan, configuración y políticas; consulta la documentación vigente."
  },
  {
    id: 177,
    category: "Datos, arquitectura y contexto",
    question: "¿Qué limitación conviene recordar al pedir a un modelo que explique un repositorio?",
    type: "single",
    options: ["Puede no tener acceso a todos los archivos o relaciones relevantes.", "Conoce siempre decisiones no documentadas.", "Verifica automáticamente cada dependencia en producción.", "Incluye por defecto el historial privado del equipo."],
    correct: [0], confidence: "correct",
    explanation: "El contexto disponible varía; proporciona los archivos y decisiones relevantes cuando sea necesario."
  },
  {
    id: 178,
    category: "Datos, arquitectura y contexto",
    question: "¿Por qué conviene distinguir entre contexto añadido por el usuario y contenido recuperado automáticamente?",
    type: "single",
    options: ["Ayuda a evaluar procedencia, relevancia y confiabilidad.", "Permite asumir que lo recuperado es oficial.", "Hace que el modelo ignore datos sensibles automáticamente.", "Garantiza citas verificables."],
    correct: [0], confidence: "correct",
    explanation: "La procedencia ayuda a decidir si la información es pertinente, confiable y apropiada para la tarea."
  },
  {
    id: 179,
    category: "Ingeniería de prompts y contexto",
    question: "¿Qué estructura suele ayudar a que un prompt de programación sea accionable?",
    type: "multiple",
    options: ["Objetivo y resultado esperado.", "Contexto técnico pertinente.", "Restricciones y criterios de aceptación.", "Una petición vaga sin describir el cambio."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "Objetivo, contexto y restricciones reducen ambigüedad y permiten evaluar la respuesta."
  },
  {
    id: 180,
    category: "Ingeniería de prompts y contexto",
    question: "¿Qué contexto ayuda a generar una función compatible con un proyecto existente?",
    type: "multiple",
    options: ["La firma o interfaz que debe respetar.", "Ejemplos de entrada y salida.", "El lenguaje y convenciones relevantes.", "Preferencias no relacionadas."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "Interfaces, ejemplos y convenciones ayudan a ajustar la propuesta al comportamiento e integración requeridos."
  },
  {
    id: 181,
    category: "Ingeniería de prompts y contexto",
    question: "¿Cuándo puede ser útil un ejemplo en un prompt few-shot?",
    type: "single",
    options: ["Para mostrar un patrón de entrada y salida o estilo esperado.", "Para garantizar que el modelo memorice el ejemplo.", "Para que Copilot ignore las restricciones.", "Solo en proyectos Python."],
    correct: [0], confidence: "correct",
    explanation: "Los ejemplos ilustran el patrón deseado, pero no garantizan una reproducción exacta."
  },
  {
    id: 182,
    category: "Ingeniería de prompts y contexto",
    question: "La respuesta resuelve solo parte de una tarea. ¿Qué seguimiento es más eficaz?",
    type: "single",
    options: ["Indicar qué falta, aportar contexto pertinente y aclarar el criterio de éxito.", "Repetir el prompt inicial sin cambios.", "Cambiar de tema.", "Aceptar la respuesta parcial como completa."],
    correct: [0], confidence: "correct",
    explanation: "Un seguimiento que identifica la brecha y añade información útil permite corregir la respuesta."
  },
  {
    id: 183,
    category: "Ingeniería de prompts y contexto",
    question: "Un prompt combina varios objetivos independientes y restricciones. ¿Qué mejora puede ayudar?",
    type: "single",
    options: ["Dividirlo en tareas más pequeñas con resultados verificables.", "Eliminar todas las restricciones.", "Pedirlo todo en un paso sin límites.", "Añadir archivos no relacionados."],
    correct: [0], confidence: "correct",
    explanation: "Las tareas delimitadas reducen ambigüedad y permiten revisar cada resultado antes de continuar."
  },
  {
    id: 184,
    category: "Ingeniería de prompts y contexto",
    question: "¿Qué efecto puede tener incluir mucha información irrelevante en un prompt?",
    type: "single",
    options: ["Puede distraer del objetivo y ocultar el contexto importante.", "Garantiza más precisión.", "Amplía permisos de Copilot.", "Impide usar el archivo actual."],
    correct: [0], confidence: "correct",
    explanation: "Más contexto no siempre es mejor; prioriza la información relacionada con la tarea."
  },
  {
    id: 185,
    category: "Ingeniería de prompts y contexto",
    question: "¿Qué hace más clara una solicitud para documentar una API?",
    type: "single",
    options: ["Indicar audiencia, formato, alcance y el fragmento de API pertinente.", "Pedir que se documente todo sin más detalle.", "No especificar el formato.", "Añadir código sin indicar el resultado esperado."],
    correct: [0], confidence: "correct",
    explanation: "Audiencia, formato y alcance permiten producir documentación útil y limitar supuestos."
  },
  {
    id: 186,
    category: "Ingeniería de prompts y contexto",
    question: "Al pedir alternativas de diseño, ¿qué instrucción ayuda a compararlas?",
    type: "single",
    options: ["Solicitar opciones, ventajas, desventajas y criterios relevantes.", "Pedir solo la opción preferida por Copilot.", "Omitir los requisitos.", "Solicitar que no mencione riesgos."],
    correct: [0], confidence: "correct",
    explanation: "Una comparación basada en criterios y trade-offs ayuda a tomar una decisión informada que el equipo debe validar."
  },
  {
    id: 187,
    category: "Ingeniería de prompts y contexto",
    question: "¿Qué información ayuda a diagnosticar una prueba fallida sin exponer secretos?",
    type: "multiple",
    options: ["Resultado esperado.", "Salida observada y mensaje de error.", "Código y datos de prueba pertinentes.", "Una credencial real del entorno."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "La diferencia entre lo esperado y lo observado aporta evidencia; no incluyas secretos reales en el prompt."
  },
  {
    id: 188,
    category: "Ingeniería de prompts y contexto",
    question: "¿Qué significa zero-shot en prompting?",
    type: "single",
    options: ["Solicitar una tarea sin ejemplos de demostración, aunque se pueden incluir instrucciones y contexto.", "Ejecutar una tarea sin prompt.", "Usar cero tokens de contexto.", "Garantizar que la primera respuesta sea correcta."],
    correct: [0], confidence: "correct",
    explanation: "Zero-shot indica que no se proporcionan ejemplos de demostración, no que falten instrucciones o contexto."
  },
  {
    id: 189,
    category: "Productividad, pruebas y calidad",
    question: "Al generar pruebas unitarias con Copilot, ¿qué conviene especificar?",
    type: "multiple",
    options: ["El comportamiento que se debe verificar.", "Casos límite y entradas inválidas relevantes.", "Las convenciones del framework de pruebas del proyecto.", "Que las pruebas solo comprueben que el método existe."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "Las pruebas útiles verifican comportamiento y casos relevantes usando las convenciones del proyecto."
  },
  {
    id: 190,
    category: "Productividad, pruebas y calidad",
    question: "¿Qué hace más informativa una aserción de prueba?",
    type: "single",
    options: ["Comprobar un resultado observable relacionado con el requisito.", "Comprobar solo que no hay excepción aunque se esperaba un valor.", "Depender de llamadas internas sin que el requisito lo pida.", "Añadir un mensaje sin verificar resultados."],
    correct: [0], confidence: "correct",
    explanation: "Las aserciones deben expresar el comportamiento observable que importa y ayudar a localizar regresiones."
  },
  {
    id: 191,
    category: "Productividad, pruebas y calidad",
    question: "¿Cómo comprobar que una refactorización sugerida conserva el comportamiento?",
    type: "single",
    options: ["Ejecutar pruebas apropiadas y revisar el cambio frente a los requisitos.", "Comprobar que los nombres no cambiaron.", "Confiar en que el modelo preservó todos los casos.", "Eliminar las pruebas que fallen."],
    correct: [0], confidence: "correct",
    explanation: "Las pruebas y la revisión frente al comportamiento requerido aportan evidencia sobre la refactorización."
  },
  {
    id: 192,
    category: "Productividad, pruebas y calidad",
    question: "Copilot explica un módulo desconocido. ¿Cómo aprovechar esa explicación?",
    type: "single",
    options: ["Contrastar con el código y la documentación y usarla como punto de partida.", "Tratarla como documentación oficial sin comprobarla.", "Reemplazar el módulo según la explicación.", "Compartirla sin revisar si revela datos sensibles."],
    correct: [0], confidence: "correct",
    explanation: "La explicación puede acelerar el aprendizaje, pero debe contrastarse con el código y las fuentes del proyecto."
  },
  {
    id: 193,
    category: "Productividad, pruebas y calidad",
    question: "¿Qué papel puede desempeñar Copilot al revisar la seguridad de una modificación?",
    type: "single",
    options: ["Ayudar a señalar riesgos potenciales junto con análisis, pruebas y revisión especializada.", "Certificar que no contiene vulnerabilidades.", "Sustituir el análisis de dependencias.", "Aprobarla automáticamente si no encuentra problemas."],
    correct: [0], confidence: "correct",
    explanation: "La asistencia puede sugerir riesgos, pero no es una garantía ni reemplaza controles de seguridad apropiados."
  },
  {
    id: 194,
    category: "Productividad, pruebas y calidad",
    question: "¿Qué precaución tomar al pedir datos de ejemplo para una demostración?",
    type: "single",
    options: ["Usar datos sintéticos y evitar información personal o confidencial real.", "Copiar registros de producción.", "Cambiar solo los nombres de registros reales.", "Publicarlos sin revisar su origen."],
    correct: [0], confidence: "correct",
    explanation: "Los datos sintéticos reducen el riesgo de revelar información personal o confidencial en pruebas y demos."
  },
  {
    id: 195,
    category: "Productividad, pruebas y calidad",
    question: "¿Qué aporta evidencia de que una optimización sugerida mejora el rendimiento?",
    type: "single",
    options: ["Comparar mediciones reproducibles con una línea base.", "Aceptar si reduce el número de líneas.", "Usar la explicación como prueba.", "Eliminar pruebas para reducir el tiempo."],
    correct: [0], confidence: "correct",
    explanation: "Mediciones comparables antes y después permiten evaluar el impacto real del cambio."
  },
  {
    id: 196,
    category: "Privacidad, exclusiones y salvaguardas",
    question: "¿Cuál es el propósito de las exclusiones de contenido de Copilot?",
    type: "single",
    options: ["Limitar el uso de contenido especificado como contexto en superficies compatibles.", "Eliminar el contenido excluido del repositorio.", "Revocar el acceso de colaboradores.", "Garantizar que el contenido nunca se almacene."],
    correct: [0], confidence: "correct",
    explanation: "Las exclusiones afectan al uso de contenido en funciones compatibles; no borran archivos ni reemplazan controles de acceso."
  },
  {
    id: 197,
    category: "Privacidad, exclusiones y salvaguardas",
    question: "Una exclusión de contenido parece no aplicarse. ¿Qué comprobaciones son razonables?",
    type: "multiple",
    options: ["Verificar ruta, ámbito y configuración.", "Comprobar políticas organizativas y ajustes del editor.", "Confirmar compatibilidad de la función y el tiempo de propagación documentado.", "Asumir que el repositorio ya es inaccesible para colaboradores."],
    correct: [0, 1, 2], confidence: "correct",
    explanation: "El ámbito, la configuración y la compatibilidad de cada superficie afectan al resultado; consulta el comportamiento vigente."
  },
  {
    id: 198,
    category: "Privacidad, exclusiones y salvaguardas",
    question: "¿Qué hace el control de coincidencia con código público cuando está disponible y habilitado?",
    type: "single",
    options: ["Puede bloquear o señalar coincidencias con código público conocido, según la configuración.", "Garantiza que ninguna sugerencia se parezca a código existente.", "Impide abrir repositorios públicos.", "Reemplaza la revisión de licencias."],
    correct: [0], confidence: "correct",
    explanation: "El control ayuda con coincidencias conocidas, pero no cubre todo el código ni sustituye el análisis de licencias."
  },
  {
    id: 199,
    category: "Privacidad, exclusiones y salvaguardas",
    question: "¿Qué revisar antes de cambiar una configuración de privacidad de Copilot?",
    type: "single",
    options: ["Su efecto en el plan, producto y políticas aplicables, usando documentación vigente.", "Solo una conversación anterior.", "La configuración de otro plan.", "Si requiere reiniciar el IDE."],
    correct: [0], confidence: "correct",
    explanation: "Los controles y sus implicaciones dependen del producto y la cuenta; consulta documentación actual."
  },
  {
    id: 200,
    category: "Privacidad, exclusiones y salvaguardas",
    question: "Copilot deja de ofrecer sugerencias en el IDE. ¿Qué diagnóstico inicial es más sensato?",
    type: "single",
    options: ["Comprobar estado de la extensión, autenticación, conectividad, políticas y exclusiones.", "Borrar el repositorio inmediatamente.", "Desactivar todas las políticas organizativas.", "Reinstalar el sistema operativo."],
    correct: [0], confidence: "correct",
    explanation: "Empieza por estado, cuenta, conectividad y controles pertinentes antes de intentar medidas disruptivas."
  },
  {
    id: 201,
    category: "CLI y sesiones de agente",
    question: "¿Qué comando instala GitHub Copilot CLI con npm según la documentación actual?",
    type: "single",
    options: ["npm install -g @github/copilot", "npm install github/copilot-cli", "gh extension install github/copilot", "winget install GitHub.Copilot/npm"],
    correct: [0], confidence: "correct",
    explanation: "La documentación oficial indica npm install -g @github/copilot; esta vía requiere Node.js 22 o posterior."
  },
  {
    id: 202,
    category: "CLI y sesiones de agente",
    question: "¿Qué opción oficial permite instalar Copilot CLI en Windows mediante WinGet?",
    type: "single",
    options: ["winget install GitHub.Copilot", "winget add copilot-cli", "npm install -g copilot-windows", "gh copilot install --windows"],
    correct: [0], confidence: "correct",
    explanation: "La documentación de GitHub incluye WinGet como método para instalar Copilot CLI en Windows."
  },
  {
    id: 203,
    category: "CLI y sesiones de agente",
    question: "Al iniciar Copilot CLI desde una carpeta nueva, ¿qué debes considerar antes de confiar en ella?",
    type: "single",
    options: ["La sesión puede leer, modificar y ejecutar archivos dentro de esa carpeta.", "La confirmación solo cambia el tema del terminal.", "La carpeta se publica automáticamente en GitHub.", "Confiar en la carpeta concede una licencia sobre sus archivos."],
    correct: [0], confidence: "correct",
    explanation: "La confianza permite que Copilot CLI trabaje con archivos de esa ubicación; úsala solo si confías en su contenido."
  },
  {
    id: 204,
    category: "CLI y sesiones de agente",
    question: "Si Copilot CLI solicita autenticación en una sesión interactiva, ¿qué comando de barra inicia el proceso?",
    type: "single",
    options: ["/login", "/authorize", "/connect-github", "/token"],
    correct: [0], confidence: "correct",
    explanation: "En el primer inicio, si no hay una sesión autenticada, se puede usar /login y seguir el flujo indicado."
  },
  {
    id: 205,
    category: "CLI y sesiones de agente",
    question: "¿Cómo puedes añadir un archivo concreto como contexto al prompt interactivo de Copilot CLI?",
    type: "single",
    options: ["Mencionarlo con @ seguido de su ruta.", "Escribir #file:// y una ruta absoluta.", "Renombrarlo a README antes de preguntar.", "Copiarlo a un repositorio público."],
    correct: [0], confidence: "correct",
    explanation: "La CLI permite incluir archivos en el contexto escribiendo @ seguido de la ruta del archivo."
  },
  {
    id: 206,
    category: "CLI y sesiones de agente",
    question: "En la CLI interactiva, ¿qué significa anteponer ! a una entrada?",
    type: "single",
    options: ["Ejecutar un comando de shell local directamente, sin enviarlo al modelo.", "Pedir al agente que explique el comando.", "Marcar el comando como una instrucción permanente.", "Reanudar la última sesión."],
    correct: [0], confidence: "correct",
    explanation: "El prefijo ! ejecuta la entrada como comando local; revisa el comando y sus efectos antes de usarlo."
  },
  {
    id: 207,
    category: "CLI y sesiones de agente",
    question: "¿Qué opción reanuda rápidamente la sesión local más reciente de Copilot CLI?",
    type: "single",
    options: ["copilot --continue", "copilot --restart", "copilot --last-prompt", "copilot --history"],
    correct: [0], confidence: "correct",
    explanation: "La opción --continue reanuda la sesión más reciente en el directorio de trabajo actual, con el fallback documentado por la CLI."
  },
  {
    id: 208,
    category: "CLI y sesiones de agente",
    question: "¿Qué permite inspeccionar /session files en una sesión interactiva de Copilot CLI?",
    type: "single",
    options: ["Los archivos asociados a la sesión.", "Las contraseñas guardadas en el sistema.", "Todos los archivos de cualquier repositorio de la organización.", "El código fuente del modelo."],
    correct: [0], confidence: "correct",
    explanation: "El subcomando files forma parte de las opciones de administración de la sesión y muestra información de sus archivos."
  },
  {
    id: 209,
    category: "CLI y sesiones de agente",
    question: "En una sesión compatible de VS Code, ¿qué opción envía una corrección al agente mientras trabaja y hace que redirija su tarea?",
    type: "single",
    options: ["Steer with Message.", "Add to Queue.", "Archive Session.", "Export Chat."],
    correct: [0], confidence: "correct",
    explanation: "Steer with Message pide al agente que ceda después de la herramienta en curso y procese la nueva indicación."
  },
  {
    id: 210,
    category: "CLI y sesiones de agente",
    question: "¿Qué diferencia hay entre archivar una sesión y eliminarla en VS Code?",
    type: "single",
    options: ["Archivar la oculta de la lista activa y permite recuperarla; eliminarla es permanente.", "Ambas acciones borran inmediatamente el historial.", "Archivar elimina los cambios y eliminar conserva la sesión.", "No existe diferencia."],
    correct: [0], confidence: "correct",
    explanation: "Archivar organiza sesiones sin borrarlas; eliminar es irreversible y puede quitar el worktree asociado."
  },
  {
    id: 211,
    category: "CLI y sesiones de agente",
    question: "En una sesión de Agent Host con varios chats, ¿qué comparten los chats pares?",
    type: "single",
    options: ["El workspace y el worktree, pero cada chat mantiene su propio historial.", "El historial completo y las mismas respuestas.", "Solo el modelo, nunca los archivos.", "Nada: cada chat usa siempre una carpeta aislada."],
    correct: [0], confidence: "correct",
    explanation: "Los chats pares pueden tener historiales independientes y compartir el workspace; usa sesiones o worktrees aislados si los cambios no deben mezclarse."
  },
  {
    id: 212,
    category: "CLI y sesiones de agente",
    question: "Detener una solicitud de agente en VS Code, ¿revierte automáticamente los cambios de archivos ya realizados?",
    type: "single",
    options: ["No; hay que revisar los cambios y restaurar un checkpoint si se necesita revertirlos.", "Sí, siempre revierte todos los archivos y comandos.", "Sí, pero solo si el agente estaba usando el modo Plan.", "No; los cambios no se pueden revisar ni restaurar."],
    correct: [0], confidence: "correct",
    explanation: "Detener una respuesta no deshace las acciones ya completadas; revisa los cambios y usa un checkpoint para restaurar archivos si procede."
  }
];
