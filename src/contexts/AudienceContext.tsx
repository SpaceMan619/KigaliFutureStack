import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { AudienceMode } from '@/types';

interface AudienceContextType {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
  isInvestor: boolean;
  isBuilder: boolean;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export function AudienceProvider({ children, initialMode = 'founder_builder' }: { children: React.ReactNode; initialMode?: AudienceMode }) {
  const [mode, setModeState] = useState<AudienceMode>(initialMode);

  useEffect(() => {
    const saved = localStorage.getItem('kfs-audience') as AudienceMode;
    if (saved && (saved === 'investor_partner' || saved === 'founder_builder')) {
      setModeState(saved);
    }
  }, []);

  const setMode = useCallback((newMode: AudienceMode) => {
    setModeState(newMode);
    localStorage.setItem('kfs-audience', newMode);
  }, []);

  const value: AudienceContextType = {
    mode,
    setMode,
    isInvestor: mode === 'investor_partner',
    isBuilder: mode === 'founder_builder',
  };

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    throw new Error('useAudience must be used within an AudienceProvider');
  }
  return context;
}
