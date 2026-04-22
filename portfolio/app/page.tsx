import { Mail, FileText, ExternalLink, Code2 } from "lucide-react";
import { ReactiveAvatar } from "@/src/components/ReactiveAvatar";

export default function Portfolio() {
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
    <div className="min-h-screen flex flex-col lg:flex-row w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <aside className="w-full lg:w-[30%] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-8 lg:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto">
        <ReactiveAvatar />

        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            David Muir
          </h1>
          <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400">
            Software Engineer
          </h2>
        </div>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Specializing in complex state management, clinical UIs, and
          enterprise-grade web applications. Architect of the Vital Link EHR
          system.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <a
            href="#"
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="#"
            className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="#"
            className="p-2 text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            <FileText size={16} /> CV
          </a>
        </div>
      </aside>

      <main className="w-full lg:w-[70%] lg:ml-[30%] p-8 lg:p-16 xl:p-24 min-h-screen flex flex-col gap-24">
        <section className="max-w-2xl mt-12 lg:mt-24">
          <h3 className="text-3xl font-bold tracking-tight mb-6">
            Building systems that matter.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I don't just write code; I engineer solutions to operational
            bottlenecks. By collaborating directly with end-users—from NHS
            clinical staff to site managers—I build highly responsive,
            data-secure web applications that handle complex business logic
            without sacrificing user experience.
          </p>
        </section>

        <section className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold tracking-tight">Vital Link</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-semibold tracking-wide">
              FLAGSHIP
            </span>
          </div>

          <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl mb-8 flex items-center justify-center text-slate-400 shadow-sm">
            [High-Res Dashboard Screenshot]
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            A real-time Electronic Health Record (EHR) and hospital bed
            management system. Engineered to solve actual clinical bottlenecks
            in the patient admission-to-discharge workflow.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▹</span> Automated NEWS2 Clinical
              Scoring
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▹</span> Real-time WebSockets via
              Supabase
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▹</span> Strict Role-Based Access
              Control (RBAC)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▹</span> Mobile-First CSS Grid
              Architecture
            </li>
          </ul>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Code2 size={16} /> Source Code
            </a>
          </div>
        </section>

        <section className="max-w-3xl">
          <h3 className="text-2xl font-bold tracking-tight mb-8">
            Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                Frontend
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Next.js (App Router)</li>
                <li>React 18</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                Backend & Data
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>PostgreSQL</li>
                <li>Supabase (Auth & Realtime)</li>
                <li>Prisma ORM</li>
                <li>Zod Validation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                Testing & DevOps
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Playwright E2E</li>
                <li>Jest Unit Testing</li>
                <li>GitHub Actions (CI/CD)</li>
                <li>Vercel Deployment</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-24"></div>
      </main>
    </div>
  );
}
