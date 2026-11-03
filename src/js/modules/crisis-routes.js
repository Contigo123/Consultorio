// Clinical Routes Module - Recreating Rutas 1 to 5 from Pages 3 and 4

export function setupCrisisRoutes() {
  const navBtns = document.querySelectorAll('.ruta-nav-btn');
  const panes = document.querySelectorAll('.ruta-pane');

  if (!navBtns.length) return;

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetRuta = btn.dataset.ruta;
      
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panes.forEach(pane => {
        pane.classList.toggle('active', pane.id === `ruta-${targetRuta}`);
      });
    });
  });

  // Triage checklist logic
  const triageChecks = document.querySelectorAll('.triage-flag-check');
  const triageResultBox = document.getElementById('triageResultBox');

  if (triageChecks.length && triageResultBox) {
    triageChecks.forEach(ch => {
      ch.addEventListener('change', updateTriageEvaluation);
    });
  }

  function updateTriageEvaluation() {
    let redFlags = 0;
    triageChecks.forEach(ch => {
      if (ch.checked && ch.dataset.severity === 'high') redFlags++;
    });

    if (redFlags > 0) {
      triageResultBox.className = 'alert-danger-box';
      triageResultBox.innerHTML = `
        <strong>ALERTA DE CRITERIO DE REMISIÓN INMEDIATA:</strong> 
        Se han detectado indicadores de riesgo clínico alto (${redFlags}). 
        Active de inmediato la <strong>Ruta 5 (Continuidad y Remisión)</strong>, notifique al docente supervisor de FUNDES y proceda a valoración médica/psiquiátrica de urgencia según el protocolo institucional.
      `;
    } else {
      triageResultBox.className = 'protocol-step-box';
      triageResultBox.innerHTML = `
        <strong>Estado de la valoración:</strong> 
        Crisis emocional de nivel reactivo o moderado sin riesgo vital inminente. Proceda con las <strong>Rutas 2 y 3</strong> (Atención, contención verbal y uso de herramientas de la Caja CONTIGO).
      `;
    }
  }
}
