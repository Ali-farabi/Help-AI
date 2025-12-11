import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Webinar from './pages/Webinar'
import VideoWebinar from './pages/VideoWebinar'
import WebinarsPage from './pages/WebinarsPage'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div
      className="dark relative min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(108,91,212,0.2),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,96,0,0.16),transparent_30%),radial-gradient(circle_at_40%_70%,rgba(108,91,212,0.16),transparent_32%)]" />
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-[#6C5BD4]/25 blur-[120px]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#FF6000]/20 blur-[130px]" />
      </div>

      <NavBar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <section id="home">
          <Home />
        </section>
        
        <section id="dashboard">
          <Dashboard />
        </section>
        
        <section id="webinar">
          <Webinar />
        </section>
        
        <section id="video-webinar">
          <VideoWebinar />
        </section>
        
        <section id="webinars-page">
          <WebinarsPage />
        </section>
        
        <section id="team">
          <About />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App