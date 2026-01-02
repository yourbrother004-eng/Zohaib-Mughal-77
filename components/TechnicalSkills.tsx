
import React from 'react';

const skills = [
  { name: 'React', icon: 'fa-brands fa-react', color: 'text-cyan-400', level: 'Master' },
  { name: 'Next.js 15', icon: 'bi-lightning-fill', color: 'text-neutral-900 dark:text-white', level: 'Expert' },
  { name: 'TypeScript', icon: 'bi-code-square', color: 'text-blue-500', level: 'Advanced' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-green-500', level: 'Expert' },
  { name: 'PHP / Laravel', icon: 'fa-brands fa-laravel', color: 'text-red-500', level: 'Advanced' },
  { name: 'Go Lang', icon: 'bi-terminal-fill', color: 'text-cyan-500', level: 'Pro' },
  { name: 'Python', icon: 'fa-brands fa-python', color: 'text-yellow-400', level: 'Expert' },
  { name: 'Ruby / Rails', icon: 'bi-gem', color: 'text-red-600', level: 'Advanced' },
  { name: 'AWS Cloud', icon: 'bi-cloud-fill', color: 'text-orange-500', level: 'Architect' },
  { name: 'PostgreSQL', icon: 'bi-database-fill', color: 'text-blue-400', level: 'Advanced' },
  { name: 'MongoDB', icon: 'bi-layers-fill', color: 'text-green-600', level: 'Expert' },
  { name: 'Firebase', icon: 'bi-google', color: 'text-yellow-500', level: 'Master' },
  { name: 'Three.js', icon: 'bi-box', color: 'text-purple-500', level: 'Creative' },
  { name: 'Docker', icon: 'fa-brands fa-docker', color: 'text-blue-600', level: 'Expert' },
  { name: 'Tailwind CSS', icon: 'bi-palette-fill', color: 'text-teal-400', level: 'Master' },
  { name: 'Solidity', icon: 'bi-shield-shaded', color: 'text-neutral-400', level: 'Web3' },
];

const TechnicalSkills: React.FC = () => {
  return (
    <section id="arsenal" className="py-24 md:py-32 bg-neutral-50 dark:bg-black relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto mb-16 md:mb-20 space-y-4 reveal reveal-up">
          <span className="text-primary font-bold uppercase tracking-[4px] md:tracking-[6px] text-[0.65rem] md:text-xs">The Tech Arsenal</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-neutral-900 dark:text-white leading-none uppercase">MASTERED TOOLS.</h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light text-base md:text-lg px-4">
            High-performance stacks engineered for elite scalability, speed, and absolute reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="reveal reveal-up group relative p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 hover:border-primary transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-4 shadow-xl shadow-black/5 dark:shadow-none"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <div className="relative z-10 space-y-4 md:space-y-6">
                <div className={`text-4xl md:text-6xl ${skill.color} transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl`}>
                  <i className={`${skill.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base md:text-xl text-neutral-900 dark:text-white mb-1 md:mb-2">{skill.name}</h4>
                  <div className="h-0.5 md:h-1 w-8 md:w-12 bg-primary/20 mx-auto rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                  <span className="text-[0.55rem] md:text-[0.6rem] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[3px] md:tracking-[4px] mt-2 md:mt-4 block">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
