// Grounding 5-4-3-2-1 interactive sensory check

export function setupGroundingModule() {
  const steps = [
    {
      num: 5,
      title: '5 cosas que puedes VER',
      desc: 'Observa detenidamente a tu alrededor. Identifica 5 detalles, colores o texturas.',
      items: [
        'Un objeto con una forma curiosa',
        'Un color específico en la habitación',
        'Un reflejo o juego de luz / sombra',
        'Un detalle en la pared o suelo',
        'Tus propias manos o vestimenta'
      ]
    },
    {
      num: 4,
      title: '4 cosas que puedes TOCAR o SENTIR',
      desc: 'Enfócate en las sensaciones físicas y el contacto con lo tangible.',
      items: [
        'La textura de tu ropa o calzado',
        'La firmeza del suelo bajo tus pies',
        'La temperatura del aire en tu piel',
        'Una superficie lisa, fría o rugosa cercana'
      ]
    },
    {
      num: 3,
      title: '3 sonidos que puedes ESCUCHAR',
      desc: 'Cierra los ojos un instante si te ayuda. Afina el oído más allá de lo evidente.',
      items: [
        'El sonido de tu propia respiración',
        'Un sonido lejano (tráfico, viento, aves)',
        'Un sonido cercano (ventilador, reloj, pasos)'
      ]
    },
    {
      num: 2,
      title: '2 olores que puedes PERCIBIR',
      desc: 'Inhala suavemente. Intenta detectar aromas presentes en el ambiente.',
      items: [
        'El aroma de tu piel, jabón o perfume',
        'El olor del aire, café, madera o papel'
      ]
    },
    {
      num: 1,
      title: '1 sensación que puedes SABOREAR o un pensamiento ancla',
      desc: 'Nota el sabor residual en tu boca o di una afirmación serena.',
      items: [
        'El sabor actual en tu boca o toma un sorbo de agua',
        'Repite mentalmente: "Estoy aquí, en este momento, a salvo."'
      ]
    }
  ];

  let currentStep = 0;

  const numEl = document.getElementById('groundingNum');
  const titleEl = document.getElementById('groundingTitle');
  const descEl = document.getElementById('groundingDesc');
  const listEl = document.getElementById('groundingList');
  const prevBtn = document.getElementById('groundingPrevBtn');
  const nextBtn = document.getElementById('groundingNextBtn');
  const progressEl = document.getElementById('groundingProgressBar');

  if (!numEl || !listEl) return;

  function renderStep(idx) {
    const data = steps[idx];
    numEl.textContent = data.num;
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    
    // Update progress
    const pct = ((idx + 1) / steps.length) * 100;
    progressEl.style.width = `${pct}%`;

    // Render check items
    listEl.innerHTML = '';
    data.items.forEach((item, itemIdx) => {
      const label = document.createElement('label');
      label.className = 'grounding-item-label';
      label.innerHTML = `
        <input type="checkbox" id="g_item_${idx}_${itemIdx}">
        <span>${item}</span>
      `;
      const checkbox = label.querySelector('input');
      checkbox.addEventListener('change', () => {
        label.classList.toggle('checked', checkbox.checked);
      });
      listEl.appendChild(label);
    });

    prevBtn.disabled = idx === 0;
    prevBtn.style.opacity = idx === 0 ? '0.5' : '1';
    
    if (idx === steps.length - 1) {
      nextBtn.textContent = '¡Completado! Reiniciar';
    } else {
      nextBtn.textContent = 'Siguiente paso →';
    }
  }

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep(currentStep);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      renderStep(currentStep);
    } else {
      // Complete & restart
      currentStep = 0;
      renderStep(currentStep);
    }
  });

  renderStep(0);
}
