export default function Bio() {
  return (
    <section id="about" className="py-20 bg-physics-dark-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-quantum-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
              <img
                src="/placeholder-profile.jpg"
                alt="Physics Teacher"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-electric-500/20 rounded-full blur-2xl group-hover:bg-electric-500/30 transition-all duration-500" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-plasma-500/15 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About the <span className="text-electric-400">Instructor</span>
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              With over 15 years of experience in teaching physics, I have helped
              thousands of students achieve their academic goals. My teaching methodology
              focuses on building strong conceptual understanding rather than rote learning.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass-card glass-card-hover p-4">
                <h3 className="text-2xl font-bold text-electric-400">15+</h3>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div className="glass-card glass-card-hover p-4">
                <h3 className="text-2xl font-bold text-electric-400">5000+</h3>
                <p className="text-slate-400">Students Taught</p>
              </div>
              <div className="glass-card glass-card-hover p-4">
                <h3 className="text-2xl font-bold text-electric-400">95%</h3>
                <p className="text-slate-400">Success Rate</p>
              </div>
              <div className="glass-card glass-card-hover p-4">
                <h3 className="text-2xl font-bold text-electric-400">4.9</h3>
                <p className="text-slate-400">Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
