
import React from 'react';

const steps = [
  { id: '01', icon: 'bi-search-heart-fill', title: 'Discovery', text: 'I deep-dive into your business DNA to engineer a roadmap that guarantees aggressive market impact.' },
  { id: '02', icon: 'bi-palette2', title: 'Architecture', text: 'Drafting high-fidelity UI/UX ecosystems that blend artistic vision with conversion science.' },
  { id: '03', icon: 'bi-code-slash', title: 'Engineering', text: 'Forging your platform with clean, scalable code architectures designed for infinite growth.' },
  { id: '04', icon: 'bi-rocket-takeoff-fill', title: 'Dominance', text: 'Rigorous optimization and launch strategy to ensure your digital product dominates from day one.' },
];

const WorkingProcess: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 reveal reveal-up">
          <span className="text-primary font-bold uppercase tracking-[6px] text-xs mb-4 block">The Methodology</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-neutral-900 dark:text-white leading-none">THE BLUEPRINT.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="reveal reveal-up group p-12 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 transition-all duration-700 hover:-translate-y-4 hover:border-primary"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-6xl text-primary/10 font-display font-black mb-4 group-hover:text-primary/20 transition-colors">{step.id}</div>
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform">
                <i className={`bi ${step.icon} text-white text-3xl`}></i>
              </div>
              <h5 className="text-2xl font-display font-bold mb-4 text-neutral-900 dark:text-white group-hover:text-primary transition-colors">{step.title}</h5>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
