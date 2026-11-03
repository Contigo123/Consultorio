// Vital Cycles Module - Recreating section 5 from pages 4 and 5 of the document

export const VITAL_CYCLE_DATA = {
  ninos: {
    title: 'Niños y Niñas',
    badge: 'Enfoque Lúdico y Sensorial',
    desc: 'Recursos adaptados con lenguaje amable, metáforas visuales y actividades guiadas para pequeños y sus cuidadores.',
    resources: [
      {
        title: '¿Qué es una emoción y qué siente mi cuerpo?',
        desc: 'El termómetro de las emociones: identificar cuando el monstruito del enojo o la nube de la tristeza se hacen muy grandes.',
        format: 'Cuento ilustrado interactivo',
        tag: 'Psicoeducación Infantil',
        file: './recursos/ninos/que-es-una-emocion.html'
      },
      {
        title: 'Técnica de Respiración del Globo y de la Flor',
        desc: '"Huele la flor (inhala por la nariz suavemente) y sopla la vela o infla el globo (exhala por la boca despacito)".',
        format: 'Guía lúdica paso a paso',
        tag: 'Regulación',
        file: './recursos/ninos/respiracion-globo-flor.html'
      },
      {
        title: 'Juego de los 5 Detectives Sensoriales',
        desc: 'Grounding para niños: encontrar 5 juguetes azules, tocar 4 texturas suavecitas y escuchar 3 sonidos divertidos.',
        format: 'Actividad interactiva',
        tag: 'Grounding Lúdico',
        file: './recursos/ninos/detectives-sensoriales.html'
      },
      {
        title: 'Orientaciones Clave para Padres y Cuidadores',
        desc: 'Pautas de corregulación: contacto visual a la altura del niño, tono de voz tranquilizador y validación ("Entiendo que sientas miedo, estoy aquí").',
        format: 'Guía práctica para adultos',
        tag: 'Familia & Cuidado',
        file: './recursos/ninos/orientaciones-cuidadores.html'
      }
    ]
  },
  adolescentes: {
    title: 'Adolescentes',
    badge: 'Autonomía y Validación Emocional',
    desc: 'Estrategias para comprender las emociones intensas, desacelerar el flujo de pensamientos intrusivos y pedir apoyo sin juicio.',
    resources: [
      {
        title: 'Descifrando el Torbellino Emocional',
        desc: 'Comprender qué ocurre en el cerebro adolescente durante una crisis: la amígdala en alerta y la pausa necesaria del córtex prefrontal.',
        format: 'Infografía interactiva',
        tag: 'Neuroeducación',
        file: './recursos/adolescentes/torbellino-emocional.html'
      },
      {
        title: 'Manejo de Pensamientos Catastróficos e Intensos',
        desc: 'Técnica "Detente, Respira, Cuestiona": ¿Este pensamiento es un hecho real o es mi miedo hablando? ¿Qué le diría a mi mejor amigo?',
        format: 'Ejercicio cognitivo guiado',
        tag: 'Reestructuración',
        file: './recursos/adolescentes/pensamientos-catastroficos.html'
      },
      {
        title: 'Kit SOS de Anclaje Rápido en Entornos Escolares/Sociales',
        desc: 'Cómo autorregularse discretamente en el colegio o con amigos: anclaje en el suelo, respiración cuadrada discreta y agua fresca.',
        format: 'Tarjeta de bolsillo digital',
        tag: 'Herramienta Rápida',
        file: './recursos/adolescentes/kit-sos-anclaje.html'
      },
      {
        title: 'Red de Apoyo y Cuándo Buscar Ayuda Profesional',
        desc: 'Identificar a 3 personas de confianza y saber cuándo acudir al consultorio psicológico FUNDES sin temor.',
        format: 'Directorio y hoja de ruta',
        tag: 'Orientación',
        file: './recursos/adolescentes/red-apoyo-ayuda-profesional.html'
      }
    ]
  },
  adultos: {
    title: 'Adultos',
    badge: 'Resolución de Problemas y Regulación',
    desc: 'Enfoque estructurado para identificar desencadenantes, regular la respuesta autonómica y trazar un plan de acción viable.',
    resources: [
      {
        title: 'Identificación de Factores Desencadenantes y Señales de Alarma',
        desc: 'Mapeo de estresores laborales, familiares o personales y reconocimiento temprano de síntomas somáticos (opresión en el pecho, cefaleas).',
        format: 'Matriz de autoevaluación',
        tag: 'Diagnóstico',
        file: './recursos/adultos/factores-desencadenantes.html'
      },
      {
        title: 'Regulación Vagal y Respiración Fisiológica',
        desc: 'Técnicas 4-7-8 y anclaje somático para interrumpir el ciclo de ansiedad aguda o bloqueo funcional.',
        format: 'Guía clínica y audio',
        tag: 'Regulación',
        file: './recursos/adultos/regulacion-vagal-respiracion.html'
      },
      {
        title: 'Resolución Estructurada de Problemas (IDEAL)',
        desc: 'Identificar el problema real, Definir metas a corto plazo, Explorar soluciones viables, Actuar sobre una alternativa y Lograr evaluación.',
        format: 'Ficha de trabajo práctico',
        tag: 'Afrontamiento',
        file: './recursos/adultos/resolucion-problemas-ideal.html'
      },
      {
        title: 'Fortalecimiento de Redes de Cuidado y Continuidad',
        desc: 'Pautas para involucrar a familiares o amigos y estructuración de la consulta de seguimiento en FUNDES.',
        format: 'Protocolo de seguimiento',
        tag: 'Continuidad',
        file: './recursos/adultos/redes-cuidado-continuidad.html'
      }
    ]
  },
  'adultos-mayores': {
    title: 'Adultos Mayores',
    badge: 'Contención Afectiva y Respeto a su Ritmo',
    desc: 'Material visual de lectura clara, estimulación sensorial respetuosa, validación del duelo por pérdidas y pautas para cuidadores.',
    resources: [
      {
        title: 'Reconocimiento de Cambios Emocionales y Malestar',
        desc: 'Comprender que la tristeza, la soledad o el desconcierto son válidos y requieren escucha empática sin infantilizar a la persona.',
        format: 'Material de lectura en letra grande',
        tag: 'Acompañamiento',
        file: './recursos/adultos-mayores/reconocimiento-cambios-emocionales.html'
      },
      {
        title: 'Estimulación Sensorial Suave y Orientación Temporal',
        desc: 'Uso de recuerdos agradables, texturas confortables, aromas familiares y música calmante como anclas seguras.',
        format: 'Guía de anclaje sensorial',
        tag: 'Estimulación',
        file: './recursos/adultos-mayores/anclaje-sensorial.html'
      },
      {
        title: 'Afrontamiento de Pérdidas, Cambios y Duelo',
        desc: 'Espacio de validación de la trayectoria vital, honrando la memoria y facilitando el consuelo paulatino.',
        format: 'Pautas de diálogo compasivo',
        tag: 'Apoyo Emocional',
        file: './recursos/adultos-mayores/perdidas-cambios-duelo.html'
      },
      {
        title: 'Orientaciones Esenciales para Familiares y Cuidadores',
        desc: 'Paciencia, evitar frases como "no se preocupe por nada", mantener rutinas previsibles y señales de alerta médica/psicológica.',
        format: 'Manual para cuidadores',
        tag: 'Cuidadores',
        file: './recursos/adultos-mayores/manual-familiares-cuidadores.html'
      }
    ]
  }
};

