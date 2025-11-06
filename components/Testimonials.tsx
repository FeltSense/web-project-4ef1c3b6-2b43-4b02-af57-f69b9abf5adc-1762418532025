export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full border border-blue-200/50 mb-6">
        <span className="text-2xl">💬</span>
        <span className="text-sm font-semibold text-blue-700">Client Success Stories</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
        Trusted by Industry Leaders
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        See how Imaginary Space has transformed businesses with cutting-edge AI solutions and innovative software development
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Testimonial 1 - E-commerce Success */}
      <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" 
              alt="Michael Chen"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
            />
            <div className="flex text-xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Their AI-powered recommendation engine increased our conversion rate by 47% in just three months. The machine learning algorithms they built understand our customers better than we ever could manually. Revenue is up $280K this quarter alone."
          </blockquote>

          <div className="pt-6 border-t border-gray-100">
            <div className="font-bold text-gray-900 text-lg">Michael Chen</div>
            <div className="text-sm text-gray-600 mt-1">VP of E-commerce</div>
            <div className="text-sm text-gray-500 mt-1">TechStyle Retail Group</div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
              Read full case study
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Healthcare Innovation */}
      <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg" 
              alt="Dr. Sarah Williams"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
            />
            <div className="flex text-xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "The patient management system they developed reduced our administrative workload by 60%. Appointment scheduling that used to take 15 minutes now takes 2. Our staff can finally focus on patient care instead of paperwork. Game-changing for our practice."
          </blockquote>

          <div className="pt-6 border-t border-gray-100">
            <div className="font-bold text-gray-900 text-lg">Dr. Sarah Williams</div>
            <div className="text-sm text-gray-600 mt-1">Chief Medical Officer</div>
            <div className="text-sm text-gray-500 mt-1">HealthFirst Medical Center</div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
              View implementation details
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Financial Services */}
      <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/29/03/35/man-1867175_1280.jpg" 
              alt="James Rodriguez"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100 group-hover:ring-teal-200 transition-all duration-300"
            />
            <div className="flex text-xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Their fraud detection AI caught $1.2M in fraudulent transactions in the first month alone. The system learns and adapts in real-time, blocking suspicious activity before it impacts our clients. ROI was immediate and continues to compound monthly."
          </blockquote>

          <div className="pt-6 border-t border-gray-100">
            <div className="font-bold text-gray-900 text-lg">James Rodriguez</div>
            <div className="text-sm text-gray-600 mt-1">Director of Security</div>
            <div className="text-sm text-gray-500 mt-1">SecureBank Financial</div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
              Explore security features
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Manufacturing */}
      <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" 
              alt="Emily Thompson"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
            />
            <div className="flex text-xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "The predictive maintenance system they built reduced our equipment downtime by 73%. We went from 12 hours of unexpected breakdowns per month to less than 3. That's an extra $450K in production capacity we didn't have before."
          </blockquote>

          <div className="pt-6 border-t border-gray-100">
            <div className="font-bold text-gray-900 text-lg">Emily Thompson</div>
            <div className="text-sm text-gray-600 mt-1">Operations Director</div>
            <div className="text-sm text-gray-500 mt-1">Precision Manufacturing Co.</div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
              See technical breakdown
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 5 - Education Technology */}
      <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg" 
              alt="David Park"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
            />
            <div className="flex text-xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Their adaptive learning platform increased student engagement by 85% and test scores by an average of 23 points. The AI personalizes content for each student's learning style. Teachers love it, students love it, parents love it."
          </blockquote>

          <div className="pt-6 border-t border-gray-100">
            <div className="font-bold text-gray-900 text-lg">David Park</div>
            <div className="text-sm text-gray-600 mt-1">Dean of Technology</div>
            <div className="text-sm text-gray-500 mt-1">Riverside Academy</div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
              Discover learning outcomes
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial 6 - Logistics */}
      <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg" 
              alt="Rachel Martinez"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100 group-hover:ring-teal-200 transition-all duration-300"
            />
            <div className="flex text-xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Route optimization AI cut our fuel costs by 34% and delivery times by 28%. We're now handling 40% more deliveries with the same fleet size. The real-time tracking dashboard gives us visibility we never had before. Absolute game-changer."
          </blockquote>

          <div className="pt-6 border-t border-gray-100">
            <div className="font-bold text-gray-900 text-lg">Rachel Martinez</div>
            <div className="text-sm text-gray-600 mt-1">VP of Logistics</div>
            <div className="text-sm text-gray-500 mt-1">SwiftShip Delivery</div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
              View optimization metrics
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl">
        <div className="text-white text-left">
          <div className="text-2xl font-bold mb-2">Ready to transform your business?</div>
          <div className="text-blue-100">Join 500+ companies already using Imaginary Space</div>
        </div>
        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
          Start Your Journey →
        </button>
      </div>
    </div>
  </div>
</section>
  );
}