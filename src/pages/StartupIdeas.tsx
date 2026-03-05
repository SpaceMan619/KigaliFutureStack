import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, ArrowRight, Plus, Minus, Scale
} from 'lucide-react';
import { GlassCard } from '@/components/glass/GlassCard';
import { CompareDrawer } from '@/components/ux/CompareDrawer';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import opportunitiesData from '@/data/nst2/opportunities.json';

const riskColors: Record<string, string> = {
  low: 'text-emerald-400 bg-emerald-500/10',
  medium: 'text-amber-400 bg-amber-500/10',
  high: 'text-rose-400 bg-rose-500/10'
};

const returnColors: Record<string, string> = {
  low: 'text-white/60',
  medium: 'text-blue-400',
  high: 'text-purple-400',
  'very-high': 'text-emerald-400'
};

export function StartupIdeas() {
  const { locale } = useLocale();
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareDrawer, setShowCompareDrawer] = useState(false);

  const opportunities = opportunitiesData.opportunities;

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const comparedOpportunities = opportunities.filter(opp => compareList.includes(opp.id));

  const getCapitalIntensityPosition = (intensity: string) => {
    const positions = { low: '10%', medium: '50%', high: '90%' };
    return positions[intensity as keyof typeof positions] || '50%';
  };

  const getMarketAdoptionPosition = (adoption: string) => {
    const positions = { low: '10%', medium: '50%', high: '90%' };
    return positions[adoption as keyof typeof positions] || '50%';
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {locale === 'en' ? 'Startup Ideas' : 'Ibitekerezo bya Startup'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            {locale === 'en'
              ? 'Curated startup opportunities aligned with NST2 priorities and market demand'
              : 'Amahirwe yo gutangira ubucuruzi ahuye n\'intego za NST2'
            }
          </motion.p>
        </div>
      </section>

      {/* Compare Bar - Fixed at bottom for visibility */}
      {compareList.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-800 border border-emerald-500/50 rounded-full shadow-2xl shadow-emerald-500/20">
            <span className="text-white font-medium text-sm">
              {compareList.length} {locale === 'en' ? 'selected' : 'yatoranyijwe'}
            </span>
            <div className="flex gap-1">
              {compareList.slice(0, 2).map(id => {
                const opp = opportunities.find(o => o.id === id);
                return opp ? (
                  <span 
                    key={id}
                    className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center gap-1"
                  >
                    {opp.name.substring(0, 10)}...
                    <button 
                      onClick={() => toggleCompare(id)}
                      className="text-emerald-300 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                  </span>
                ) : null;
              })}
              {compareList.length > 2 && (
                <span className="px-2 py-1 rounded-full bg-white/10 text-white text-xs">
                  +{compareList.length - 2}
                </span>
              )}
            </div>
            <div className="flex gap-2 ml-2 border-l border-white/20 pl-3">
              <button
                onClick={() => setCompareList([])}
                className="p-1.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowCompareDrawer(true)}
                disabled={compareList.length < 2}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Scale className="w-3.5 h-3.5" />
                {locale === 'en' ? 'Compare' : 'Gereranya'}
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 mb-8 flex flex-wrap justify-center">
              <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500">
                {locale === 'en' ? 'All Ideas' : 'Ibitekerezo Byose'}
              </TabsTrigger>
              <TabsTrigger value="low-capital" className="data-[state=active]:bg-emerald-500">
                {locale === 'en' ? 'Low Capital' : 'Amafaranga Make'}
              </TabsTrigger>
              <TabsTrigger value="high-impact" className="data-[state=active]:bg-emerald-500">
                {locale === 'en' ? 'High Impact' : 'Ingaruka Nini'}
              </TabsTrigger>
              <TabsTrigger value="quick-start" className="data-[state=active]:bg-emerald-500">
                {locale === 'en' ? 'Quick Start' : 'Gutangira Vuba'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {opportunities.map((opp, index) => (
                  <motion.div
                    key={opp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <GlassCard className="h-full">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center">
                              <Lightbulb className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                {locale === 'en' ? opp.name : opp.nameRw}
                              </h3>
                              <p className="text-white/60 text-sm">{opp.sector}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleCompare(opp.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              compareList.includes(opp.id)
                                ? 'bg-emerald-500 text-white'
                                : 'bg-white/10 text-white/60 hover:bg-white/20'
                            }`}
                            disabled={!compareList.includes(opp.id) && compareList.length >= 4}
                          >
                            {compareList.includes(opp.id) ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Description */}
                        <p className="text-white/70 mb-4">
                          {locale === 'en' ? opp.description : opp.descriptionRw}
                        </p>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-white/5">
                            <p className="text-xs text-white/50 mb-1">{locale === 'en' ? 'Investment' : 'Ibishoramari'}</p>
                            <p className="text-emerald-400 font-medium">{opp.investmentRange}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5">
                            <p className="text-xs text-white/50 mb-1">TAM</p>
                            <p className="text-blue-400 font-medium">{opp.keyMetrics.tam}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5">
                            <p className="text-xs text-white/50 mb-1">{locale === 'en' ? 'Growth' : 'Kukura'}</p>
                            <p className="text-purple-400 font-medium">{opp.keyMetrics.growthRate}</p>
                          </div>
                        </div>

                        {/* Risk/Return */}
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className={riskColors[opp.riskLevel]}>
                            {opp.riskLevel} {locale === 'en' ? 'risk' : 'ingaruka'}
                          </Badge>
                          <Badge variant="outline" className={`border-white/20 ${returnColors[opp.returnPotential]}`}>
                            {opp.returnPotential} {locale === 'en' ? 'return' : 'igasubizo'}
                          </Badge>
                        </div>

                        {/* Business Models */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {opp.businessModels.map((model, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs"
                            >
                              {model}
                            </span>
                          ))}
                        </div>

                        {/* Matrix Visualization */}
                        <div className="p-4 rounded-lg bg-white/5 mb-4">
                          <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                            <span>{locale === 'en' ? 'Capital Intensity' : 'Ubukana bw\'Amafaranga'}</span>
                            <span>{locale === 'en' ? 'Market Adoption' : 'Kwemera kw\'Isoko'}</span>
                          </div>
                          <div className="relative h-24 bg-white/5 rounded-lg">
                            <div 
                              className="absolute w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"
                              style={{
                                left: getCapitalIntensityPosition(opp.capitalIntensity),
                                top: getMarketAdoptionPosition(opp.marketAdoption),
                                transform: 'translate(-50%, -50%)'
                              }}
                            />
                            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/10" />
                            <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-white/10" />
                          </div>
                        </div>

                        {/* NST2 Alignment */}
                        <div className="mb-4">
                          <p className="text-xs text-white/50 mb-2">{locale === 'en' ? 'NST2 Alignment' : 'Guhura na NST2'}</p>
                          <div className="flex flex-wrap gap-1">
                            {opp.nst2Alignment.slice(0, 3).map((item, i) => (
                              <span key={i} className="text-xs text-white/60">
                                {i > 0 && '•'} {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Skills Needed */}
                        <div className="mb-4">
                          <p className="text-xs text-white/50 mb-2">{locale === 'en' ? 'Skills Needed' : 'Ubuhanga Bukenewe'}</p>
                          <div className="flex flex-wrap gap-1">
                            {opp.skillsNeeded.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-2 py-0.5 rounded bg-white/5 text-white/60 text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <Button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {locale === 'en' ? 'View Business Model Canvas' : 'Reba Canvas y\'Ubucuruzi'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="low-capital">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {opportunities
                  .filter(opp => opp.capitalIntensity === 'low')
                  .map((opp, index) => (
                    <motion.div
                      key={opp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <GlassCard className="h-full p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {locale === 'en' ? opp.name : opp.nameRw}
                        </h3>
                        <p className="text-white/60 mb-4">{opp.investmentRange}</p>
                        <p className="text-white/70 text-sm">{locale === 'en' ? opp.description : opp.descriptionRw}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="high-impact">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {opportunities
                  .filter(opp => opp.impact === 'high')
                  .map((opp, index) => (
                    <motion.div
                      key={opp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <GlassCard className="h-full p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {locale === 'en' ? opp.name : opp.nameRw}
                        </h3>
                        <p className="text-white/60 mb-4">{opp.keyMetrics.jobsPotential} jobs</p>
                        <p className="text-white/70 text-sm">{locale === 'en' ? opp.description : opp.descriptionRw}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="quick-start">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {opportunities
                  .filter(opp => opp.readiness === 'high' && opp.horizon === 'immediate')
                  .map((opp, index) => (
                    <motion.div
                      key={opp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <GlassCard className="h-full p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {locale === 'en' ? opp.name : opp.nameRw}
                        </h3>
                        <p className="text-white/60 mb-4">{opp.readiness} readiness</p>
                        <p className="text-white/70 text-sm">{locale === 'en' ? opp.description : opp.descriptionRw}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compare Drawer */}
      <CompareDrawer
        isOpen={showCompareDrawer}
        onClose={() => setShowCompareDrawer(false)}
        opportunities={comparedOpportunities}
        onRemove={(id) => toggleCompare(id)}
        locale={locale}
      />
    </div>
  );
}