export function setupVitalCyclesModule() {
  const tabs = document.querySelectorAll('.cycle-tab-btn');
  const container = document.getElementById('cycleCardsContainer');

  if (!tabs.length || !container) return;

  const modal = document.getElementById('vitalResourceModal');
  const modalTitle = document.getElementById('vitalResourceTitleText');
  const modalLink = document.getElementById('vitalResourceExternalLink');
  const modalIframe = document.getElementById('vitalResourceIframe');
  const closeModalBtn = document.getElementById('closeVitalResourceModal');

  function openResource(file, title) {
    if (!modal || !modalIframe) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalLink) modalLink.href = file;
    modalIframe.src = file;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResource() {
    if (!modal || !modalIframe) return;
    modal.classList.remove('active');
    modalIframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeResource);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeResource();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeResource();
    }
  });

  function renderCycle(cycleKey) {
    const data = VITAL_CYCLE_DATA[cycleKey];
    if (!data) return;

    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.cycle === cycleKey);
    });

    container.innerHTML = '';
    data.resources.forEach(res => {
      const card = document.createElement('div');
      card.className = 'cycle-resource-card' + (res.file ? ' has-interactive' : '');

      const formatHtml = res.file
        ? `
          <button type="button" class="cycle-format-action-btn" data-file="${res.file}" data-title="${res.title}" aria-label="Abrir formato interactivo: ${res.format}">
            <span class="cycle-format-info">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
              </svg>
              <span>Formato: <strong>${res.format}</strong></span>
            </span>
            <span class="cycle-format-play-pill">
              Abrir interactivo
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </span>
          </button>
        `
        : `
          <div class="cycle-format-label">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            <span>Formato: ${res.format}</span>
          </div>
        `;

      card.innerHTML = `
        <div class="cycle-card-header">
          <span class="cycle-tag-format">${res.tag}</span>
          ${res.file ? '<span class="cycle-interactive-badge">● Interactivo</span>' : ''}
        </div>
        <h4>${res.title}</h4>
        <p>${res.desc}</p>
        <div class="cycle-card-footer">
          ${formatHtml}
        </div>
      `;

      if (res.file) {
        card.addEventListener('click', (e) => {
          // If already clicked the button, let the button handler manage it or open
          openResource(res.file, res.title);
        });

        const btn = card.querySelector('.cycle-format-action-btn');
        if (btn) {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openResource(res.file, res.title);
          });
        }
      }

      container.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      renderCycle(tab.dataset.cycle);
    });
  });

  renderCycle('ninos');
}
