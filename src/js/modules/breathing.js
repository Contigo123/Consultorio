import { audioSynth } from './audio-synth.js';

export function setupBreathingModule() {
  const orb = document.getElementById('breathingOrb');
  const stateText = document.getElementById('orbStateText');
  const timerText = document.getElementById('orbTimerText');
  const startBtn = document.getElementById('breathingStartBtn');
  const stopBtn = document.getElementById('breathingStopBtn');
  const cycleCountEl = document.getElementById('cycleCount');
  const techniqueBtns = document.querySelectorAll('.technique-btn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  if (!orb || !startBtn) return;

  const TECHNIQUES = {
    '4-7-8': {
      name: 'Relajación Profunda (4-7-8)',
      steps: [
        { label: 'Inhala', duration: 4, action: 'inhale' },
        { label: 'Mantén', duration: 7, action: 'hold' },
        { label: 'Exhala', duration: 8, action: 'exhale' }
      ]
    },
    'box': {
      name: 'Respiración Cuadrada (4-4-4-4)',
      steps: [
        { label: 'Inhala', duration: 4, action: 'inhale' },
        { label: 'Mantén', duration: 4, action: 'hold' },
        { label: 'Exhala', duration: 4, action: 'exhale' },
        { label: 'Pausa', duration: 4, action: 'hold' }
      ]
    },
    'abdominal': {
      name: 'Respiración Abdominal (5-5)',
      steps: [
        { label: 'Inhala suave', duration: 5, action: 'inhale' },
        { label: 'Exhala lento', duration: 5, action: 'exhale' }
      ]
    }
  };

  let currentTechnique = '4-7-8';
  let isRunning = false;
  let currentStepIdx = 0;
  let remainingSeconds = 0;
  let cycleCount = 0;
  let intervalId = null;

  function updateTechnique(techKey) {
    if (!TECHNIQUES[techKey]) return;
    currentTechnique = techKey;
    techniqueBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.technique === techKey);
    });
    if (isRunning) {
      stopExercise();
      startExercise();
    }
  }

  techniqueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateTechnique(btn.dataset.technique);
    });
  });

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const enabled = audioSynth.toggle();
      soundToggleBtn.classList.toggle('active', enabled);
      soundToggleBtn.innerHTML = enabled
        ? `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 9.77H8v-2h3.5l4-4v12l-4-4z"/></svg> Sonido activado`
        : `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg> Sonido pausado`;
    });
  }

  function startExercise() {
    if (isRunning) return;
    isRunning = true;
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-flex';
    currentStepIdx = 0;
    cycleCount = 0;
    updateCycleDisplay();
    runCurrentStep();
  }

  function stopExercise() {
    isRunning = false;
    clearInterval(intervalId);
    intervalId = null;
    startBtn.style.display = 'inline-flex';
    stopBtn.style.display = 'none';
    orb.className = 'breathing-orb';
    stateText.textContent = 'Listo';
    timerText.textContent = '--';
  }

  function runCurrentStep() {
    if (!isRunning) return;
    const steps = TECHNIQUES[currentTechnique].steps;
    const currentStep = steps[currentStepIdx];
    remainingSeconds = currentStep.duration;

    stateText.textContent = currentStep.label;
    timerText.textContent = remainingSeconds;

    orb.className = `breathing-orb ${currentStep.action}`;
    audioSynth.playChime(currentStep.action);

    clearInterval(intervalId);
    intervalId = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds > 0) {
        timerText.textContent = remainingSeconds;
      } else {
        // Step completed
        currentStepIdx++;
        if (currentStepIdx >= steps.length) {
          currentStepIdx = 0;
          cycleCount++;
          updateCycleDisplay();
        }
        runCurrentStep();
      }
    }, 1000);
  }

  function updateCycleDisplay() {
    if (cycleCountEl) {
      cycleCountEl.textContent = `Ciclos completados: ${cycleCount}`;
    }
  }

  startBtn.addEventListener('click', startExercise);
  stopBtn.addEventListener('click', stopExercise);
}
