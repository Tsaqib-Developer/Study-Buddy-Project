import { motion } from 'motion/react';
import { PlusCircle, Search, MapPin, ArrowRight, Network, FunctionSquare, Star } from 'lucide-react';
import { StudySession } from '../types';

const studyQueue: StudySession[] = [
  {
    id: '1',
    subject: 'Discrete Mathematics',
    topic: "Need help with graph theory proofs. Specifically Euler's formula and planar graphs.",
    partner: 'Sarah R.',
    duration: 'Started 15m ago',
    location: 'Library 2nd Floor',
    status: 'open',
    icon: 'account_tree',
    priority: 'high',
  },
  {
    id: '2',
    subject: 'Calculus',
    topic: "Struggling with integration by parts and trigonometric substitution.",
    partner: 'David B.',
    duration: 'Active Session',
    location: 'Canteen',
    status: 'matched',
    icon: 'function',
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* User Info & Stats */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="font-headline font-extrabold text-3xl text-primary tracking-tight">Muhammad Hasbi</h1>
          <p className="text-on-surface-variant text-sm font-medium">Undergraduate Student</p>
        </div>
        
        <div className="bg-surface-container-low rounded-3xl p-5 flex-1 md:max-w-xs space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-tertiary fill-tertiary" />
              <span className="font-headline font-bold text-lg text-primary">Level 5</span>
            </div>
            <span className="text-xs font-bold text-on-surface-variant">450 / 500 XP</span>
          </div>
          <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '90%' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-tertiary to-tertiary-fixed-dim rounded-full"
            />
          </div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">50 XP to next rank</p>
        </div>
      </section>

      {/* Hero CTA */}
      <section>
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-8 text-white shadow-tint relative overflow-hidden group">
          <div className="relative z-10 max-w-md">
            <h2 className="font-headline font-extrabold text-2xl mb-2">Stuck on a topic?</h2>
            <p className="text-on-primary-container text-sm mb-6 leading-relaxed">Connect with peers instantly and clear your doubts today.</p>
            <div className="flex flex-col gap-4">
              <button className="bg-gradient-to-r from-tertiary-container to-tertiary-fixed-dim text-on-tertiary-fixed font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
                <PlusCircle className="w-5 h-5" />
                Request Study Help
              </button>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search subjects (e.g. Algebra)"
                  className="w-full bg-white/10 border-none rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:ring-2 focus:ring-tertiary-container/50"
                />
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 text-white/5 text-[200px] pointer-events-none"
          >
            <Network />
          </motion.div>
        </div>
      </section>

      {/* Study Queue */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="font-headline font-bold text-xl text-primary">Study Queue</h3>
          <button className="text-tertiary text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyQueue.map((session) => (
            <motion.div
              key={session.id}
              whileHover={{ y: -4 }}
              className="bg-surface-container-lowest rounded-3xl p-6 shadow-tint border border-surface-container flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 text-[10px] font-black uppercase rounded-full ${
                      session.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-secondary-container text-on-secondary-container'
                    }`}>
                      {session.status}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-medium">{session.duration}</span>
                  </div>
                  <h4 className="font-headline font-bold text-lg text-primary leading-tight">{session.subject}</h4>
                </div>
                <div className="w-12 h-12 bg-surface-container-low rounded-2xl flex items-center justify-center text-primary">
                  {session.icon === 'account_tree' ? <Network className="w-6 h-6" /> : <FunctionSquare className="w-6 h-6" />}
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-1">"{session.topic}"</p>
              <div className="flex items-center gap-1.5 text-on-surface-variant mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-medium">{session.location}</span>
              </div>
              <button className={`w-full py-3.5 font-bold rounded-xl active:scale-95 transition-all text-sm flex items-center justify-center gap-2 ${
                session.status === 'open' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-container-high text-primary'
              }`}>
                {session.status === 'open' ? 'Help Now' : 'View Session'}
                {session.status === 'open' && <ArrowRight className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
