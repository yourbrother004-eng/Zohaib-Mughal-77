
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-neutral-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 md:gap-12 text-center md:text-left">
          <div className="space-y-4 md:space-y-6 max-w-2xl reveal reveal-left">
            <span className="text-primary font-bold uppercase tracking-[8px] text-[0.7rem]">High Stakes Work</span>
            <h2 className="text-4xl md:text-8xl font-display font-black text-neutral-950 dark:text-white leading-[1] md:leading-[0.85] tracking-tighter uppercase">
              Featured <br className="hidden md:block" /><span className="text-primary italic">Showcase.</span>
            </h2>
          </div>
          <a href="#contact" className="w-full md:w-auto px-12 py-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-[2.5rem] font-black text-neutral-900 dark:text-white hover:bg-primary hover:text-white transition-all reveal reveal-right uppercase tracking-[4px] text-xs shadow-2xl">
            Start Your Project
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {PORTFOLIO_DATA.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col h-full bg-white dark:bg-neutral-900 rounded-[3.5rem] overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/5 transition-all duration-700 hover:-translate-y-4 reveal reveal-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="flex gap-4 w-full">
                    <a href={project.liveLink} className="flex-1 text-center py-6 bg-primary text-neutral-950 font-black rounded-3xl text-[0.75rem] uppercase tracking-[4px]">View Live</a>
                    <a href={project.githubLink} className="w-16 h-16 bg-white/10 backdrop-blur-xl flex items-center justify-center rounded-3xl text-white text-2xl hover:bg-white/20 transition-all"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
              <div className="p-12 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[0.65rem] font-black text-primary uppercase tracking-[4px] px-5 py-2 bg-primary/5 rounded-full border border-primary/10">{t}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-black text-neutral-950 dark:text-white mb-6 group-hover:text-primary transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed mb-12 flex-1 font-light">{project.description}</p>
                <a href="#" className="flex items-center gap-5 text-sm font-black dark:text-white text-neutral-950 group/link uppercase tracking-[5px]">Explore Case <i className="bi bi-arrow-right transition-transform group-hover/link:translate-x-3 text-primary"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
