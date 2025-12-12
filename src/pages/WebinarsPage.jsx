import { useState } from 'react'

const liveMessages = [
  { from: 'Nurai', text: 'Сәлем! Чатбот бөлігін көрсетесіз бе?' },
  { from: 'Amir', text: 'Да, ждем демо по AI co-pilot.' },
  { from: 'Mentor', text: 'В 5 минут покажу быстрый сценарий.' },
]

const WebinarsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('12:34')
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState(liveMessages)
  const [viewerCount, setViewerCount] = useState(128)

  const handleSendMessage = () => {
    if (!chatInput.trim()) return
    
    setMessages([...messages, { from: 'You', text: chatInput }])
    setChatInput('')
    
    // Имитация случайного изменения количества зрителей
    setTimeout(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 500)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="webinars-page" className="min-h-screen bg-[#1a1a1a] p-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-indigo-200">Live Webinars</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Watch, chat, and track the room.
        </h2>
        <p className="max-w-3xl text-sm text-slate-400">
          Modern host bar, online indicator, and embedded video stream so everyone stays synced.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-xl shadow-[#6C5BD4]/15 hover:shadow-[#6C5BD4]/25 transition-all duration-300">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.18)] animate-pulse" />
            <p className="text-sm font-semibold text-white">{viewerCount} online</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="rounded-lg bg-white/5 px-3 py-1 border border-emerald-400/20">
              <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5"></span>
              Chat open
            </span>
            <span className="rounded-lg bg-white/5 px-3 py-1 border border-red-400/20">
              <span className="inline-block w-1.5 h-1.5 bg-red-400 rounded-full mr-1.5"></span>
              Recording on
            </span>
            <span className="rounded-lg bg-white/5 px-3 py-1">Latency: 120ms</span>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-[#6C5BD4]/20 hover:shadow-[#6C5BD4]/30 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-sm text-slate-200 bg-gradient-to-r from-[#1a1a1a] to-[#242424]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Live: AI Classroom Platform Demo</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200">
                  Share
                </button>
                <button className="rounded-xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6C5BD4]/40">
                  Join stream
                </button>
              </div>
            </div>

            {/* YouTube Video Player with Gradients */}
            <div className="aspect-video w-full bg-black relative">
              {/* Top gradient overlay - thicker and more opaque */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/95 to-transparent z-10 pointer-events-none" />
              
              {/* Bottom gradient overlay - thicker and more opaque */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/95 to-transparent z-10 pointer-events-none" />
              
              {/* Left gradient overlay */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-10 pointer-events-none" />
              
              {/* Right gradient overlay */}
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-10 pointer-events-none" />

              {/* Platform branding overlay on top */}
              <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] text-sm font-bold text-white shadow-lg">
                      H
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white drop-shadow-lg">HelpAI Live</p>
                      <p className="text-[10px] text-slate-300 drop-shadow">Educational Platform</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-red-500/90 backdrop-blur-sm px-3 py-1 shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-bold text-white">STREAMING</span>
                  </div>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <div className="p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm font-bold text-white drop-shadow-lg">
                        AI Classroom Demo Session
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-200">
                        <span className="flex items-center gap-1 rounded-md bg-black/40 backdrop-blur-sm px-2 py-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {viewerCount} watching
                        </span>
                        <span className="flex items-center gap-1 rounded-md bg-black/40 backdrop-blur-sm px-2 py-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          45:20
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1ts1bfjC58w?rel=0&modestbranding=1"
                title="HelpAI Webinar Live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-[#6C5BD4]/10 hover:shadow-[#6C5BD4]/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Live Chat</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-slate-400">{messages.length} messages</span>
                </div>
              </div>
              <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div
                    key={msg.from + idx}
                    className="rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-slate-100 hover:bg-white/10 transition-all duration-200 animate-fadeIn"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] flex items-center justify-center text-xs font-bold text-white">
                        {msg.from[0]}
                      </div>
                      <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">{msg.from}</p>
                    </div>
                    <p className="mt-2 text-slate-200">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm focus-within:border-[#6C5BD4]/50 transition-all duration-200">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                  placeholder="Type your message..."
                />
                <button 
                  onClick={handleSendMessage}
                  className="rounded-xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6C5BD4]/40"
                >
                  Send
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 via-[#6C5BD4]/20 to-[#FF6000]/10 p-6 shadow-xl shadow-[#6C5BD4]/15 hover:shadow-[#6C5BD4]/25 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-white">Host Controls</p>
                <span className="text-xs bg-[#6C5BD4]/20 text-[#6C5BD4] px-2 py-1 rounded-full font-bold">Admin</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                  Recording
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  Screen
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  Mute all
                </button>
                <button className="rounded-2xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-3 py-2 font-bold text-white shadow-xl shadow-[#6C5BD4]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6C5BD4]/50 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default WebinarsPage