import { Briefcase, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAudience } from '@/contexts/AudienceContext';
import { useLocale } from '@/contexts/LocaleContext';

interface AudienceSwitchProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AudienceSwitch({ className, size = 'md' }: AudienceSwitchProps) {
  const { setMode, isInvestor } = useAudience();
  const { t } = useLocale();

  const sizeStyles = {
    sm: 'p-1 gap-1',
    md: 'p-1.5 gap-1.5',
    lg: 'p-2 gap-2'
  };

  const buttonStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className={cn(
      'inline-flex items-center rounded-full',
      'bg-white/10 backdrop-blur-md',
      'border border-white/20',
      sizeStyles[size],
      className
    )}>
      <button
        onClick={() => setMode('investor_partner')}
        className={cn(
          'flex items-center gap-2 rounded-full font-medium transition-all duration-300',
          buttonStyles[size],
          isInvestor
            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        )}
      >
        <Briefcase className={iconSizes[size]} />
        <span className="hidden sm:inline">{t('audience.investorPartner')}</span>
      </button>
      
      <button
        onClick={() => setMode('founder_builder')}
        className={cn(
          'flex items-center gap-2 rounded-full font-medium transition-all duration-300',
          buttonStyles[size],
          !isInvestor
            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        )}
      >
        <Users className={iconSizes[size]} />
        <span className="hidden sm:inline">{t('audience.founderBuilder')}</span>
      </button>
    </div>
  );
}
