import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'How do I get the printed tutorials (tutes)?',
    questionSinhala: 'මුද්‍රිත නිබන්ධන ලබා ගන්නේ කෙසේද?',
    answer: 'Printed tutorials are distributed during physical classes. For online students, we courier the materials to your doorstep within 3-5 business days after registration. Alternatively, you can collect them from our office in Colombo.',
  },
  {
    id: 2,
    question: 'Can I watch missed sessions?',
    questionSinhala: 'මඟ හැරුණු සැසි නැරඹිය හැකිද?',
    answer: 'Yes! All online sessions are recorded and shared via our private student group within 24 hours. Recordings are available for 30 days after each session. Our upcoming LMS will provide permanent access to all recordings.',
  },
  {
    id: 3,
    question: 'What is the monthly fee?',
    questionSinhala: 'මාසික ගාස්තුව කීයද?',
    answer: 'Our fees vary by batch type. Theory classes are Rs. 3,500/month, Revision classes are Rs. 4,000/month, and Paper classes are Rs. 2,500/month. Sibling discounts and scholarship options are available for deserving students. Contact us for details.',
  },
  {
    id: 4,
    question: 'Is there a trial class available?',
    questionSinhala: 'අත්හදා බැලීමේ පන්තියක් තිබේද?',
    answer: 'Absolutely! We offer a free trial class for all new students. This allows you to experience our teaching methodology before committing. Contact us via WhatsApp to schedule your trial session.',
  },
  {
    id: 5,
    question: 'What platform do you use for online classes?',
    questionSinhala: 'මාර්ගගත පන්ති සඳහා කුමන වේදිකාවක් භාවිතා කරන්නේද?',
    answer: 'We conduct live classes via Zoom with interactive whiteboards and screen sharing. Class links and materials are shared through our dedicated WhatsApp group. Our upcoming LMS will provide an even more seamless learning experience.',
  },
  {
    id: 6,
    question: 'Do you provide individual doubt clearing sessions?',
    questionSinhala: 'තනි සැක දුරු කිරීමේ සැසි සපයන්නේද?',
    answer: 'Yes, we encourage students to ask questions anytime via WhatsApp. For complex doubts, we arrange one-on-one sessions. Additionally, we have dedicated Q&A time at the end of each class.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-plasma-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>
              Frequently Asked <span className="text-electric-400">Questions</span>
            </h2>
            <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              නිතර අසන ප්‍රශ්න
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card overflow-hidden hover:border-electric-400/30 transition-all duration-300">
                {/* Question Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>
                      {faq.question}
                    </h3>
                    <p className="text-sm text-electric-400">
                      {faq.questionSinhala}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-electric-500/10 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 text-electric-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Answer Body */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openId === faq.id ? 'auto' : 0,
                    opacity: openId === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                    <div className="pl-0 sm:pl-2 border-l-2 border-electric-400/30">
                      <p className="text-sm sm:text-base leading-relaxed pl-4" style={{ color: 'var(--text-secondary)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-electric-500/10 to-electric-600/10 border border-electric-400/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>
              Got Questions?
            </h3>
            <p className="mb-6 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              Feel free to reach out to us anytime via WhatsApp
            </p>
            <a
              href="https://wa.me/94XXXXXXXXX?text=Hello!%20I%20have%20a%20question%20about%20the%20Physics%20class."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] hover:bg-[#1EBE57] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
