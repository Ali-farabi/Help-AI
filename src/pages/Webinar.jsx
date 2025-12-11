const webinars = [
    {
      id: 1,
      title: 'AI Research Deep Dive',
      teacher: 'Dr. Elise Reed',
      time: 'Starts in 8 min',
      spots: '24 / 80',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      teacher: 'Prof. Michael Chen',
      time: 'Live now',
      spots: '156 / 200',
      status: 'live',
    },
  ]
  
  const Webinar = () => {
    return (
      <section id="webinar" className="mt-20">
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-[#6C5BD4]/10 to-[#FF6000]/5 p-6 shadow-2xl shadow-[#6C5BD4]/20 hover-lift"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-sm text-slate-400">
                    {webinar.status === 'live' ? 'Live' : 'Upcoming'}
                  </p>
                  <h3 className="text-xl font-bold text-white font-clash mt-1">{webinar.title}</h3>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${
                    webinar.status === 'live'
                      ? 'border-emerald-300/40 bg-emerald-300/10 text-emerald-100'
                      : 'border-emerald-300/40 bg-emerald-300/10 text-emerald-100'
                  }`}
                >
                  {webinar.time}
                </span>
              </div>
  
              <div className="grid gap-3 sm:grid-cols-2 mb-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Teacher</p>
                  <p className="text-base font-bold text-white mt-1">{webinar.teacher}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Spots left</p>
                  <p className="text-base font-bold text-white mt-1">{webinar.spots}</p>
                </div>
              </div>
  
              <button className="w-full rounded-2xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-[#6C5BD4]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6C5BD4]/50">
                {webinar.status === 'live' ? 'Join webinar' : 'Join waiting room'}
              </button>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Webinar
  
  