import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OpportunityData {
  id: string;
  name: string;
  nameRw: string;
  sector: string;
  investmentRange: string;
  returnPotential: string;
}

interface CompareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  opportunities: OpportunityData[];
  onRemove: (id: string) => void;
  locale: string;
}

export function CompareDrawer({ 
  isOpen, 
  onClose, 
  opportunities, 
  onRemove,
  locale 
}: CompareDrawerProps) {
  if (opportunities.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-white/20"
          >
            <div className="max-w-7xl mx-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Compare Opportunities ({opportunities.length})
                </h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {opportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="relative p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <button
                      onClick={() => onRemove(opp.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <h4 className="font-medium text-white pr-6">
                      {locale === 'en' ? opp.name : opp.nameRw}
                    </h4>
                    <p className="text-sm text-white/60 mt-1">{opp.sector}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="text-emerald-400">{opp.investmentRange}</span>
                      <span className="text-white/40">|</span>
                      <span className="text-blue-400">{opp.returnPotential} return</span>
                    </div>
                  </div>
                ))}
              </div>

              {opportunities.length >= 2 && (
                <div className="mt-6 flex justify-end">
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    View Detailed Comparison
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
