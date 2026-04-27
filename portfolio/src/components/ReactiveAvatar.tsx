"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function ReactiveAvatar() {
  const { theme, setTheme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="h-48 w-48 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  const isLight = theme === "light";

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-48 w-48 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-medium text-slate-500 transition-colors shadow-inner overflow-hidden border-4 border-slate-100 dark:border-slate-900">
        <video
          ref={videoRef}
          key={isLight ? "light" : "dark"}
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src={
              isLight
                ? "/person-light-mode-video.mp4"
                : "/person-dark-mode-video.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <ThemeToggle />
    </div>
  );
}
