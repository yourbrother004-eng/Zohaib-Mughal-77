
import React from 'react';
import { ASSETS } from '../constants';

const FloatingIcon: React.FC<{ icon: string; color: string; top: string; left: string; delay: string }> = ({ icon, color, top, left, delay }) => (
  <div 
    className="absolute text-3xl md:text-5xl opacity-[0.2] md:opacity-[0.3] animate-float-slow pointer-events-none hidden sm:block z-0"
    style={{ top, left, color, animationDelay: delay }}
  >
    <i className={icon}></i>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 bg-white dark:bg-neutral-950">
      {/* High-Visibility Floating Tech Icons */}
      <FloatingIcon icon="fa-brands fa-react" color="#61DBFB" top="10%" left="5%" delay="0s" />
      <FloatingIcon icon="fa-brands fa-node-js" color="#68A063" top="15%" left="82%" delay="2s" />
      <FloatingIcon icon="fa-brands fa-python" color="#3776AB" top="70%" left="10%" delay="1s" />
      <FloatingIcon icon="fa-brands fa-laravel" color="#FF2D20" top="75%" left="85%" delay="3.5s" />
      <FloatingIcon icon="fa-brands fa-js" color="#F7DF1E" top="40%" left="3%" delay="4s" />
      <FloatingIcon icon="fa-brands fa-aws" color="#FF9900" top="12%" left="48%" delay="2.5s" />

      {/* Luxury Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_80%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <div className="reveal reveal-up inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[0.7rem] font-black uppercase tracking-[5px] mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              EXECUTIVE DIGITAL ARCHITECT
            </div>

            <h1 className="reveal reveal-up text-[11vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-display font-black leading-[0.85] tracking-tighter text-neutral-900 dark:text-white mb-10 uppercase">
              CRAFTING <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-dark animate-gradient-fast bg-[length:200%_auto] italic">
                MASTERPIECES.
              </span>
            </h1>

            <p className="reveal reveal-up max-w-xl text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-12 mx-auto lg:mx-0">
              High-performance digital environments where aggressive business growth meets premium engineering excellence.
            </p>

            <div className="reveal reveal-up flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a href="#contact" className="w-full sm:w-auto btn-luxury-gradient px-12 py-6 rounded-[2rem] text-neutral-900 font-black tracking-[4px] uppercase text-xs md:text-sm text-center shadow-xl">
                Start Project
              </a>
              <a href="#portfolio" className="w-full sm:w-auto group flex items-center justify-center gap-4 px-12 py-6 rounded-[2rem] border-2 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-black hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-[4px] text-xs md:text-sm">
                View Work 
                <i className="bi bi-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/5 reveal reveal-up flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/20 dark:bg-primary/10 blur-[100px] rounded-full animate-pulse-glow group-hover:bg-primary/30 transition-all duration-700"></div>
              
              <div className="relative z-10 p-2 md:p-3 bg-gradient-to-tr from-primary via-accent to-primary-dark rounded-[3.5rem] md:rounded-[4.5rem] shadow-2xl">
                <div className="overflow-hidden w-60 h-60 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-[3rem] md:rounded-[4rem] bg-white dark:bg-neutral-900 border-4 border-white dark:border-neutral-950">
                  <img 
                    src={ASSETS.profile.hero} 
                    alt="Zohaib Mughal" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ filter: 'none' }} // Ensure no dark/gray filter in light mode
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-neutral-100 dark:border-white/5 animate-float-fast z-20">
                <div className="text-primary font-black text-3xl md:text-5xl leading-none">200+</div>
                <div className="text-[0.6rem] md:text-[0.7rem] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[4px] mt-2">Elite Launches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
