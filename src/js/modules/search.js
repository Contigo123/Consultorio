// Search Module for CONTIGO Platform
// Consultorio Psicológico FUNDES

export const SEARCH_INDEX = [
  // --- PROTOCOLOS & RUTAS ---
  {
    id: 'ruta-1',
    title: 'Ruta 1: Identificación y Triage de Crisis',
    category: 'Protocolos',
    filter: 'rutas',
    categoryClass: 'cat-rutas',
    description: 'Diagnóstico rápido, evaluación de signos clínicos, banderas rojas y checklist de riesgo vital.',
    keywords: ['triage', 'diagnostico', 'signos', 'banderas rojas', 'evaluacion', 'checklist', 'urgencia', 'criterios', 'alerta', 'severidad'],
    target: { section: 'rutas', anchorId: 'ruta-1' },
    action: { selectRuta: '1' }
  },
  {
    id: 'ruta-2',
    title: 'Ruta 2: Atención y Estabilización Inicial',
    category: 'Protocolos',
    filter: 'rutas',
    categoryClass: 'cat-rutas',
    description: 'Principios básicos de contención física y verbal, postura corporal terapéutica y reducción de sobreactivación.',
    keywords: ['estabilizacion', 'contencion', 'postura', 'escucha activa', 'contacto visual', 'seguridad', 'calma', 'disminuir activacion'],
    target: { section: 'rutas', anchorId: 'ruta-2' },
    action: { selectRuta: '2' }
  },
  {
    id: 'ruta-3',
    title: 'Ruta 3: Regulación Emocional Clínica',
    category: 'Protocolos',
    filter: 'rutas',
    categoryClass: 'cat-rutas',
    description: 'Uso protocolizado de técnicas respiratorias, grounding y herramientas tangibles de la Caja CONTIGO.',
    keywords: ['regulacion', 'caja fisica', 'ejercicios', 'tecnicas', 'aplicacion', 'apoyo sensorial', 'calma fisiologica'],
    target: { section: 'rutas', anchorId: 'ruta-3' },
    action: { selectRuta: '3' }
  },
  {
    id: 'ruta-4',
    title: 'Ruta 4: Adecuación por Grupo Poblacional',
    category: 'Protocolos',
    filter: 'rutas',
    categoryClass: 'cat-rutas',
    description: 'Ajuste metodológico según el ciclo vital: niños, adolescentes, adultos y adultos mayores.',
    keywords: ['grupo poblacional', 'ciclo vital', 'etapas', 'adaptacion', 'poblacion', 'edades', 'lenguaje adaptado'],
    target: { section: 'rutas', anchorId: 'ruta-4' },
    action: { selectRuta: '4' }
  },
  {
    id: 'ruta-5',
    title: 'Ruta 5: Continuidad y Remisión Especializada',
    category: 'Protocolos',
    filter: 'rutas',
    categoryClass: 'cat-rutas',
    description: 'Criterios de derivación a urgencias médicas, psiquiatría y articulación con redes de apoyo institucionales.',
    keywords: ['remision', 'continuidad', 'derivacion', 'urgencias', 'psiquiatria', 'hospital', 'redes', 'seguimiento', 'riesgo suicida'],
    target: { section: 'rutas', anchorId: 'ruta-5' },
    action: { selectRuta: '5' }
  },
  {
    id: 'triage-checklist',
    title: 'Checklist de Triage y Banderas Rojas',
    category: 'Protocolos',
    filter: 'rutas',
    categoryClass: 'cat-rutas',
    description: 'Herramienta interactiva para calcular el nivel de severidad y generar la recomendación clínica automática.',
    keywords: ['triage', 'checklist', 'severidad', 'riesgo', 'alerta', 'autolisis', 'suicidio', 'violencia', 'agitacion', 'autoagresion'],
    target: { section: 'rutas', anchorId: 'triageResultBox' },
    action: { selectRuta: '1' }
  },

  // --- REGULACIÓN EMOCIONAL & EJERCICIOS ---
  {
    id: 'pacer-respiratorio',
    title: 'Pacer Respiratorio Rítmico (Esfera Interactiva)',
    category: 'Regulación',
    filter: 'regula',
    categoryClass: 'cat-regula',
    description: 'Herramienta visual y auditiva para sincronizar la respiración y activar la respuesta vagal calmante.',
    keywords: ['respirador', 'pacer', 'esfera', 'ritmo', 'inhalar', 'exhalar', 'sonido', 'pulmon', 'ansiedad', 'calma'],
    target: { section: 'regula', anchorId: 'breathingOrb' }
  },
  {
    id: 'resp-4-7-8',
    title: 'Técnica de Respiración 4-7-8 (Relajación Vagal)',
    category: 'Regulación',
    filter: 'regula',
    categoryClass: 'cat-regula',
    description: 'Inhala en 4s, sostén 7s y exhala en 8s. Potente inductor de relajación y freno del sistema simpático.',
    keywords: ['4-7-8', 'vago', 'nervio vago', 'inhalar 4', 'retener 7', 'exhalar 8', 'panico', 'insomnio', 'calma', 'hiperventilacion'],
    target: { section: 'regula', anchorId: 'breathingOrb' },
    action: { selectTechnique: '4-7-8' }
  },
  {
    id: 'resp-caja',
    title: 'Respiración Cuadrada o de la Caja (4-4-4-4)',
    category: 'Regulación',
    filter: 'regula',
    categoryClass: 'cat-regula',
    description: 'Inhala 4s, mantén 4s, exhala 4s, pausa 4s. Restablece el equilibrio en momentos de bloqueo o ansiedad.',
    keywords: ['caja', 'cuadrada', 'box breathing', '4-4-4-4', 'bloqueo', 'concentracion', 'equilibrio', 'desacelerar'],
    target: { section: 'regula', anchorId: 'breathingOrb' },
    action: { selectTechnique: 'box' }
  },
  {
    id: 'resp-abdominal',
    title: 'Respiración Abdominal o Diafragmática (5-5)',
    category: 'Regulación',
    filter: 'regula',
    categoryClass: 'cat-regula',
    description: 'Patrón simétrico de 5 segundos de inhalación y 5 de exhalación para desacelerar la frecuencia cardiaca.',
    keywords: ['abdominal', 'diafragmatica', '5-5', 'diafragma', 'ritmo suave', 'vientre', 'descompresion'],
    target: { section: 'regula', anchorId: 'breathingOrb' },
    action: { selectTechnique: 'abdominal' }
  },
  {
    id: 'grounding-54321',
    title: 'Técnica de Grounding 5-4-3-2-1 (Puesta a Tierra)',
    category: 'Regulación',
    filter: 'regula',
    categoryClass: 'cat-regula',
    description: 'Herramienta interactiva guiada para disolver disociación, despersonalización y anclar la atención en el presente.',
    keywords: ['grounding', 'puesta a tierra', '54321', '5 4 3 2 1', 'sentidos', 'anclaje', 'disociacion', 'panico', 'presente', 'desrealizacion'],
    target: { section: 'regula', anchorId: 'groundingProgressBar' }
  },

  // --- PSICOEDUCACIÓN & CRISIS ---
  {
    id: 'crisis-definicion',
    title: '¿Qué es una Crisis Emocional? Concepto Clínico',
    category: 'Psicoeducación',
    filter: 'crisis',
    categoryClass: 'cat-crisis',
    description: 'Definición clínica: estado temporal de desorganización psicológica ante estresores que sobrepasan los recursos habituales.',
    keywords: ['crisis', 'concepto', 'definicion', 'desorganizacion', 'afrontamiento', 'fundes', 'que es una crisis'],
    target: { section: 'crisis' }
  },
  {
    id: 'crisis-senales-emocionales',
    title: 'Señales Emocionales de Crisis',
    category: 'Psicoeducación',
    filter: 'crisis',
    categoryClass: 'cat-crisis',
    description: 'Miedo intenso, angustia desbordante, rabia desproporcionada, tristeza profunda o entumecimiento afectivo repentino.',
    keywords: ['emocionales', 'miedo', 'angustia', 'rabia', 'tristeza', 'vacio', 'entumecimiento', 'afecto', 'desborde emocional'],
    target: { section: 'crisis' }
  },
  {
    id: 'crisis-senales-fisiologicas',
    title: 'Señales Fisiológicas y Somáticas',
    category: 'Psicoeducación',
    filter: 'crisis',
    categoryClass: 'cat-crisis',
    description: 'Taquicardia, hiperventilación, asfixia, temblores corporales, sudoración fría, náuseas, mareo o tensión aguda.',
    keywords: ['fisiologicas', 'taquicardia', 'asfixia', 'hiperventilacion', 'temblor', 'sudoracion', 'nauseas', 'mareo', 'somatico', 'palpitaciones'],
    target: { section: 'crisis' }
  },
  {
    id: 'crisis-senales-cognitivas',
    title: 'Señales Cognitivas de Crisis',
    category: 'Psicoeducación',
    filter: 'crisis',
    categoryClass: 'cat-crisis',
    description: 'Pensamientos catastróficos recurrentes, desorientación, dificultad para concentrarse o sensación de perder el control.',
    keywords: ['cognitivas', 'pensamientos catastroficos', 'desorientacion', 'concentracion', 'perder el control', 'mente', 'bloqueo'],
    target: { section: 'crisis' }
  },
  {
    id: 'crisis-senales-conductuales',
    title: 'Señales Conductuales de Crisis',
    category: 'Psicoeducación',
    filter: 'crisis',
    categoryClass: 'cat-crisis',
    description: 'Llanto incontrolable, inquietud psicomotora, aislamiento repentino, agresividad verbal o mutismo selectivo.',
    keywords: ['conductuales', 'llanto', 'inquietud', 'aislamiento', 'agresividad', 'mutismo', 'comportamiento', 'agitacion'],
    target: { section: 'crisis' }
  },
  {
    id: 'frases-orientacion',
    title: 'Frases Ancla de Contención y Orientación',
    category: 'Psicoeducación',
    filter: 'crisis',
    categoryClass: 'cat-crisis',
    description: 'Generador interactivo de frases seguras de re-enfoque: "Estás a salvo aquí. Tómate todo el tiempo que necesites".',
    keywords: ['frases', 'ancla', 'palabras', 'contencion', 'estas a salvo', 'profesional', 'dialogo', 're-enfoque'],
    target: { section: 'crisis', anchorId: 'dynamicPhraseText' }
  },

  // --- CICLO VITAL ---
  {
    id: 'ciclo-ninos',
    title: 'Ciclo Vital: Niños y Niñas (Enfoque Lúdico)',
    category: 'Ciclo Vital',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Termómetro de emociones, respiración del globo y la flor, juego de los 5 detectives y pautas para cuidadores.',
    keywords: ['ninos', 'ninas', 'infancia', 'pequenos', 'ludico', 'globo', 'flor', 'detectives', 'padres', 'cuidadores', 'colegio', 'cuento'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'ninos' }
  },
  {
    id: 'ninos-emocion-cuerpo',
    title: '¿Qué es una emoción y qué siente mi cuerpo?',
    category: 'Ciclo Vital (Niños)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Cuento ilustrado interactivo con termómetro de emociones (Monstruo del enojo y Nube de la tristeza) y mapa corporal.',
    keywords: ['emocion', 'cuerpo', 'cuento', 'termometro', 'monstruo', 'enojo', 'nube', 'tristeza', 'ninos', 'infantil'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'ninos' }
  },
  {
    id: 'ninos-respiracion-globo-flor',
    title: 'Técnica de Respiración del Globo y de la Flor',
    category: 'Ciclo Vital (Niños)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Guía lúdica paso a paso: oler la flor suavemente y soplar la vela o inflar el globo despacito.',
    keywords: ['globo', 'flor', 'vela', 'respiracion', 'ludica', 'ninos', 'calma', 'soplar', 'oler', 'juego'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'ninos' }
  },
  {
    id: 'ninos-detectives-sensoriales',
    title: 'Juego de los 5 Detectives Sensoriales',
    category: 'Ciclo Vital (Niños)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Actividad interactiva de grounding 5-4-3-2-1 adaptada para niños: 5 juguetes azules, 4 texturas, 3 sonidos, 2 olores y 1 sabor.',
    keywords: ['detectives', 'sensoriales', 'grounding', 'sentidos', 'juguetes azules', 'texturas', 'mision', 'ninos', 'juego'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'ninos' }
  },
  {
    id: 'ninos-orientaciones-cuidadores',
    title: 'Orientaciones Clave para Padres y Cuidadores',
    category: 'Ciclo Vital (Niños)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Guía práctica para adultos: corregulación, antes de responder, 6 pautas clave, qué decir y qué evitar.',
    keywords: ['padres', 'cuidadores', 'corregulacion', 'pautas', 'familia', 'adultos', 'acompanar', 'limites', 'validar', 'ninos'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'ninos' }
  },
  {
    id: 'ciclo-adolescentes',
    title: 'Ciclo Vital: Adolescentes (Validación Emocional)',
    category: 'Ciclo Vital',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Comprender la amígdala y el cerebro adolescente, manejo de pensamientos catastróficos y kit SOS escolar.',
    keywords: ['adolescentes', 'jovenes', 'secundaria', 'colegio', 'amigdala', 'pensamientos catastroficos', 'autonomia', 'amigos'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adolescentes' }
  },
  {
    id: 'adolescentes-torbellino-emocional',
    title: 'Descifrando el Torbellino Emocional',
    category: 'Ciclo Vital (Adolescentes)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Neuroeducación interactiva: qué ocurre en el cerebro adolescente durante una crisis (amígdala en alerta y pausa del córtex prefrontal).',
    keywords: ['torbellino', 'emocional', 'cerebro', 'amigdala', 'cortex', 'neuroeducacion', 'adolescentes', 'jovenes', 'emociones intensas'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adolescentes' }
  },
  {
    id: 'adolescentes-pensamientos-catastroficos',
    title: 'Manejo de Pensamientos Catastróficos e Intensos',
    category: 'Ciclo Vital (Adolescentes)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Ejercicio guiado "Detente, Respira, Cuestiona" para distinguir un hecho real del miedo.',
    keywords: ['pensamientos', 'catastroficos', 'intrusivos', 'detente', 'respira', 'cuestiona', 'miedo', 'reestructuracion', 'adolescentes', 'jovenes'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adolescentes' }
  },
  {
    id: 'adolescentes-kit-sos-anclaje',
    title: 'Kit SOS de Anclaje Rápido',
    category: 'Ciclo Vital (Adolescentes)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Tarjeta de bolsillo digital para autorregularse con discreción en el colegio o con amigos.',
    keywords: ['kit', 'sos', 'anclaje', 'colegio', 'escolar', 'discreto', 'respiracion cuadrada', 'adolescentes', 'jovenes', 'bolsillo'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adolescentes' }
  },
  {
    id: 'adolescentes-red-apoyo',
    title: 'Red de Apoyo y Cuándo Buscar Ayuda Profesional',
    category: 'Ciclo Vital (Adolescentes)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Directorio de 3 personas de confianza, guía verde/amarillo/rojo para decidir cuándo pedir ayuda y hoja de ruta hacia FUNDES.',
    keywords: ['red de apoyo', 'ayuda profesional', 'personas de confianza', 'directorio', 'hoja de ruta', 'cuando pedir ayuda', 'consultorio', 'adolescentes', 'jovenes'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adolescentes' }
  },
  {
    id: 'ciclo-adultos',
    title: 'Ciclo Vital: Adultos (Resolución Estructurada)',
    category: 'Ciclo Vital',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Mapeo de estresores laborales y personales, regulación vagal y método IDEAL para resolución de problemas.',
    keywords: ['adultos', 'estres laboral', 'familia', 'ideal', 'problemas', 'regulacion vagal', 'desencadenantes', 'trabajo'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos' }
  },
  {
    id: 'adultos-factores-desencadenantes',
    title: 'Identificación de Factores Desencadenantes y Señales de Alarma',
    category: 'Ciclo Vital (Adultos)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Matriz de autoevaluación de estresores laborales, familiares o personales y de síntomas somáticos tempranos.',
    keywords: ['desencadenantes','factores','estresores','senales de alarma','sintomas','somaticos','autoevaluacion','matriz','adultos'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos' }
  },
  {
    id: 'adultos-regulacion-vagal',
    title: 'Regulación Vagal y Respiración Fisiológica',
    category: 'Ciclo Vital (Adultos)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Guía clínica con audio: respiración 4-7-8 y anclaje somático para interrumpir la ansiedad aguda.',
    keywords: ['vagal','respiracion','fisiologica','4-7-8','ansiedad','audio','anclaje','somatico','regulacion','adultos'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos' }
  },
  {
    id: 'adultos-ideal',
    title: 'Resolución Estructurada de Problemas (IDEAL)',
    category: 'Ciclo Vital (Adultos)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Ficha de trabajo práctico: Identificar, Definir, Explorar, Actuar y Lograr evaluación.',
    keywords: ['ideal','problemas','resolucion','metas','soluciones','afrontamiento','ficha','plan de accion','adultos'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos' }
  },
  {
    id: 'adultos-redes-cuidado',
    title: 'Fortalecimiento de Redes de Cuidado y Continuidad',
    category: 'Ciclo Vital (Adultos)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Protocolo de seguimiento: involucrar a familiares o amigos y estructurar la consulta de seguimiento en FUNDES.',
    keywords: ['redes','cuidado','continuidad','seguimiento','familiares','amigos','fundes','protocolo','adultos'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos' }
  },
  {
    id: 'ciclo-adultos-mayores',
    title: 'Ciclo Vital: Adultos Mayores (Acompañamiento y Respeto)',
    category: 'Ciclo Vital',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Estimulación sensorial suave, validación del duelo por pérdidas, material en letra grande y pautas para cuidadores.',
    keywords: ['adultos mayores', 'vejez', 'ancianos', 'abuelos', 'duelo', 'perdidas', 'soledad', 'cuidadores', 'letra grande', 'afecto'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos-mayores' }
  },
  {
    id: 'mayores-cambios-emocionales',
    title: 'Reconocimiento de Cambios Emocionales y Malestar',
    category: 'Ciclo Vital (Adultos Mayores)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Material de lectura en letra grande: la tristeza, la soledad o el desconcierto son válidos y requieren escucha empática.',
    keywords: ['cambios emocionales','malestar','tristeza','soledad','letra grande','lectura','acompanamiento','adultos mayores','abuelos','vejez'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos-mayores' }
  },
  {
    id: 'mayores-anclaje-sensorial',
    title: 'Estimulación Sensorial Suave y Orientación Temporal',
    category: 'Ciclo Vital (Adultos Mayores)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Guía de anclaje sensorial: recuerdos agradables, texturas, aromas familiares y música calmante como anclas seguras.',
    keywords: ['estimulacion','sensorial','orientacion temporal','anclaje','recuerdos','musica','aromas','texturas','adultos mayores','abuelos','vejez'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos-mayores' }
  },
  {
    id: 'mayores-perdidas-duelo',
    title: 'Afrontamiento de Pérdidas, Cambios y Duelo',
    category: 'Ciclo Vital (Adultos Mayores)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Pautas de diálogo compasivo para validar la trayectoria vital, honrar la memoria y facilitar el consuelo.',
    keywords: ['perdidas','duelo','cambios','dialogo compasivo','memoria','consuelo','apoyo emocional','adultos mayores','abuelos','vejez'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos-mayores' }
  },
  {
    id: 'mayores-manual-cuidadores',
    title: 'Orientaciones Esenciales para Familiares y Cuidadores',
    category: 'Ciclo Vital (Adultos Mayores)',
    filter: 'ciclo-vital',
    categoryClass: 'cat-ciclo',
    description: 'Manual para cuidadores: paciencia, rutinas previsibles, frases a evitar y señales de alerta médica o psicológica.',
    keywords: ['cuidadores','familiares','manual','rutinas','paciencia','senales de alerta','adultos mayores','abuelos','vejez'],
    target: { section: 'ciclo-vital', anchorId: 'cycleCardsContainer' },
    action: { selectCycle: 'adultos-mayores' }
  },

  // --- CAPACITACIÓN & PAP ---
  {
    id: 'pap-principios',
    title: 'Principios PAP: Observar, Escuchar y Conectar',
    category: 'Capacitación',
    filter: 'aprende',
    categoryClass: 'cat-aprende',
    description: 'Pilares de los Primeros Auxilios Psicológicos: evaluar seguridad, validar sin juzgar y vincular con soporte.',
    keywords: ['pap', 'primeros auxilios psicologicos', 'observar', 'escuchar', 'conectar', 'principios', 'capacitacion', 'fundes'],
    target: { section: 'aprende' }
  },
  {
    id: 'pap-simulador',
    title: 'Simulador Clínico de Casos PAP (Test Práctico)',
    category: 'Capacitación',
    filter: 'aprende',
    categoryClass: 'cat-aprende',
    description: 'Test interactivo de autoevaluación con escenarios reales para entrenar el criterio clínico de practicantes.',
    keywords: ['simulador', 'casos clinicos', 'test', 'quiz', 'preguntas', 'evaluacion', 'entrenamiento', 'practicantes', 'examen'],
    target: { section: 'aprende', anchorId: 'clinicalCaseContainer' }
  },

  // --- HERRAMIENTAS & CAJA FÍSICA ---
  {
    id: 'print-tarjetas',
    title: 'Imprimir Tarjetas de contenido para la Caja Física CONTIGO',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Hoja imprimible con las 25 tarjetas calmantes (respiración guiada, grounding, anclaje sensorial y frases de orientación) para la caja física.',
    keywords: ['imprimir', 'tarjetas', 'tarjetas calmantes', 'imprimible', 'pdf', 'laminar', 'recortar', 'caja', 'caja fisica', 'material'],
    target: { section: 'herramientas', anchorId: 'printBoxCardsBtn' },
    action: { printCards: true }
  },
  {
    id: 'caja-simulador',
    title: 'Caja Física CONTIGO',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Explorador interactivo de los elementos de la caja física: tarjetas calmantes, squishy calmante, elemento táctil, libreta y lapiceros, QR y protocolo de 7 pasos.',
    keywords: ['caja', 'caja fisica', 'elementos', 'fisico', 'squishy', 'libreta', 'lapiceros', 'tactil', 'objetos', 'simulador'],
    target: { section: 'herramientas', anchorId: 'openBoxBtn' }
  },
  {
    id: 'formatos-institucionales',
    title: 'Formatos Institucionales: Consentimiento y Remisión (FUNDES)',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Formatos oficiales SIAC: Consentimiento Informado (Mayores y Menores) y Remisión para Interconsulta clínica.',
    keywords: ['formatos', 'institucionales', 'consentimiento', 'remision', 'interconsulta', 'menores', 'mayores', 'siac', 'fundes', 'pdf', 'descarga', 'ficha'],
    target: { section: 'herramientas', anchorId: 'openFormatsModalBtn' },
    action: { openModal: 'formatsModal' }
  },
  {
    id: 'protocolo-bolsillo',
    title: 'Protocolo de Bolsillo en 7 Pasos',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Tríptico sintético para terapeutas con el árbol de decisiones rápidas ante emergencias en sede.',
    keywords: ['protocolo bolsillo', 'triptico', '7 pasos', 'flujograma', 'guia rapida', 'bolsillo'],
    target: { section: 'herramientas' }
  },
  {
    id: 'box-tarjetas-calmantes',
    title: 'Caja Física: Tarjetas Calmantes',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Incluye 25 tarjetas con actividades de respiración guiada, grounding, anclaje sensorial y frases de orientación.',
    keywords: ['tarjetas calmantes', 'tarjeta respiracion', 'respiracion guiada', 'grounding', 'anclaje sensorial', 'frases de orientacion', 'puesta a tierra', 'ficha clinica'],
    target: { section: 'herramientas' },
    action: { openBoxItem: 'tarjetas-calmantes' }
  },
  {
    id: 'box-objeto-sensorial',
    title: 'Caja Física: Squishy Calmante',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Elemento blando y maleable (squishy) para canalizar la tensión motora somática mediante presión rítmica de manos.',
    keywords: ['squishy', 'calmante', 'objeto sensorial', 'apretar', 'espuma', 'manos'],
    target: { section: 'herramientas' },
    action: { openBoxItem: 'objeto-sensorial' }
  },
  {
    id: 'box-elemento-tactil',
    title: 'Caja Física: Texturas Táctiles Controladas',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Muestras de texturas diferenciadas (suave, rugosa, lisa) para estimulación táctil regulada.',
    keywords: ['tactil', 'texturas', 'suave', 'rugosa', 'lisa', 'estimulacion tactil', 'manos'],
    target: { section: 'herramientas' },
    action: { openBoxItem: 'elemento-tactil' }
  },
  {
    id: 'box-bloc-lapiz',
    title: 'Caja Física: Libreta y Lapiceros',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Libreta y lapiceros para descarga gráfica, dibujo libre o comunicación no verbal en bloqueo afectivo.',
    keywords: ['libreta', 'lapiceros', 'cuaderno', 'dibujar', 'escribir', 'no verbal', 'expresion'],
    target: { section: 'herramientas' },
    action: { openBoxItem: 'bloc-registro' }
  },

  // --- URGENCIAS, SOS & LÍNEAS DE APOYO ---
  {
    id: 'sos-inmediato',
    title: 'Apoyo Inmediato en Crisis (SOS Estabilización)',
    category: 'Emergencias',
    filter: 'urgencias',
    categoryClass: 'cat-urgencias',
    description: 'Estabilización en 3 pasos: contacto con el suelo, respiración de descompresión y reconexión visual.',
    keywords: ['sos', 'emergencia', 'urgencia', 'inmediato', 'apoyo inmediato', 'calma rapida', 'auxilio', 'desesperacion'],
    action: { openModal: 'sosModal' }
  },
  {
    id: 'linea-106',
    title: 'Línea Nacional de Salud Mental 106',
    category: 'Emergencias',
    filter: 'urgencias',
    categoryClass: 'cat-urgencias',
    description: 'Línea gratuita y confidencial de atención telefónica en crisis psicológica disponible las 24 horas (Colombia).',
    keywords: ['106', 'linea 106', 'telefono 106', 'llamada', 'salud mental', 'psicologica', 'gratis', 'ayuda'],
    target: { section: 'continua' }
  },
  {
    id: 'linea-123',
    title: 'Línea de Emergencias Médicas 123',
    category: 'Emergencias',
    filter: 'urgencias',
    categoryClass: 'cat-urgencias',
    description: 'Servicio de ambulancias, urgencias de salud vital y soporte institucional inmediato.',
    keywords: ['123', 'linea 123', 'ambulancia', 'medico', 'urgencias medicas', 'vital', 'hospital'],
    target: { section: 'continua' }
  },
  {
    id: 'fundes-consultorio',
    title: 'Consultorio Psicológico FUNDES',
    category: 'Emergencias',
    filter: 'urgencias',
    categoryClass: 'cat-urgencias',
    description: 'Atención presencial, seguimiento clínico continuo y apoyo de docentes supervisores en sede.',
    keywords: ['fundes', 'consultorio psicologico', 'atencion presencial', 'supervision', 'docente', 'sede'],
    target: { section: 'continua' }
  },
  {
    id: 'qr-plataforma-modal',
    title: 'Código QR Oficial de la Caja CONTIGO',
    category: 'Herramientas',
    filter: 'herramientas',
    categoryClass: 'cat-herramientas',
    description: 'Código QR oficial impreso en la caja para vincular dispositivos móviles con la plataforma digital.',
    keywords: ['qr', 'codigo qr', 'escanear', 'caja fisica', 'vincular', 'celular', 'camara'],
    action: { openModal: 'qrModal' }
  },
  {
    id: 'seguimiento-calendario',
    title: 'Calendario de Verificación Post-Crisis',
    category: 'Emergencias',
    filter: 'urgencias',
    categoryClass: 'cat-urgencias',
    description: 'Pautas de verificación a las 24 horas, a las 72 horas y a los 7 días para prevenir recaídas.',
    keywords: ['seguimiento', 'calendario', '24 horas', '72 horas', '7 dias', 'post crisis', 'recaidas', 'control'],
    target: { section: 'continua' }
  }
];

// Normalize strings for diacritic-insensitive searching
function normalizeStr(str = '') {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Highlight matched query tokens in text safely
function highlightMatches(text, query) {
  if (!query || !text) return text;
  const rawTokens = query.trim().split(/\s+/).filter(t => t.length > 1);
  if (!rawTokens.length) return text;

  // Escape special regex characters
  const escaped = rawTokens.map(t => t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  try {
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
  } catch {
    return text;
  }
}

export function setupSearchModule({ goTo, preparePrintableCards }) {
  const searchModal = document.getElementById('searchModal');
  const searchTriggerBtns = document.querySelectorAll('.search-btn, #searchTriggerBtn, [data-action="open-search"]');
  const searchCloseBtn = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  const filterChips = document.querySelectorAll('.search-filter-chip');

  if (!searchModal || !searchInput || !searchResultsContainer) {
    console.warn('[CONTIGO Search] Elements not found for search module setup.');
    return;
  }

  let activeFilter = 'all';
  let currentResults = [];
  let selectedIndex = -1;

  // 1. OPEN & CLOSE MODAL
  function openSearch() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput.focus();
      searchInput.select();
    }, 100);
    renderResults();
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedIndex = -1;
  }

  searchTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  });

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', closeSearch);
  }

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      closeSearch();
    }
  });

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, '/' to open, Esc to close)
  document.addEventListener('keydown', (e) => {
    // If modal is open, Escape closes it
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      e.preventDefault();
      closeSearch();
      return;
    }

    // Ctrl+K or Cmd+K opens search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
      return;
    }

    // '/' opens search when not in another input or textarea
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  // 2. FILTER PILLS
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter || 'all';
      renderResults();
    });
  });

  // 3. SEARCH INPUT
  searchInput.addEventListener('input', () => {
    selectedIndex = -1;
    renderResults();
  });

  // 4. SEARCH QUERY LOGIC
  function searchItems(rawQuery, filter) {
    const query = normalizeStr(rawQuery);
    let items = SEARCH_INDEX;

    // Filter by category if not 'all'
    if (filter && filter !== 'all') {
      items = items.filter(item => item.filter === filter);
    }

    if (!query) {
      return items;
    }

    const tokens = query.split(/\s+/).filter(t => t.length > 0);

    const scored = [];
    items.forEach(item => {
      const normTitle = normalizeStr(item.title);
      const normDesc = normalizeStr(item.description);
      const normCat = normalizeStr(item.category);
      const normKeywords = item.keywords.map(k => normalizeStr(k));

      let score = 0;

      // Exact title match bonus
      if (normTitle === query) score += 200;
      else if (normTitle.includes(query)) score += 100;

      // Token matches
      let matchedTokens = 0;
      tokens.forEach(tok => {
        let tokenFound = false;

        if (normTitle.includes(tok)) {
          score += 40;
          tokenFound = true;
        }

        if (normCat.includes(tok)) {
          score += 25;
          tokenFound = true;
        }

        if (normKeywords.some(k => k.includes(tok))) {
          score += 30;
          tokenFound = true;
        }

        if (normDesc.includes(tok)) {
          score += 15;
          tokenFound = true;
        }

        if (tokenFound) matchedTokens++;
      });

      // Boost if multiple tokens all matched
      if (matchedTokens === tokens.length) {
        score += 50;
      }

      if (score > 0) {
        scored.push({ item, score });
      }
    });

    // Sort descending by score
    scored.sort((a, b) => b.score - a.score);
    return scored.map(s => s.item);
  }

  // 5. RENDER RESULTS
  function renderResults() {
    const rawQuery = searchInput.value;
    const isSearching = rawQuery.trim().length > 0;
    currentResults = searchItems(rawQuery, activeFilter);

    if (!isSearching && activeFilter === 'all') {
      renderDefaultSuggestions();
      return;
    }

    if (!currentResults.length) {
      renderEmptyState(rawQuery);
      return;
    }

    const listHtml = `
      <div class="search-results-meta">
        <span>${currentResults.length} ${currentResults.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}</span>
      </div>
      <div class="search-results-list" role="listbox">
        ${currentResults.map((item, index) => {
          const highlightedTitle = highlightMatches(item.title, rawQuery);
          const highlightedDesc = highlightMatches(item.description, rawQuery);
          return `
            <div class="search-result-item ${index === selectedIndex ? 'selected' : ''}" 
                 data-index="${index}" 
                 role="option" 
                 aria-selected="${index === selectedIndex}">
              <div class="search-item-info">
                <span class="search-item-tag ${item.categoryClass}">${item.category}</span>
                <h4 class="search-item-title">${highlightedTitle}</h4>
                <p class="search-item-desc">${highlightedDesc}</p>
              </div>
              <div class="search-item-arrow" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    searchResultsContainer.innerHTML = listHtml;

    // Attach click handlers to items
    searchResultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10);
        executeNavigation(currentResults[idx]);
      });
    });
  }

  // 6. DEFAULT SUGGESTIONS STATE
  function renderDefaultSuggestions() {
    const quickChips = [
      { label: 'Pacer Respiratorio 4-7-8', query: '4-7-8', filter: 'regula' },
      { label: 'Grounding 5-4-3-2-1', query: 'grounding', filter: 'regula' },
      { label: 'Checklist de Triage', query: 'triage', filter: 'rutas' },
      { label: 'Línea de Ayuda 106', query: '106', filter: 'urgencias' },
      { label: 'Caja Física CONTIGO', query: 'caja', filter: 'herramientas' },
      { label: 'Imprimir Tarjetas', query: 'imprimir', filter: 'herramientas' },
      { label: 'Ciclo Vital Niños', query: 'ninos', filter: 'ciclo-vital' },
      { label: 'Adolescentes', query: 'adolescentes', filter: 'ciclo-vital' },
      { label: 'Apoyo Inmediato SOS', query: 'sos', filter: 'urgencias' }
    ];

    const featuredItems = currentResults.slice(0, 5);

    searchResultsContainer.innerHTML = `
      <div class="search-suggestions-section">
        <div class="search-suggestions-header">
          <span>Accesos Rápidos y Búsquedas Frecuentes</span>
        </div>
        <div class="search-chips-grid">
          ${quickChips.map(chip => `
            <button type="button" class="search-quick-chip" data-query="${chip.query}" data-filter="${chip.filter}">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"/><path d="M16 16l4 4"/>
              </svg>
              <span>${chip.label}</span>
            </button>
          `).join('')}
        </div>

        <div class="search-suggestions-header" style="margin-top: 1.25rem;">
          <span>Temas Destacados en CONTIGO</span>
        </div>
        <div class="search-results-list" role="listbox">
          ${featuredItems.map((item, index) => `
            <div class="search-result-item ${index === selectedIndex ? 'selected' : ''}" 
                 data-index="${index}" 
                 role="option" 
                 aria-selected="${index === selectedIndex}">
              <div class="search-item-info">
                <span class="search-item-tag ${item.categoryClass}">${item.category}</span>
                <h4 class="search-item-title">${item.title}</h4>
                <p class="search-item-desc">${item.description}</p>
              </div>
              <div class="search-item-arrow" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Chip click handlers
    searchResultsContainer.querySelectorAll('.search-quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.query;
        const f = chip.dataset.filter;
        searchInput.value = q;

        if (f) {
          activeFilter = f;
          filterChips.forEach(c => c.classList.toggle('active', c.dataset.filter === f));
        }

        renderResults();
      });
    });

    // Item click handlers
    searchResultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10);
        executeNavigation(featuredItems[idx]);
      });
    });
  }

  // 7. EMPTY STATE
  function renderEmptyState(query) {
    searchResultsContainer.innerHTML = `
      <div class="search-empty-state">
        <svg class="search-empty-icon" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7"/>
          <path d="M16 16l4.5 4.5M11 8v4M11 15h.01"/>
        </svg>
        <h4 class="search-empty-title">Sin resultados para "${escapeHtml(query)}"</h4>
        <p class="search-empty-desc">
          Intenta con términos más generales como <em>respiración, pánico, triage, 106, niños, caja física o calma</em>.
        </p>
        <button type="button" class="btn-primary" id="resetSearchBtn" style="font-size: 0.88rem; padding: 0.5rem 1.25rem;">
          Restablecer búsqueda
        </button>
      </div>
    `;

    const resetBtn = document.getElementById('resetSearchBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        activeFilter = 'all';
        filterChips.forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
        renderResults();
        searchInput.focus();
      });
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  // 8. KEYBOARD NAVIGATION (Arrow keys & Enter)
  searchInput.addEventListener('keydown', (e) => {
    const items = searchResultsContainer.querySelectorAll('.search-result-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
        executeNavigation(currentResults[selectedIndex]);
      } else if (currentResults.length > 0) {
        executeNavigation(currentResults[0]);
      }
    }
  });

  function updateSelection(items) {
    items.forEach((item, idx) => {
      const isSelected = idx === selectedIndex;
      item.classList.toggle('selected', isSelected);
      item.setAttribute('aria-selected', String(isSelected));
      if (isSelected) {
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }

  // 9. EXECUTE NAVIGATION
  function executeNavigation(item) {
    if (!item) return;

    // Close search modal first
    closeSearch();

    // Custom Modal Actions
    if (item.action?.openModal) {
      const modal = document.getElementById(item.action.openModal);
      if (modal) {
        setTimeout(() => modal.classList.add('active'), 100);
      }
      return;
    }

    // Print Cards Action
    if (item.action?.printCards && typeof preparePrintableCards === 'function') {
      if (goTo) goTo('herramientas');
      setTimeout(() => {
        preparePrintableCards();
        window.print();
      }, 300);
      return;
    }

    // Open Box Item Modal Action
    if (item.action?.openBoxItem) {
      if (goTo) goTo('herramientas');
      setTimeout(() => {
        const boxItemBtn = document.querySelector(`.box-item-btn[data-id="${item.action.openBoxItem}"]`);
        if (boxItemBtn) {
          boxItemBtn.click();
        } else {
          const target = document.getElementById('boxItemsContainer');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
      return;
    }

    // Switch section via main router
    if (item.target?.section && typeof goTo === 'function') {
      goTo(item.target.section);
    }

    // Select Ruta tab
    if (item.action?.selectRuta) {
      setTimeout(() => {
        const rutaBtn = document.querySelector(`.ruta-nav-btn[data-ruta="${item.action.selectRuta}"]`);
        if (rutaBtn) rutaBtn.click();
      }, 100);
    }

    // Select Vital Cycle tab
    if (item.action?.selectCycle) {
      setTimeout(() => {
        const cycleBtn = document.querySelector(`.cycle-tab-btn[data-cycle="${item.action.selectCycle}"]`);
        if (cycleBtn) cycleBtn.click();
      }, 100);
    }

    // Select Breathing technique
    if (item.action?.selectTechnique) {
      setTimeout(() => {
        const techBtn = document.querySelector(`.technique-btn[data-technique="${item.action.selectTechnique}"]`);
        if (techBtn) techBtn.click();
      }, 100);
    }

    // Scroll to anchor and flash highlight
    if (item.target?.anchorId) {
      setTimeout(() => {
        const el = document.getElementById(item.target.anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('pulse-highlight');
          setTimeout(() => el.classList.remove('pulse-highlight'), 3200);
        }
      }, 250);
    }
  }
}
