import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { ShotData } from '../types/production';
import { audioEngine } from '../utils/audioSynth';

interface VideoPlayer916Props {
  shots: ShotData[];
  currentTime: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onReset: () => void;
}

export const VideoPlayer916: React.FC<VideoPlayer916Props> = ({
  shots,
  currentTime,
  isPlaying,
  onTogglePlay,
  onSeek,
  onReset,
}) => {
  const [audioVoiceoverEnabled, setAudioVoiceoverEnabled] = useState(true);
  const [backingMusicEnabled, setBackingMusicEnabled] = useState(true);
  const lastSpokenShotRef = useRef<number | null>(null);

  // Determine current beat based on currentTime (0 to 15s)
  const currentShotIndex = Math.min(
    shots.findIndex((s) => currentTime >= s.startTime && currentTime < s.endTime),
    shots.length - 1
  );
  const activeIndex = currentShotIndex >= 0 ? currentShotIndex : (currentTime >= 15 ? shots.length - 1 : 0);
  const activeShot = shots[activeIndex] || shots[0];

  // Voice-over sync when shot changes while playing
  useEffect(() => {
    if (isPlaying && audioVoiceoverEnabled) {
      if (lastSpokenShotRef.current !== activeShot.id) {
        lastSpokenShotRef.current = activeShot.id;
        audioEngine.speakText(activeShot.narration);
      }
    } else if (!isPlaying) {
      audioEngine.stopSpeech();
    }
  }, [activeShot.id, isPlaying, audioVoiceoverEnabled, activeShot.narration]);

  // Backing music sync with play/pause
  useEffect(() => {
    if (isPlaying && backingMusicEnabled) {
      if (!audioEngine.isBpmActive()) {
        audioEngine.toggleBpmPulse(105);
      }
    } else {
      if (audioEngine.isBpmActive()) {
        audioEngine.stopBpmPulse();
      }
    }
  }, [isPlaying, backingMusicEnabled]);

  const toggleBackingMusic = () => {
    const next = !backingMusicEnabled;
    setBackingMusicEnabled(next);
    if (!next) {
      audioEngine.stopBpmPulse();
    } else if (isPlaying) {
      audioEngine.toggleBpmPulse(105);
    }
  };

  useEffect(() => {
    return () => {
      audioEngine.stopBpmPulse();
      audioEngine.stopSpeech();
    };
  }, []);

  const formatTime = (seconds: number) => {
    const s = Math.floor(seconds);
    const ms = Math.floor((seconds % 1) * 10);
    return `00:${s.toString().padStart(2, '0')}.${ms}`;
  };

  const shotProgress = ((currentTime - activeShot.startTime) / activeShot.duration) * 100;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* 9:16 Vertical Video Frame */}
      <div className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-rose-950/40 flex flex-col justify-between p-4 group select-none">
        {/* Background Visual Asset with Subtle Cinematic Scale */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
          <img
            src={activeShot.imagePath}
            alt={activeShot.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Subtle Top & Bottom Vignette / Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* Top Header Overlay: Beat Title & Timecode */}
        <div className="relative z-10 flex items-center justify-between text-xs">
          <div className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white font-medium flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-semibold tracking-wide">
              {activeShot.id === 1 ? 'BEAT 1 (0–5s) · HOOK' : activeShot.id === 2 ? 'BEAT 2 (5–10s) · EXPLAIN' : 'BEAT 3 (10–15s) · CLOSE'}
            </span>
          </div>

          <div className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white font-mono tabular-nums shadow-sm text-xs">
            {formatTime(currentTime)} / 00:15.0
          </div>
        </div>

        {/* Center Tap-to-Play Overlay when Paused */}
        {!isPlaying && (
          <button
            onClick={onTogglePlay}
            className="relative z-10 m-auto w-16 h-16 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl cursor-pointer backdrop-blur-sm"
            aria-label="Play video"
          >
            <Play className="w-7 h-7 fill-white ml-0.5" />
          </button>
        )}

        {/* Bottom Third Overlay: Burned-in Subtitles & Progress */}
        <div className="relative z-10 flex flex-col gap-3">
          {/* Burned-in Subtitles: White bold sans-serif with soft dark outline, bottom third of the screen, max 2 lines */}
          <div className="text-center px-3 py-2 min-h-[56px] flex items-center justify-center">
            <p className="text-base sm:text-lg font-bold font-sans text-white text-center leading-snug tracking-normal [text-shadow:_0_1px_2px_rgba(0,0,0,0.95),_0_2px_5px_rgba(0,0,0,0.95),_0_0_10px_rgba(0,0,0,0.85)] line-clamp-2">
              {activeShot.narration}
            </p>
          </div>

          {/* 3-Segment Progress Bar (Instagram / YouTube Shorts Style) */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {shots.map((shot, idx) => {
              let fillPercent = 0;
              if (idx < activeIndex) fillPercent = 100;
              else if (idx === activeIndex) fillPercent = Math.min(100, Math.max(0, shotProgress));

              return (
                <div
                  key={shot.id}
                  className="h-1.5 bg-white/25 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => onSeek(shot.startTime)}
                  title={`${shot.title} (${shot.timeRange})`}
                >
                  <div
                    className="h-full bg-rose-500 transition-all duration-100 ease-linear"
                    style={{ width: `${fillPercent}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Transport Controls Bar */}
      <div className="w-full max-w-[380px] sm:max-w-[400px] mt-4 flex items-center justify-between px-3 py-2.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
        {/* Restart Button */}
        <button
          onClick={onReset}
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
          title="Restart Video (0:00)"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Play / Pause Toggle */}
        <button
          onClick={onTogglePlay}
          className="flex items-center gap-2 px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md shadow-rose-950/50"
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
          <span>{isPlaying ? 'Pause' : 'Play 15s'}</span>
        </button>

        {/* Voice-over Audio Toggle */}
        <button
          onClick={() => setAudioVoiceoverEnabled(!audioVoiceoverEnabled)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
            audioVoiceoverEnabled
              ? 'border-rose-500/40 text-rose-300 bg-rose-500/10'
              : 'border-white/10 text-slate-400 hover:text-white'
          }`}
          title={audioVoiceoverEnabled ? 'English voice-over on' : 'Voice-over muted'}
        >
          {audioVoiceoverEnabled ? <Volume2 className="w-3.5 h-3.5 text-rose-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">Voice</span>
        </button>

        {/* Background Music Toggle */}
        <button
          onClick={toggleBackingMusic}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
            backingMusicEnabled
              ? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
              : 'border-white/10 text-slate-400 hover:text-white'
          }`}
          title={backingMusicEnabled ? 'Background music on (105 BPM)' : 'Background music off'}
        >
          <Music className={`w-3.5 h-3.5 ${backingMusicEnabled && isPlaying ? 'animate-pulse text-emerald-400' : ''}`} />
          <span className="hidden sm:inline">Music</span>
        </button>
      </div>

      {/* 3 Beat Jump Selector */}
      <div className="w-full max-w-[380px] sm:max-w-[400px] mt-2.5 grid grid-cols-3 gap-2">
        {shots.map((shot, idx) => (
          <button
            key={shot.id}
            onClick={() => onSeek(shot.startTime)}
            className={`py-1.5 px-2 text-[11px] font-medium rounded-xl transition-all cursor-pointer truncate border ${
              activeIndex === idx
                ? 'bg-rose-950/40 border-rose-500 text-white font-semibold'
                : 'bg-white/[0.03] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            {shot.id === 1 ? '1. Hook (0–5s)' : shot.id === 2 ? '2. Kimjang (5–10s)' : '3. Meal (10–15s)'}
          </button>
        ))}
      </div>

      {/* 0–15s Timeline Scrubber */}
      <div className="w-full max-w-[380px] sm:max-w-[400px] mt-3 px-1">
        <input
          type="range"
          min="0"
          max="15"
          step="0.05"
          value={currentTime}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          className="w-full accent-rose-500 cursor-pointer h-1.5 bg-white/15 rounded-lg appearance-none"
        />
        <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
          <span>00:00</span>
          <span>5s</span>
          <span>10s</span>
          <span>00:15</span>
        </div>
      </div>
    </div>
  );
};
