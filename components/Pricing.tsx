
import React from 'react';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-neutral-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 section-fade-in">
          <span className="text-primary font-bold uppercase tracking-[5px] text-xs">Investment</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mt-4">Growth Packages</h2>
          <p className="text-neutral-500 mt-6 max-w-xl mx-auto italic">Strategic investment for world-class digital performance.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_DATA.map((tier) => (
            <div 
              key={tier.id} 
              className={`vip-card p-12 rounded-[2.5rem] flex flex-col ${tier.recommended ? 'ring-2 ring-primary relative' : ''}`}
            >
              {tier.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-neutral-950 font-bold text-[0.6rem] uppercase tracking-widest px-6 py-2 rounded-full">
                  Most Preferred
                </div>
              )}
              <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-5xl font-display font-black text-white mb-8">
                {tier.price}<span className="text-lg text-neutral-500 font-medium">/project</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <i className="bi bi-check2-circle text-primary"></i> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[2px] text-sm transition-all ${tier.recommended ? 'btn-luxury text-neutral-950' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
