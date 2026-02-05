import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Batches', href: '#batches' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-2xl border-b shadow-[0_8px_32px_0_var(--shadow-color)] z-50" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--border-default)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold group-hover:text-electric-400 transition-colors duration-200" style={{ color: 'var(--text-heading)' }}>
                Physics<span className="text-electric-400">+</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 font-medium transition-all duration-200 relative group" 
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-heading)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-electric-400 to-electric-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
            <a
              href="#batches"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold rounded-lg hover:shadow-glow-md transition-all duration-200 hover:scale-105"
            >
              Enroll Now
            </a>
            <ThemeToggle className="ml-3" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-electric-400 transition-colors duration-200 p-2"
              style={{ color: 'var(--text-heading)' }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 backdrop-blur-2xl rounded-xl shadow-[0_8px_32px_0_var(--shadow-color)] mt-2" style={{ backgroundColor: 'var(--glass-bg)', border: '1px solid var(--border-default)' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 hover:bg-white/5 rounded-lg mx-2 my-1 transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-2 pt-2">
              <a
                href="#batches"
                className="block text-center py-3 px-4 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
