import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function PageHero({
  title,
  subtitle,
  children,
  className,
  centered = true,
  size = 'lg'
}: PageHeroProps) {
  const sizeStyles = {
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-32'
  };

  return (
    <section className={cn(
      'relative overflow-hidden',
      sizeStyles[size],
      className
    )}>
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        centered && 'text-center'
      )}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'mt-6 text-lg sm:text-xl text-white/70 max-w-3xl',
              centered && 'mx-auto'
            )}
          >
            {subtitle}
          </motion.p>
        )}
        
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={cn('mt-10', centered && 'flex justify-center')}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
