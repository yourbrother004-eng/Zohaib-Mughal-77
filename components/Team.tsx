
import React from 'react';
import { TEAM_DATA } from '../constants';

const TeamCard: React.FC<{ member: any; idx: number }> = ({ member, idx }) => (
  <div 
    className="group min-w-[220px] md:min-w-[300px] mx-4 relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 transition-all duration-700 reveal reveal-up"
    style={{ transitionDelay: `${idx * 100}ms` }}
  >
    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
      <div className="bg-black/30 backdrop-blur-xl p-5 rounded-[1.8rem] border border-white/10">
        <h4 className="text-base md:text-lg font-display font-bold text-white mb-0.5">{member.name}</h4>
        <p className="text-[0.55rem] md:text-[0.6rem] font-black text-primary uppercase tracking-[3px]">{member.role}</p>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  const content = [...TEAM_DATA, ...TEAM_DATA];

  return (
    <section id="team" className="py-24 md:py-32 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="reveal reveal-up">
          <span className="text-primary font-bold uppercase tracking-[8px] text-[0.7rem]">Global Strike Force</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-neutral-900 dark:text-white mt-4 uppercase">Elite Human <span className="text-primary italic">Capital.</span></h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto font-light text-base">Our specialist team operates at the razor's edge of aesthetics and high-performance engineering.</p>
        </div>
      </div>

      <div className="relative reveal reveal-up">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        <div className="marquee-team flex py-10">
          {content.map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scrollTeam {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-team {
          animation: scrollTeam 35s linear infinite;
        }
        .marquee-team:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Team;
