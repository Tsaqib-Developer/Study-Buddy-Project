import { motion } from 'motion/react';
import { Trophy, Star, ArrowDown, Settings } from 'lucide-react';
import { LeaderboardEntry } from '../types';

const topThree: LeaderboardEntry[] = [
  { rank: 1, name: 'Anya M.', xp: 2850, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj_bhajvpIDPebIWUyxzHudhTgepRsU2s0v9-SoVdStyKa9EpDB4sExvmFyjIBF8ahIPGYSBa7WeHq5LRyQcC-s-upCvv2cQLAnKosoB5Zq2MxnF1ZsrIY_oXeN1uePk4-fuBx-UviGlIp-77cwVqMGpTCx69Oz3lvC2YR-Zj7k_8YC7abEEf014NXiIHmmn3feB5mo01B9tQWNXUbhXQceHFtSxyh8d_tiA_Y85PukgXWMVwv25iXEQb0El3wJaNiiPUJ_UjkUikx' },
  { rank: 2, name: 'Julian S.', xp: 1240, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKZQbr33svt_z9EIgsLQJRiSPU4g2CpznEHIccTFkeaWr2eu3HTQz4Mgc7RRWdp_PF8E5Y7iWCPAG7SqnGGKb9q0yWcPWdNPuolLtCUayYa6-vlFPaegVQGeqjnyODojs_A2P2v0x8yaz9een7ooZ7GReiGIdghYx6UICybBDi0ag2ulW-z689FER-_LkWrTRtKYu_suyIp53QjagTaiCOMne2lm41DjzG-6jpSXmx_8oJhayHOaBaf-nUCGeOquNKVu3zVE4eAhW-' },
  { rank: 3, name: 'Kevin L.', xp: 980, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpN8HFt8sP1GuSoJULNXa-FYzYNgLeGbqB9lKikgRb6YRGh10Cvga09LK14mSAq_eeKYYa03wbDbbrFdhyOcAft2nrQ1EqBUpmkgy8VE_2v153iLKDc5m6tuz2pTFtA0jhev28X-WFVMF-_cSdtYJy5S_riXr7bb-mfw8dp0IlycA5nkvL6cpSvwxc-1XDejdEkFYB4cFgrFe2nYAXW4CQkL6Adi7CGilCrFny_n9_Cz-lRoasn9CIIf5YS_s3k7zq1qrShrpnWNx5' },
];

const others: LeaderboardEntry[] = [
  { rank: 4, name: 'Sarah R.', xp: 820, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdkf11-jdlaDG8ditUWEpqOVM_9nsCiEuo8cx_lckIBFT0kxz-DzIGgyZ-jaFSXBQPf6qt5hqylp-A7CvLLtHuYFZZPO379QyJCUyWZHIYzEgmXL8UaeH_gCXfMnJ3DIc5MPfLIb0YsjRdPjVyKGkwi8ekyrJ6u6Raz0phkTKcGZ7Zv5mpH1MDumsAtHb-_LUfPEB9AAB4wWTJ_opgDIY_UsFy2HaNvEmfiLMAQuHkgH4Lwre2tEhRCmcgzj5n5uZm8-vErlotRpEO' },
  { rank: 5, name: 'David B.', xp: 795, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi_R13eScLO9oHUmbImpRd9ziUIOTOcPpUKx_UStbGeA-jcrNpAQTO7l7sHincDFOv_mmYbN4pLka1Gdn2A7AfABldO4MGhgofcZTi7J40n-56HhPWcUHfAPAizLoN1ACdlY5XQQuPb-th4MS5tjWthiL5E-yRrLEQpAlTqeVR50m9pUwiXMdj-50JMjf4Ux2vzXMNneSun_zIW2PDpQjSGlOlkNdITwguZmOg35hqGNOAlGw6utSjKyXmx8TforUUNab6_3mvteiQ' },
  { rank: 6, name: 'Elena Y.', xp: 760, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrwvnWHaMewI5iLTnetS10Z701Lowx4H5WotlYjXC-Cfzpkv6j-qgwL1ha38BPRhdtPVUuwj1cJgoU5R3W0HPep4IV5xzHR7SSIIV5BobK_H996fFx14014z81yZjJ5idwB92qyxUOgh0Qc7f4Iq2a_E46UYQPJpwwmgyIDeb3ruhf0oc923yIKsQr3bCb6jsNJmgxXSOe0pF4v-FneU-PcBCI7eAmDnFotmZVPo1Njb_cstM6itRNZFEG-SewkA_YXVKHaYPHwQEK' },
  { rank: 7, name: 'Tom C.', xp: 745, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8eRbudm5Uvub9GfDnCJFNYE-QheLo1wHDzBPnmEeYclqwh4w45BQUnALO0wPl7V_qLr_UGil5dvYHnGpFiNk75MErH-N6Pj5d8QrcqZr7S66ybay_CKuVCs8whIK6Ecur2EYWbK6aBzMvlh8dyeYor72vs7FeiDXU13fiuEQqQUbWX0Kh2DJt2izVAp9mHdRBKU8BWLsiMxIUzS88O_leZq0S9umuV_rh1VPrbft9DIOZFRzRHUkm14NcHYHAKJ5kHlKE9qCv1oxZ' },
];

export default function Leaderboard() {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-extrabold text-primary tracking-tight font-headline">Ranks</h1>
          <p className="text-on-surface-variant font-medium mt-1">Global Leaderboard</p>
        </div>
        <button className="p-2 text-primary hover:bg-surface-container-low rounded-xl transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Podium */}
      <div className="grid grid-cols-3 gap-4 items-end mb-10 pt-12">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-16 h-16 rounded-full p-1 bg-surface-container-highest">
              <img src={topThree[1].avatar} alt={topThree[1].name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-slate-300 w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface">
              <span className="text-[10px] font-bold text-slate-800">2</span>
            </div>
          </div>
          <p className="text-xs font-bold text-primary truncate w-full text-center">{topThree[1].name}</p>
          <p className="text-[10px] font-bold text-on-surface-variant">{topThree[1].xp} XP</p>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4 scale-125 origin-bottom">
            <div className="w-20 h-20 rounded-full p-1.5 bg-gradient-to-tr from-tertiary to-tertiary-container shadow-[0px_0px_20px_rgba(207,167,0,0.3)]">
              <img src={topThree[0].avatar} alt={topThree[0].name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Trophy className="w-6 h-6 text-tertiary-container fill-tertiary-container" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-tertiary-container w-7 h-7 rounded-full flex items-center justify-center border-2 border-surface">
              <span className="text-xs font-black text-on-tertiary-fixed">1</span>
            </div>
          </div>
          <p className="text-sm font-black text-primary mt-2">{topThree[0].name}</p>
          <p className="text-xs font-extrabold text-tertiary">{topThree[0].xp} XP</p>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-16 h-16 rounded-full p-1 bg-surface-container-highest">
              <img src={topThree[2].avatar} alt={topThree[2].name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-orange-300 w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface">
              <span className="text-[10px] font-bold text-orange-900">3</span>
            </div>
          </div>
          <p className="text-xs font-bold text-primary truncate w-full text-center">{topThree[2].name}</p>
          <p className="text-[10px] font-bold text-on-surface-variant">{topThree[2].xp} XP</p>
        </div>
      </div>

      {/* Current User Context */}
      <div className="bg-primary-container rounded-2xl p-5 mb-8 shadow-tint border-l-4 border-tertiary-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-on-primary-container/30 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXDXLfgEkFuylWESyOYSQ6QN2cHSNDc8fDXgyB8aTzSl94czqXzXPPAWsTOKc_F6G0Icg-52kT5TetU0kPIg5ENw6o6Nr-z5GgRy-aR2XTPdbrrBKl-QKLc8KAUXL6NZEgUcp2dE8q-n_H9xxftttsmQOw4StvanSnhc0D2txhQxUfhPsufsiaCJaG3xvAMyFelMjd466ZJRL6DXD3P9o24QP8odWPJOOuN811--MjkcrdLnNr7uhwR85abYl93-zQCnSyz4nbxies"
                alt="Muhammad Hasbi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Muhammad Hasbi</p>
              <p className="text-on-primary-container text-sm font-semibold">Keep going, Buddy!</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end text-tertiary-container">
              <Star className="w-4 h-4 fill-tertiary-container" />
              <span className="text-xl font-black">450 XP</span>
            </div>
            <p className="text-on-primary-container text-[10px] font-bold uppercase tracking-widest">Rank #42</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        <div className="flex justify-between items-center px-4 mb-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          <span>Rank & Student</span>
          <span>Experience</span>
        </div>
        
        {others.map((entry) => (
          <motion.div
            key={entry.rank}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-low transition-colors shadow-sm"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-on-surface-variant w-4">{entry.rank}</span>
              <img src={entry.avatar} alt={entry.name} className="w-10 h-10 rounded-xl bg-surface-container-high object-cover" referrerPolicy="no-referrer" />
              <span className="text-sm font-bold text-primary">{entry.name}</span>
            </div>
            <span className="text-sm font-bold text-on-surface-variant">{entry.xp} XP</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 p-6 bg-surface-container-low rounded-2xl text-center border-dashed border-2 border-outline-variant/30">
        <h3 className="text-primary font-bold mb-2">Want to climb the ranks?</h3>
        <p className="text-on-surface-variant text-sm mb-4">Complete your 'Advanced Calculus' module to earn 50 bonus XP today!</p>
        <button className="bg-gradient-to-tr from-primary to-primary-container text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
          Continue Studying
        </button>
      </div>
    </div>
  );
}
