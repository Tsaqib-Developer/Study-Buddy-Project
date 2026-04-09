import { motion } from 'motion/react';
import { School, Mail, Lock, Eye, ArrowRight, Github, Chrome } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-surface">
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden bg-surface-container-lowest rounded-3xl shadow-tint border border-surface-container">
        {/* Left Side: Visual/Branding */}
        <section className="hidden lg:flex lg:col-span-7 bg-primary relative p-16 flex-col justify-between text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzN0en4B7fKVcehT1SS1ANvZUyXu6URcOOuRX3V4o8QxQc1YflCp0iMSxisH11EsaeVcb030ZZMQ3OVXBdUjiGSrlp8y4kin9-e5HFY7XtmAOLt03XP5auI0-ieq5nhWTE6IFctG45qpTFh0hCpnQlZDNXg7kqWanVdGDI5YALx2aimKh-4tY4gEyKavZ-LAUDnM4HF_e_Ugq7T07OOQ8q5tXtNtFBZqheLlEYPV92oMeOdNTywo4_wvYSJW3wTklVvZjMsQlPeTwJ"
              alt="Background pattern"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <School className="w-10 h-10 text-tertiary-fixed" />
              <span className="font-headline font-black text-3xl tracking-tight">Study-Buddy</span>
            </div>
          </div>

          <div className="relative z-10 max-w-md">
            <h1 className="font-headline font-extrabold text-5xl leading-tight mb-6">Master Your Craft with Precision.</h1>
            <p className="text-on-primary-container text-lg leading-relaxed mb-8">Join thousands of high-performers using the Academic Architect to track progress, earn XP, and dominate their studies.</p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-headline font-bold text-sm uppercase tracking-widest text-tertiary-fixed">Active Study Pulse</span>
                <span className="flex items-center gap-1 text-xs font-bold text-white bg-tertiary px-2 py-1 rounded-full">LEVEL 42</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.5, ease: [0.5, 0, 0.2, 1.5] }}
                  className="bg-gradient-to-r from-tertiary to-tertiary-fixed-dim h-full"
                />
              </div>
              <div className="mt-4 flex gap-4 items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/student${i}/32/32`}
                      alt="Student"
                      className="w-8 h-8 rounded-full border-2 border-primary"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/80">1.2k+ students studying now</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex gap-8 text-sm font-medium opacity-60">
            <span>© 2024 Study-Buddy Inc.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </section>

        {/* Right Side: Login Form */}
        <section className="col-span-1 lg:col-span-5 flex flex-col p-8 lg:p-16 justify-center bg-surface-container-lowest">
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <School className="w-8 h-8 text-primary" />
            <span className="font-headline font-black text-xl text-primary">Study-Buddy</span>
          </div>

          <div className="mb-10">
            <h2 className="font-headline font-bold text-3xl text-primary mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant font-medium">Log in to continue your learning journey.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-surface-container-low rounded-xl font-semibold text-primary hover:bg-surface-container-high transition-all active:scale-95">
              <Chrome className="w-5 h-5 text-[#4285F4]" />
              <span className="text-sm">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-surface-container-low rounded-xl font-semibold text-primary hover:bg-surface-container-high transition-all active:scale-95">
              <Github className="w-5 h-5 text-[#333]" />
              <span className="text-sm">GitHub</span>
            </button>
          </div>

          <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <span className="relative px-4 text-xs font-bold text-on-surface-variant uppercase bg-surface-container-lowest">Or use email</span>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-primary mb-2 ml-1 uppercase tracking-wider" htmlFor="email">Email or Username</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="scholar@studybuddy.edu"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 px-1">
                <label className="text-xs font-bold text-primary uppercase tracking-wider" htmlFor="password">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 px-1">
              <input
                id="remember"
                type="checkbox"
                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/40"
              />
              <label htmlFor="remember" className="text-sm font-medium text-on-surface-variant">Keep me study-ready (Remember me)</label>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
              Log In
              <ArrowRight className="w-5 h-5 text-tertiary-fixed" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-on-surface-variant font-medium">
              Don't have an account? <a href="#" className="text-primary font-bold hover:underline">Sign Up</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
