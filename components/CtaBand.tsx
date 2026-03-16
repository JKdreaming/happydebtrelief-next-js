import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CtaBand = () => {
  return (
    <section className="relative py-32 bg-brand-primary overflow-hidden text-center">
      {/* City Skyline Illustration Placeholder */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 z-0 opacity-20 pointer-events-none">
         {/* Simple SVG Skyline simulation using CSS */}
         <div className="flex items-end justify-center h-full w-full gap-2 px-10">
            <div className="w-16 h-32 bg-white rounded-t-lg"></div>
            <div className="w-12 h-48 bg-white rounded-t-lg"></div>
            <div className="w-20 h-24 bg-white rounded-t-lg"></div>
            <div className="w-24 h-56 bg-white rounded-t-lg"></div>
            <div className="w-14 h-36 bg-white rounded-t-lg"></div>
            <div className="w-10 h-20 bg-white rounded-t-lg"></div>
            <div className="w-20 h-40 bg-white rounded-t-lg"></div>
            <div className="hidden md:block w-16 h-28 bg-white rounded-t-lg"></div>
            <div className="hidden md:block w-12 h-52 bg-white rounded-t-lg"></div>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Ready to be debt free?
        </h2>
        <p className="text-lg text-green-50 max-w-2xl mx-auto mb-10">
          Checking your rate takes 2 minutes and does not affect your credit score. See how much you can save today.
        </p>
        <Link href="/get-started" className="inline-flex bg-white text-brand-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all items-center gap-2 mx-auto">
          Get Started Now
          <ArrowRight size={18} />
        </Link>
        <p className="text-green-100 text-sm mt-6">
            Secure 256-bit Encrypted Application
        </p>
      </div>
    </section>
  );
};

export default CtaBand;

