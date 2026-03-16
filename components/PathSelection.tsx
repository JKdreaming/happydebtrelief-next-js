import { ArrowRight, Check, AlertCircle, ShieldCheck, TrendingUp, Home } from 'lucide-react';
import Link from 'next/link';

const PathSelection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4 block">Find Your Right Path</span>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">Three Ways to Freedom</h2>
          <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto">
            Choose the path that matches your financial situation. Whether you have equity, great credit, or are facing hardship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Path 1: Consolidation */}
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-xl transition-all relative group flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-[2.5rem]">
              Good Credit
            </div>
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Consolidation</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Ideal for good credit scores. Swap high APRs for one low-rate fixed loan.
            </p>
            <ul className="space-y-2 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="text-green-500 shrink-0" size={14} />
                <span>Good/Fair Credit (640+)</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="text-green-500 shrink-0" size={14} />
                <span>Protect Credit Score</span>
              </li>
            </ul>
            <Link href="/consolidation" className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-brand-primary hover:text-brand-primary hover:bg-white transition-all flex justify-center items-center gap-2 text-sm">
              Explore <ArrowRight size={16} />
            </Link>
          </div>

          {/* Path 2: HELOC */}
          <div className="bg-indigo-50/30 rounded-[2.5rem] p-8 border-2 border-indigo-100 hover:border-indigo-200 hover:shadow-xl transition-all relative group flex flex-col">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-[2.3rem]">
              Homeowners
            </div>
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <Home size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">HELOC</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Use your home&apos;s equity to access the absolute lowest rates available.
            </p>
            <ul className="space-y-2 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="text-indigo-500 shrink-0" size={14} />
                <span>Absolute Lowest APR</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="text-indigo-500 shrink-0" size={14} />
                <span>Large Debt Limits</span>
              </li>
            </ul>
            <Link href="/heloc" className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-indigo-100 shadow-lg flex justify-center items-center gap-2 text-sm">
              Explore <ArrowRight size={16} />
            </Link>
          </div>

          {/* Path 3: Settlement */}
          <div className="bg-white rounded-[2.5rem] p-8 border-2 border-orange-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all relative group flex flex-col">
             <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-[2.3rem]">
              Hardship
            </div>
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Settlement</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              For those overwhelmed by debt. We negotiate to pay less than you owe.
            </p>
            <ul className="space-y-2 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="text-orange-500 shrink-0" size={14} />
                <span>Reduce Total Balance</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <AlertCircle className="text-orange-500 shrink-0" size={14} />
                <span>Temporary Credit Dip</span>
              </li>
            </ul>
            <Link href="/debt-settlement" className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-orange-200 shadow-lg flex justify-center items-center gap-2 text-sm">
              Explore <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PathSelection;

