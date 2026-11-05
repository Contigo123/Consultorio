import { setupBreathingModule } from './modules/breathing.js';
import { setupGroundingModule } from './modules/grounding.js';
import { setupBoxSimulator } from './modules/box-simulator.js';
import { printBoxCards } from './modules/print-cards.js';
import { setupCrisisRoutes } from './modules/crisis-routes.js';
import { setupVitalCyclesModule } from './modules/vital-cycles.js';
import { setupTrainingModule } from './modules/training-quiz.js';
import { setupSearchModule } from './modules/search.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Sub-modules
  setupBreathingModule();
  setupGroundingModule();
  setupBoxSimulator();
  setupCrisisRoutes();
  setupVitalCyclesModule();
  setupTrainingModule();
  setupSearchModule({ goTo, printBoxCards });

  // 2. Navigation & Views Switching
  const navLinks = document.querySelectorAll('.nav-link, .module-card');
  const sectionViews = document.querySelectorAll('.section-view');

  function switchSection(targetId) {
    if (!targetId) return;

    // Normalize target id (e.g. from data-module or href)
    const cleanId = targetId.replace('#', '');
    const targetElement = document.getElementById(cleanId);

    if (targetElement) {
      sectionViews.forEach(sec => sec.classList.remove('active'));
      targetElement.classList.add('active');

      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${cleanId}`);
      });

      // Smooth scroll to top of view
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  function setMenu(open) {
    if (!menuToggle || !mainNav) return;
    mainNav.classList.toggle('mobile-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', () => setMenu(!mainNav.classList.contains('mobile-open')));
  }

  // Navegación entre vistas: cambia de sección, cierra modales/menú y guarda historial
  function goTo(id, push = true) {
    const view = id && document.getElementById(id);
    if (!view || !view.classList.contains('section-view')) return false;
    switchSection(id);
    if (push && location.hash !== `#${id}`) history.pushState({ view: id }, '', `#${id}`);
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    setMenu(false);
    return true;
  }

  // Cualquier enlace interno (#regula, #rutas, pie de página, botones de las rutas, SOS...)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    if (goTo(link.getAttribute('href').slice(1))) e.preventDefault();
  });

  // Tarjetas de módulos de la portada
  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => goTo(card.dataset.module));
  });

  // Botones atrás/adelante del navegador y enlaces directos con #
  window.addEventListener('popstate', () => goTo(location.hash.slice(1) || 'inicio', false));
  if (location.hash) goTo(location.hash.slice(1), false);

  // 3. QR Modal Handler
  const openQrBtns = document.querySelectorAll('.open-qr-trigger');
  const qrModal = document.getElementById('qrModal');
  const closeQrModal = document.getElementById('closeQrModal');

  openQrBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (qrModal) qrModal.classList.add('active');
    });
  });

  if (closeQrModal && qrModal) {
    closeQrModal.addEventListener('click', () => qrModal.classList.remove('active'));
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) qrModal.classList.remove('active');
    });
  }

  // 3b. Institutional Formats Modal Handler (Consentimiento y Remisión)
  const openFormatsBtn = document.getElementById('openFormatsModalBtn');
  const formatsModal = document.getElementById('formatsModal');
  const closeFormatsModal = document.getElementById('closeFormatsModal');
  const downloadAllFormatsBtn = document.getElementById('downloadAllFormatsBtn');

  if (openFormatsBtn && formatsModal) {
    openFormatsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      formatsModal.classList.add('active');
    });
  }

  if (closeFormatsModal && formatsModal) {
    closeFormatsModal.addEventListener('click', () => formatsModal.classList.remove('active'));
    formatsModal.addEventListener('click', (e) => {
      if (e.target === formatsModal) formatsModal.classList.remove('active');
    });
  }

  if (downloadAllFormatsBtn) {
    downloadAllFormatsBtn.addEventListener('click', () => {
      const docs = [
        { href: './docs/MI-EXT-CPS-FOR-01-A-Consentimiento-Informado-Mayores.pdf', name: 'MI-EXT-CPS-FOR-01-A_Consentimiento_Mayores_FUNDES.pdf' },
        { href: './docs/MI-EXT-CPS-FOR-01-B-Consentimiento-Informado-Menores.pdf', name: 'MI-EXT-CPS-FOR-01-B_Consentimiento_Menores_FUNDES.pdf' },
        { href: './docs/MI-EXT-CPS-FOR-05-Remision-Interconsulta.pdf', name: 'MI-EXT-CPS-FOR-05_Remision_Interconsulta_FUNDES.pdf' }
      ];
      docs.forEach((doc, idx) => {
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = doc.href;
          a.download = doc.name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, idx * 400);
      });
    });
  }

  // 3c. Protocolo de bolsillo: imprimir el PDF directamente
  const printProtocolBtn = document.getElementById('printProtocolBtn');
  if (printProtocolBtn) {
    printProtocolBtn.addEventListener('click', () => {
      const url = printProtocolBtn.dataset.pdf;
      const frame = document.createElement('iframe');
      frame.style.cssText = 'position:fixed;width:0;height:0;border:0;visibility:hidden';
      frame.src = url;
      frame.onload = () => {
        try {
          frame.contentWindow.focus();
          frame.contentWindow.print();
        } catch (err) {
          window.open(url, '_blank', 'noopener'); // respaldo: abrir el PDF para imprimir desde el visor
        }
        setTimeout(() => frame.remove(), 60000);
      };
      document.body.appendChild(frame);
    });
  }

  // 4. SOS Emergency Trigger (Direct calm stabilization modal)
  const sosBtn = document.getElementById('sosEmergencyBtn');
  const sosModal = document.getElementById('sosModal');
  const closeSosModal = document.getElementById('closeSosModal');

  if (sosBtn && sosModal) {
    sosBtn.addEventListener('click', () => {
      sosModal.classList.add('active');
    });
  }

  if (closeSosModal && sosModal) {
    closeSosModal.addEventListener('click', () => sosModal.classList.remove('active'));
    sosModal.addEventListener('click', (e) => {
      if (e.target === sosModal) sosModal.classList.remove('active');
    });
  }

  // 5. Imprimir tarjetas de la caja (documento aparte, compatible con celulares)
  const printCardsBtn = document.getElementById('printBoxCardsBtn');
  if (printCardsBtn) {
    printCardsBtn.addEventListener('click', () => printBoxCards());
  }

  // 6. Interactive Phrases Generator for Quick Orientation
  const ORIENTATION_PHRASES = [
    "Estás a salvo aquí. Tómate todo el tiempo que necesites.",
    "Respira despacio. No tienes que resolver nada ahora mismo, solo acompáñate.",
    "Esta sensación intensa es temporal; va a disminuir y volverá la calma.",
    "Siente tus pies firmes sobre el suelo. El piso te sostiene con seguridad.",
    "Estoy aquí para escucharte y acompañarte, sin juzgarte.",
    "Inhala paz, exhala la tensión acumulada en tus hombros."
  ];

  const phraseText = document.getElementById('dynamicPhraseText');
  const nextPhraseBtn = document.getElementById('nextPhraseBtn');

  if (phraseText && nextPhraseBtn) {
    let currentIdx = 0;
    nextPhraseBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % ORIENTATION_PHRASES.length;
      phraseText.style.opacity = '0';
      setTimeout(() => {
        phraseText.textContent = `"${ORIENTATION_PHRASES[currentIdx]}"`;
        phraseText.style.opacity = '1';
      }, 200);
    });
  }
});
