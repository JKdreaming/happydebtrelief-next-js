import { TrendingUp, CheckCircle, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GrowthEngine = () => {
  return (
    <section className="py-32 bg-brand-primary relative overflow-hidden">
      {/* Background Illustration Placeholders */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
      
      {/* Simulated Hills */}
      <div className="absolute bottom-0 left-[-10%] w-[120%] h-[200px] bg-white rounded-[100%] translate-y-[50%] opacity-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-[120%] h-[300px] bg-white rounded-[100%] translate-y-[60%] opacity-5"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* White Card */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-5xl w-full text-center relative overflow-hidden">
          
          <div className="inline-flex items-center justify-center p-3 bg-green-50 text-brand-primary rounded-2xl mb-6">
            <TrendingUp size={28} />
          </div>

          <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Your Pathway to Zero Debt</h3>
          
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve streamlined the process to get you funded in as little as 24 hours. No office visits, no paperwork mountains.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

            <div className="flex flex-col items-center relative group">
               <div className="w-20 h-20 bg-white rounded-full border-4 border-green-50 shadow-sm flex items-center justify-center mb-6 z-10 group-hover:border-brand-primary transition-colors">
                   <Clock className="text-brand-primary" size={28} />
               </div>
               <h4 className="text-xl font-medium text-slate-900 mb-2">1. Check Your Rate</h4>
               <p className="text-slate-500 text-sm px-4">Fill out a simple 2-minute form. It won&apos;t affect your credit score.</p>
            </div>

            <div className="flex flex-col items-center relative group">
               <div className="w-20 h-20 bg-white rounded-full border-4 border-green-50 shadow-sm flex items-center justify-center mb-6 z-10 group-hover:border-brand-primary transition-colors">
                   <CheckCircle className="text-brand-primary" size={28} />
               </div>
               <h4 className="text-xl font-medium text-slate-900 mb-2">2. Select Your Loan</h4>
               <p className="text-slate-500 text-sm px-4">Choose the term and payment that fits your budget.</p>
            </div>

            <div className="flex flex-col items-center relative group">
               <div className="w-20 h-20 bg-white rounded-full border-4 border-green-50 shadow-sm flex items-center justify-center mb-6 z-10 group-hover:border-brand-primary transition-colors">
                   <DollarSign className="text-brand-primary" size={28} />
               </div>
               <h4 className="text-xl font-medium text-slate-900 mb-2">3. Get Funded</h4>
               <p className="text-slate-500 text-sm px-4">Funds are sent directly to your account or creditors in 24-48 hours.</p>
            </div>
          </div>

          <Link href="/get-started" className="inline-flex items-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Start Your Application <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngine;

