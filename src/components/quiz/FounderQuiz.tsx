import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, CheckCircle, Code, Zap, Target, Rocket, Palette, Heart,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useLocale } from '@/contexts/LocaleContext';
import { quizQuestions, archetypes, sectorMatches } from '@/data/quiz';
import type { QuizState, QuizResult } from '@/types/quiz';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Zap,
  Target,
  Rocket,
  Palette,
  Heart
};

export function FounderQuiz() {
  const { locale } = useLocale();
  const [state, setState] = useState<QuizState>({ status: 'intro' });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startQuiz = useCallback(() => {
    setState({ status: 'in-progress', step: 0, answers: {} });
  }, []);

  const selectAnswer = useCallback((questionId: number, optionId: string) => {
    setState(prev => {
      if (prev.status !== 'in-progress') return prev;
      const newAnswers = { ...prev.answers, [questionId]: optionId };
      const nextStep = prev.step + 1;

      if (nextStep >= quizQuestions.length) {
        return { status: 'in-progress', step: nextStep, answers: newAnswers };
      }

      return { status: 'in-progress', step: nextStep, answers: newAnswers };
    });
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.status !== 'in-progress' || prev.step === 0) return prev;
      return { ...prev, step: prev.step - 1 };
    });
  }, []);

  const submitQuiz = useCallback(async () => {
    if (state.status !== 'in-progress') return;

    setIsSubmitting(true);
    setState({ status: 'submitting', answers: state.answers, email });

    // Calculate results
    const result = calculateResults(state.answers, email);

    // Submit to Google Sheets (replace with your Apps Script URL)
    // Setup guide: ~/Downloads/google-sheets-setup-guide.md
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzoFfi5KNM5WvimJOEfEaoZ7AKB97KLv7ouuBgaKEv-t_HOSdAG63kRzZLcqqX75iqA/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          archetype: result.archetype.id,
          topSector: result.matchedSectors[0]?.id,
          answers: state.answers,
          submittedAt: new Date().toISOString()
        })
      });
    } catch (e) {
      console.error('Form submission failed:', e);
    }

    setState({ status: 'complete', result });
    setIsSubmitting(false);
  }, [state, email]);

  const currentQuestion = state.status === 'in-progress'
    ? quizQuestions[state.step]
    : null;

  const progress = state.status === 'in-progress'
    ? ((state.step) / quizQuestions.length) * 100
    : 0;

  const showEmailCapture = state.status === 'in-progress' && state.step >= quizQuestions.length;

  return (
    <div className="min-h-screen bg-gradient-mesh py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {state.status === 'intro' && (
            <IntroScreen key="intro" onStart={startQuiz} locale={locale} />
          )}

          {state.status === 'in-progress' && currentQuestion && (
            <QuestionScreen
              key={`q-${currentQuestion.id}`}
              question={currentQuestion}
              progress={progress}
              onSelect={(optionId) => selectAnswer(currentQuestion.id, optionId)}
              onBack={state.step > 0 ? goBack : undefined}
              locale={locale}
              totalQuestions={quizQuestions.length}
              currentStep={state.step + 1}
            />
          )}

          {showEmailCapture && (
            <EmailCaptureScreen
              key="email"
              email={email}
              setEmail={setEmail}
              onSubmit={submitQuiz}
              isSubmitting={isSubmitting}
              locale={locale}
              onBack={goBack}
            />
          )}

          {state.status === 'submitting' && (
            <SubmittingScreen key="submitting" locale={locale} />
          )}

          {state.status === 'complete' && (
            <ResultsScreen
              key="results"
              result={state.result}
              locale={locale}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function IntroScreen({ onStart, locale }: { onStart: () => void; locale: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="text-center"
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center mx-auto mb-8">
        <Target className="w-10 h-10 text-emerald-400" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {locale === 'en' ? "What's Your Founder Archetype?" : "Ni iyihe Archetype ufite?"}
      </h1>

      <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto">
        {locale === 'en'
          ? "Take this 2-minute assessment to discover which of Rwanda's high-growth sectors matches your skills, goals, and situation."
          : "Fata iki kizamini kugirango umenye aho ubuhanga bwawe buhura."
        }
      </p>

      <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-2xl font-bold text-emerald-400">20</p>
          <p className="text-sm text-white/60">{locale === 'en' ? 'Questions' : 'Ibibazo'}</p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-2xl font-bold text-emerald-400">5</p>
          <p className="text-sm text-white/60">{locale === 'en' ? 'Minutes' : 'Iminota'}</p>
        </div>
      </div>

      <Button
        size="lg"
        onClick={onStart}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-6 text-lg rounded-xl"
      >
        {locale === 'en' ? 'Start Assessment' : 'Tangira'}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </motion.div>
  );
}

function QuestionScreen({
  question,
  progress,
  onSelect,
  onBack,
  locale,
  totalQuestions,
  currentStep
}: {
  question: typeof quizQuestions[0];
  progress: number;
  onSelect: (id: string) => void;
  onBack?: () => void;
  locale: string;
  totalQuestions: number;
  currentStep: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-emerald-400 text-sm font-medium">
              {locale === 'en' ? `Section ${question.section} of 5` : `Igice ${question.section} cya 5`}
            </span>
            <span className="text-white/40 text-sm ml-2">
              — {locale === 'en' ? question.sectionName : question.sectionNameRw}
            </span>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="text-white/60 hover:text-white flex items-center gap-1 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'en' ? 'Back' : 'Gusubira'}
            </button>
          )}
        </div>

        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-white/60">
            {locale === 'en' ? `Question ${currentStep} of ${totalQuestions}` : `Ikibazo ${currentStep} cya ${totalQuestions}`}
          </span>
          <span className="text-white/40">{Math.round(progress)}%</span>
        </div>

        <Progress value={progress} className="h-2 bg-white/10" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        {locale === 'en' ? question.question : question.questionRw}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(option.id)}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-white group-hover:text-emerald-400 transition-colors">
                {locale === 'en' ? option.label : option.labelRw}
              </span>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function EmailCaptureScreen({
  email,
  setEmail,
  onSubmit,
  isSubmitting,
  locale,
  onBack
}: {
  email: string;
  setEmail: (e: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  locale: string;
  onBack?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="text-center"
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center mx-auto mb-8">
        <CheckCircle className="w-10 h-10 text-emerald-400" />
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">
        {locale === 'en' ? "Almost Done!" : "Hafi gusoza!"}
      </h2>

      <p className="text-white/70 mb-8 max-w-md mx-auto">
        {locale === 'en'
          ? "Enter your email to get your personalized Founder Profile and startup recommendations."
          : "Shyiramo imeri yawe kugirango ubone igisubizo."
        }
      </p>

      <div className="max-w-sm mx-auto space-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={locale === 'en' ? "your@email.com" : "imeri@yawe.com"}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-center py-6"
          onKeyDown={(e) => e.key === 'Enter' && email && onSubmit()}
        />

        <Button
          size="lg"
          onClick={onSubmit}
          disabled={!email || isSubmitting}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {locale === 'en' ? 'Analyzing...' : 'Gusuzuma...'}
            </>
          ) : (
            <>
              {locale === 'en' ? 'Get My Results' : 'Bonera Igisubizo'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>

        {onBack && (
          <button
            onClick={onBack}
            className="text-white/60 hover:text-white text-sm"
          >
            {locale === 'en' ? 'Go Back' : 'Gusubira'}
          </button>
        )}
      </div>

      <p className="text-white/40 text-xs mt-6 max-w-sm mx-auto">
        {locale === 'en'
          ? "We'll never spam you. Unsubscribe anytime."
          : "Ntituzohereze spam. Wavana igihe icyo ari cyo."
        }
      </p>
    </motion.div>
  );
}

function SubmittingScreen({ locale }: { locale: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-20"
    >
      <Loader2 className="w-16 h-16 text-emerald-400 animate-spin mx-auto mb-6" />
      <h2 className="text-2xl font-bold text-white mb-2">
        {locale === 'en' ? "Analyzing your answers..." : "Gusuzuma ibisubizo..."}
      </h2>
      <p className="text-white/60">
        {locale === 'en' ? "Matching you with the best sectors..." : "Gushaka imirimo..."}
      </p>
    </motion.div>
  );
}

function ResultsScreen({ result, locale }: { result: QuizResult; locale: string }) {
  const Icon = iconMap[result.archetype.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      {/* Archetype Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-purple-500/20 border border-white/20">
        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-emerald-400" />
        </div>

        <p className="text-white/60 text-sm uppercase tracking-wider mb-2 text-center">
          {locale === 'en' ? 'Your Founder Archetype' : 'Archetype Yawe'}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {locale === 'en' ? result.archetype.name : result.archetype.nameRw}
        </h2>

        <p className="text-white/80 text-center max-w-lg mx-auto">
          {locale === 'en' ? result.archetype.description : result.archetype.descriptionRw}
        </p>
      </div>

      {/* Top Sectors */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          {locale === 'en' ? 'Your Top 3 Sector Matches' : 'Imirimo Yawe 3'}
        </h3>

        <div className="space-y-3">
          {result.matchedSectors.slice(0, 3).map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">
                  {locale === 'en' ? sector.name : sector.nameRw}
                </span>
                <span className="text-emerald-400 font-bold">
                  {sector.matchScore}%
                </span>
              </div>
              <p className="text-white/60 text-sm">
                {locale === 'en' ? sector.why : sector.whyRw}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strengths & Challenges */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <h4 className="text-emerald-400 font-semibold mb-3">
            {locale === 'en' ? 'Your Strengths' : 'Ubuhanga Bwawe'}
          </h4>
          <ul className="space-y-2">
            {(locale === 'en' ? result.archetype.strengths : result.archetype.strengthsRw).map((s, i) => (
              <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <h4 className="text-amber-400 font-semibold mb-3">
            {locale === 'en' ? 'Watch Out For' : 'Wirinde'}
          </h4>
          <ul className="space-y-2">
            {(locale === 'en' ? result.archetype.challenges : result.archetype.challengesRw).map((c, i) => (
              <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">⚠</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="flex-1 bg-emerald-500 hover:bg-emerald-600"
          onClick={() => window.location.href = '/opportunity-atlas'}
        >
          {locale === 'en' ? 'Explore Your Sectors' : 'Shaka Imirimo'}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
          onClick={() => window.location.href = '/builders-toolkit'}
        >
          {locale === 'en' ? 'Get the Toolkit' : 'Fata Ibikoresho'}
        </Button>
      </div>

      <p className="text-white/40 text-sm text-center">
        {locale === 'en'
          ? `Results sent to ${result.email}`
          : `Igicyemezo cyoherejwe kuri ${result.email}`
        }
      </p>
    </motion.div>
  );
}

function calculateResults(answers: Record<number, string>, email: string): QuizResult {
  // Calculate archetype scores
  const scores: Record<string, number> = {};

  quizQuestions.forEach(q => {
    const answerId = answers[q.id];
    const option = q.options.find(o => o.id === answerId);
    if (option?.scores) {
      Object.entries(option.scores).forEach(([archetype, points]) => {
        scores[archetype] = (scores[archetype] || 0) + points;
      });
    }
  });

  // Get top archetype
  const topArchetypeId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
  const archetype = archetypes.find(a => a.id === topArchetypeId) || archetypes[0];

  // Calculate sector matches
  const sectorScores: Record<string, { score: number; why: string; whyRw: string }> = {};

  Object.entries(sectorMatches).forEach(([sectorId, matches]) => {
    const match = matches[archetype.id];
    if (match) {
      sectorScores[sectorId] = match;
    }
  });

  // Get top 3 sectors
  const matchedSectors = Object.entries(sectorScores)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, 3)
    .map(([id, data]) => {
      const sectorNames: Record<string, { en: string; rw: string }> = {
        fintech: { en: 'Fintech', rw: 'Fintech' },
        agritech: { en: 'AgriTech', rw: 'AgriTech' },
        edtech: { en: 'EdTech', rw: 'EdTech' },
        healthtech: { en: 'HealthTech', rw: 'HealthTech' },
        ecommerce: { en: 'E-commerce', rw: 'Ubucuruzi ku Mbuga' },
        'creative-economy': { en: 'Creative Economy', rw: 'Ubukungu bw\'Ibindi' },
        'tourism-tech': { en: 'Tourism Tech', rw: 'Ubukerarugendo' },
        'climate-tech': { en: 'Climate Tech', rw: 'Ikoranabuhanga ry\'Ikirere' },
        manufacturing: { en: 'Manufacturing', rw: 'Ubucuruzi' },
        'construction-tech': { en: 'Construction Tech', rw: 'Ikoranabuhanga ry\'Ubwubatsi' }
      };

      return {
        id,
        name: sectorNames[id]?.en || id,
        nameRw: sectorNames[id]?.rw || id,
        matchScore: data.score,
        why: data.why,
        whyRw: data.whyRw
      };
    });

  return {
    archetype,
    matchedSectors,
    answers,
    email
  };
}
