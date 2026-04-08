import { motion } from 'motion/react';
import { Award, School, BookOpen, Trophy, Verified, Bolt, Heart, Calendar, ChevronRight, UserCircle, Bell, HelpCircle, LogOut } from 'lucide-react';

const stats = [
  { label: 'Total XP', value: '42,850', color: 'text-tertiary' },
  { label: 'Sessions', value: '184', color: 'text-primary' },
  { label: 'Rank', value: '#1,402', color: 'text-primary' },
  { label: 'Badges', value: '12', color: 'text-tertiary-fixed-dim' },
];

const badges = [
  { name: 'Night Owl', desc: '10+ Midnight Sessions', icon: Bolt, level: 'L3', color: 'border-tertiary-container', iconColor: 'text-tertiary' },
  { name: 'Fast Learner', desc: 'Completed 5 courses early', icon: Bolt, color: 'border-primary', iconColor: 'text-primary' },
  { name: 'Team Pillar', desc: 'Helped 50+ students', icon: Heart, color: 'border-tertiary-container', iconColor: 'text-tertiary' },
];

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-surface-container-lowest">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbNQnaoqSmeRgvvdfR2lbJD-mRfGrEYa-8x9Bo1gcSPxO5EcOF9NjJmqHnUOT7ukpJjiPvrbZFwgRa_0qpNqdbRt9AJ1xmswntDn-mBbD-RDIR0IgN587xKeAM6ONAW6MmYXyza-ZWtxJQFQw549s75HfzVNK_9YF133Thw6pk8zOG0D-YzSF26MxMIl1PyAU-hw0Lnszs3po2el4T5RPWeYmyvrGtdikZwffYsUBjP3YuZXQcD4xtg0hRsFx0e12B7QgTTLjWFrHe"
              alt="Muhammad Hasbi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-tertiary-container text-on-tertiary-fixed p-2 rounded-xl shadow-lg">
            <Award className="w-5 h-5 fill-current" />
          </div>
        </div>
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">Muhammad Hasbi</h2>
          <p className="font-body text-on-surface-variant font-medium">Undergraduate Student</p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center space-y-1 border border-surface-container">
            <span className={`${stat.color} font-headline font-bold text-2xl`}>{stat.value}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Academic Info */}
      <section className="bg-primary bg-gradient-to-br from-primary to-primary-container p-8 rounded-3xl text-white shadow-tint relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
            <School className="w-5 h-5" /> Academic Info
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-primary-container mb-1 font-bold">Institution</p>
              <p className="font-semibold text-sm">University of Indonesia</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-primary-container mb-1 font-bold">Major</p>
              <p className="font-semibold text-sm">Computer Science</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-primary-container mb-1 font-bold">Year</p>
              <p className="font-semibold text-sm">Year 2</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-primary-container mb-1 font-bold">Expected Graduation</p>
              <p className="font-semibold text-sm">June 2025</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[10px] uppercase tracking-wider text-on-primary-container mb-1 font-bold">Expertise</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Algebra', 'Logic', 'Discrete Math', 'Calculus'].map((skill) => (
                  <span key={skill} className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Badges */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline font-bold text-xl text-primary">Earned Badges</h3>
          <button className="text-primary font-bold text-sm hover:underline">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
          {badges.map((badge) => (
            <motion.div
              key={badge.name}
              whileHover={{ y: -4 }}
              className={`flex-shrink-0 bg-surface-container-lowest p-6 rounded-2xl shadow-sm w-40 flex flex-col items-center text-center space-y-3 border-b-4 ${badge.color} border border-surface-container`}
            >
              <div className="relative">
                <badge.icon className={`w-10 h-10 ${badge.iconColor} fill-current`} />
                {badge.level && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[8px] flex items-center justify-center rounded-full font-bold">
                    {badge.level}
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-bold text-primary leading-tight">{badge.name}</p>
                <p className="text-[10px] text-on-surface-variant font-medium mt-1">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
          {/* Locked Badge */}
          <div className="flex-shrink-0 bg-surface-container p-6 rounded-2xl border-2 border-dashed border-outline-variant/30 w-40 flex flex-col items-center text-center space-y-3 opacity-60">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <Award className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 leading-tight">Scholar</p>
              <p className="text-[10px] text-slate-400 font-medium mt-1">Reach Level 30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Settings List */}
      <section className="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container">
        <div className="divide-y divide-surface-container-high">
          {[
            { icon: UserCircle, label: 'Edit Profile' },
            { icon: Bell, label: 'Notification Settings' },
            { icon: HelpCircle, label: 'Help & Support' },
          ].map((item) => (
            <button key={item.label} className="w-full flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors group">
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-outline-variant group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
          <button className="w-full flex items-center justify-between p-5 hover:bg-error-container/20 transition-colors group">
            <div className="flex items-center gap-4">
              <LogOut className="w-5 h-5 text-error" />
              <span className="font-semibold text-sm text-error">Logout</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
