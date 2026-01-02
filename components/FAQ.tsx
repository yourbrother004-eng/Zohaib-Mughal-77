
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section id="faq" className="py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24 reveal reveal-up">
          <span className="text-primary font-bold uppercase tracking-[6px] text-xs">Clarity</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-neutral-900 dark:text-white leading-none mt-4 uppercase">Direct Answers.</h2>
        </div>

        <div className="space-y-6">
          {FAQ_DATA.map((item, idx) => (
            <div 
              key={item.id} 
              className="reveal reveal-up overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <button 
                onClick={() => setActive(active === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-8 md:p-10 vip-card rounded-[2.5rem] text-left transition-all ${active === item.id ? 'border-primary ring-4 ring-primary/5' : ''}`}
              >
                <span className="text-lg md:text-xl font-display font-bold text-neutral-900 dark:text-white">{item.question}</span>
                <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-500 ${active === item.id ? 'rotate-180' : ''}`}>
                  <i className={`bi bi-chevron-down text-primary`}></i>
                </div>
              </button>
              <div className={`transition-all duration-700 ease-in-out ${active === item.id ? 'max-h-96 opacity-100 mt-4 px-10 pb-10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed font-light border-l-2 border-primary/20 pl-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
