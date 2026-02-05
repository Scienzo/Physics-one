interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-gradient-to-r from-electric-500 to-electric-600 text-white hover:shadow-glow-md hover:scale-105',
    secondary: 'bg-plasma-500 text-white hover:bg-plasma-600 hover:shadow-plasma-glow',
    outline: 'border-2 border-electric-400 text-electric-400 hover:bg-electric-400/10',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
