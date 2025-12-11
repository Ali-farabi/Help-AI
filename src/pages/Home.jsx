import { useState } from 'react'

const stats = [
  { label: 'Learners onboarded', value: '12.4k' },
  { label: 'Avg. satisfaction', value: '4.8/5' },
  { label: 'Weekly live sessions', value: '120+' },
]

const learningBlocks = [
  {
    title: 'AI co-pilot',
    detail: 'Summaries, flashcards, and nudges tailored to your progress.',
  },
  {
    title: 'Micro-lessons',
    detail: 'Bite-sized modules with quick practice and instant feedback.',
  },
  {
    title: 'Accountability',
    detail: 'Daily streaks, focus timers, and reminders to keep you moving.',
  },
]

const examSolutions = [
  {
    id: 1,
    title: 'IELTS Preparation',
    emoji: '',
    desc: 'Комплексная подготовка к экзамену IELTS с AI-поддержкой',
    curator: {
      name: 'Dr. Sarah Mitchell',
      experience: '12 лет опыта',
      students: '2,500+ студентов',
      avatar: 'SM'
    },
    books: [
      { title: 'IELTS Academic Writing Task 1 & 2', author: 'Cambridge Press', pages: 340 },
      { title: 'Complete IELTS Speaking Guide', author: 'Oxford Publishing', pages: 280 },
      { title: 'IELTS Vocabulary Masterclass', author: 'Pearson Education', pages: 195 },
    ],
    videos: [
      { title: 'IELTS Writing Task 2 Structure', duration: '24:15', views: 15420 },
      { title: 'Speaking Part 2 - Strategies', duration: '18:30', views: 12800 },
      { title: 'Listening Tips & Tricks', duration: '21:45', views: 10500 },
      { title: 'Reading Speed Techniques', duration: '16:20', views: 9200 },
    ],
  },
  {
    id: 2,
    title: 'TOEFL Mastery',
    emoji: '',
    desc: 'Эффективная подготовка к TOEFL с персональным планом',
    curator: {
      name: 'Prof. Michael Chen',
      experience: '15 лет опыта',
      students: '3,200+ студентов',
      avatar: 'MC'
    },
    books: [
      { title: 'TOEFL iBT Complete Guide', author: 'ETS Official', pages: 450 },
      { title: 'Advanced TOEFL Speaking', author: 'Kaplan Test Prep', pages: 320 },
      { title: 'TOEFL Integrated Writing', author: "Barron's", pages: 265 },
    ],
    videos: [
      { title: 'TOEFL Speaking Question Types', duration: '28:40', views: 18900 },
      { title: 'Integrated Writing Mastery', duration: '22:15', views: 14200 },
      { title: 'Note-Taking for Listening', duration: '19:30', views: 11800 },
      { title: 'Reading Strategies', duration: '25:50', views: 13400 },
    ],
  },
  {
    id: 3,
    title: 'SAT Excellence',
    emoji: '',
    desc: 'Полная подготовка к SAT для высоких баллов',
    curator: {
      name: 'Emma Johnson',
      experience: '10 лет опыта',
      students: '1,800+ студентов',
      avatar: 'EJ'
    },
    books: [
      { title: 'The Official SAT Study Guide', author: 'College Board', pages: 1200 },
      { title: 'SAT Math Workbook', author: 'Princeton Review', pages: 380 },
      { title: 'SAT Reading & Writing', author: 'Ivy Global', pages: 420 },
    ],
    videos: [
      { title: 'SAT Math Problem Solving', duration: '32:20', views: 22100 },
      { title: 'Evidence-Based Reading', duration: '27:45', views: 16800 },
      { title: 'Essay Writing Techniques', duration: '24:10', views: 14500 },
      { title: 'Time Management Tips', duration: '15:30', views: 19200 },
    ],
  },
  {
    id: 4,
    title: 'ЕНТ Подготовка',
    emoji: '',
    desc: 'Специализированная подготовка к Единому Национальному Тестированию',
    curator: {
      name: 'Айгүл Нұрланова',
      experience: '8 лет опыта',
      students: '2,100+ студентов',
      avatar: 'АН'
    },
    books: [
      { title: 'ЕНТ Математика - Полный курс', author: 'Образовательный центр', pages: 520 },
      { title: 'История Казахстана для ЕНТ', author: 'Республиканское издательство', pages: 380 },
      { title: 'ЕНТ Биология и Химия', author: 'Научный центр', pages: 440 },
    ],
    videos: [
      { title: 'Математика - Решение сложных задач', duration: '35:20', views: 28400 },
      { title: 'История Казахстана - Ключевые даты', duration: '29:15', views: 21600 },
      { title: 'Стратегии сдачи ЕНТ', duration: '22:40', views: 25800 },
      { title: 'Типичные ошибки и как их избежать', duration: '26:30', views: 19700 },
    ],
  },
]

