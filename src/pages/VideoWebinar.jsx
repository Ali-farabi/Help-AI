const VideoWebinar = () => {
  return (
    <section id="webinar-video" className="min-h-screen bg-[#1a1a1a] p-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-cyan-200">Webinar Replay</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Watch how HelpAI teaches live
        </h2>
        <p className="max-w-3xl text-sm text-slate-400">
          A quick walkthrough of our webinar experience. Crisp UI, host controls, and learner-first
          interactions.
        </p>
      </div>
      
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-[#6C5BD4]/20 hover:shadow-[#6C5BD4]/30 transition-all duration-300">
        <div className="aspect-video w-full relative">
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-transparent  pointer-events-none" />
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent  pointer-events-none" />
          
          {/* Top branding bar */}
          <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] text-lg font-bold text-white shadow-lg">
                  H
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">HelpAI Platform</h3>
                  <p className="text-xs text-slate-300">Live Webinar Recording</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-red-500/90 backdrop-blur-sm px-4 py-2 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold text-white">RECORDED</span>
              </div>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
            <div className="p-6">
              <div className="flex items-end justify-between">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white drop-shadow-lg">
                    AI Classroom Demo Session
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <span className="flex items-center gap-1.5 rounded-lg bg-black/40 backdrop-blur-sm px-3 py-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      2.4K views
                    </span>
                    <span className="flex items-center gap-1.5 rounded-lg bg-black/40 backdrop-blur-sm px-3 py-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      45:20
                    </span>
                    <span className="flex items-center gap-1.5 rounded-lg bg-black/40 backdrop-blur-sm px-3 py-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Dec 10, 2024
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 pointer-events-auto">
                  <button className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white hover:bg-black/60 hover:border-white/40 transition-all duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="rounded-xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30 hover:scale-105 transition-all duration-200">
                    Join Next Session
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube iframe */}
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/-2gwV8lIejo?rel=0&modestbranding=1"
            title="HelpAI Webinar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Additional info section */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#6C5BD4]/10 to-transparent p-6 hover:from-[#6C5BD4]/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-white">Interactive Learning</h4>
          </div>
          <p className="text-xs text-slate-400">
            Real-time Q&A with AI assistance during live sessions
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#FF6000]/10 to-transparent p-6 hover:from-[#FF6000]/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-white">Recorded Sessions</h4>
          </div>
          <p className="text-xs text-slate-400">
            Access all webinar recordings anytime, anywhere
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 hover:from-emerald-500/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-white">Instant Feedback</h4>
          </div>
          <p className="text-xs text-slate-400">
            Get immediate responses and personalized guidance
          </p>
        </div>
      </div>
    </section>
  )
}

export default VideoWebinar