"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">David Muir - CV</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Updated: April 2026</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Executive Summary</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full Stack Software Engineer with a Master's (Distinction) in Biomedical Engineering. Proven expertise in building highly compliant, complex web applications for corporate finance (Hymans Robertson), the NHS, and top-tier health tech startups collaborating with Meta and Google.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Core Competencies</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Complex State Management (Redux)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Full Stack Architecture (Next.js/C#)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Regulatory Compliance (MHRA/GDPR)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Tech Stack</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> React, Next.js, TypeScript</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> C#, Node.js, PostgreSQL</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Azure DevOps, Playwright</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <a 
                href="/david-muir-cv.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all active:scale-95 shadow-md shadow-blue-600/20"
              >
                <Download size={18} />
                Download Full PDF
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}