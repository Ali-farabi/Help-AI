const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-bold text-white font-clash">HelpAI</p>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            AI-powered learning that keeps you focused, curious, and connected.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105">
            Privacy-first
          </span>
          <span className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105">
            Live coaching
          </span>
          <span className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105">
            24/7 AI helper
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

