import React, { useState, useEffect, useRef } from 'react';
import { KIMCHI_PACKAGE } from './data/packageData';
import { VideoPlayer916 } from './components/VideoPlayer916';

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Playback loop for exact 15-second timeline
  useEffect(() => {
    if (isPlaying) {
      const intervalMs = 50; // smooth 20fps update
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + intervalMs / 1000;
          if (next >= 15) {
            setIsPlaying(false);
            return 15;
          }
          return next;
        });
      }, intervalMs);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (currentTime >= 15) {
      setCurrentTime(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(Math.min(15, Math.max(0, time)));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-[#f3f4f6] flex flex-col items-center justify-center p-3 sm:p-6">
      {/* 9:16 Vertical Video Screen */}
      <main className="w-full max-w-lg flex flex-col items-center justify-center">
        <VideoPlayer916
          shots={KIMCHI_PACKAGE.shots}
          currentTime={currentTime}
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
          onSeek={handleSeek}
          onReset={handleReset}
        />
      </main>
    </div>
  );
}
