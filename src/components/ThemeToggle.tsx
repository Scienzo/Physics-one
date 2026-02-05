import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const themes = [
    // { value: 'system' as const, label: 'System' },
    { value: 'light' as const, label: 'Light' },
    { value: 'dark' as const, label: 'Dark' },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Simple toggle button for mobile/compact view */}
      <button
        onClick={() => {
          const next = {
            // system: 'light',
            light: 'dark',
            dark: 'light'
          } as const;
          setTheme(next[theme]);
        }}
        className="p-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 border border-white/10 dark:border-white/10 transition-all duration-300 group"
        aria-label={`Current theme: ${theme}. Click to change.`}
        title={`Theme: ${theme}`}
      >
        {/* Sun icon (light mode) */}
        <svg
          className={`w-5 h-5 transition-all duration-300 ${resolvedTheme === 'light'
            ? 'text-plasma-500 rotate-0 scale-100'
            : 'text-slate-400 -rotate-90 scale-0 absolute'
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon icon (dark mode) */}
        <svg
          className={`w-5 h-5 transition-all duration-300 ${resolvedTheme === 'dark'
            ? 'text-electric-400 rotate-0 scale-100'
            : 'text-slate-400 rotate-90 scale-0 absolute'
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        {/* System indicator dot */}
        {/* {theme === 'system' && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
        )} */}
      </button>

      {/* Theme selector dropdown (for desktop) */}
      <div className="hidden group-hover:block absolute top-full right-0 mt-2 py-2 bg-white/10 dark:bg-physics-dark-800/90 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg min-w-[120px]">
        {themes.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${theme === value
              ? 'text-electric-400 bg-electric-500/10'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
          >
            {label}
            {theme === value && (
              <span className="float-right">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
