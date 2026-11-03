// Box Simulator Module - Recreating the physical "Botiquín Psicológico CONTIGO"
// based on pages 1 and 2 of the project document

export const BOX_ITEMS = [
  {
    id: 'respiracion',
    title: 'Tarjetas de Respiración Guiada',
    category: 'Regulación Fisiológica',
    desc: 'Instrucciones sencillas e ilustradas para acompañar ejercicios respiratorios (4-7-8, respiración diafragmática y cuadrada).',
    clinicalObjective: 'Disminuir la sobreactivación del sistema nervioso simpático y favorecer la respuesta vagal calmante.',
    howToUse: 'Sostén la tarjeta frente a la persona y modela el ritmo respiratorio con tu propia voz de forma pausada.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v18M5 10l7-7 7 7"/></svg>`
  },
  {
    id: 'grounding',
    title: 'Tarjetas de Grounding (Puesta a Tierra)',
    category: 'Orientación al Presente',
    desc: 'Técnicas 5-4-3-2-1 orientadas a dirigir la atención hacia elementos tangibles del entorno inmediato.',
    clinicalObjective: 'Interrumpir rumiaciones, desrealización o despersonalización, anclando a la persona en el "aquí y el ahora".',
    howToUse: 'Pide al consultante que nombre en voz alta o señale elementos concretos de la habitación siguiendo la tarjeta.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>`
  },
  {
    id: 'anclaje',
    title: 'Tarjetas de Anclaje Sensorial',
    category: 'Estabilización Perceptiva',
    desc: 'Uso consciente de los sentidos (tacto, temperatura, textura) como recurso de conexión inmediata.',
    clinicalObjective: 'Focalizar la corteza sensorial para reducir el bucle emocional límbico de pánico o angustia.',
    howToUse: 'Combina la tarjeta con elementos físicos de temperatura neutra, texturas suaves o firmes disponibles.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`
  },
  {
    id: 'objeto-sensorial',
    title: 'Objeto Sensorial (Pelota Antiestrés / Manipulable)',
    category: 'Descarga Somática',
    desc: 'Elemento de goma/espuma de densidad media para presión rítmica de manos.',
    clinicalObjective: 'Permitir una vía motora de canalización para la tensión muscular acumulada durante la respuesta de lucha o huida.',
    howToUse: 'Ofrecer el objeto invitando a apretarlo al inhalar y soltarlo lentamente al exhalar.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 0 9 9"/></svg>`
  },
  {
    id: 'elemento-tactil',
    title: 'Elemento Táctil Controlado',
    category: 'Integración Sensorial',
    desc: 'Muestras de texturas diferenciadas (suave, rugosa, lisa) para estimulación táctil consciente.',
    clinicalObjective: 'Facilitar estimulación táctil regulada en personas en choque agudo o desborde sensorial.',
    howToUse: 'Permitir que la persona elija la textura que sienta más tranquilizadora al tacto.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><rect x="3" y="11" width="18" height="10" rx="2"/></svg>`
  },
  {
    id: 'orientacion',
    title: 'Tarjetas de Frases de Orientación',
    category: 'Contención Cognitiva',
    desc: 'Tarjetas plastificadas con frases cortas, asertivas y estructuradas que organizan la atención.',
    clinicalObjective: 'Restablecer la sensación de seguridad y control cognitivo en momentos de bloqueo o confusión.',
    howToUse: 'Leer la frase con voz calmada y contacto visual seguro: "Estás a salvo aquí. Respira conmigo."',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  },
  {
    id: 'bloc-registro',
    title: 'Bloc Pequeño y Lápiz',
    category: 'Expresión & Desahogo',
    desc: 'Cuadernillo de hojas limpias y lápiz grafito para descarga gráfica o anotación puntual.',
    clinicalObjective: 'Ofrecer alternativa de comunicación no verbal a consultantes con dificultad para emitir palabras.',
    howToUse: 'Invitar a escribir una palabra clave, dibujar un garabato o rayar la hoja con fuerza si lo requiere.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
  },
  {
    id: 'qr-plataforma',
    title: 'Código QR de Vinculación Digital',
    category: 'Puente Físico-Digital',
    desc: 'Código QR de alto contraste pegado en la tapa de la caja para acceder a esta plataforma.',
    clinicalObjective: 'Conectar de inmediato al profesional con las guías paso a paso, rutas y herramientas interactivas.',
    howToUse: 'Escanear con cualquier cámara de smartphone o tableta en el consultorio FUNDES.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`
  },
  {
    id: 'guia-rapida',
    title: 'Guía Rápida de Intervención (Clínica)',
    category: 'Protocolo de Actuación',
    desc: 'Tríptico plastificado de bolsillo con el árbol de decisiones para practicantes y terapeutas.',
    clinicalObjective: 'Estandarizar la toma de decisiones clínicas y prevenir errores de sobreintervención.',
    howToUse: 'Consultar las banderas rojas de remisión y el flujograma de 7 pasos ante cualquier duda.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
  }
];

export function setupBoxSimulator() {
  const openBoxBtn = document.getElementById('openBoxBtn');
  const boxDrawer = document.getElementById('boxItemsContainer');
  const modalOverlay = document.getElementById('boxItemModal');
  const modalTitle = document.getElementById('boxModalTitle');
  const modalCategory = document.getElementById('boxModalCategory');
  const modalDesc = document.getElementById('boxModalDesc');
  const modalObj = document.getElementById('boxModalObjective');
  const modalUsage = document.getElementById('boxModalUsage');
  const modalClose = document.getElementById('closeBoxModal');

  if (!boxDrawer) return;

  // Render items grid inside the box simulator
  boxDrawer.innerHTML = '';
  BOX_ITEMS.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'box-item-card';
    card.innerHTML = `
      <div class="box-item-top">
        <span class="box-item-badge-num">0${index + 1}</span>
        <h4 class="box-item-title">${item.title}</h4>
      </div>
      <p class="box-item-desc">${item.desc}</p>
      <button class="box-item-btn" data-id="${item.id}">
        ${item.icon} Ver ficha clínica
      </button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      openItemModal(item);
    });
    boxDrawer.appendChild(card);
  });

  function openItemModal(item) {
    if (!modalOverlay) return;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modalDesc.textContent = item.desc;
    modalObj.textContent = item.clinicalObjective;
    modalUsage.textContent = item.howToUse;
    modalOverlay.classList.add('active');
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  if (openBoxBtn) {
    openBoxBtn.addEventListener('click', () => {
      const targetSec = document.getElementById('caja-fisica-seccion');
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
