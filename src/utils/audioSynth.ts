// Audio synthesizer utility using Web Audio API and SpeechSynthesis

class HallyuAudioEngine {
  private ctx: AudioContext | null = null;
  private isBpmPlaying: boolean = false;
  private bpmIntervalId: number | null = null;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices = window.speechSynthesis.getVoices();
      };
      this.voices = window.speechSynthesis.getVoices();
    }
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a resonant traditional Korean Gayageum / bell chime tone
  playPluck(frequency: number = 440, duration: number = 0.8, type: OscillatorType = 'triangle') {
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    // Subtle vibrato/bend (Nonghyeon effect)
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.98, this.ctx.currentTime + duration * 0.3);

    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Play a soft lo-fi kick drum pulse for 105 BPM
  playKick() {
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  // Play a soft rimshot/clap
  playRimshot() {
    this.initContext();
    if (!this.ctx) return;

    // Filtered noise or high click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Toggle 105 BPM rhythmic metronome pulse
  toggleBpmPulse(bpm: number = 105, onBeat?: (step: number) => void): boolean {
    if (this.isBpmPlaying) {
      this.stopBpmPulse();
      return false;
    }

    this.initContext();
    this.isBpmPlaying = true;
    let step = 0;
    const intervalMs = (60 / bpm) * 1000;

    // Traditional pentatonic notes: Eb4, F4, Ab4, Bb4, C5
    const pentatonicNotes = [311.13, 349.23, 415.3, 466.16, 523.25];

    this.bpmIntervalId = window.setInterval(() => {
      if (step % 4 === 0) {
        this.playKick();
        this.playPluck(pentatonicNotes[0], 0.6, 'sine');
      } else if (step % 2 === 0) {
        this.playRimshot();
        this.playPluck(pentatonicNotes[2], 0.4, 'triangle');
      } else {
        this.playPluck(pentatonicNotes[(step % pentatonicNotes.length)], 0.3, 'sine');
      }

      if (onBeat) onBeat(step % 4);
      step++;
    }, intervalMs);

    return true;
  }

  stopBpmPulse() {
    if (this.bpmIntervalId) {
      clearInterval(this.bpmIntervalId);
      this.bpmIntervalId = null;
    }
    this.isBpmPlaying = false;
  }

  isBpmActive(): boolean {
    return this.isBpmPlaying;
  }

  // Speak narration line using SpeechSynthesis
  speakText(text: string, onEnd?: () => void) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95; // Clear, relaxed pacing for promo video narration
    utterance.pitch = 1.05; // Fresh, energetic tone

    // Check if there is an English or Korean voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Karen')));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onend = () => {
      if (onEnd) onEnd();
    };
    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const audioEngine = new HallyuAudioEngine();
