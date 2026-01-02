
import React from 'react';
import { MARQUEE_KEYWORDS } from '../constants';

const SkillMarquee: React.FC = () => {
  const content = [...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS];
  
  return (
    <div id="marquee" className="py-8 md:py-16 bg-neutral-950 border-y border-white/5 overflow-hidden rotate-[-1deg] md:rotate-[-1.5deg] scale-[1.05] md:scale-[1.1] relative z-20">
      <div className="flex whitespace-nowrap animate-scroll-mega">
        {content.map((item, idx) => (
          <div key={idx} className="flex items-center mx-8 md:mx-16">
            <span className="text-4xl md:text-7xl font-display font-black text-white/5 uppercase italic tracking-tighter outline-text px-2 md:px-4">
              {item}
            </span>
            <div className="w-2 md:w-4 h-2 md:h-4 rounded-full bg-primary mx-4 md:mx-8 shadow-[0_0_25px_rgba(245,158,11,1)]"></div>
          </div>
        ))}
      </div>
      <style>{`
        .outline-text { -webkit-text-stroke: 1px rgba(255,255,255,0.15); }
        @keyframes scroll-mega {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-mega { animation: scroll-mega 15s linear infinite; }
      `}</style>
    </div>
  );
};

export default SkillMarquee;
