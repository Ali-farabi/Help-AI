const liveMessages = [
  { from: 'Nurai', text: 'Сәлем! Чатбот бөлігін көрсетесіз бе?' },
  { from: 'Amir', text: 'Да, ждем демо по AI co-pilot.' },
  { from: 'Mentor', text: 'В 5 минут покажу быстрый сценарий.' },
]

const WebinarsPage = () => {
  return (
    <section id="webinars-page" className="mt-20">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-indigo-200">Live Webinars</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Watch, chat, and track the room.
        </h2>
        <p className="max-w-3xl text-sm text-slate-400">
          Modern host bar, online indicator, and embedded YouTube stream so everyone stays synced.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-xl shadow-[#6C5BD4]/15 hover-lift">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.18)]" />
            <p className="text-sm font-semibold text-white">128 online</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="rounded-lg bg-white/5 px-3 py-1">Chat open</span>
            <span className="rounded-lg bg-white/5 px-3 py-1">Recording on</span>
            <span className="rounded-lg bg-white/5 px-3 py-1">Latency: 120ms</span>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-[#6C5BD4]/20 hover-lift">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Webinar: AI Classroom</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white hover:border-white/30">
                  Share
                </button>
                <button className="rounded-xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6C5BD4]/40">
                  Go live
                </button>
              </div>
            </div>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Ayuy4zGnfkQ?si=uZDEsdaridOFBksP"
                title="HelpAI Webinar Live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-[#6C5BD4]/10 hover-lift">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Чат</p>
                <span className="text-xs text-slate-400">Real-time</span>
              </div>
              <div className="mt-4 space-y-3">
                {liveMessages.map((msg, idx) => (
                  <div
                    key={msg.from + idx}
                    className="rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-slate-100"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-400">{msg.from}</p>
                    <p className="mt-1">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                <input
                  className="flex-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                  placeholder="Жазыңыз..."
                />
                <button className="rounded-xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6C5BD4]/40">
                  Send
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 via-[#6C5BD4]/20 to-[#FF6000]/10 p-6 shadow-xl shadow-[#6C5BD4]/15 hover-lift">
              <p className="text-sm font-semibold text-white">Host tools</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-white/30 hover:text-white">
                  Start recording
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-white/30 hover:text-white">
                  Share screen
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-white/30 hover:text-white">
                  Mute all
                </button>
                <button className="rounded-2xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-3 py-2 font-bold text-white shadow-xl shadow-[#6C5BD4]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6C5BD4]/50">
                  Invite learners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebinarsPage

