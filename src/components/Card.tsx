import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'bordered';
  hover?: boolean;
  icon?: ReactNode;
  badge?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  image,
  children,
  className = '',
  variant = 'glass',
  hover = true,
  icon,
  badge,
  onClick,
}: CardProps) {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';

  const variantClasses = {
    default: 'bg-white shadow-lg hover:shadow-xl',
    glass: 'glass-card glass-card-hover',
    gradient: 'bg-gradient-to-br from-electric-500/10 to-electric-600/10 border border-electric-400/20',
    bordered: 'bg-transparent border-2 border-electric-400/30 hover:border-electric-400',
  };

  const hoverClasses = hover ? 'hover:shadow-glow-md cursor-pointer' : '';

  const CardComponent = hover ? motion.div : 'div';
  const motionProps = hover ? {
    whileHover: { y: -8 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  } : {};

  return (
    <CardComponent
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
      {...(hover ? motionProps : {})}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-plasma-500 to-plasma-600 text-white text-xs font-semibold rounded-full shadow-plasma-glow">
            {badge}
          </span>
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-physics-dark-900/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-start gap-3 mb-3">
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-electric-400 to-electric-600 rounded-lg flex items-center justify-center shadow-glow-sm">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-white mb-2">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Children */}
        {children}
      </div>
    </CardComponent>
  );
}

