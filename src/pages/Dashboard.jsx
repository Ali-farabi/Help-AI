import { useState, useEffect, useRef } from 'react'

const courseData = [
  {
    id: 1,
    title: 'AI ChatBot Development',
    progress: 76,
    teacher: 'Dr. Aida Kuanysh',
    description: 'Изучите создание умных чат-ботов с использованием AI',
    books: [
      { title: 'Natural Language Processing Basics', author: 'John Smith', pages: 320 },
      { title: 'Chatbot Architecture', author: 'Sarah Johnson', pages: 245 },
      { title: 'AI Dialog Systems', author: 'Michael Chen', pages: 410 },
    ],
    videos: [
      { title: 'Introduction to Chatbots', duration: '15:30', views: 1250 },
      { title: 'Building Your First Bot', duration: '22:45', views: 980 },
      { title: 'Advanced AI Integration', duration: '28:20', views: 756 },
      { title: 'Deployment & Testing', duration: '18:15', views: 543 },
    ],
  },
  {
    id: 2,
    title: 'Video Courses Production',
    progress: 52,
    teacher: 'Prof. Elena Petrova',
    description: 'Создание качественных обучающих видео курсов',
    books: [
      { title: 'Video Production Guide', author: 'David Lee', pages: 280 },
      { title: 'Educational Content Design', author: 'Emma Wilson', pages: 195 },
    ],
    videos: [
      { title: 'Video Planning & Scripting', duration: '20:10', views: 890 },
      { title: 'Recording Techniques', duration: '25:30', views: 672 },
      { title: 'Editing & Post-Production', duration: '30:45', views: 445 },
    ],
  },
  {
    id: 3,
    title: 'Teacher Platform Management',
    progress: 34,
    teacher: 'Dr. Askar Nurlanov',
    description: 'Управление платформой для учителей и вакансиями',
    books: [
      { title: 'Platform Management', author: 'Robert Brown', pages: 350 },
      { title: 'HR & Recruitment', author: 'Lisa Anderson', pages: 275 },
    ],
    videos: [
      { title: 'Platform Overview', duration: '12:20', views: 567 },
      { title: 'Teacher Matching System', duration: '19:45', views: 423 },
    ],
  },
]

