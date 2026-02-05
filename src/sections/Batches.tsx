import { motion } from 'framer-motion';

const batchesData = [
  {
    id: 1,
    title: '2026 Theory',
    titleSinhala: '2026 න්‍යාය පන්තිය',
    schedule: 'Saturdays, 8:00 AM - 11:00 AM',
    mode: 'Online via Zoom',
    capacity: 'Limited to 50 Students',
    status: 'ONGOING',
    statusColor: 'bg-green-500',
    description: 'Starting March 2025',
    badge: 'NEW BATCH',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '2025 Revision',
    titleSinhala: '2025 පුනරීක්ෂණ පන්තිය',
    schedule: 'Sundays, 2:00 PM - 5:00 PM',
    mode: 'Hybrid (Online + Physical)',
    capacity: 'Intensive Exam Prep',
    status: 'EXAM FOCUSED',
    statusColor: 'bg-plasma-500',
    description: 'Currently Active',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Paper Class',
    titleSinhala: 'ප්‍රශ්න පත්‍ර පන්තිය',
    schedule: 'Fridays, 6:00 PM - 8:00 PM',
    mode: 'Online Only',
    capacity: 'Past Papers & Model Papers',
    status: 'WEEKLY',
    statusColor: 'bg-electric-500',
    description: 'Weekly Sessions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Batches() {
  const openWhatsApp = (batchName: string) => {
    const message = encodeURIComponent(`I want to join the ${batchName}`);
    window.open(`https://wa.me/94XXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section id="batches" className="py-16 sm:py-20 bg-gradient-to-b from-physics-dark-800 to-physics-dark-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-plasma-500/5 rounded-full blur-3xl" />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Active <span className="text-electric-400">Batches</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              දැනට පවතින පන්ති කණ්ඩායම්
            </p>
          </motion.div>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {batchesData.map((batch, index) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Badge */}
              {batch.badge && (
                <div className="absolute -top-3 -right-3 z-10">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-plasma-500 to-plasma-600 text-white text-xs font-bold rounded-full shadow-plasma-glow">
                    {batch.badge}
                  </span>
                </div>
              )}

              <div className="h-full glass-card glass-card-hover p-6 sm:p-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-electric-400 to-electric-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-glow-md transition-all duration-300">
                    <div className="text-white">
                      {batch.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {batch.title}
                    </h3>
                    <p className="text-electric-400 text-sm">
                      {batch.titleSinhala}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-electric-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{batch.description}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-electric-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{batch.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-electric-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>{batch.mode}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-electric-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{batch.capacity}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 ${batch.statusColor} text-white text-xs font-bold rounded-full`}>
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    {batch.status}
                  </span>
                </div>

                {/* Join Button */}
                <button
                  onClick={() => openWhatsApp(batch.title)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#1EBE57] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Join WhatsApp Group
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
