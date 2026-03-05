import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ArrowRight, TrendingUp, Target, Clock, DollarSign 
} from 'lucide-react';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassPanel } from '@/components/glass/GlassPanel';
import { GrowthChart } from '@/components/charts/GrowthChart';
import { ReadinessImpactChart } from '@/components/charts/ReadinessImpactChart';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import opportunitiesData from '@/data/nst2/opportunities.json';

const sectorColors: Record<string, string> = {
  agriculture: '#10B981',
  energy: '#F59E0B',
  financial: '#3B82F6',
  education: '#8B5CF6',
  health: '#EF4444',
  trade: '#EC4899',
  tourism: '#06B6D4',
  environment: '#22C55E',
  industry: '#6366F1',
  construction: '#78716C',
  creative: '#F97316',
  sports: '#84CC16'
};

export function OpportunityAtlas() {
  const { locale } = useLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [selectedReadiness, setSelectedReadiness] = useState<string>('all');
  const [selectedImpact, setSelectedImpact] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'chart'>('grid');

  const opportunities = opportunitiesData.opportunities;

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opp => {
      const matchesSearch = searchQuery === '' || 
        opp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPillar = selectedPillar === 'all' || opp.pillar === selectedPillar;
      const matchesReadiness = selectedReadiness === 'all' || opp.readiness === selectedReadiness;
      const matchesImpact = selectedImpact === 'all' || opp.impact === selectedImpact;

      return matchesSearch && matchesPillar && matchesReadiness && matchesImpact;
    });
  }, [opportunities, searchQuery, selectedPillar, selectedReadiness, selectedImpact]);

  const growthData = useMemo(() => {
    const sectorGrowth: Record<string, { baseline: number; target: number; count: number }> = {};
    
    opportunities.forEach(opp => {
      if (!sectorGrowth[opp.sector]) {
        sectorGrowth[opp.sector] = { baseline: 0, target: 0, count: 0 };
      }
      const growthRate = parseInt(opp.keyMetrics.growthRate);
      sectorGrowth[opp.sector].baseline += growthRate * 0.5;
      sectorGrowth[opp.sector].target += growthRate;
      sectorGrowth[opp.sector].count += 1;
    });

    return Object.entries(sectorGrowth)
      .map(([name, data]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        baseline: Math.round(data.baseline / data.count),
        target: Math.round(data.target / data.count),
        color: sectorColors[name] || '#10B981'
      }))
      .slice(0, 6);
  }, [opportunities]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedPillar('all');
    setSelectedReadiness('all');
    setSelectedImpact('all');
  };

  const hasActiveFilters = searchQuery || selectedPillar !== 'all' || 
    selectedReadiness !== 'all' || selectedImpact !== 'all';

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
            {locale === 'en' ? 'Opportunity Atlas' : 'Ikarita y\'Amahirwe'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            {locale === 'en' 
              ? 'Explore NST2-aligned investment and startup opportunities across Rwanda\'s key sectors'
              : 'Shaka amahirwe yo gushora no gutangira ubucuruzi mu Rwanda'
            }
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassPanel variant="subtle" className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === 'en' ? 'Search opportunities...' : 'Shaka amahirwe...'}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedPillar}
                  onChange={(e) => setSelectedPillar(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  <option value="all">{locale === 'en' ? 'All Pillars' : 'Inkingi Zose'}</option>
                  <option value="economic">{locale === 'en' ? 'Economic' : 'Ubukungu'}</option>
                  <option value="social">{locale === 'en' ? 'Social' : 'Imibereho'}</option>
                  <option value="governance">{locale === 'en' ? 'Governance' : 'Ubuyobozi'}</option>
                </select>

                <select
                  value={selectedReadiness}
                  onChange={(e) => setSelectedReadiness(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  <option value="all">{locale === 'en' ? 'All Readiness' : 'Kwitegura Kose'}</option>
                  <option value="high">{locale === 'en' ? 'High' : 'Hejuru'}</option>
                  <option value="medium">{locale === 'en' ? 'Medium' : 'Hagati'}</option>
                  <option value="low">{locale === 'en' ? 'Low' : 'Hasi'}</option>
                </select>

                <select
                  value={selectedImpact}
                  onChange={(e) => setSelectedImpact(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  <option value="all">{locale === 'en' ? 'All Impact' : 'Ingaruka Zose'}</option>
                  <option value="high">{locale === 'en' ? 'High' : 'Hejuru'}</option>
                  <option value="medium">{locale === 'en' ? 'Medium' : 'Hagati'}</option>
                  <option value="low">{locale === 'en' ? 'Low' : 'Hasi'}</option>
                </select>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-white/60 hover:text-white"
                  >
                    {locale === 'en' ? 'Clear' : 'Siba'}
                  </Button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-emerald-500' : 'text-white/60'}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'chart' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('chart')}
                  className={viewMode === 'chart' ? 'bg-emerald-500' : 'text-white/60'}
                >
                  Charts
                </Button>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'chart' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GrowthChart 
                data={growthData} 
                title={locale === 'en' ? 'Sector Growth Projections' : 'Iteganywa ry\'Imirimo'} 
              />
              <ReadinessImpactChart 
                opportunities={filteredOpportunities}
                title={locale === 'en' ? 'Readiness vs Impact Matrix' : 'Imatriki yo Kwitegura n\'Ingaruka'}
              />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-white/60">
                  {locale === 'en' ? 'Showing' : 'Kugaragaza'} {filteredOpportunities.length} {locale === 'en' ? 'opportunities' : 'amahirwe'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map((opp, index) => (
                  <motion.div
                    key={opp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <GlassCard className="h-full p-6 group cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${sectorColors[opp.sector]}20`, color: sectorColors[opp.sector] }}
                        >
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-xs border-white/20 text-white/60">
                            {opp.readiness}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-white/20 text-white/60">
                            {opp.impact}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">
                        {locale === 'en' ? opp.name : opp.nameRw}
                      </h3>
                      <p className="text-white/60 text-sm mb-4 line-clamp-2">
                        {locale === 'en' ? opp.description : opp.descriptionRw}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-emerald-400" />
                          <span className="text-white/70">{opp.investmentRange}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-blue-400" />
                          <span className="text-white/70">{opp.keyMetrics.tam} TAM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-white/70">{opp.keyMetrics.growthRate}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {opp.businessModels.slice(0, 2).map((model, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs"
                          >
                            {model}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-emerald-400 text-sm font-medium">
                        {locale === 'en' ? 'Explore opportunity' : 'Shaka amahirwe'}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {filteredOpportunities.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-white/60 text-lg">
                    {locale === 'en' ? 'No opportunities found matching your criteria' : 'Nta mahirwe aboneka'}
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    className="mt-4 border-white/20 text-white hover:bg-white/10"
                  >
                    {locale === 'en' ? 'Clear filters' : 'Siba imiterere'}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
