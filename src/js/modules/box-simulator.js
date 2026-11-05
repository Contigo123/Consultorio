// Box Simulator Module - Recreating the physical "Caja Física CONTIGO"
// based on pages 1 and 2 of the project document

export const BOX_ITEMS = [
  {
    id: 'tarjetas-calmantes',
    title: 'Tarjetas Calmantes',
    category: 'Regulación y Orientación',
    desc: 'Incluye 25 tarjetas donde se encuentran actividades de respiración guiada, actividades de grounding, actividades de anclaje sensorial y frases de orientación.',
    clinicalObjective: 'Disminuir la sobreactivación y orientar a la persona en el presente con actividades breves.',
    howToUse: 'Elige la tarjeta según lo que necesite la persona y acompaña la actividad con voz pausada.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="14" height="17" rx="2"/><path d="M7 2h12a2 2 0 0 1 2 2v13"/><path d="M7 10h6M7 14h6"/></svg>`
  },
  {
    id: 'objeto-sensorial',
    title: 'Squishy Calmante',
    category: 'Descarga Somática',
    desc: 'Elemento blando y maleable (squishy) para presión rítmica de manos.',
    clinicalObjective: 'Permitir una vía motora de canalización para la tensión muscular acumulada durante la respuesta de lucha o huida.',
    howToUse: 'Ofrecer el squishy invitando a apretarlo al inhalar y soltarlo lentamente al exhalar.',
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
    id: 'bloc-registro',
    title: 'Libreta y Lapiceros',
    category: 'Expresión & Desahogo',
    desc: 'Libreta de hojas limpias y lapiceros para descarga gráfica o anotación puntual.',
    clinicalObjective: 'Ofrecer alternativa de comunicación no verbal a consultantes con dificultad para emitir palabras.',
    howToUse: 'Invitar a escribir una palabra clave, dibujar un garabato o rayar la hoja con fuerza si lo requiere.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
  },
  {
    id: 'peluche-multisensorial',
    title: 'Peluche Multisensorial Azul',
    category: 'Contención Sensorial',
    desc: 'Peluche azul multisensorial, suave y con distintas texturas, para sostener, abrazar y explorar con las manos.',
    clinicalObjective: 'Brindar un objeto de contención y apego seguro que facilite la autorregulación a través del tacto y la presión suave.',
    howToUse: 'Ofrecerlo sin imponerlo, invitar a sostenerlo o abrazarlo y a explorar sus texturas mientras se acompaña la respiración con voz pausada.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="7"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="6.5" r="2.5"/><path d="M10 13h.01M14 13h.01M10.5 16.5c.8.7 2.2.7 3 0"/></svg>`
  },
  {
    id: 'aromatizante',
    title: 'Aromatizante',
    category: 'Anclaje Olfativo',
    desc: 'Aromatizante de aroma suave para estimulación olfativa que ayude a orientar a la persona en el momento presente.',
    clinicalObjective: 'Usar el sentido del olfato como punto de anclaje en el aquí y el ahora para disminuir la sobreactivación.',
    howToUse: 'Preguntar antes si la persona acepta el aroma, acercarlo a una distancia cómoda e invitarla a inhalar lenta y suavemente. Suspender su uso si genera molestia, malestar o rechazo.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 3h6v3H9z"/><path d="M8 6h8l1 4v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9z"/><path d="M10 14c0-1.5 2-1.5 2-3 0 1.5 2 1.5 2 3a2 2 0 0 1-4 0z"/></svg>`
  },
  {
    id: 'fichas-didacticas',
    title: 'Fichas Didácticas',
    category: 'Atención y Distracción Guiada',
    desc: 'Fichas didácticas con actividades sencillas y breves para enfocar la atención en una tarea concreta.',
    clinicalObjective: 'Redirigir la atención hacia una actividad estructurada y predecible que reduzca la rumiación y favorezca la calma.',
    howToUse: 'Dejar que la persona elija una ficha, explicar la actividad en pocas palabras y acompañarla sin presionar ni evaluar el resultado.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><path d="M13 17h8M17 13v8"/></svg>`
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
    title: 'Protocolo de 7 Pasos',
    category: 'Protocolo de Actuación',
    desc: 'Protocolo de bolsillo con el flujo de decisión en 7 pasos para practicantes y terapeutas.',
    clinicalObjective: 'Estandarizar la toma de decisiones clínicas y prevenir errores de sobreintervención.',
    howToUse: 'Consultar las banderas rojas de remisión y los 7 pasos del protocolo ante cualquier duda.',
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
