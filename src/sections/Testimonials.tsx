import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Kasun Perera',
    batch: '2025 A/L',
    zscore: '1.8952',
    university: 'University of Colombo - Engineering',
    image: '/placeholder-student.jpg',
    testimonial: "The visualization techniques and logical approach made complex topics incredibly easy to understand. I couldn't have achieved this Z-score without this guidance!",
  },
  {
    id: 2,
    name: 'Sanduni Fernando',
    batch: '2025 A/L',
    zscore: '1.9123',
    university: 'University of Moratuwa - Engineering',
    image: '/placeholder-student.jpg',
    testimonial: 'Best physics teacher I ever had! The teaching method is unique and effective. Highly recommend to anyone serious about A/L physics.',
  },
  {
    id: 3,
    name: 'Tharindu Silva',
    batch: '2024 A/L',
    zscore: '1.8645',
    university: 'University of Peradeniya - Medicine',
    image: '/placeholder-student.jpg',
    testimonial: 'Crystal clear explanations and amazing study materials. The practical examples helped me grasp difficult concepts effortlessly.',
  },
  {
    id: 4,
    name: 'Amaya Jayasinghe',
    batch: '2024 A/L',
    zscore: '1.9234',
    university: 'University of Colombo - Medicine',
    image: '/placeholder-student.jpg',
    testimonial: 'Thanks to the excellent teaching methodology, I was able to secure a top rank. The personalized attention made all the difference!',
  },
  {
    id: 5,
    name: 'Ravindu Gunasekara',
    batch: '2023 A/L',
    zscore: '1.8891',
    university: 'University of Moratuwa - IT',
    image: '/placeholder-student.jpg',
    testimonial: 'The interactive sessions and problem-solving techniques were game-changers. Physics became my strongest subject thanks to this class!',
  },
  {
    id: 6,
    name: 'Thisali Bandara',
    batch: '2023 A/L',
    zscore: '1.9067',
    university: 'University of Colombo - Physical Science',
    image: '/placeholder-student.jpg',
    testimonial: 'Outstanding teaching! The way complex theories were broken down into simple concepts was remarkable. Truly life-changing experience.',
  },
];

const Testimonials = () => {

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-b from-physics-dark-900 to-physics-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hall of <span className="text-electric-400">Fame</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Success stories from our students who achieved exceptional results in GCE A/L
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full glass-card glass-card-hover p-6">
                {/* Student Info */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center flex-shrink-0 ring-2 ring-electric-400/20 group-hover:shadow-glow-sm transition-shadow duration-300">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">{testimonial.batch}</p>

                    {/* Z-Score Badge */}
                    <div className="inline-flex items-center gap-2 bg-plasma-500/10 border border-plasma-500/30 rounded-full px-3 py-1">
                      <svg
                        className="w-4 h-4 text-plasma-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-plasma-400 font-bold text-sm">
                        Z: {testimonial.zscore}
                      </span>
                    </div>
                  </div>
                </div>

                {/* University */}
                <div className="flex items-center gap-2 mb-4 text-electric-400 text-sm">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="line-clamp-1">{testimonial.university}</span>
                </div>

                {/* Testimonial Text */}
                <div className="relative">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-electric-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="text-slate-300 text-sm leading-relaxed pl-6">
                    {testimonial.testimonial}
                  </p>
                </div>

                {/* Success Badge */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Verified Student</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-plasma-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          <div className="glass-card p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-electric-400 mb-2">
                  98%
                </div>
                <div className="text-slate-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-electric-400 mb-2">
                  1.85+
                </div>
                <div className="text-slate-400 text-sm">Average Z-Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-electric-400 mb-2">
                  500+
                </div>
                <div className="text-slate-400 text-sm">University Entries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-electric-400 mb-2">
                  85%
                </div>
                <div className="text-slate-400 text-sm">A Grades</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
