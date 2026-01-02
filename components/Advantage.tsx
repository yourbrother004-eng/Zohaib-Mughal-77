
import React from 'react';
import { ASSETS } from '../constants';

const Advantage: React.FC = () => {
  return (
    <section id="advantage" className="py-32 bg-white dark:bg-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 md:gap-32">
          <div className="lg:w-1/2 reveal reveal-left relative">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <img src={ASSETS.profile.about} alt="ZMW Advantage" className="relative z-10 rounded-[4rem] shadow-2xl border border-neutral-200 dark:border-white/5" />
          </div>
          <div className="lg:w-1/2 reveal reveal-right">
            <span className="text-primary font-bold uppercase tracking-[6px] text-xs mb-6 block">Elite Partnership</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-neutral-900 dark:text-white leading-[0.9] tracking-tighter mb-10 uppercase">
              Beyond <br /><span className="text-primary italic">Code.</span>
            </h2>
            <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light mb-12 leading-relaxed italic border-l-4 border-primary pl-8">
              I don't just build software. I partner with visionaries to architect the future of their industry.
            </p>
            
            <div className="space-y-10">
              {[
                { icon: 'bi-graph-up-arrow', title: 'ROI Centric Engineering', text: 'Every architectural decision is weighted against your core business growth metrics.' },
                { icon: 'bi-gem', title: 'Meticulous Standards', text: 'Pixel-perfection is the baseline. We build for performance, security, and prestige.' },
                { icon: 'bi-shield-check', title: 'Transparent High-Touch Support', text: 'Exclusive 24/7 access to executive-level consultation throughout the project lifecycle.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary text-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h5 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-2 uppercase tracking-wide">{item.title}</h5>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-block mt-16 btn-luxury-gradient px-12 py-6 text-neutral-900 rounded-3xl text-sm font-black uppercase tracking-[4px]">
              Secure Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
