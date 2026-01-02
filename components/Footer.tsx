
import React from 'react';

const Footer: React.FC = () => {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' }
  ];

  const expertises = ['SaaS Architecture', 'E-Commerce', 'Fintech UI', 'AWS Cloud'];

  return (
    <footer className="bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-white/5 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
          <div className="space-y-8 max-w-sm reveal reveal-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-900 dark:bg-white flex items-center justify-center rounded-xl">
                <span className="font-display text-primary dark:text-black font-black text-2xl">Z</span>
              </div>
              <div className="font-display text-3xl font-black text-neutral-900 dark:text-white tracking-tighter uppercase">ZOHAIB.M</div>
            </div>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
              Architecting digital legacies through meticulous engineering and luxury design standards. Based in Pakistan, operating globally.
            </p>
            <div className="flex gap-6 text-2xl">
              {[
                { icon: 'bi-linkedin', link: '#' },
                { icon: 'bi-github', link: '#' },
                { icon: 'bi-instagram', link: '#' },
                { icon: 'bi-whatsapp', link: 'https://wa.me/+923440740774' },
              ].map((social, idx) => (
                <a key={idx} href={social.link} className="text-neutral-400 hover:text-primary transition-all hover:-translate-y-2 inline-block"><i className={social.icon}></i></a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto reveal reveal-right">
            <div className="space-y-6">
              <h5 className="text-[0.65rem] font-black text-neutral-900 dark:text-white uppercase tracking-[5px]">Navigation</h5>
              <ul className="space-y-4">
                {links.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="relative text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors text-sm font-medium group pb-1 block">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-[0.65rem] font-black text-neutral-900 dark:text-white uppercase tracking-[5px]">Expertise</h5>
              <ul className="space-y-4">
                {expertises.map(item => (
                  <li key={item}>
                    <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:text-primary transition-colors cursor-pointer group relative pb-1 block">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h5 className="text-[0.65rem] font-black text-neutral-900 dark:text-white uppercase tracking-[5px]">Studio</h5>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium leading-relaxed">Available for elite commissions and architectural consultations.</p>
              <a href="mailto:zmwofficial1@gmail.com" className="block text-primary font-bold text-sm underline underline-offset-8 transition-opacity hover:opacity-75">zmwofficial1@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[0.65rem] font-bold uppercase tracking-[4px] text-neutral-400 dark:text-neutral-500">
          <p>© 2025 ZMW STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-[20vw] font-display font-black text-neutral-900/[0.04] dark:text-white/[0.04] pointer-events-none select-none z-0 uppercase tracking-tighter whitespace-nowrap leading-none">
        ZMW.STUDIO
      </div>
    </footer>
  );
};

export default Footer;
