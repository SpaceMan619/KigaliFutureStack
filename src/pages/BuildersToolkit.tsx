import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Users, DollarSign, CheckCircle,
  ArrowRight, Calendar, TrendingUp, Shield, Zap,
  BookOpen, Video, MessageCircle, FileText, ExternalLink
} from 'lucide-react';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassPanel } from '@/components/glass/GlassPanel';
import { useLocale } from '@/contexts/LocaleContext';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const roadmapData = [
  {
    phase: 'Weeks 1-2',
    title: 'Discovery & Validation',
    titleRw: 'Gushaka no Gushidikanya',
    tasks: [
      'Research NST2 priority sectors',
      'Identify market gaps and opportunities',
      'Validate problem with 10+ potential customers',
      'Define your unique value proposition'
    ]
  },
  {
    phase: 'Weeks 3-4',
    title: 'Business Model Design',
    titleRw: 'Gukora Model y\'Ubucuruzi',
    tasks: [
      'Complete Business Model Canvas',
      'Define revenue streams and pricing',
      'Map key partnerships and resources',
      'Create financial projections'
    ]
  },
  {
    phase: 'Weeks 5-8',
    title: 'MVP Development',
    titleRw: 'Gukora MVP',
    tasks: [
      'Build minimum viable product',
      'Set up basic operations',
      'Create landing page and waitlist',
      'Prepare pitch deck'
    ]
  },
  {
    phase: 'Weeks 9-12',
    title: 'Launch & Iterate',
    titleRw: 'Gutangaza no Gukora',
    tasks: [
      'Soft launch to early adopters',
      'Collect and analyze feedback',
      'Iterate based on user insights',
      'Prepare for funding conversations'
    ]
  }
];

const fundingPaths = [
  {
    id: 'bootstrapping',
    name: 'Bootstrapping',
    nameRw: 'Gukoresha Amafaranga Yawe',
    description: 'Start with your own savings and revenue',
    descriptionRw: 'Tangira ukoresheje amafaranga yawe n\'inyungu',
    pros: ['Full control', 'No dilution', 'Forced profitability'],
    cons: ['Slower growth', 'Personal risk', 'Limited resources'],
    bestFor: 'Low capital, high margin businesses',
    investmentRange: '$1K - $50K'
  },
  {
    id: 'friends-family',
    name: 'Friends & Family',
    nameRw: 'Inshuti n\'Abavandimwe',
    description: 'Raise from your personal network',
    descriptionRw: 'Bikuze mu muryango wawe n\'inshuti',
    pros: ['Quick access', 'Flexible terms', 'Supportive investors'],
    cons: ['Relationship risk', 'Limited amount', 'Less professional'],
    bestFor: 'Early validation and MVP development',
    investmentRange: '$5K - $100K'
  },
  {
    id: 'grants',
    name: 'Grants & Competitions',
    nameRw: 'Imfashanyo n\'Imirwano',
    description: 'Non-dilutive funding from programs',
    descriptionRw: 'Amafaranga atagabanya mu bigo',
    pros: ['No equity given', 'Credibility boost', 'Mentorship included'],
    cons: ['Competitive', 'Time consuming', 'Specific requirements'],
    bestFor: 'Innovative solutions with social impact',
    investmentRange: '$10K - $250K'
  },
  {
    id: 'angel',
    name: 'Angel Investors',
    nameRw: 'Abashoramari ba Angel',
    description: 'Early-stage investors for equity',
    descriptionRw: 'Abashoramari ba mbere bafatanya',
    pros: ['Experienced mentors', 'Network access', 'Follow-on potential'],
    cons: ['Equity dilution', 'High expectations', 'Finding right fit'],
    bestFor: 'Scalable businesses with clear traction',
    investmentRange: '$50K - $500K'
  },
  {
    id: 'vc',
    name: 'Venture Capital',
    nameRw: 'Venture Capital',
    description: 'Institutional funding for growth',
    descriptionRw: 'Amafaranga y\'ibigo yo kukura',
    pros: ['Large amounts', 'Professional support', 'Growth acceleration'],
    cons: ['Significant dilution', 'Control loss', 'Exit pressure'],
    bestFor: 'High-growth startups with proven model',
    investmentRange: '$500K - $5M+'
  }
];

const goToMarketDoors = [
  {
    id: 'direct',
    name: 'Direct Sales',
    nameRw: 'Kugurisha Ubuturanye',
    description: 'Sell directly to customers through your own channels',
    descriptionRw: 'Kugurisha abakiriya ukoresheje imigenzo yawe',
    icon: <Users className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-emerald-600/5',
    steps: ['Build landing page', 'Run ads', 'Close sales', 'Iterate messaging']
  },
  {
    id: 'partnerships',
    name: 'Strategic Partnerships',
    nameRw: 'Ubufatanye bw\'Intego',
    description: 'Partner with existing businesses for distribution',
    descriptionRw: 'Gufatanya n\'ubucuruzi buhari kugirango ugurishe',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-blue-500/20 to-blue-600/5',
    steps: ['Identify partners', 'Pitch value prop', 'Negotiate terms', 'Launch together']
  },
  {
    id: 'platform',
    name: 'Platform Distribution',
    nameRw: 'Gukoresha Imbugankoranyambaga',
    description: 'Leverage existing platforms and marketplaces',
    descriptionRw: 'Gukoresha imbugankoranyambaga zihari',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-500/20 to-purple-600/5',
    steps: ['Choose platform', 'Optimize listing', 'Gather reviews', 'Scale presence']
  }
];

