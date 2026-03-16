import { Star, ShieldCheck } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Trusted by Thousands</h2>
            <div className="flex justify-center items-center gap-2 text-yellow-500 mb-2">
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
            </div>
            <p className="text-slate-500">4.9/5 Average Customer Rating</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
                name: "Michael R.",
                loc: "Denver, CO",
                quote: "I was drowning in 25% APR credit card debt. Debt Pathway matched me with a 9% loan in minutes. Life changing.",
                save: "$450/mo saved"
            },
            {
                name: "Jessica T.",
                loc: "Miami, FL",
                quote: "The process was incredibly easy. Money was in my account the next day and I paid off all 4 of my cards immediately.",
                save: "Debt free in 2 years"
            },
            {
                name: "David K.",
                loc: "Seattle, WA",
                quote: "No judgment, just help. The customer service team actually helped me set up a budget after I got the loan.",
                save: "$12,000 interest saved"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col relative">
               <div className="absolute top-8 right-8 text-slate-200">
                   <ShieldCheck size={40} />
               </div>
              <div className="flex text-yellow-400 gap-1 mb-4">
                 {[1,2,3,4,5].map(x => <Star key={x} size={16} fill="currentColor"/>)}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-400 text-sm mb-2">{item.loc}</div>
                  <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">{item.save}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

