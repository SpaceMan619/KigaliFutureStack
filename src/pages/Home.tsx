import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp, Users, Zap, Globe,
  ArrowRight, Briefcase, Lightbulb, Map
} from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { useAudience } from '@/contexts/AudienceContext';
import { GlassCard } from '@/components/glass/GlassCard';
import { MetricCard } from '@/components/glass/MetricCard';
import { AudienceSwitch } from '@/components/ux/AudienceSwitch';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import metrics from '@/data/nst2/metrics.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export function Home() {
  const { locale } = useLocale();
  const { isInvestor } = useAudience();

  const heroContent = {
    en: {
      title: "Discover Rwanda's",
      titleHighlight: "Transformation Opportunities",
      subtitle: "Your gateway to NST2-aligned investment and startup opportunities. Connect with Rwanda's 2024-2029 growth story."
    },
    rw: {
      title: "Menya Amahirwe yo",
      titleHighlight: "Guhindura u Rwanda",
      subtitle: "Injira mu mahirwe yo gushora no gutangira ubucuruzi mu Rwanda. Huza n'inkuru y'iterambere rya 2024-2029."
    }
  };

  const quickStats = [
    {
      label: locale === 'en' ? 'GDP Growth Target' : 'Intego yo Kukura kwa GDP',
      value: metrics.economic.gdpGrowth.target2029,
      unit: '%',
      change: 13.4,
      changeLabel: locale === 'en' ? 'vs baseline' : 'kuruta ingingo',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      color: 'emerald' as const
    },
    {
      label: locale === 'en' ? 'Jobs to Create' : 'Imirimo Yaremwe',
      value: '1.25M',
      unit: '',
      icon: <Users className="w-5 h-5 text-blue-400" />,
      color: 'blue' as const
    },
    {
      label: locale === 'en' ? 'Export Target' : 'Intego y\'Ibicuruzwa',
      value: '$7.3',
      unit: 'B',
      change: 108,
      changeLabel: locale === 'en' ? 'growth' : 'kukura',
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      color: 'purple' as const
    },
    {
      label: locale === 'en' ? 'Private Investment' : 'Ibishoramari',
      value: '$4.6',
      unit: 'B',
      change: 109,
      changeLabel: locale === 'en' ? 'increase' : 'kongera',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      color: 'amber' as const
    }
  ];

  const featuredOpportunities = [
    {
      id: 'agritech',
      title: locale === 'en' ? 'AgriTech & Smart Farming' : 'AgriTech n\'Ubuhinzi',
      description: locale === 'en'
        ? 'Digital platforms for farm management and supply chain optimization'
        : 'Imbugankoranyambaga zo gucunga ubuso no guhindura imigendekere',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-emerald-500/20 to-emerald-600/5',
      link: '/opportunity-atlas'
    },
    {
      id: 'fintech',
      title: locale === 'en' ? 'Inclusive Fintech' : 'Fintech',
      description: locale === 'en'
        ? 'Mobile money, digital lending, and financial inclusion tools'
        : 'Amafranga ya mobile, inguzanyo, n\'ibikoresho byo kwigereka',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-500/20 to-blue-600/5',
      link: '/opportunity-atlas'
    },
    {
      id: 'renewable',
      title: locale === 'en' ? 'Renewable Energy' : 'Amashanyarazi Asubirwamo',
      description: locale === 'en'
        ? 'Solar mini-grids and clean energy transition solutions'
        : 'Amashanyarazi ya solar n\'ibisubizo byo guhindura ingufu',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-amber-500/20 to-amber-600/5',
      link: '/opportunity-atlas'
    }
  ];

  const content = heroContent[locale];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/80 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              NST2 2024-2029 Aligned
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            {content.title}{' '}
            <span className="text-gradient">{content.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            {content.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <AudienceSwitch size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/opportunity-atlas">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25"
              >
                {isInvestor ? (
                  <><Briefcase className="w-5 h-5 mr-2" /> Explore Investment Opportunities</>
                ) : (
                  <><Lightbulb className="w-5 h-5 mr-2" /> Discover Startup Ideas</>
                )}
              </Button>
            </Link>
            <Link to="/nst2-explorer">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Map className="w-5 h-5 mr-2" />
                Explore NST2
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickStats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <MetricCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === 'en' ? 'Featured Opportunities' : 'Amahirwe Yatoranyijwe'}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Top NST2-aligned sectors with high growth potential and government support'
                : 'Imirimo yatoranyijwe ifite amahirwe yo kukura n\'ubufasha bw\'ubuyobozi'}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredOpportunities.map((opp) => (
              <motion.div key={opp.id} variants={itemVariants}>
                <Link to={opp.link}>
                  <GlassCard className="h-full p-6 group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${opp.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                      {opp.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{opp.title}</h3>
                    <p className="text-white/60 mb-4">{opp.description}</p>
                    <div className="flex items-center text-emerald-400 text-sm font-medium">
                      {locale === 'en' ? 'Learn more' : 'Menya byinshi'}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 border border-white/20 p-12 text-center"
          >
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {locale === 'en' ? 'Ready to Build the Future?' : 'Witeguye Kubaka Ejo Hazaza?'}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                {locale === 'en'
                  ? 'Join thousands of innovators, investors, and builders shaping Rwanda\'s transformation.'
                  : 'Injira mu bahanzi, abashoramari, n\'abubaki bahindura u Rwanda.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/startup-ideas">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-white/90 px-8"
                  >
                    {locale === 'en' ? 'Get Started' : 'Tangira'}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    {locale === 'en' ? 'Learn More' : 'Menya Byinshi'}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-white/50 text-sm">
              Developed by Project Future • Data sourced from NST2 2024-2029
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
