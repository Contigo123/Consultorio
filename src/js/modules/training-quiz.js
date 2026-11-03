// Training & Clinical Simulation Module for FUNDES Practicantes and Professionals

export const CLINICAL_CASES = [
  {
    id: 1,
    title: 'Caso 1: Crisis de Angustia con Hiperventilación Aguda',
    patient: 'Estudiante universitario de 20 años en época de exámenes.',
    context: 'Llega al consultorio con sensación de ahogo, taquicardia intensa, manos entumecidas y expresa: "Siento que me voy a morir o a desmayar aquí mismo".',
    question: '¿Cuál es la primera intervención recomendada usando CONTIGO?',
    options: [
      {
        text: 'A) Pedirle que cuente con detalle qué problema le causó la crisis y realizar una anamnesis exhaustiva.',
        correct: false,
        explanation: 'En crisis aguda con hiperventilación, el procesamiento cognitivo superior está bloqueado. Exigir relato verbal intensifica la angustia y el consumo de oxígeno.'
      },
      {
        text: 'B) Brindar contención con tono de voz sereno, retirar la tarjeta de respiración guiada de la caja y modelar respiración pausada (4-7-8 o diafragmática) para estabilizar el nivel de CO2.',
        correct: true,
        explanation: '¡Correcto! Primero se estabiliza la respuesta autonómica y fisiológica mediante corregulación y respiración antes de explorar causas.'
      },
      {
        text: 'C) Indicarle que cierre los ojos y dejarlo solo en la sala para que no se sienta presionado.',
        correct: false,
        explanation: 'Nunca se debe dejar sola a una persona en crisis de pánico. El abandono incrementa la sensación de desamparo y descontrol.'
      }
    ]
  },
  {
    id: 2,
    title: 'Caso 2: Consultante en Estado de Disociación / Desrealización',
    patient: 'Mujer de 34 años tras un evento traumático reciente.',
    context: 'Tiene la mirada perdida, responde con monosílabos lentos y dice: "Siento como si todo fuera una película y yo no estuviera realmente aquí".',
    question: '¿Qué herramienta de la caja CONTIGO es la más indicada como primer paso?',
    options: [
      {
        text: 'A) Entregar el bloc de notas y pedirle que redacte una carta detallada sobre lo que siente.',
        correct: false,
        explanation: 'Escribir exige una carga cognitiva abstracta que una persona desrealizada no puede coordinar adecuadamente en el instante.'
      },
      {
        text: 'B) Aplicar las Tarjetas de Grounding 5-4-3-2-1 y usar un elemento táctil o sensorial de la caja para reconectar con el entorno físico real.',
        correct: true,
        explanation: '¡Excelente! El grounding y el anclaje sensorial (tocar texturas, pisar firme el suelo, nombrar objetos visibles) es la intervención de elección para revertir la disociación.'
      },
      {
        text: 'C) Darle una bebida caliente rápidamente para forzarla a hablar.',
        correct: false,
        explanation: 'Puede existir riesgo de quemadura o atragantamiento si la persona está disociada y con motricidad fina disminuida.'
      }
    ]
  },
  {
    id: 3,
    title: 'Caso 3: Identificación de Bandera Roja para Remisión Inmediata',
    patient: 'Adolescente de 16 años traído por un docente.',
    context: 'Manifiesta llanto inconsolable, refiere ideación autolítica activa estructurada con planificación previa y desesperanza total.',
    question: '¿Cuál es la ruta de actuación inmediata en CONTIGO?',
    options: [
      {
        text: 'A) Activar inmediatamente la Ruta 5 (Remisión y Continuidad), no dejar al consultante sin supervisión, contactar al docente supervisor de FUNDES y activar la red de urgencias con el acudiente.',
        correct: true,
        explanation: '¡Exacto! La ideación suicida con plan estructurado es una bandera roja crítica que exige activación inmediata de protocolo de urgencia y supervisión institucional.'
      },
      {
        text: 'B) Aplicar solo ejercicios de respiración y enviarlo a su casa recomendándole que descanse el fin de semana.',
        correct: false,
        explanation: 'Grave error clínico. La caja CONTIGO complementa la estabilización, jamás reemplaza el protocolo médico de emergencia ante riesgo vital.'
      },
      {
        text: 'C) Prometerle mantener absoluta confidencialidad y no avisar a ningún docente o acudiente.',
        correct: false,
        explanation: 'El deber ético y legal obliga a romper la confidencialidad cuando existe riesgo inminente para la vida de la persona o de terceros.'
      }
    ]
  }
];

export function setupTrainingModule() {
  const container = document.getElementById('clinicalCaseContainer');
  if (!container) return;

  let currentCaseIdx = 0;

  function renderCase(idx) {
    const item = CLINICAL_CASES[idx];
    container.innerHTML = `
      <div class="case-simulation-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="case-badge">${item.title}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Simulación ${idx + 1} de ${CLINICAL_CASES.length}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--brand-teal-dark); font-weight: 700; margin-bottom: 0.5rem;">
          Consultante: ${item.patient}
        </p>
        <div class="case-story">
          <strong>Situación observada:</strong><br>
          ${item.context}
        </div>
        <h4 style="font-size: 1.05rem; margin-bottom: 1rem; color: var(--text-primary);">
          ${item.question}
        </h4>
        <div class="case-options" id="caseOptionsList"></div>
        <div class="case-feedback" id="caseFeedbackBox"></div>
        <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
          <button class="btn-secondary" id="prevCaseBtn" style="padding: 0.45rem 1rem; font-size: 0.85rem;" ${idx === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
            ← Caso anterior
          </button>
          <button class="btn-primary" id="nextCaseBtn" style="padding: 0.45rem 1.25rem; font-size: 0.85rem;">
            ${idx === CLINICAL_CASES.length - 1 ? 'Finalizar evaluación' : 'Siguiente caso →'}
          </button>
        </div>
      </div>
    `;

    const optionsContainer = container.querySelector('#caseOptionsList');
    const feedbackBox = container.querySelector('#caseFeedbackBox');

    item.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'case-option-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => {
        // Evaluate option
        const allBtns = optionsContainer.querySelectorAll('.case-option-btn');
        allBtns.forEach(b => b.style.pointerEvents = 'none');

        if (opt.correct) {
          btn.style.background = '#ecfdf5';
          btn.style.borderColor = '#10b981';
          btn.style.color = '#065f46';
          feedbackBox.className = 'case-feedback correct';
          feedbackBox.innerHTML = `<strong>✓ RESPUESTA ADECUADA:</strong> ${opt.explanation}`;
        } else {
          btn.style.background = '#fef2f2';
          btn.style.borderColor = '#ef4444';
          btn.style.color = '#991b1b';
          feedbackBox.className = 'case-feedback incorrect';
          feedbackBox.innerHTML = `<strong>✗ CRITERIO ERRÓNEO:</strong> ${opt.explanation}`;
        }
      });
      optionsContainer.appendChild(btn);
    });

    const prevBtn = container.querySelector('#prevCaseBtn');
    const nextBtn = container.querySelector('#nextCaseBtn');

    prevBtn.addEventListener('click', () => {
      if (currentCaseIdx > 0) {
        currentCaseIdx--;
        renderCase(currentCaseIdx);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentCaseIdx < CLINICAL_CASES.length - 1) {
        currentCaseIdx++;
        renderCase(currentCaseIdx);
      } else {
        currentCaseIdx = 0;
        renderCase(currentCaseIdx);
      }
    });
  }

  renderCase(0);
}
