// Synthesizer using Web Audio API for calm meditation chimes
// Works 100% offline without external audio files

class CalmAudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(type = 'inhale') {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Pitch based on breath phase
      let freq = 432; // Calming frequency A4
      if (type === 'inhale') freq = 528; // Transformation/calm (solfeggio)
      if (type === 'hold') freq = 396;   // Grounding tone
      if (type === 'exhale') freq = 285; // Deep relaxation

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Gentle envelope: soft attack, slow harmonic decay
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.8);
    } catch (e) {
      console.warn('Audio synthesis not supported or blocked by browser policy:', e);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

export const audioSynth = new CalmAudioSynth();
