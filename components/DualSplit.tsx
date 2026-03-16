import { Check } from 'lucide-react';

interface DualSplitProps {
  type: 'acquisition' | 'retention';
  title: string;
  body: string;
  bullets: string[];
  pill: string;
  imageSrc: string;
  align: 'left' | 'right';
}

const DualSplit = ({ title, body, bullets, pill, imageSrc, align }: DualSplitProps) => {
  const isRightAligned = align === 'right';

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isRightAligned ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 ${isRightAligned ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
              {pill}
            </span>
            <h3 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">{title}</h3>
            <p className="text-lg text-slate-500 font-light mb-8 leading-relaxed">
              {body}
            </p>
            <ul className="space-y-4 mb-8">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isRightAligned ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
               {/* Background blob */}
               <div className={`absolute inset-0 rounded-[3rem] transform rotate-3 opacity-30 ${isRightAligned ? 'bg-purple-200' : 'bg-blue-200'}`}></div>
               
               {/* Image Container */}
               <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden transform -rotate-2">
                 <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                 
                 {/* Floating UI Element Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-3 w-24 bg-slate-200 rounded-full"></div>
                      <div className={`h-3 w-3 rounded-full ${isRightAligned ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full">
                       <div className={`h-2 rounded-full w-2/3 ${isRightAligned ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
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

export default DualSplit;

