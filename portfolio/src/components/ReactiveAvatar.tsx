"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ReactiveAvatar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-48 w-48 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />;
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-48 w-48 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-medium text-slate-500 transition-colors shadow-inner overflow-hidden border-4 border-slate-100 dark:border-slate-900">
        
        <div className="text-center">
          <span className="block text-2xl mb-2">{theme === 'dark' ? '🕶️' : '👀'}</span>
          <span className="text-xs">{theme === 'dark' ? 'Dark Mode Video' : 'Light Mode Video'}</span>
        </div>

      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all active:scale-95"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        <span className="text-xs font-semibold uppercase tracking-wider">
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </span>
      </button>
    </div>
  );
}