export function BuildersToolkit() {
  const { locale } = useLocale();
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (taskKey: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const getProgress = (phaseIndex: number) => {
    const phase = roadmapData[phaseIndex];
    const completed = phase.tasks.filter((_, i) => 
      completedTasks[`${phaseIndex}-${i}`]
    ).length;
    return (completed / phase.tasks.length) * 100;
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
            {locale === 'en' ? "Builder's Toolkit" : 'Ibikoresho by\'Abubaki'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            {locale === 'en'
              ? 'Everything you need to turn your idea into a thriving NST2-aligned business'
              : 'Ibyose ukeneye kugirango igitekerezo cyawe kibe ubucuruzi bwikora'
            }
          </motion.p>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="roadmap" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 mb-8 flex flex-wrap justify-center">
              <TabsTrigger value="roadmap" className="data-[state=active]:bg-emerald-500">
                <Calendar className="w-4 h-4 mr-2" />
                {locale === 'en' ? '90-Day Roadmap' : 'Urugendo rw\'Iminsi 90'}
              </TabsTrigger>
              <TabsTrigger value="funding" className="data-[state=active]:bg-emerald-500">
                <DollarSign className="w-4 h-4 mr-2" />
                {locale === 'en' ? 'Funding Navigator' : 'Urugendo rw\'Amafaranga'}
              </TabsTrigger>
              <TabsTrigger value="gtm" className="data-[state=active]:bg-emerald-500">
                <Rocket className="w-4 h-4 mr-2" />
                {locale === 'en' ? 'Go-to-Market' : 'Kujya ku Isoko'}
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-emerald-500">
                <BookOpen className="w-4 h-4 mr-2" />
                {locale === 'en' ? 'Resources' : 'Ibikoresho'}
              </TabsTrigger>
            </TabsList>

            {/* 90-Day Roadmap */}
            <TabsContent value="roadmap">
              <div className="space-y-6">
                {roadmapData.map((phase, phaseIndex) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: phaseIndex * 0.1 }}
                  >
                    <GlassPanel variant="elevated" className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs mb-2 inline-block">
                            {phase.phase}
                          </span>
                          <h3 className="text-xl font-semibold text-white">
                            {locale === 'en' ? phase.title : phase.titleRw}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-emerald-400">
                            {Math.round(getProgress(phaseIndex))}%
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={getProgress(phaseIndex)} 
                        className="h-2 mb-6 bg-white/10"
                      />
                      <div className="space-y-3">
                        {phase.tasks.map((task, taskIndex) => {
                          const taskKey = `${phaseIndex}-${taskIndex}`;
                          const isCompleted = completedTasks[taskKey];
                          return (
                            <div
                              key={taskIndex}
                              onClick={() => toggleTask(taskKey)}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                isCompleted ? 'bg-emerald-500/10' : 'bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              <CheckCircle className={`w-5 h-5 ${
                                isCompleted ? 'text-emerald-400' : 'text-white/30'
                              }`} />
                              <span className={`text-sm ${
                                isCompleted ? 'text-white/70 line-through' : 'text-white'
                              }`}>
                                {task}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </GlassPanel>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Funding Navigator */}
            <TabsContent value="funding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {fundingPaths.map((path, index) => (
                  <motion.div
                    key={path.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {locale === 'en' ? path.name : path.nameRw}
                          </h3>
                          <p className="text-emerald-400 text-sm">{path.investmentRange}</p>
                        </div>
                        <DollarSign className="w-6 h-6 text-white/40" />
                      </div>
                      <p className="text-white/60 text-sm mb-4">
                        {locale === 'en' ? path.description : path.descriptionRw}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-white/50 mb-2">Pros</p>
                          <ul className="space-y-1">
                            {path.pros.map((pro, i) => (
                              <li key={i} className="text-xs text-emerald-400 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-white/50 mb-2">Cons</p>
                          <ul className="space-y-1">
                            {path.cons.map((con, i) => (
                              <li key={i} className="text-xs text-rose-400 flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full border border-rose-400 flex items-center justify-center text-[8px]">×</span> {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-xs text-white/50">Best for</p>
                        <p className="text-sm text-white/80">{path.bestFor}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Go-to-Market */}
            <TabsContent value="gtm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {goToMarketDoors.map((door, index) => (
                  <motion.div
                    key={door.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${door.color} flex items-center justify-center text-white mb-4`}>
                        {door.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {locale === 'en' ? door.name : door.nameRw}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {locale === 'en' ? door.description : door.descriptionRw}
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs text-white/50">Key Steps:</p>
                        {door.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                              {i + 1}
                            </span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Resources */}
            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Business Model Canvas Template',
                    description: 'Fill-in-the-blank canvas for your startup',
                    action: 'Download PDF',
                    color: 'emerald'
                  },
                  {
                    icon: <Video className="w-6 h-6" />,
                    title: 'Pitch Deck Masterclass',
                    description: 'Learn to create compelling investor presentations',
                    action: 'Watch Video',
                    color: 'blue'
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    title: 'Founder Community',
                    description: 'Connect with other Rwandan entrepreneurs',
                    action: 'Join Group',
                    color: 'purple'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Market Research Database',
                    description: 'Access sector reports and market data',
                    action: 'Explore',
                    color: 'amber'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Legal Templates',
                    description: 'Contracts, agreements, and compliance guides',
                    action: 'Download',
                    color: 'rose'
                  },
                  {
                    icon: <ExternalLink className="w-6 h-6" />,
                    title: 'Useful Links',
                    description: 'RDB, RISA, and other key resources',
                    action: 'View Links',
                    color: 'cyan'
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full p-6 group cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl bg-${resource.color}-500/20 flex items-center justify-center text-${resource.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                        {resource.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center text-emerald-400 text-sm font-medium">
                        {resource.action}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
