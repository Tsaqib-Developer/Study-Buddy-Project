import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Trophy, User, Settings, Search, Bell } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Sessions', path: '/sessions' },
    { icon: Trophy, label: 'Ranks', path: '/ranks' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 z-50 bg-surface flex-col p-6 gap-y-2 border-r border-outline-variant/10">
        <div className="mb-10 px-4">
          <h1 className="text-2xl font-black text-primary font-headline tracking-tight">Study-Buddy</h1>
          <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mt-1">Academic Architect</p>
        </div>

        <nav className="flex flex-col gap-y-2 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 font-headline font-semibold text-sm rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto bg-surface-container-low rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-fixed font-bold">
              L5
            </div>
            <div>
              <p className="text-xs font-bold text-primary">Next Level</p>
              <p className="text-[10px] text-on-surface-variant">240 XP to go</p>
            </div>
          </div>
          <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, ease: [0.5, 0, 0.2, 1.5] }}
              className="h-full bg-gradient-to-r from-tertiary to-tertiary-fixed-dim rounded-full"
            />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-8 py-4 border-b border-outline-variant/10">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input
                type="text"
                placeholder="Search study materials, sessions..."
                className="w-full bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
            </button>
            <div className="hidden sm:block h-8 w-px bg-outline-variant/20 mx-2" />
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-primary">Muhammad Hasbi</p>
                <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-tighter">Premium Scholar</p>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPNqYHso9R7C7WU5n1hqpSfXZhaesi-N0hobNUU-FEak_UttuN_iGOsG9otS_SdWKFt_1PBqujSYLwxrEmpDwxw7KgUkZfTeB9xa8rUL-bAyUnRSXO9hCTaitVUYtVLtGPeUbrEK-mBkIZeMcLu17kPgRlx6mLpt3E9YZ2GQriKtCV-NHWLlnxF7bh_0seEzkOM6_2hTDDoX2y79JlEHPpsG-2yQs0rYj14iRIsfeN_deAqGjq_txVT_y8eHZU_x1BsB4K7z7bRznc"
                alt="User avatar"
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-primary/5"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 pb-32 lg:pb-8">
          {children}
        </main>

        {/* Bottom Nav - Mobile */}
        <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 glass-nav px-4 pb-6 pt-3 flex justify-around items-center rounded-t-3xl shadow-tint">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center px-4 py-1.5 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-tertiary-container text-on-tertiary-fixed'
                    : 'text-primary'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-1">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
