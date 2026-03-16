'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { articles } from '@/data/articles';

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const previewArticles = articles.slice(0, 5);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const cardWidth = current.firstElementChild?.clientWidth || 320;
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
          timeoutId = setTimeout(() => setShouldScroll(true), 4000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => { observer.disconnect(); clearTimeout(timeoutId); };
  }, []);

  useEffect(() => {
    if (!shouldScroll) return;
    const intervalId = setInterval(() => scroll('right'), 4000);
    return () => clearInterval(intervalId);
  }, [shouldScroll]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-light text-slate-900 mb-6 leading-tight">
              Knowledge is Your <br />
              <span className="font-semibold text-blue-600">Best Asset.</span>
            </h2>
            <div className="space-y-4 mb-8">
              {["Expert-verified financial guides", "Unbiased lender reviews", "Community success stories"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/articles" className="inline-flex px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              View Learning Path <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:w-2/3 w-full relative">
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto py-10 px-1 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
              {previewArticles.map((article, i) => (
                <Link href={`/articles/${article.id}`} key={i} className="min-w-full md:min-w-[40%] h-[460px] rounded-[2.5rem] relative overflow-hidden group snap-start cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold border border-white/20">{article.category}</span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        <ArrowRight size={14} className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-medium leading-tight mb-2">{article.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-2 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 mt-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex gap-4 mt-2 justify-center lg:justify-start pl-6">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

