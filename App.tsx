import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UserProfile, RecommendationResult } from './types'
import { recommend } from './ml/recommender'
import ParticleBackground from './components/ParticleBackground'
import FormWizard from './components/form/FormWizard'
import ResultsPage, { AnalysingScreen } from './components/results/ResultsPage'

type AppState = 'landing' | 'form' | 'analysing' | 'results'

const FEATURES = [
  { icon: '🧠', title: 'Cosine Similarity ML', desc: 'Vector-based matching across 4 dimensions' },
  { icon: '⚖️', title: 'Weighted Scoring', desc: 'Skills 38% · Interests 28% · Personality 20%' },
  { icon: '📊', title: 'Skill Gap Analysis', desc: 'See exactly what to learn for each career' },
  { icon: '🗺️', title: 'Learning Roadmap', desc: 'Phase-by-phase plan with curated resources' },
]

const Landing = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
    {/* Background orbs */}
    <div className="orb orb-violet absolute pointer-events-none"
      style={{ width: 600, height: 600, top: -200, left: -200, opacity: 0.7 }} />
    <div className="orb orb-indigo absolute pointer-events-none"
      style={{ width: 500, height: 500, bottom: -150, right: -150, opacity: 0.6 }} />
    <div className="orb orb-amber absolute pointer-events-none"
      style={{ width: 300, height: 300, top: '40%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.4 }} />

    {/* Floating icons */}
    <div className="absolute left-10 top-1/3 animate-float hidden lg:block">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
        style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>💻</div>
    </div>
    <div className="absolute right-12 top-1/4 animate-float-2 hidden lg:block">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
        style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>🚀</div>
    </div>
    <div className="absolute left-16 bottom-1/3 animate-float-3 hidden lg:block opacity-70">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
        style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>🎯</div>
    </div>
    <div className="absolute right-20 bottom-1/4 animate-float hidden lg:block opacity-70">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
        style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>🎨</div>
    </div>

    <div className="relative z-10 w-full max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
        style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}
      >
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#8b5cf6' }} />
        <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#a78bfa' }}>
          DECISION INTELLIGENCE ENGINE · v2.0
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
        className="font-bold mb-5 leading-tight"
        style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5rem)' }}
      >
        Find Your Perfect{' '}
        <span className="gradient-text-animated">Career Path</span>
        <br />with AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
        className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        style={{ color: 'rgba(244,243,255,0.55)' }}
      >
        Tell us your <span style={{ color: '#a78bfa' }}>skills</span>,{' '}
        <span style={{ color: '#fbbf24' }}>interests</span>,{' '}
        <span style={{ color: '#34d399' }}>subjects</span>, and{' '}
        <span style={{ color: '#818cf8' }}>personality</span> — our ML engine matches you to the right career,
        surfaces your skill gaps, and builds a personalised learning roadmap.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
      >
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          className="btn-primary px-10 py-4 text-base"
          style={{ borderRadius: '14px', fontSize: '1rem' }}
        >
          Discover My Career Path →
        </motion.button>
        <p className="mt-4 text-xs font-mono" style={{ color: 'rgba(244,243,255,0.25)' }}>
          Free · No signup · Takes 3 minutes
        </p>
      </motion.div>

      {/* Features grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16"
      >
        {FEATURES.map(({ icon, title, desc }) => (
          <div key={title} className="holo-card p-4 text-left">
            <div className="text-2xl mb-3">{icon}</div>
            <div className="text-xs font-semibold mb-1" style={{ color: 'rgba(244,243,255,0.85)' }}>{title}</div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(244,243,255,0.38)' }}>{desc}</div>
          </div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="flex gap-10 justify-center mt-12"
      >
        {[
          { value: '20+', label: 'Career Profiles' },
          { value: '35+', label: 'Skills Tracked' },
          { value: '4', label: 'Decision Factors' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl font-extrabold gradient-text">{value}</div>
            <div className="text-xs font-mono mt-1 tracking-widest" style={{ color: 'rgba(244,243,255,0.25)' }}>
              {label.toUpperCase()}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
)

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing')
  const [results, setResults] = useState<RecommendationResult[]>([])

  const handleFormComplete = (profile: UserProfile) => {
    setAppState('analysing')
    setTimeout(() => {
      const recs = recommend(profile, 5)
      setResults(recs)
      setAppState('results')
    }, 2800)
  }

  const handleReset = () => {
    setResults([])
    setAppState('landing')
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#07060F' }}>
      <ParticleBackground />
      <div className="fixed inset-0 grid-bg pointer-events-none" style={{ zIndex: 1, opacity: 0.5 }} />

      {/* Navbar */}
      {appState !== 'analysing' && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between"
          style={{
            background: 'rgba(7,6,15,0.85)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(124,58,237,0.1)',
          }}
          initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        >
          <button onClick={handleReset} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}>
              🧠
            </div>
            <div>
              <div className="font-bold text-sm gradient-text leading-none">CareerAI</div>
              <div className="text-xs font-mono" style={{ color: 'rgba(124,58,237,0.5)', letterSpacing: '0.1em', fontSize: 9 }}>
                DECISION ENGINE
              </div>
            </div>
          </button>

          <div className="flex items-center gap-3">
            {appState === 'form' && (
              <span className="text-xs font-mono" style={{ color: 'rgba(244,243,255,0.3)' }}>
                Building your profile…
              </span>
            )}
            {appState === 'results' && (
              <button onClick={handleReset} className="btn-ghost px-4 py-1.5 text-xs" style={{ borderRadius: '8px' }}>
                ← Restart
              </button>
            )}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono" style={{ color: '#34d399' }}>ML Active</span>
            </div>
          </div>
        </motion.nav>
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <AnimatePresence mode="wait">
          {appState === 'landing' && (
            <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Landing onStart={() => setAppState('form')} />
            </motion.div>
          )}
          {appState === 'form' && (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FormWizard onComplete={handleFormComplete} />
            </motion.div>
          )}
          {appState === 'analysing' && (
            <motion.div key="analysing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AnalysingScreen />
            </motion.div>
          )}
          {appState === 'results' && results.length > 0 && (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ResultsPage results={results} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
