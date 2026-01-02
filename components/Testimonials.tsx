
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="min-w-[320px] md:min-w-[450px] p-8 md:p-10 mx-4 md:mx-6 vip-card rounded-[3rem] border border-neutral-200 dark:border-white/5 shadow-xl relative overflow-hidden group">
    <div className="flex gap-1 text-primary text-[0.6rem] md:text-xs mb-4 md:mb-6">
      {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
    </div>
    <p className="text-neutral-700 dark:text-neutral-300 italic text-base md:text-lg mb-6 md:mb-10 leading-relaxed line-clamp-4 font-light">
      "{item.review}"
    </p>
    <div className="flex items-center gap-4 md:gap-6">
      <img src={item.image} alt={item.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary grayscale group-hover:grayscale-0 transition-all duration-500 object-cover" />
      <div>
        <h5 className="font-display font-bold text-neutral-900 dark:text-white text-base md:text-lg">{item.name}</h5>
        <span className="text-[0.55rem] md:text-[0.6rem] font-black text-primary uppercase tracking-[2px] md:tracking-[3px]">{item.location} | {item.service}</span>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const items = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
        <span className="text-primary font-bold uppercase tracking-[8px] text-[0.7rem] reveal reveal-up">The Market Consensus</span>
        <h2 className="text-4xl md:text-8xl font-display font-black text-neutral-900 dark:text-white mt-4 reveal reveal-up uppercase">Vocal <span className="text-primary italic">Proof.</span></h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 reveal reveal-up">
        <div className="flex whitespace-nowrap animate-scroll-turbo-right">
          {items.map((t, idx) => <TestimonialCard key={idx} item={t} />)}
        </div>
        <div className="flex whitespace-nowrap animate-scroll-turbo-left">
          {items.map((t, idx) => <TestimonialCard key={idx} item={t} />)}
        </div>
      </div>

      <style>{`
        @keyframes turbo-left { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
        @keyframes turbo-right { from { transform: translateX(-33.33%); } to { transform: translateX(0); } }
        .animate-scroll-turbo-left { animation: turbo-left 22s linear infinite; }
        .animate-scroll-turbo-right { animation: turbo-right 22s linear infinite; }
        .animate-scroll-turbo-left:hover, .animate-scroll-turbo-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
