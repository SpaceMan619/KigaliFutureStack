import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export function GlassCard({ 
  children, 
  className, 
  hover = true,
  glowColor = 'rgba(16, 185, 129, 0.2)',
  onClick 
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -4, 
        boxShadow: `0 20px 40px -10px ${glowColor}` 
      } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-white/15 to-white/5',
        'border border-white/20',
        'backdrop-blur-lg',
        'shadow-lg shadow-black/5',
        'transition-colors duration-300',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
