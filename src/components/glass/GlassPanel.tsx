import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'subtle' | 'glow';
  intensity?: 'low' | 'medium' | 'high';
}

export function GlassPanel({ 
  children, 
  className, 
  variant = 'default',
  intensity = 'medium' 
}: GlassPanelProps) {
  const baseStyles = 'backdrop-blur-md rounded-2xl border transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-white/10 border-white/20 shadow-lg',
    elevated: 'bg-white/15 border-white/25 shadow-xl shadow-black/10',
    subtle: 'bg-white/5 border-white/10 shadow-md',
    glow: 'bg-white/10 border-white/30 shadow-lg shadow-emerald-500/10'
  };

  const intensityStyles = {
    low: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    high: 'backdrop-blur-xl'
  };

  return (
    <div className={cn(
      baseStyles,
      variantStyles[variant],
      intensityStyles[intensity],
      className
    )}>
      {children}
    </div>
  );
}
