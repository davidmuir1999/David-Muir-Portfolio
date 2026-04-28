"use client";

import { Mail, FileText, ExternalLink, Code2, Key } from "lucide-react";
import { ReactiveAvatar } from "@/src/components/ReactiveAvatar";
import { CVModal } from "@/src/components/CVModal";
import { useState } from "react";
import { motion, Variants, useScroll } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Portfolio() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const GithubIcon = ({ size = 24, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const LinkedinIcon = ({ size = 24, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="min-h-screen flex flex-col lg:flex-row w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[30%] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-8 lg:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto z-10"
        >
          <ReactiveAvatar />

          <div className="text-center mb-6 mt-4">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              David Muir
            </h1>
            <motion.h3
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
              className="text-3xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-slate-400 via-slate-800 to-slate-400 dark:from-slate-500 dark:via-slate-100 dark:to-slate-500 bg-size-[200%_auto] bg-clip-text text-transparent"
            >
              Engineering resilient systems for highly regulated sectors.
            </motion.h3>
          </div>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Combining deep analytical rigor from a Master's in Biomedical
            Engineering with modern full-stack development to ship secure,
            enterprise-grade software for highly regulated industries like
            HealthTech and FinTech.
          </p>

          <div className="flex gap-4 justify-center items-center">
            <a
              href="https://www.github.com/davidmuir1999"
              target="_blank"
              className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/david-muir-07b41a193/"
              target="_blank"
              className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:davidmuir1999@gmail.com"
              className="p-2 text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCVModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm cursor-pointer"
            >
              <FileText size={16} /> CV
            </motion.button>
          </div>
        </motion.aside>

        <main className="w-full lg:w-[70%] lg:ml-[30%] p-8 lg:p-16 xl:p-24 min-h-screen flex flex-col gap-24 relative overflow-hidden">
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl mt-12 lg:mt-24"
          >
            <h3 className="text-3xl font-bold tracking-tight mb-6">
              Developing for Compliance, Scale, and the End-User.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              My background in Biomedical Engineering provided a strong
              analytical foundation. My software career taught me how to ship
              it. From architecting GDPR-compliant financial systems to building
              clinical UIs for the NHS and prototyping health-tech with FAANG
              teams, I build applications that cannot afford to fail.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              As a mid-level engineer, my value goes beyond writing syntax. I
              partner directly with stakeholders to translate complex regulatory
              and business requirements into secure, highly accessible, and
              performant software that eliminates operational bottlenecks.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold tracking-tight">Vital Link</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-semibold tracking-wide">
                FLAGSHIP
              </span>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-xl mb-8 shadow-sm border border-slate-300 dark:border-slate-800 overflow-hidden relative group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              >
                <source src="/vital-link-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              An all-in-one operational ecosystem and Electronic Health Record
              (EHR) platform. I built this by directly interviewing practicing
              NHS doctors and nurses to identify points of friction in the
              patient admission-to-discharge workflow.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">▹</span> Automated NEWS2
                Clinical Scoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">▹</span> Live Bed Bureau via
                Supabase WebSockets
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">▹</span> Strict Role-Based
                Access Control (RBAC)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">▹</span> Mitigated UI Race
                Conditions via strict State Management
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">▹</span> Automated Patient
                Triage Algorithm
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">▹</span> Modern and Intuitive UI
              </li>
            </ul>

            <div className="flex items-start gap-3 p-4 mb-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
              <div className="mt-0.5 text-blue-600 dark:text-blue-400">
                <Key size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Testing the RBAC features?
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  To explore the different dashboards, demo login credentials
                  for the Triage Nurse, Ward Manager, Clinical Doctor and
                  Cleaner roles are provided in the{" "}
                  <a
                    href="https://github.com/davidmuir1999/Vital-Link-Triage-Project#readme"
                    target="_blank"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
                  >
                    project README
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://vitallinkapp.com"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href="https://github.com/davidmuir1999/Vital-Link-Triage-Project"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Code2 size={16} /> Source Code
              </a>
            </div>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-8"
            >
              Technical Stack
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
              >
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                  Frontend
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>React & Next.js (SSR / SSG)</li>
                  <li>State Management (Redux)</li>
                  <li>TypeScript & JavaScript</li>
                  <li>Tailwind CSS & Shadcn UI</li>
                  <li>Framer Motion</li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
              >
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                  Backend & Data
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>C# & ASP.NET Core</li>
                  <li>Node.js & Express.js</li>
                  <li>PostgreSQL & Supabase</li>
                  <li>MongoDB (NoSQL)</li>
                  <li>Prisma ORM & GraphQL</li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
              >
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
                  Architecture
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>Playwright (E2E) & Jest</li>
                  <li>Azure DevOps & Vercel</li>
                  <li>CI/CD Pipeline Automation</li>
                  <li>WCAG Accessibility</li>
                  <li>MHRA & GDPR Compliance</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-8"
            >
              The Journey
            </motion.h3>

            <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3">
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute -left-7.75 top-1.5 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500 ring-4 ring-slate-50 dark:ring-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Mid-Level Developer
                </h4>
                <h5 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                  Hymans Robertson LLP
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Engineered heavily regulated pension service applications and
                  ID verification systems within the corporate financial sector.
                  Enforced strict GDPR compliance and WCAG accessibility
                  standards. Spearheaded Kaizen process improvements that
                  successfully identified and reduced process pain points.
                  Spearheaded Kaizen-driven operational improvements across the
                  engineering team. Systematically optimized Azure DevOps
                  workflows, CI/CD pipelines, and cross-team communication,
                  compounding marginal developer gains into significant
                  team-wide efficiency.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full -left-7.75 top-1.5 ring-4 ring-slate-50 dark:ring-slate-950" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Full Stack Developer
                </h4>
                <h5 className="text-sm font-medium text-slate-500 mb-3">
                  Independent / Consulting
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Identified systemic technological gaps in local
                  brick and mortar businesses and built proprietary SaaS
                  inventory applications to replace their legacy management.
                  Delivered high-visibility, brand-centric web solutions for
                  high-profile clients, including an MTV Top 10 music artist.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full -left-7.75 top-1.5 ring-4 ring-slate-50 dark:ring-slate-950" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Biomedical Engineer
                </h4>
                <h5 className="text-sm font-medium text-slate-500 mb-3">
                  Novosound Ltd
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Transitioned from an intern to a full-time engineer at a
                  leading medical ultrasound startup. Developed proprietary
                  frontend interfaces, mechanical design and collaborated
                  directly with FAANG technology partners, to deliver advanced
                  health tech solutions.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full -left-7.75 top-1.5 ring-4 ring-slate-50 dark:ring-slate-950" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  C# Developer
                </h4>
                <h5 className="text-sm font-medium text-slate-500 mb-3">
                  University of Strathclyde Internship Program
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Engineered real-time Unity (C#) simulations of robotic dental
                  surgeries, creating high-fidelity digital twins of live
                  physical procedures and anatomical models.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full -left-7.75 top-1.5 ring-4 ring-slate-50 dark:ring-slate-950" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  MEng Biomedical Engineering (Distinction)
                </h4>
                <h5 className="text-sm font-medium text-slate-500 mb-3">
                  University of Strathclyde
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Focused research and development on engineering solutions
                  specifically tailored for the medical device industry.
                </p>
              </motion.div>
            </div>
          </motion.section>

          <div className="h-24"></div>

          <CVModal
            isOpen={isCVModalOpen}
            onClose={() => setIsCVModalOpen(false)}
          />
        </main>
      </div>
    </>
  );
}
