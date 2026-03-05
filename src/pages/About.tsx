import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Send, CheckCircle, ExternalLink,
  Database, Users, Target, Globe,
  ArrowRight, Linkedin, Twitter, Github
} from 'lucide-react';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassPanel } from '@/components/glass/GlassPanel';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function About() {
  const { locale } = useLocale();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setMessage('');
    }, 3000);
  };

  const content = {
    en: {
      mission: {
        title: 'Our Mission',
        text: 'KigaliFutureStack bridges the gap between Rwanda\'s National Strategy for Transformation (NST2) and the entrepreneurs, investors, and builders who will bring it to life. We make government strategy actionable and accessible.'
      },
      methodology: {
        title: 'Methodology',
        text: 'All data is sourced directly from the official NST2 2024-2029 document. Each metric includes source attribution for transparency. Opportunities are curated based on alignment with NST2 priorities and market viability.'
      },
      team: {
        title: 'Developed by Project Future',
        text: 'Project Future is a collective of Rwandan developers, designers, and policy enthusiasts committed to making national development strategy accessible to all.'
      }
    },
    rw: {
      mission: {
        title: 'Intego Yacu',
        text: 'KigaliFutureStack huz ingingo ya Leta yo guhindura u Rwanda (NST2) n\'abahinzi, abashoramari, n\'abubaki bazayishyira mu bikorwa. Dukora ingingo ya Leta ikorwa kandi yorohewe.'
      },
      methodology: {
        title: 'Uburyo',
        text: 'Amakuru yose ava mu nyandiko ya NST2 2024-2029. Buri meteri ifite inkomoko kugirango habeho ubwirwaruhame. Amahirwe yatoranyijwe ahuye n\'intego za NST2 n\'ubushobozi bw\'isoko.'
      },
      team: {
        title: 'Yakozwe na Project Future',
        text: 'Project Future itsinda ry\'abanyarwanda bakora porogaramu, abahanga mu gushushanya, n\'abakunda ingingo za Leta bahuye kugirango iterambere ry\'igihugu ribe ryorohewe.'
      }
    }
  };

  const c = content[locale];

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
            {locale === 'en' ? 'About' : 'Ibyerekeye'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            {locale === 'en'
              ? 'Learn about KigaliFutureStack, our mission, and how to get involved'
              : 'Menya ibyerekeye KigaliFutureStack, intego yacu, n\'uburyo wo gufatanya'
            }
          </motion.p>
        </div>
      </section>

      {/* Mission & Methodology */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{c.mission.title}</h3>
                <p className="text-white/70 leading-relaxed">{c.mission.text}</p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{c.methodology.title}</h3>
                <p className="text-white/70 leading-relaxed">{c.methodology.text}</p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{c.team.title}</h3>
                <p className="text-white/70 leading-relaxed">{c.team.text}</p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Attribution */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassPanel variant="elevated" className="p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                {locale === 'en' ? 'Data Attribution' : 'Inkoko y\'Amakuru'}
              </h3>
              <p className="text-white/70 mb-6">
                {locale === 'en'
                  ? 'All metrics, targets, and strategic information displayed on this platform are sourced from the official Government of Rwanda document:'
                  : 'Meteri zose, intego, n\'amakuru y\'ingenzi yerekana kuri iri korari ava mu nyandiko ya Leta y\'u Rwanda:'}
              </p>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-6">
                <p className="text-white font-medium">
                  National Strategy for Transformation (NST2) 2024-2029 - Abridged Version
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {locale === 'en' ? 'Republic of Rwanda, Ministry of Finance and Economic Planning' : 'Repubulika y\'u Rwanda, Minisiteri y\'Imari n\'Igenamigambi'}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {locale === 'en' ? 'View Official NST2 Document' : 'Reba Inyandiko ya NST2'}
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {locale === 'en' ? 'Ministry of Finance' : 'Minisiteri y\'Imari'}
                </a>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'en' ? 'Get in Touch' : 'Twandikire'}
              </h3>
              <p className="text-white/70 mb-8">
                {locale === 'en'
                  ? 'Have questions, feedback, or partnership inquiries? We\'d love to hear from you.'
                  : 'Ufite ibibazo, igitekerezo, cyangwa ikibazo cy\'ubufatanye? Twakwumva.'}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{locale === 'en' ? 'Email' : 'Imeri'}</p>
                    <p className="text-white">hello@kigalifuturestack.rw</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{locale === 'en' ? 'Location' : 'Aho turi'}</p>
                    <p className="text-white">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-white/50 text-sm mb-4">{locale === 'en' ? 'Follow Us' : 'Dukurikire'}</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassPanel variant="elevated" className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {locale === 'en' ? 'Message Sent!' : 'Ubutumwa Bwoherejwe!'}
                    </h4>
                    <p className="text-white/60">
                      {locale === 'en' ? 'We\'ll get back to you soon.' : 'Tuzagusubiza vuba.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">
                        {locale === 'en' ? 'Email' : 'Imeri'}
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={locale === 'en' ? 'your@email.com' : 'imeri@yawe.com'}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">
                        {locale === 'en' ? 'Message' : 'Ubutumwa'}
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={locale === 'en' ? 'How can we help?' : 'Dukubwire uko dushobora gufasha?'}
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-500 hover:bg-emerald-600"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {locale === 'en' ? 'Send Message' : 'Ohereza Ubutumwa'}
                    </Button>
                  </form>
                )}
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GlassPanel variant="glow" className="p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                {locale === 'en' ? 'Join the Waitlist' : 'Injira mu Rutonde'}
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                {locale === 'en'
                  ? 'Be the first to know about new opportunities, features, and exclusive content.'
                  : 'Ba wambere wamenya amahirwe mashya, ibikorwa, n\'ibikubiyemo.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={locale === 'en' ? 'Enter your email' : 'Andika imeri yawe'}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 flex-1"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
                  {locale === 'en' ? 'Join Waitlist' : 'Injira'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">KFS</span>
              </div>
              <span className="text-white font-semibold">KigaliFutureStack</span>
            </div>
            <p className="text-white/50 text-sm">
              {locale === 'en' 
                ? 'Developed by Project Future • Data sourced from NST2 2024-2029'
                : 'Yakozwe na Project Future • Amakuru ava muri NST2 2024-2029'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
