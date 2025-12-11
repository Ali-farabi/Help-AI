const links = [
  { href: '#home', label: 'Home' },
  { href: '#difficulties', label: 'Difficulties' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#dashboard', label: 'Dashboard' },

  { href: '#webinars-page', label: 'Webinars' },
  { href: '#comparison', label: 'Competitors' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

const NavBar = () => {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-[var(--bg-surface)]/90 px-5 py-4 shadow-2xl shadow-[#6C5BD4]/20 backdrop-blur-2xl sm:px-6 hover-lift">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C5BD4] via-[#6C5BD4] to-[#FF6000] text-lg font-bold text-white shadow-xl shadow-[#6C5BD4]/40 transition-transform hover:scale-105">
              AK
            </div>
            <div>
              <p className="text-sm font-bold text-white font-clash">HelpAI</p>
             
            </div>
          </div>

          <nav className="hidden items-center gap-1 text-sm md:flex">
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="rounded-2xl px-4 py-2.5 text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-105"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href=""
              
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#6C5BD4] via-[#6C5BD4] to-[#FF6000] px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-[#6C5BD4]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6C5BD4]/50"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar

