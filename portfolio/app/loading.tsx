export default function PortfolioLoading() {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row w-full bg-slate-50 dark:bg-slate-950">
        
        <aside className="w-full lg:w-[30%] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-8 lg:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto z-10 border-r border-transparent lg:border-slate-200 lg:dark:border-slate-900">
          <div className="flex flex-col items-center gap-6">
            <div className="h-[280px] w-[280px] rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse border-4 border-slate-100 dark:border-slate-900" />
            <div className="h-10 w-32 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
          </div>
  
          <div className="flex flex-col items-center gap-4 mt-8 mb-6 text-center">
            <div className="h-10 w-48 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="h-20 w-full max-w-[280px] rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          </div>
  
          <div className="space-y-2 mb-8 flex flex-col items-center">
            <div className="h-4 w-full max-w-[300px] rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="h-4 w-full max-w-[280px] rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="h-4 w-full max-w-[260px] rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="h-4 w-full max-w-[200px] rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
          </div>
  
          <div className="flex gap-4 justify-center items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-10 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
            ))}
          </div>
        </aside>
  
        <main className="w-full lg:w-[70%] lg:ml-[30%] p-8 lg:p-16 xl:p-24 min-h-screen flex flex-col gap-24 relative">
          
          <section className="max-w-2xl mt-12 lg:mt-24 space-y-6">
            <div className="h-10 w-3/4 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse mb-8" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
          </section>
  
          <section className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-8 w-40 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
  
            <div className="w-full h-[250px] md:h-[400px] rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse mb-8" />
  
            <div className="space-y-3 mb-6">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                </div>
              ))}
            </div>
  
            <div className="flex gap-4">
              <div className="h-10 w-32 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-10 w-32 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
          </section>
  
        </main>
      </div>
    );
  }