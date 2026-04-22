export default function PortfolioSkeleton() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full bg-slate-50 text-slate-900 font-sans">

      <aside className="w-full lg:w-[30%] lg:fixed lg:top-0 lg:left-0 lg:h-screen border-4 border-red-500 p-8 flex flex-col justify-center overflow-y-auto">
        
        <div className="border-2 border-red-300 bg-red-100/50 h-48 w-48 rounded-full mx-auto mb-8 flex items-center justify-center text-center text-sm font-bold text-red-700 shrink-0">
          [Reactive Avatar Video Area]
        </div>

        <div className="border-2 border-red-300 bg-red-100/50 p-4 mb-4 text-center font-bold text-red-700 shrink-0">
          [Headline: Name & Title]
        </div>

        <div className="border-2 border-red-300 bg-red-100/50 p-4 mb-8 text-center text-sm text-red-700 shrink-0">
          [Short NHS/Engineering Bio]
        </div>

        <div className="border-2 border-red-300 bg-red-100/50 p-4 flex gap-4 justify-center shrink-0">
          [Links / CV Buttons]
        </div>
      </aside>

      <main className="w-full lg:w-[70%] lg:ml-[30%] border-4 border-blue-500 p-8 lg:p-16 xl:p-24 min-h-screen flex flex-col gap-16">

        <section className="border-2 border-blue-300 bg-blue-100/50 p-8 min-h-[30vh] flex items-center justify-center text-blue-700 font-bold">
          [Section A: The Hook / Engineering Philosophy]
        </section>

        <section className="border-2 border-blue-300 bg-blue-100/50 p-8 min-h-[60vh] flex items-center justify-center text-blue-700 font-bold">
          [Section B: Vital Link Case Study]
        </section>

        <section className="border-2 border-blue-300 bg-blue-100/50 p-8 min-h-[40vh] flex items-center justify-center text-blue-700 font-bold">
          [Section C: Contextual Tech Stack]
        </section>

        <section className="border-2 border-blue-300 bg-blue-100/50 p-8 min-h-[50vh] flex items-center justify-center text-blue-700 font-bold">
          [Section D: Experience & NHS Origin Story]
        </section>
      </main>
    </div>
  );
}
