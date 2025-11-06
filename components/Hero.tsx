export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-8 animate-fade-in">
        
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
          </div>
          <span className="text-sm text-gray-300">Trusted by 500+ companies worldwide</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          AI Solutions That
          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Drive Real Results
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Custom AI development tailored to your business needs. Our expert team delivers measurable ROI with cutting-edge machine learning solutions.
        </p>

        {/* Key benefits */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base md:text-lg text-gray-400">
              <span className="text-white font-semibold">Custom AI Models</span> - Built specifically for your industry and use case
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base md:text-lg text-gray-400">
              <span className="text-white font-semibold">Proven Track Record</span> - Average 40% efficiency increase within 6 months
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base md:text-lg text-gray-400">
              <span className="text-white font-semibold">Expert Team</span> - 15+ years combined experience in AI/ML development
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Start Your AI Journey
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
            View Case Studies
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-white/10">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Active Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">40%</div>
            <div className="text-sm text-gray-400">Avg. ROI Increase</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative lg:h-[700px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Main image container with glow effect */}
        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-purple-500/20 blur-3xl"></div>
          
          {/* Image */}
          <div className="relative h-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop" 
              alt="Modern tech workspace with AI development"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Floating stats card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-300 mb-1">Latest Project</div>
              <div className="text-xl font-bold text-white">AI Automation Platform</div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-lg border border-teal-500/30">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-teal-300">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-xs text-gray-400">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$2M</div>
              <div className="text-xs text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

    </div>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
</section>
  );
}