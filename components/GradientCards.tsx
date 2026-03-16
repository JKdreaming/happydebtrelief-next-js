'use client';

import { useRef, useEffect, useState } from 'react';
import { CreditCard, Home, Stethoscope, Briefcase, GraduationCap, Plane, ChevronLeft, ChevronRight, TrendingDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: "Credit Card Refinancing",
    desc: "Stop paying 20-30% interest. Pay off multiple cards with a single, low-interest loan.",
    icon: <CreditCard size={24} />,
    color: "from-sky-50 to-blue-100",
    accent: "bg-blue-600",
    textAccent: "text-blue-600",
    chartType: "line-down",
    statLabel: "Avg. APR Drop",
    statValue: "16%"
  },
  {
    title: "Medical & Personal",
    desc: "Unexpected bills happen. Consolidate medical or personal debt into an affordable plan.",
    icon: <Stethoscope size={24} />,
    color: "from-emerald-50 to-teal-100",
    accent: "bg-emerald-600",
    textAccent: "text-emerald-600",
    chartType: "bar-savings",
    statLabel: "Monthly Savings",
    statValue: "$480"
  },
  {
    title: "Home Improvement",
    desc: "Invest in your biggest asset. Renovate without tapping into home equity or high rates.",
    icon: <Home size={24} />,
    color: "from-purple-50 to-indigo-100",
    accent: "bg-purple-600",
    textAccent: "text-purple-600",
    chartType: "bar-growth",
    statLabel: "Home Value",
    statValue: "+12%"
  },
  {
    title: "Business Debt",
    desc: "Simplify your balance sheet. Consolidate high-interest merchant advances into one term loan.",
    icon: <Briefcase size={24} />,
    color: "from-orange-50 to-amber-100",
    accent: "bg-amber-600",
    textAccent: "text-amber-600",
    chartType: "line-up",
    statLabel: "Cash Flow",
    statValue: "+25%"
  },
  {
    title: "Private Student Loans",
    desc: "Refinance private education debt to lower your monthly burden significantly.",
    icon: <GraduationCap size={24} />,
    color: "from-pink-50 to-rose-100",
    accent: "bg-rose-600",
    textAccent: "text-rose-600",
    chartType: "donut",
    statLabel: "Payments",
    statValue: "1 Bill"
  },
  {
    title: "Major Purchase",
    desc: "Planning a wedding or dream trip? Fund it with a fixed rate instead of a credit card.",
    icon: <Plane size={24} />,
    color: "from-cyan-50 to-sky-100",
    accent: "bg-cyan-600",
    textAccent: "text-cyan-600",
    chartType: "line-flat",
    statLabel: "Rate Lock",
    statValue: "Fixed"
  }
];

const ChartVisual = ({ type, colorClass }: { type: string; colorClass: string }) => {
  const isLineDown = type === 'line-down';
  const isLineUp = type === 'line-up';
  const isBarSavings = type === 'bar-savings';
  const isBarGrowth = type === 'bar-growth';
  const isDonut = type === 'donut';

  return (
    <div className="w-16 h-12 flex items-center justify-center relative opacity-90">
      {isLineDown && (
        <svg viewBox="0 0 50 30" className={`w-full h-full stroke-current ${colorClass}`} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
           <path d="M5 5 L20 10 L35 25 L45 25" />
        </svg>
      )}
      {isLineUp && (
        <svg viewBox="0 0 50 30" className={`w-full h-full stroke-current ${colorClass}`} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
           <path d="M5 25 L20 20 L35 10 L45 5" />
        </svg>
      )}
      {isBarSavings && (
        <div className="flex items-end gap-1 h-full pb-1">
           <div className="w-3 bg-slate-300 h-full rounded-t-sm opacity-50"></div>
           <div className={`w-3 h-1/2 rounded-t-sm ${colorClass.replace('text-', 'bg-')}`}></div>
        </div>
      )}
      {isBarGrowth && (
        <div className="flex items-end gap-1 h-full pb-1">
           <div className="w-3 bg-slate-300 h-1/2 rounded-t-sm opacity-50"></div>
           <div className={`w-3 h-full rounded-t-sm ${colorClass.replace('text-', 'bg-')}`}></div>
        </div>
      )}
      {isDonut && (
         <svg viewBox="0 0 40 40" className={`w-8 h-8 ${colorClass}`}>
           <circle cx="20" cy="20" r="15" fill="none" stroke="#e2e8f0" strokeWidth="6" />
           <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="70 100" />
         </svg>
      )}
      {type === 'line-flat' && (
         <svg viewBox="0 0 50 30" className={`w-full h-full stroke-current ${colorClass}`} fill="none" strokeWidth="3" strokeLinecap="round">
            <path d="M5 15 L45 15" strokeDasharray="4 4" className="text-slate-300" />
            <path d="M5 25 L20 20 L30 10 L45 10" />
         </svg>
      )}
    </div>
  );
};

const GradientCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const cardWidth = current.firstElementChild?.clientWidth || 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      const maxScrollLeft = current.scrollWidth - current.clientWidth;

      if (direction === 'left') {
        if (current.scrollLeft <= 10) {
            current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (current.scrollLeft >= maxScrollLeft - 10) {
            current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setShouldScroll(true);
          }, 4000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!shouldScroll) return;

    const intervalId = setInterval(() => {
        scroll('right');
    }, 4500);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldScroll]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-light text-slate-900 mb-4">Solutions for Every Situation</h2>
                <p className="text-slate-500">
                    Whether it&apos;s credit cards, medical bills, or personal loans, we have a specialized pathway for you.
                    Explore our loan products designed to save you money.
                </p>
            </div>

            <div className="flex gap-4">
               <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:border-blue-300 transition-all"
               >
                   <ChevronLeft size={20} />
               </button>
               <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 shadow-lg transition-all"
               >
                   <ChevronRight size={20} />
               </button>
            </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {solutions.map((item, i) => (
             <Link
                href="/get-started"
                key={i}
                className={`flex-shrink-0 w-full md:w-[40%] snap-start group relative overflow-hidden rounded-[2.5rem] p-8 flex flex-col justify-between bg-gradient-to-b ${item.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-white/50 h-[480px]`}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                    <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm ${item.textAccent}`}>
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-light text-slate-900 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8">{item.desc}</p>
                </div>

                <div className="relative z-10 mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/60 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{item.statLabel}</p>
                        <div className="flex items-center gap-1">
                            <span className={`text-xl font-bold ${item.textAccent}`}>{item.statValue}</span>
                            {item.chartType.includes('down') && <TrendingDown size={14} className={item.textAccent} />}
                        </div>
                    </div>
                    <ChartVisual type={item.chartType} colorClass={item.textAccent} />
                </div>

                <div className="mt-4 relative z-10 flex items-center gap-2 font-medium text-slate-900 group-hover:gap-3 transition-all">
                   <span>Check Rates</span>
                   <div className={`w-6 h-6 rounded-full ${item.accent} flex items-center justify-center text-white text-xs`}>
                       <ArrowRight size={12} />
                   </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradientCards;

