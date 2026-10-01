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
  }
];
