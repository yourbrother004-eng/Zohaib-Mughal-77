
import React from 'react';
import { ASSETS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-48 bg-neutral-50 dark:bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          <div className="w-full lg:w-1/2 reveal reveal-up">
            <div className="relative group max-w-lg mx-auto lg:mx-0">
              <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition duration-1000"></div>
              
              <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[400px] md:h-[600px]">
                <div className="col-span-10 row-span-10 relative z-10">
                  <div className="w-full h-full p-2 bg-white dark:bg-neutral-900 rounded-[3rem] shadow-2xl overflow-hidden border border-neutral-200 dark:border-white/5">
                    <img src={ASSETS.projects.saas_app} alt="Architectural Mastery" className="w-full h-full object-cover rounded-[2.5rem]" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-primary p-1 rounded-[3.5rem] shadow-2xl z-30 animate-float-slow">
                  <div className="bg-neutral-900 dark:bg-neutral-950 px-10 py-10 md:px-14 md:py-14 rounded-[3.4rem] text-center">
                    <div className="text-6xl md:text-8xl font-display font-black text-primary leading-none tracking-tighter">05</div>
                    <div className="text-[0.6rem] md:text-[0.7rem] font-black text-white uppercase tracking-[5px] md:tracking-[7px] mt-3">Years Of <br/> Mastery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-12 reveal reveal-up text-center lg:text-left pt-24 lg:pt-0">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-[10px] text-[0.7rem]">THE ARCHITECT</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-black text-neutral-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
                THE MIND <br /> BEHIND THE <span className="text-primary italic">CODE.</span>
              </h2>
            </div>
            
            <p className="text-xl md:text-3xl text-neutral-800 dark:text-neutral-300 leading-tight font-light italic border-l-[6px] md:border-l-[10px] border-primary pl-8 md:pl-10 text-left max-w-2xl mx-auto lg:mx-0">
              "Building digital ecosystems that command authority and redefine global market standards."
            </p>

            <div className="space-y-10">
               <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A unique synergy of design thinking and robust engineering. Every project I architect is treated as a strategic asset, built with infinite scalability and pixel-perfect precision.
               </p>

               <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 pt-4 justify-center lg:justify-start">
                  <img src={ASSETS.profile.signature} alt="Signature" className="h-16 md:h-20 dark:invert opacity-90 hover:scale-110 transition-transform cursor-pointer" />
                  <div className="hidden sm:block w-px h-16 bg-neutral-200 dark:bg-white/10"></div>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl font-display font-black dark:text-white text-neutral-900 uppercase tracking-tight">Zohaib Mughal</div>
                    <div className="text-[0.6rem] md:text-[0.7rem] font-black text-primary uppercase tracking-[5px] md:tracking-[7px]">Founding Partner</div>
                  </div>
               </div>
            </div>

            <div className="pt-8">
              <a href="#contact" className="inline-block btn-luxury-gradient px-12 md:px-16 py-6 md:py-8 text-neutral-900 rounded-[2.5rem] text-xs md:text-sm font-black uppercase tracking-[5px] shadow-2xl transition-all hover:scale-105">
                Book Architectural Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
