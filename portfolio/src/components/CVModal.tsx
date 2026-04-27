"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function CVModal({ isOpen, onClose }: CVModalProps) {
  // Lock body scroll when modal is open
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

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="p-6 md:p-8 space-y-6"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Executive Summary</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mid-Level Full-Stack Engineer specialising in React, Node.js, and C#/.NET ecosystems to build secure software for highly regulated HealthTech and FinTech industries. Leveraging a Master's in Biomedical Engineering to bridge the gap between complex compliance requirements and scalable technical execution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp} className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Core Competencies</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> 100% GDPR & MHRA Compliance</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> CI/CD</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Secure RBAC & E2E Encryption</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> WCAG Accessibility Standards</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Technical Arsenal</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> TypeScript, React, Next.js, Jest</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> C# (.NET), Node.js, PostgreSQL</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Azure DevOps, Playwright, Vercel</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Prisma ORM, GraphQL, WebSockets</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <a 
                href="/David-Muir-CV.pdf" 
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