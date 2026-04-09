import { useState } from 'react';
import { motion } from 'motion/react';
import { Timer, MapPin, Video, Calendar, History, Plus, ArrowRight, CheckCircle, MessageSquare, Star } from 'lucide-react';
import { StudySession } from '../types';

const sessions: StudySession[] = [
  {
    id: '1',
    subject: 'Discrete Mathematics',
    topic: 'Reviewing Logic Sets and Graph Theory fundamentals for Midterms.',
    partner: 'Sarah R.',
    duration: 'Started 15m ago',
    location: 'Library 2nd Floor',
    status: 'in-progress',
    icon: 'event_note',
  },
  {
    id: '2',
    subject: 'Calculus III',
    topic: 'Struggling with integration by parts and trigonometric substitution.',
    partner: 'David B.',
    duration: 'Today, 4:00 PM',
    location: 'Canteen',
    status: 'scheduled',
    icon: 'calendar_today',
  },
];

const history = [
  { id: 'h1', subject: 'Organic Chemistry II', duration: '2h 30m', xp: '+45 XP', status: 'completed' },
  { id: 'h2', subject: 'Physics Lab Group A', duration: 'Yesterday', xp: '-10 XP', status: 'missed' },
  { id: 'h3', subject: 'Microeconomics Review', duration: '3d ago', xp: '+30 XP', status: 'completed' },
];

export default function Sessions() {
  const [filter, setFilter] = useState<'Active' | 'Past' | 'Scheduled'>('Active');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-headline font-extrabold text-3xl tracking-tight text-primary">My Sessions</h2>
          <p className="text-on-surface-variant mt-1 font-medium">Manage your learning journey and upcoming collaborations.</p>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-tint hover:scale-[0.98] transition-all">
          <Plus className="w-5 h-5" />
          <span>New Session</span>
        </button>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {(['Active', 'Past', 'Scheduled'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              filter === f
                ? 'bg-primary text-white shadow-lg shadow-primary/10'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Sessions List */}
        <div className="lg:col-span-8 space-y-6">
          {sessions.map((session) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container-lowest rounded-3xl p-6 shadow-tint relative overflow-hidden group border border-surface-container"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  session.status === 'in-progress' ? 'bg-tertiary-container text-on-tertiary-fixed' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  {session.status === 'in-progress' && <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />}
                  {session.status.replace('-', ' ')}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-headline font-bold text-xl text-primary mb-1">{session.subject}</h3>
                <p className="text-on-surface-variant text-sm">
                  With <span className="font-semibold text-primary">{session.partner}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-container-low rounded-xl p-3">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Duration</p>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{session.duration}</span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Location</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{session.location}</span>
                  </div>
                </div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                session.status === 'in-progress'
                  ? 'bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20'
                  : 'bg-surface-container-low text-primary hover:bg-surface-container-high'
              }`}>
                {session.status === 'in-progress' ? (
                  <>
                    <Video className="w-5 h-5 fill-current" />
                    Join Call
                  </>
                ) : (
                  'Details'
                )}
              </button>
            </motion.div>
          ))}

          {/* Empty State for History if needed */}
          {filter === 'Past' && (
            <div className="bg-surface-container-low/50 border-2 border-dashed border-outline-variant/20 rounded-3xl p-10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4">
                <History className="w-8 h-8 text-on-surface-variant" />
              </div>
              <p className="font-bold text-primary mb-1">No other recent activity</p>
              <p className="text-sm text-on-surface-variant max-w-[200px]">Your completed sessions will appear here for review.</p>
            </div>
          )}
        </div>

        {/* Sidebar History */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-surface-container-low rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-headline font-bold text-lg text-primary">Recent History</h4>
              <button className="text-xs text-on-surface-variant hover:text-primary">Clear all</button>
            </div>
            <div className="space-y-6">
              {history.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    item.status === 'completed' ? 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                  }`}>
                    {item.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                  </div>
                  <div className="border-b border-outline-variant/10 pb-4 w-full">
                    <p className="text-sm font-bold text-primary leading-tight">{item.subject}</p>
                    <p className="text-[10px] text-on-surface-variant mt-1 uppercase font-bold tracking-tighter">
                      {item.status} • {item.duration} • {item.xp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-outline-variant/20 rounded-xl text-xs font-bold text-on-surface-variant hover:bg-white transition-all">
              View All History
            </button>
          </section>

          {/* Promo */}
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-lg font-extrabold font-headline">Unlock Pro Mentorship</h4>
              <p className="text-sm text-on-primary-container mt-2">Get 1-on-1 access to verified expert scholars for difficult subjects.</p>
              <button className="mt-4 bg-tertiary-container text-on-tertiary-fixed px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                Upgrade Now
              </button>
            </div>
            <Star className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
