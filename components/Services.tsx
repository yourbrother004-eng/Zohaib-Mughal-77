
import React from 'react';
import { VIP_SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-white dark:bg-neutral-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-12 md:mb-24 reveal reveal-left text-center md:text-left">
          <span className="text-primary font-bold uppercase tracking-[4px] md:tracking-[5px] text-[0.65rem] md:text-xs">Excellence Suite</span>
          <h2 className="text-4xl md:text-8xl font-display font-black text-neutral-950 dark:text-white mt-4 leading-[1] md:leading-[0.9] tracking-tighter uppercase">
            PRO LEVEL <br className="hidden md:block" /><span className="text-primary italic">SERVICES.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl font-light mx-auto md:mx-0">
            I don't offer generic templates. I engineer high-stakes digital platforms that redefine industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {VIP_SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 hover:border-primary transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-4 reveal reveal-up"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform duration-500">
                <i className={`bi ${service.icon} text-primary text-3xl md:text-4xl`}></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-950 dark:text-white mb-4 md:mb-6 group-hover:text-primary transition-colors uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 md:mb-10 font-light">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-white dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-full text-[0.55rem] md:text-[0.65rem] font-bold text-neutral-500 dark:text-white uppercase tracking-[2px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex justify-center reveal reveal-up">
          <a href="#contact" className="btn-luxury-gradient w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 rounded-2xl text-neutral-950 font-black uppercase tracking-[3px] text-xs md:text-sm text-center">
            Book VIP Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
