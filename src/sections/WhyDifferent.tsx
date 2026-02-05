import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: '3D Visualization',
    titleSinhala: 'ත්‍රිමාණ දෘශ්‍යකරණය',
    description: "We use cutting-edge simulations to show how forces, waves, and particles actually work in real-time. See physics come alive!",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    badge: 'Interactive Learning',
  },
  {
    id: 2,
    title: "The 'Speed' Formula",
    titleSinhala: "'වේග' සූත්‍රය",
    description: "Master the art of solving MCQs in under 60 seconds. Our logic-first approach ensures you tackle any problem with confidence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: 'Exam Mastery',
  },
  {
    id: 3,
    title: 'Digital Ecosystem',
    titleSinhala: 'ඩිජිටල් පද්ධතිය',
    description: 'Access tutorials, recorded sessions, and practice papers 24/7 through our upcoming student portal. Learn anytime, anywhere.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: '24/7 Access',
  },
];

const WhyDifferent = () => {
  return (
    <section id="why-different" className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-plasma-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>
              Why Physics<span className="text-electric-400">+</span> is Different
            </h2>
            <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              අපගේ ඉගැන්වීම් ක්‍රමය වෙනස් වන්නේ ඇයි?
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="group h-full glass-card glass-card-hover p-6 sm:p-8">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-electric-400 to-electric-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-md transition-all duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>
                  {feature.title}
                </h3>
                <p className="text-electric-400 text-sm mb-4 font-medium">
                  {feature.titleSinhala}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-plasma-500/10 border border-plasma-500/30 rounded-full">
                  <svg className="w-4 h-4 text-plasma-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-plasma-400 text-sm font-semibold">
                    {feature.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#batches"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Enroll Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferent;
