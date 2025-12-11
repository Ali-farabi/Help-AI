const team = [
  {
    name: 'Kristin Park',
    role: 'Founder & Learning Design',
    focus: 'Builds AI-first curricula that feel human.',
  },
  {
    name: 'Elise Reed',
    role: 'Head of Webinars',
    focus: 'Brings experts live with crisp, actionable sessions.',
  },
  {
    name: 'Amir Solano',
    role: 'Engineering Lead',
    focus: 'Ship-fast mindset, keeps the platform reliable.',
  },
]

const About = () => {
  return (
    <section id="about" className="mt-20">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-emerald-200">About</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why HelpAI?</h2>
        <p className="max-w-3xl text-sm text-slate-400">
          We are builders, facilitators, and teachers obsessed with keeping people learning. Our
          mission: blend AI with community so every learner feels guided, not overwhelmed.
        </p>
      </div>

      <div className="mt-8 grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-[#6C5BD4]/10 sm:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover-lift">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] text-base font-bold text-white shadow-lg shadow-[#6C5BD4]/30 transition-transform hover:rotate-12">
                {member.name[0]}
              </div>
              <span className="rounded-xl bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                {member.role}
              </span>
            </div>
            <p className="text-base font-bold text-white font-clash">{member.name}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{member.focus}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About

