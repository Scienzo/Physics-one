import { motion } from "framer-motion";
import portraitImage from "../assets/images/portrait.jpg";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden font-inter"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait Column - Shows first on mobile */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
          >
            <div className="relative group">
              {/* Glassmorphism Card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
                {/* Animated Glow Effect Behind Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-400/30 to-plasma-500/20 rounded-3xl blur-2xl transform scale-110 group-hover:scale-115 transition-transform duration-700" />

                {/* Rotating Border Gradient */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-electric-400 via-plasma-500 to-electric-400 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 200%' }} />

                {/* Glass Card */}
                <div className="relative h-full backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--border-default)' }}>
                  {/* Portrait Image */}
                  <div className="absolute inset-3 rounded-2xl overflow-hidden">
                    <img
                      src={portraitImage}
                      alt="Physics Lecturer Portrait"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-physics-dark-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-electric-400/50 rounded-tr-xl" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-electric-400/50 rounded-bl-xl" />

                  {/* Decorative Dots */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-plasma-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* E=mc² Badge */}
                <motion.div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4"
                  initial={{ opacity: 0, rotate: -10, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.8,
                  }}
                >
                  {/* <div className="bg-gradient-to-r from-electric-400 to-electric-600 p-[1px] rounded-xl shadow-glow-md">
                    <div className="bg-physics-dark-900 px-4 py-2 rounded-xl">
                      <span className="text-electric-400 font-mono text-sm sm:text-base font-bold tracking-wider">
                        E = mc²
                      </span>
                    </div>
                  </div> */}
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4"
                  initial={{ opacity: 0, rotate: 10, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1,
                  }}
                >
                  <div className="backdrop-blur-lg px-4 py-2 rounded-xl border border-electric-400/30 shadow-glow-sm" style={{ backgroundColor: 'var(--glass-bg)' }}>
                    <span className="font-bold text-sm sm:text-base" style={{ color: 'var(--text-heading)' }}>15+ Years</span>
                    <p className="text-electric-400 text-xs font-medium">Teaching Excellence</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                GCE A/L 2026 Batch Now Open
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              style={{ color: 'var(--text-heading)' }}
            >
              Master the{" "}
              <span
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                style={{
                  textShadow: "0 0 40px rgba(34, 211, 238, 0.5)",
                }}
              >
                Laws
                {/* Glow Effect */}
                <span
                  className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400/30 to-blue-400/30 -z-10"
                  aria-hidden="true"
                />
              </span>{" "}
              of Physics
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Advanced visualization and logic-first learning designed for
              ambitious GCE A/L 2026 students. Transform complex concepts into
              crystal-clear understanding.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 overflow-hidden transition-shadow hover:shadow-cyan-500/40 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join 2026 Batch
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-cyan-400/30 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Sample
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-500"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <span className="text-sm">500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-sm">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm">A Grade Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
    </section>
  );
};

export default Hero;