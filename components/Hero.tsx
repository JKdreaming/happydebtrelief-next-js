'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Star, TrendingUp, ShieldCheck, DollarSign, Wallet, PieChart, Coins, Banknote, Landmark, CircleDollarSign, CreditCard as CreditCardIcon, Home, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'consolidation' | 'heloc' | 'settlement'>('consolidation');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveTab(prev => {
        if (prev === 'consolidation') return 'heloc';
        if (prev === 'heloc') return 'settlement';
        return 'consolidation';
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const iconList = [DollarSign, CreditCardIcon, TrendingUp, Wallet, PieChart, Coins, Banknote, Landmark, CircleDollarSign];

  const [floatingIcons, setFloatingIcons] = useState<
    { Icon: typeof DollarSign; left: number; duration: number; delay: number; size: number }[]
  >([]);

  useEffect(() => {
    setFloatingIcons(
      Array.from({ length: 15 }).map((_, i) => {
        const Icon = iconList[i % iconList.length];
        const left = Math.floor(Math.random() * 90) + 5;
        const duration = Math.floor(Math.random() * 10) + 15;
        const delay = Math.floor(Math.random() * 15);
        const size = Math.floor(Math.random() * 20) + 24;
        return { Icon, left, duration, delay, size };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative w-full pt-24 pb-16 md:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fcf5] via-[#e8f5df] to-[#d5eac4]">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className="absolute text-brand-primary opacity-0 animate-float-up"
            style={{
              left: `${item.left}%`,
              animationDuration: `${item.duration}s`,
              animationDelay: `-${item.delay}s`,
              top: 0,
            }}
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/60 border border-green-200 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Star size={12} className="fill-current" /> Rates as low as 5.99% APR
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-[1.1] mb-8">
            Crush Your Debt. <br />
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-[#5a912e]">
              Reclaim Your Life.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Choose your path to freedom. Lower your interest rates with a loan, use your home&apos;s equity, or reduce your balance with settlement.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row flex-wrap items-center gap-3 justify-center lg:justify-start mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link 
              href="/consolidation" 
              onMouseEnter={() => setActiveTab('consolidation')}
              className={`px-6 py-3.5 rounded-full font-medium shadow-md transition-all flex items-center gap-2 group min-w-[180px] justify-center border-2 ${activeTab === 'consolidation' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-slate-700 border-white hover:border-brand-primary hover:text-brand-primary'}`}
            >
              Consolidation
              <TrendingUp className="w-4 h-4" />
            </Link>

            <Link 
              href="/heloc" 
              onMouseEnter={() => setActiveTab('heloc')}
              className={`px-6 py-3.5 rounded-full font-medium shadow-md transition-all flex items-center gap-2 group min-w-[180px] justify-center border-2 ${activeTab === 'heloc' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-white hover:border-indigo-600 hover:text-indigo-600'}`}
            >
              HELOC
              <Home className="w-4 h-4" />
            </Link>

            <Link 
              href="/debt-settlement" 
              onMouseEnter={() => setActiveTab('settlement')}
              className={`px-6 py-3.5 rounded-full font-medium shadow-md transition-all flex items-center gap-2 group min-w-[180px] justify-center border-2 ${activeTab === 'settlement' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-700 border-white hover:border-orange-500 hover:text-orange-500'}`}
            >
              Settlement
              <ShieldAlert className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000 lg:h-[500px] lg:flex lg:items-center">
            
            {/* Consolidation Card */}
            <div className={`w-full transition-all duration-700 ease-in-out transform lg:absolute ${activeTab === 'consolidation' ? 'opacity-100 translate-x-0 scale-100 z-20' : 'opacity-0 scale-95 z-10 pointer-events-none hidden lg:block lg:translate-x-12'}`}>
                <div className="bg-[#f0fdf4] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-green-100 relative overflow-hidden h-full">
                    <div className="relative z-10">
                        <span className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4 block">The Smart Money Move</span>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">Keep Your Hard-Earned Cash</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">Why pay 25% APR? Move your balances to a lower rate and watch your savings grow.</p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-500 text-sm font-medium uppercase">Interest Saved</span>
                                <span className="text-brand-primary font-bold text-2xl">$15,000+</span>
                            </div>
                            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(114,182,58,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HELOC Card */}
            <div className={`w-full transition-all duration-700 ease-in-out transform lg:absolute ${activeTab === 'heloc' ? 'opacity-100 translate-x-0 scale-100 z-20' : 'opacity-0 scale-95 z-10 pointer-events-none hidden lg:block lg:translate-x-12'}`}>
                <div className="bg-[#eef2ff] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-indigo-100 relative overflow-hidden h-full">
                    <div className="relative z-10">
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">The Homeowner&apos;s Advantage</span>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">Leverage Your Home</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">Tap into your home&apos;s equity for the absolute lowest interest rates available for consolidation.</p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-500 text-sm font-medium uppercase">Typical HELOC APR</span>
                                <span className="text-indigo-600 font-bold text-2xl">~7.99%</span>
                            </div>
                            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[40%] rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Settlement Card */}
            <div className={`w-full transition-all duration-700 ease-in-out transform lg:absolute ${activeTab === 'settlement' ? 'opacity-100 translate-x-0 scale-100 z-20' : 'opacity-0 scale-95 z-10 pointer-events-none hidden lg:block lg:translate-x-12'}`}>
                <div className="bg-[#fff7ed] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-orange-100 relative overflow-hidden h-full">
                    <div className="relative z-10">
                        <span className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-4 block">The Hardship Relief</span>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">Pay Less Than You Owe</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">Can&apos;t afford monthly payments? Negotiate a lower payoff amount and become debt-free.</p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-500 text-sm font-medium uppercase">Principal Reduction</span>
                                <span className="text-orange-500 font-bold text-2xl">~50%</span>
                            </div>
                            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[50%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