const CourseModal = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#242424] p-8 shadow-2xl shadow-[#6C5BD4]/30"
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

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white font-clash mb-2">{course.title}</h2>
          <p className="text-slate-400">{course.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] text-lg font-bold text-white">
              {course.teacher.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm text-slate-400">Учитель</p>
              <p className="text-base font-bold text-white">{course.teacher}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-white font-clash mb-4 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Книги
            </h3>
            <div className="space-y-3">
              {course.books.map((book, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
                >
                  <p className="font-bold text-white">{book.title}</p>
                  <p className="text-sm text-slate-400 mt-1">{book.author}</p>
                  <p className="text-xs text-slate-500 mt-1">{book.pages} страниц</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-white font-clash mb-4 flex items-center gap-2">
              <span className="text-2xl">🎥</span>
              Видео
            </h3>
            <div className="space-y-3">
              {course.videos.map((video, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-bold text-white">{video.title}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                        <span>⏱ {video.duration}</span>
                        <span>👁 {video.views} просмотров</span>
                      </div>
                    </div>
                    <button className="rounded-lg bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-3 py-1.5 text-xs font-bold text-white">
                      Смотреть
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const handleStartFocus = () => {
  if (isTimerRunning) {
    setIsTimerRunning(false)
    setTimeLeft(25 * 60) 
    setNotification('⏸ Focus session stopped and reset')
  } else {
    setIsTimerRunning(true)
    setNotification('▶ Focus session started! Stay focused!')
  }
  setTimeout(() => setNotification(null), 3000)
}
const Dashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) 
  const [notification, setNotification] = useState(null)
  const [aiMessage, setAiMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      type: 'user',
      text: "Summarize yesterday's webinar into 3 bullet points.",
    },
    {
      type: 'ai',
      text: [
        'Key takeaways on prompting frameworks.',
        'Hands-on demo with research co-pilot.',
        'Assignment: craft a brief using STAR outline.',
      ],
    },
  ])
  const timerIntervalRef = useRef(null)

  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false)
            setNotification('Focus session completed! Great job!')
            setTimeout(() => setNotification(null), 5000)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }
  }, [isTimerRunning])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStartFocus = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false)
      setNotification('⏸ Focus session paused')
    } else {
      setIsTimerRunning(true)
      setNotification('▶ Focus session started! Stay focused!')
    }
    setTimeout(() => setNotification(null), 3000)
  }

  const handleScheduleBreak = () => {
    setNotification(' Break scheduled for 5 minutes from now')
    setTimeout(() => setNotification(null), 4000)
  }

  const handleNudge = () => {
    setNotification(' Reminder: You have 10 minutes left in your focus session!')
    setTimeout(() => setNotification(null), 4000)
  }

  const handleSendMessage = () => {
    if (!aiMessage.trim()) return

    const newUserMessage = {
      type: 'user',
      text: aiMessage,
    }

    const aiResponses = [
      [
        'Great question! Let me help you with that.',
        'Here are the key points you need to know.',
        'I recommend reviewing the materials in section 3.',
      ],
      [
        'Based on your progress, here is what I suggest:',
        'Focus on completing the current module first.',
        'Then move on to the practice exercises.',
      ],
      [
        'Excellent! You are making good progress.',
        'Continue with the next lesson when ready.',
        'Remember to take breaks between sessions.',
      ],
    ]

    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

    setMessages([...messages, newUserMessage, { type: 'ai', text: randomResponse }])
    setAiMessage('')
    setNotification('✅ Message sent!')
    setTimeout(() => setNotification(null), 2000)
  }

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCourse(null)
  }

  return (
    <section id="dashboard" className="mt-20">
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-pulse">
          <div className="rounded-2xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-6 py-3 shadow-xl shadow-[#6C5BD4]/40">
            <p className="text-sm font-bold text-white">{notification}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-cyan-300">Dashboard</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Hi, Ali</h2>
        <p className="max-w-3xl text-sm text-slate-400">
          Here&apos;s your focus plan for today. Keep the streak alive, check in with the AI helper,
          and jump back into your courses.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-[#6C5BD4]/10 to-[#FF6000]/5 p-8 shadow-2xl shadow-[#6C5BD4]/20 hover-lift">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400 font-medium">Next focus block</p>
                <p className={`text-5xl font-bold font-clash mt-1 ${isTimerRunning ? 'text-[#FF6000] animate-pulse' : 'text-white'}`}>
                  {formatTime(timeLeft)}
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Streak 7 days
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleStartFocus}
                className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  isTimerRunning
                    ? 'bg-[#FF6000] text-white shadow-lg shadow-[#FF6000]/40'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {isTimerRunning ? '⏸ Pause' : '▶ Start focus'}
              </button>
              <button
                onClick={handleScheduleBreak}
                className="rounded-2xl border-2 border-white/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white hover:scale-105"
              >
                Schedule break
              </button>
              <button
                onClick={handleNudge}
                className="rounded-2xl border-2 border-[#FF6000]/60 bg-[#FF6000]/15 px-5 py-2.5 text-sm font-bold text-[#FF6000] transition-all duration-300 hover:border-[#FF6000] hover:text-white hover:scale-105"
              >
                 Nudge me
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-[#6C5BD4]/10 hover-lift">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-clash">My courses</h3>
              <button className="text-xs font-bold text-[#6C5BD4] transition-colors hover:text-[#FF6000]">View all</button>
            </div>
            <div className="mt-6 space-y-4">
              {courseData.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseClick(course)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-white">{course.title}</p>
                    <span className="text-xs font-bold text-slate-400">{course.progress}%</span>
                  </div>
                  <div className="mt-4 h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] transition-all duration-500`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-[#6C5BD4]/10 hover-lift">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400 font-medium">AI helper</p>
                <h3 className="text-xl font-bold text-white font-clash mt-1">Need a quick summary?</h3>
              </div>
              <span className="rounded-2xl bg-gradient-to-br from-[#6C5BD4] to-[#FF6000] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30">
                Live
              </span>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-200 max-h-64 overflow-y-auto">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-4 transition-all duration-300 ${
                    msg.type === 'user'
                      ? 'border-white/10 bg-white/5 hover:bg-white/10'
                      : 'border-[#6C5BD4]/30 bg-[#6C5BD4]/10 hover:bg-[#6C5BD4]/15'
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-wide font-bold ${
                      msg.type === 'user' ? 'text-slate-400' : 'text-[#6C5BD4]'
                    }`}
                  >
                    {msg.type === 'user' ? 'You' : 'HelpAI'}
                  </p>
                  {msg.type === 'user' ? (
                    <p className="mt-2">{msg.text}</p>
                  ) : (
                    <ul className="mt-3 list-disc pl-5 text-slate-100 space-y-1">
                      {msg.text.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <input
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                placeholder="Ask HelpAI anything..."
              />
              <button
                onClick={handleSendMessage}
                className="rounded-xl bg-gradient-to-r from-[#6C5BD4] to-[#FF6000] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#6C5BD4]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6C5BD4]/40"
              >
                Send
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-[#6C5BD4]/10 hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 font-medium">Progress</p>
                <h3 className="text-lg font-bold text-white font-clash mt-1">This week</h3>
              </div>
              <span className="rounded-2xl border border-emerald-300/40 bg-emerald-300/15 px-4 py-1.5 text-xs font-bold text-emerald-100 shadow-lg shadow-emerald-400/20">
                +18% vs last week
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <p className="text-3xl font-bold text-white font-clash">6h</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">Deep work</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <p className="text-3xl font-bold text-white font-clash">3</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">Completed modules</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <p className="text-3xl font-bold text-white font-clash">92%</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">Quiz avg.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseModal course={selectedCourse} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

export default Dashboard