const difficulties = [
  { value: '1,2 млн', label: 'оқушы — оқу сауаттылығында қиындық' },
  { value: '1 млн', label: 'бала — математикада базалық деңгейге жете алмайды' },
  { value: '700 мың', label: 'ауыл оқушысы — сапасыз инфрақұрылымда' },
  { value: '20 мың+', label: 'мұғалім жетіспейді' },
  { value: '300 мың', label: 'жасөспірім — созылмалы стресс, күйзеліс' },
]

const solutions = [
  { title: 'AI ChatBot', desc: '24/7 көмек: түсіндіру, мысал, практика және кері байланыс.' },
  { title: 'Video courses', desc: 'Жылдам модульдер, қазақ/орыс интерфейс, қысқа тесттер.' },
  { title: 'Teacher vacancy platform', desc: 'Мұғалімдерді тапшылығы бар мектептермен жылдам табыстыру.' },
  { title: 'Learning assistant', desc: 'Дара жоспар, фокус-таймер, күнделікті нотификация.' },
]

const prototypes = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  label: 'Прототип',
}))

const team = [
  { role: 'Flutter / UI', desc: 'Mobile UI, smooth onboarding, offline-ready.' },
  { role: 'Chatbot / Finance', desc: 'Dialog flows, billing, compliance.' },
  { role: 'Backend Flask', desc: 'APIs, data, auth, analytics.' },
  { role: 'Solana Winner 2025', desc: 'On-chain badges, trustless certificates.' },
  { role: 'Frontend 2 years', desc: 'Animations, dashboards, accessibility.' },
  { role: 'Flutter 1 year', desc: 'Learner app PWA, push, deep links.' },
]

