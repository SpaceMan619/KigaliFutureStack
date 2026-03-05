import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Shield, CheckCircle, BookOpen,
  ArrowRight, Zap, Building2, GraduationCap, Heart
} from 'lucide-react';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassPanel } from '@/components/glass/GlassPanel';
import { PillarStackChart } from '@/components/charts/PillarStackChart';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import pillarsData from '@/data/nst2/pillars.json';

const pillarIcons: Record<string, React.ReactNode> = {
  economic: <TrendingUp className="w-6 h-6" />,
  social: <Users className="w-6 h-6" />,
  governance: <Shield className="w-6 h-6" />
};

const timelineData = [
  {
    year: '2024',
    title: 'Foundation Phase',
    titleRw: 'Igihe cy\'Imfatiro',
    milestones: [
      'NST2 launch and institutional setup',
      'Baseline assessments completed',
      'Priority sector strategies activated'
    ]
  },
  {
    year: '2025',
    title: 'Acceleration Phase',
    titleRw: 'Igihe cyo Kwikura',
    milestones: [
      'Major infrastructure projects initiated',
      'Digital transformation programs scaled',
      'Investment promotion intensified'
    ]
  },
  {
    year: '2026',
    title: 'Mid-term Review',
    titleRw: 'Isuzumwa ry\'Impera',
    milestones: [
      'Progress evaluation against targets',
      'Strategy adjustments based on performance',
      'Private sector engagement review'
    ]
  },
  {
    year: '2027',
    title: 'Consolidation Phase',
    titleRw: 'Igihe cyo Gukomeza',
    milestones: [
      'Sustained growth interventions',
      'Regional integration deepened',
      'Export capacity expanded'
    ]
  },
  {
    year: '2028',
    title: 'Scaling Phase',
    titleRw: 'Igihe cyo Kwigaza',
    milestones: [
      'Successful models replicated',
      'Innovation ecosystems matured',
      'Human capital development accelerated'
    ]
  },
  {
    year: '2029',
    title: 'Target Achievement',
    titleRw: 'Gufata Intego',
    milestones: [
      'Final evaluation conducted',
      'Successor strategy preparation',
      'Vision 2035 alignment verified'
    ]
  }
];

const pillarStackData = [
  { year: '2024', economic: 35, social: 30, governance: 20 },
  { year: '2025', economic: 40, social: 35, governance: 25 },
  { year: '2026', economic: 50, social: 40, governance: 30 },
  { year: '2027', economic: 60, social: 50, governance: 35 },
  { year: '2028', economic: 70, social: 60, governance: 40 },
  { year: '2029', economic: 80, social: 70, governance: 50 }
];

export function NST2Explorer() {
  const { locale } = useLocale();
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const pillars = pillarsData.pillars;

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
            {locale === 'en' ? 'NST2 Explorer' : 'NST2 Explorer'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            {locale === 'en'
              ? 'Deep dive into Rwanda\'s National Strategy for Transformation 2024-2029'
              : 'Menya neza ingingo ya Leta yo guhindura u Rwanda 2024-2029'
            }
          </motion.p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassCard className="p-6 text-center">
              <p className="text-4xl font-bold text-emerald-400 mb-2">9.3%</p>
              <p className="text-white/60 text-sm">{locale === 'en' ? 'Target GDP Growth' : 'Intego yo Kukura kwa GDP'}</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">1.25M</p>
              <p className="text-white/60 text-sm">{locale === 'en' ? 'Jobs to Create' : 'Imirimo Yaremwe'}</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">$7.3B</p>
              <p className="text-white/60 text-sm">{locale === 'en' ? 'Export Target' : 'Intego y\'Ibicuruzwa'}</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <p className="text-4xl font-bold text-amber-400 mb-2">$4.6B</p>
              <p className="text-white/60 text-sm">{locale === 'en' ? 'Private Investment' : 'Ibishoramari'}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === 'en' ? 'The Three Pillars' : 'Inkingi Ebyiri'}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'NST2 is built on three interconnected pillars that drive comprehensive national transformation'
                : 'NST2 yubatswe ku nkingi eshatu zihuza zikaza impinduka z\'igihugu'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard 
                  className="h-full p-8 cursor-pointer group"
                  onClick={() => setSelectedPillar(selectedPillar === pillar.id ? null : pillar.id)}
                  glowColor={`${pillar.color}30`}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                  >
                    {pillarIcons[pillar.id]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {locale === 'en' ? pillar.name : pillar.nameRw}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {locale === 'en' ? pillar.description : pillar.descriptionRw}
                  </p>
                  <div className="space-y-2">
                    {pillar.priorities.slice(0, 3).map((priority, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4" style={{ color: pillar.color }} />
                        <span>{locale === 'en' ? priority.name : priority.nameRw}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === 'en' ? 'Implementation Timeline' : 'Igihe cyo Gushyira mu Bikorwa'}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Six-year journey from foundation to target achievement'
                : 'Urugendo rw\'imyaka itandatu kuva ku mfatiro kugera ku ntego'}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-purple-500/50 hidden md:block" />

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <GlassCard className={`p-6 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-emerald-400">{item.year}</span>
                        <span className="px-2 py-1 rounded-md bg-white/10 text-white/60 text-xs">
                          Phase {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {locale === 'en' ? item.title : item.titleRw}
                      </h3>
                      <ul className="space-y-2">
                        {item.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PillarStackChart 
            data={pillarStackData}
            title={locale === 'en' ? 'Pillar Contribution Over Time' : 'Uruhare rw\'Inkingi mu Gihe'}
          />
        </div>
      </section>

      {/* For Young Builders */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === 'en' ? 'What This Means for Young Builders' : 'Ibi Bivuze ku Bubaki Bato'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: locale === 'en' ? '1 Million Coders' : 'Abaprogrameri 1,000,000',
                description: locale === 'en' 
                  ? 'Training program to equip youth with advanced ICT skills'
                  : 'Gahunda yo kwigisha urubyiruko ubuhanga bwa ICT'
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: locale === 'en' ? '1.25M Jobs' : 'Imirimo 1,250,000',
                description: locale === 'en'
                  ? 'Productive and decent employment opportunities'
                  : 'Amahirwe yo gukora imirimo izigamiye'
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: locale === 'en' ? 'TVET Expansion' : 'Kwigaza kwa TVET',
                description: locale === 'en'
                  ? '60% of upper secondary students in technical training'
                  : '60% y\'abanyeshuri bo mu mashuri yisumbuye mu myuga'
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: locale === 'en' ? 'Youth Unemployment' : 'Urubyiruko rutagira akazi',
                description: locale === 'en'
                  ? 'Target reduction from 20.8% to under 10%'
                  : 'Kugabanya kuva kuri 20.8% kugera hasi ya 10%'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassPanel variant="glow" className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === 'en' ? 'Ready to Contribute?' : 'Witeguye Gufatanya?'}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              {locale === 'en'
                ? 'Explore specific opportunities aligned with NST2 priorities and start your journey'
                : 'Shaka amahirwe ahuye n\'intego za NST2 utangire urugendo rwawe'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 px-8">
                {locale === 'en' ? 'Explore Opportunities' : 'Shaka Amahirwe'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <BookOpen className="w-4 h-4 mr-2" />
                {locale === 'en' ? 'Download NST2 PDF' : 'Kuramo NST2 PDF'}
              </Button>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}
