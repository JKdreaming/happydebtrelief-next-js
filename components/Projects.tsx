'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Percent, DollarSign, Clock, TrendingUp, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "The Interest Crusher",
    description: "Drastically reduce what you pay to lenders.",
    beforeLabel: "Avg Interest Rate",
    beforeValue: "28.99%",
    beforeSub: "Credit Cards",
    afterLabel: "New Interest Rate",
    afterValue: "8.99%",
    afterSub: "Fixed Loan",
    highlight: "$14,000+ Saved",
    quote: "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't... pays it.",
    icon: Percent,
    colorClass: "text-emerald-600",
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-200"
  },
  {
    title: "The Monthly Saver",
    description: "Free up cash flow for what matters.",
    beforeLabel: "Monthly Payment",
    beforeValue: "$1,450",
    beforeSub: "Minimums",
    afterLabel: "New Payment",
    afterValue: "$680",
    afterSub: "Fixed Term",
    highlight: "$770/mo Extra Cash",
    quote: "Do not save what is left after spending, but spend what is left after saving.",
    icon: DollarSign,
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    borderClass: "border-blue-200"
  },
  {
    title: "The Timeline Slasher",
    description: "See the finish line clearly.",
    beforeLabel: "Time to Debt Free",
    beforeValue: "18 Years",
    beforeSub: "Min Payments",
    afterLabel: "New Timeline",
    afterValue: "3 Years",
    afterSub: "Accelerated",
    highlight: "15 Years Saved",
    quote: "You must gain control over your money or the lack of it will forever control you.",
    icon: Clock,
    colorClass: "text-purple-600",
    bgClass: "bg-purple-50",
    borderClass: "border-purple-200"
  },
  {
    title: "The Score Booster",
    description: "Unlock your financial potential.",
    beforeLabel: "Credit Utilization",
    beforeValue: "94%",
    beforeSub: "Maxed Out",
    afterLabel: "New Utilization",
    afterValue: "0%",
    afterSub: "Paid Off",
    highlight: "+120 Point Jump",
    quote: "Financial freedom is available to those who learn about it and work for it.",
    icon: TrendingUp,
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
                setShouldAutoPlay(true);
            }, 4000);
            observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
        observer.observe(containerRef.current);
    }
    
    return () => {
        observer.disconnect();
        clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isPaused || !shouldAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, shouldAutoPlay]);

  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + cards.length) % cards.length;

    if (position === 0) {
      return "z-30 opacity-100 scale-100 translate-x-0 translate-y-0 shadow-2xl";
    } else if (position === 1) {
      return "z-20 opacity-70 scale-95 translate-x-8 -translate-y-4 shadow-xl pointer-events-none";
    } else if (position === 2) {
      return "z-10 opacity-40 scale-90 translate-x-16 -translate-y-8 shadow-lg pointer-events-none";
    } else {
      return "z-0 opacity-0 scale-85 translate-x-24 -translate-y-12 pointer-events-none";
    }
  };

  return (
    <section 
        id="results" 
        ref={containerRef}
        className="py-24 bg-gradient-to-br from-brand-primary to-[#4d7a27] text-white relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Content Side */}
        <div className="lg:w-1/2">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">See What You Could Save</h2>
          <p className="text-lg text-emerald-50 font-light mb-10 max-w-lg">
            Our customers save an average of $580 per month by consolidating their high-interest debt. See how the math works in your favor.
          </p>

          <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-3xl font-bold mb-1">$21k</div>
                  <div className="text-emerald-100 text-sm">Avg. Debt Consolidated</div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-3xl font-bold mb-1">11%</div>
                  <div className="text-emerald-100 text-sm">Avg. Rate Reduction</div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 col-span-2">
                  <div className="flex gap-1 mb-2 text-yellow-300">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="italic text-white/90 mb-4">&ldquo;I honestly didn&apos;t think I&apos;d ever get out of the hole. Debt Pathway lowered my payments by $400 a month and I can finally breathe again.&rdquo;</p>
                  <div className="font-bold text-sm">— Sarah M., Austin TX</div>
              </div>
          </div>
        </div>

        {/* Visual Side - Dynamic Card Stack */}
        <div
            className="lg:w-1/2 relative h-[600px] w-full grid place-items-center perspective-1000"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

          {cards.map((card, index) => (
            <div
              key={index}
              className={`col-start-1 row-start-1 w-80 md:w-96 bg-white rounded-[2rem] p-8 border-4 transition-all duration-700 ease-in-out ${getCardStyle(index)} ${card.borderClass}`}
            >
               {/* Card Header */}
               <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-full ${card.bgClass} flex items-center justify-center ${card.colorClass}`}>
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{card.title}</h3>
                    <p className="text-xs text-slate-500">{card.description}</p>
                  </div>
               </div>

               {/* Stats Comparison */}
               <div className="space-y-4 mb-4 relative">
                 {/* Arrow Connector */}
                 <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-slate-100 rounded-full p-1 text-slate-400">
                    <ArrowRight size={16} />
                 </div>

                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                     <div className="flex justify-between items-end">
                       <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{card.beforeLabel}</p>
                         <p className="text-slate-500 text-xs">{card.beforeSub}</p>
                       </div>
                       <p className="text-xl font-bold text-slate-400 line-through decoration-red-400">{card.beforeValue}</p>
                     </div>
                 </div>

                 <div className={`p-4 rounded-xl border ${card.bgClass} ${card.borderClass}`}>
                     <div className="flex justify-between items-end">
                       <div>
                         <p className={`text-xs font-bold uppercase tracking-wide ${card.colorClass}`}>{card.afterLabel}</p>
                         <p className={`${card.colorClass} text-xs opacity-80`}>{card.afterSub}</p>
                       </div>
                       <p className={`text-2xl font-bold ${card.colorClass}`}>{card.afterValue}</p>
                     </div>
                 </div>
               </div>

               {/* Quote */}
               <div className="mb-4 px-1">
                   <p className={`text-sm italic text-center font-medium opacity-80 leading-relaxed ${card.colorClass}`}>
                       &ldquo;{card.quote}&rdquo;
                   </p>
               </div>

               {/* Footer Highlight */}
               <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-600">Result:</span>
                   <span className={`text-sm font-bold px-3 py-1 rounded-full ${card.bgClass} ${card.colorClass}`}>
                      {card.highlight}
                   </span>
               </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;