const ExamModal = ({ exam, isOpen, onClose }) => {
  if (!isOpen || !exam) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#242424] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20 hover:scale-110"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{exam.emoji}</span>
            <h2 className="text-3xl font-bold text-white">{exam.title}</h2>
          </div>
          <p className="text-slate-400">{exam.desc}</p>
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-orange-600/10 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-orange-600 text-xl font-bold text-white shadow-lg">
              {exam.curator.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-400 mb-1">Ваш куратор</p>
              <p className="text-xl font-bold text-white">{exam.curator.name}</p>
              <div className="flex gap-4 mt-2 text-sm text-slate-300">
                <span>📚 {exam.curator.experience}</span>
                <span>👥 {exam.curator.students}</span>
              </div>
            </div>
            <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105">
              Связаться
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl"></span>
              Учебные материалы
            </h3>
            <div className="space-y-3">
              {exam.books.map((book, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-[1.02] cursor-pointer"
                >
                  <p className="font-bold text-white">{book.title}</p>
                  <p className="text-sm text-slate-400 mt-1">{book.author}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-slate-500">{book.pages} страниц</p>
                    <button className="text-xs font-bold text-purple-400 hover:text-orange-400 transition-colors">
                      Скачать PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl"></span>
              Видео уроки
            </h3>
            <div className="space-y-3">
              {exam.videos.map((video, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-bold text-white group-hover:text-purple-400 transition-colors">{video.title}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          ⏱ {video.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          👁 {video.views.toLocaleString()} просмотров
                        </span>
                      </div>
                    </div>
                    <button className="rounded-lg bg-gradient-to-r from-purple-600 to-orange-600 px-3 py-2 text-xs font-bold text-white shadow-lg hover:scale-105 transition-transform">
                      ▶ Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4">
          <p className="text-sm text-emerald-100">
             <strong>Совет:</strong> Начните с просмотра видео уроков, затем изучите материалы из книг для углубленного понимания темы.
          </p>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const [selectedExam, setSelectedExam] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleExamClick = (exam) => {
    setSelectedExam(exam)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedExam(null)
  }

  const prototypeIcons = []
  const prototypeLabels = ['AI Chat', 'Video Courses', 'Tests', 'Analytics']

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Modal Component */}
      <ExamModal exam={selectedExam} isOpen={isModalOpen} onClose={closeModal} />

      <section id="home" className="pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex max-w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white/90 shadow-lg backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.25)] animate-pulse" />
              AI that learns with you, not at you.
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Learn faster with
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                an AI classroom buddy.
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-slate-300">
              HelpAI blends human coaching, crisp micro-lessons, and an always-on AI helper so you
              never feel stuck. Built for teams running live webinars and learners staying on pace.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#dashboard"
                className="rounded-2xl bg-gradient-to-r from-purple-600 via-purple-600 to-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
              >
                See the dashboard
              </a>
              <a
                href="#webinar"
                className="rounded-2xl border-2 border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105"
              >
                Join a live webinar
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all hover:scale-105"
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-purple-600/5 to-orange-600/5 p-6 shadow-2xl lg:block transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-purple-600/10" />
            <div className="h-[520px] w-full flex items-center justify-center text-9xl animate-pulse">
              🚀
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl sm:grid-cols-3">
          {learningBlocks.map((block) => (
            <div key={block.title} className="flex flex-col gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-purple-600 to-orange-600 text-lg font-bold text-white shadow-lg transition-transform hover:rotate-12">
                  ✦
                </span>
                <h3 className="text-lg font-bold text-white">{block.title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{block.detail}</p>
            </div>
          ))}
        </div>

        <section id="difficulties" className="mt-16">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-rose-200">Қиындықтар</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Деректер сөйлейді</h2>
            <p className="max-w-3xl text-sm text-slate-400">
              Оқу сапасы, мұғалім тапшылығы және психологиялық қысым — HelpAI осыны шешуге бағытталған.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {difficulties.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-purple-600/10 to-orange-600/5 p-6 shadow-xl transition-all hover:scale-105"
              >
                <p className="text-4xl font-bold text-white">{item.value}</p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mt-16 px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm font-semibold text-emerald-200">Our Solution ✨</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built for real classrooms 
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-purple-600/5 to-orange-600/5 p-6 shadow-2xl hover:scale-105 hover:from-white/10 hover:to-orange-600/20 transition-all duration-300 ease-in-out cursor-pointer group"
              >
                <p className="text-lg font-bold text-white flex items-center gap-2">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-4 left-6 w-10 h-1 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            {examSolutions.map((exam) => (
              <div
                key={exam.id}
                onClick={() => handleExamClick(exam)}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-purple-600/5 to-orange-600/5 p-6 shadow-2xl hover:scale-105 hover:from-white/10 hover:to-orange-600/20 transition-all duration-300 ease-in-out cursor-pointer group"
              >
                <span className="absolute top-4 right-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {exam.emoji}
                </span>

                <div className="mb-4">
                  <p className="text-xl font-bold text-white mb-2">{exam.title}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{exam.desc}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                  <span> {exam.books.length} книг</span>
                  <span>•</span>
                  <span> {exam.videos.length} видео</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-orange-600 text-xs font-bold text-white">
                      {exam.curator.avatar}
                    </div> */}
                    <span className="text-xs flex text-slate-400">Куратор</span>
                  </div>
                  <span className="text-xs font-bold text-purple-400 group-hover:text-orange-400 transition-colors">
                    Открыть →
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 w-10 h-1 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        <section id="prototype" className="mt-16">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-cyan-200">Prototype</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Try the feel</h2>
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200">
              Hackathon-ready
            </span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prototypes.map((card, index) => (
              <div
                key={card.id}
                className="group relative h-40 overflow-hidden rounded-3xl border-2 border-purple-400/40 bg-gradient-to-br from-purple-600/10 via-orange-600/5 to-purple-600/5 shadow-xl transition-all duration-500 hover:border-purple-400/80 hover:scale-105 float-animation"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0s' }} />
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
                    <div className="relative text-6xl group-hover:scale-110 transition-transform duration-500">
                      {prototypeIcons[index]}
                    </div>
                  </div>
                  
                  <p className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                    {prototypeLabels[index]}
                  </p>
                  
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span 
                        key={i} 
                        className="h-1 w-8 rounded-full bg-white/30 group-hover:bg-purple-400 transition-all duration-300"
                        style={{ 
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-orange-600/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-200">Team</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Shipping with speed</h2>
            </div>
            <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-slate-300">Distributed</span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.role}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-white">{member.role}</p>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.25)] animate-pulse" />
                </div>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/20 via-purple-600/10 to-orange-600/10 p-8 shadow-2xl transition-all hover:scale-105">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-white">Contact</p>
                <p className="mt-2 text-xl font-bold text-white">+7 (705) 253 6494</p>
                <p className="mt-1 text-sm text-slate-200">helpAI@gmail.com</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="tel:+77052536494"
                  className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  Call
                </a>
                <a
                  href="mailto:helpAI@gmail.com"
                  className="rounded-2xl bg-gradient-to-r from-purple-600 to-orange-600 px-5 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home