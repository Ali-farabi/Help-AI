const VideoWebinar = () => {
  return (
    <section id="webinar-video" className="mt-20">
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
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-[#6C5BD4]/20 hover-lift">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Ayuy4zGnfkQ?si=uZDEsdaridOFBksP"
            title="HelpAI Webinar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default VideoWebinar

