export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary-400 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary-600 blur-3xl animate-float delay-200"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Subtitle */}
            <p className="mb-6 text-lg font-semibold uppercase tracking-wider text-primary-600 animate-fade-in">
              Student Nurse • Brand Storyteller • Content Creator • Product Marketer  
            </p>

            {/* Main Heading */}
            <h1 className="mb-8 text-6xl font-bold leading-tight md:text-7xl lg:text-8xl animate-scale-in delay-200" style={{fontFamily: 'var(--font-playfair)'}}>
              <span className="text-neutral-900">Hi, I'm </span>
              <span className="text-gradient animate-pulse-glow">Abdulahi Samiat</span>
            </h1>

            {/* Description */}
            <p className="mb-12 text-xl text-neutral-600 md:text-2xl animate-fade-in delay-400">
              I craft compelling narratives that don't just speak to audiences—
              <span className="font-semibold text-primary-600"> they resonate, inspire, and drive action.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-600">
              <button className="btn btn-primary px-8 py-4 text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 transition-all">
                View My Work
              </button>
              <button className="btn bg-neutral-900 text-white px-8 py-4 text-lg hover:bg-neutral-800 hover:scale-105 transition-all">
                Let's Collaborate
              </button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 animate-fade-in delay-800">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-gradient" style={{fontFamily: 'var(--font-playfair)'}}>50+</div>
                <div className="text-neutral-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-gradient" style={{fontFamily: 'var(--font-playfair)'}}>100K+</div>
                <div className="text-neutral-600">Content Views</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-gradient" style={{fontFamily: 'var(--font-playfair)'}}>30+</div>
                <div className="text-neutral-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-neutral-400">
            <span className="text-sm">Scroll to explore</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{fontFamily: 'var(--font-playfair)'}}>
              Turning <span className="text-gradient">Ideas</span> Into Impact
            </h2>
            <p className="mb-8 text-lg text-neutral-600 leading-relaxed">
              I'm Abdulahi Samiat, a Student Nurse and Brand Storyteller who believes every brand 
              has a story worth telling. With a unique blend of healthcare empathy and creative expertise, 
              I help businesses and individuals find their voice in a crowded digital landscape.
            </p>
            <button className="btn btn-primary hover:scale-105 transition-transform">
              Learn More About Me
            </button>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl" style={{fontFamily: 'var(--font-playfair)'}}>
            What I <span className="text-gradient">Do</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Service Card 1 */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg card-hover">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>Content Writing</h3>
              <p className="text-neutral-600">
                Engaging blog posts, articles, and web copy that tell your brand story with clarity.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg card-hover">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>Social Media Management</h3>
              <p className="text-neutral-600">
                Strategic social media management that builds communities and drives results.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg card-hover">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>Brand Storytelling</h3>
              <p className="text-neutral-600">
                Authentic narratives that create lasting emotional connections with your audience.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg card-hover">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>Content Strategy</h3>
              <p className="text-neutral-600">
                Data-driven strategies that align with your business goals and audience needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-blue text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl animate-fade-in" style={{fontFamily: 'var(--font-playfair)'}}>
            Ready to Tell Your Story?
          </h2>
          <p className="mb-10 text-xl opacity-90 animate-fade-in delay-200">
            Let's create something extraordinary together
          </p>
          <button className="btn bg-white text-primary-600 px-8 py-4 text-lg hover:bg-neutral-50 hover:scale-105 transition-all shadow-xl animate-fade-in delay-400">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}