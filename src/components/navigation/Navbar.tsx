import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Globe, Briefcase, Users
} from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { useAudience } from '@/contexts/AudienceContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/', label: 'Home', labelRw: 'Ahabanza' },
  { path: '/opportunity-atlas', label: 'Opportunity Atlas', labelRw: 'Ikarita y\'Amahirwe' },
  { path: '/startup-ideas', label: 'Startup Ideas', labelRw: 'Ibitekerezo' },
  { path: '/nst2-explorer', label: 'NST2 Explorer', labelRw: 'NST2 Explorer' },
  { path: '/builders-toolkit', label: 'Builder\'s Toolkit', labelRw: 'Ibikoresho' },
  { path: '/about', label: 'About', labelRw: 'Ibyerekeye' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const { setMode, isInvestor } = useAudience();
  const location = useLocation();

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'rw' : 'en');
  };

  const toggleAudience = () => {
    setMode(isInvestor ? 'founder_builder' : 'investor_partner');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'bg-slate-900/80 backdrop-blur-xl',
          'border-b border-white/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">KFS</span>
              </div>
              <span className="text-white font-semibold hidden sm:block">KigaliFutureStack</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === item.path
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {locale === 'en' ? item.label : item.labelRw}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Audience Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAudience}
                className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10"
              >
                {isInvestor ? <Briefcase className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                <span className="text-xs">
                  {isInvestor ? t('audience.switchToBuilder') : t('audience.switchToInvestor')}
                </span>
              </Button>

              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLocale}
                className="flex items-center gap-1 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">{locale.toUpperCase()}</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white/70 hover:text-white hover:bg-white/10"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      location.pathname === item.path
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {locale === 'en' ? item.label : item.labelRw}
                  </Link>
                ))}
                
                {/* Mobile Audience Toggle */}
                <button
                  onClick={() => {
                    toggleAudience();
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5"
                >
                  {isInvestor ? <Briefcase className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                  {isInvestor ? t('audience.switchToBuilder') : t('audience.switchToInvestor')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
