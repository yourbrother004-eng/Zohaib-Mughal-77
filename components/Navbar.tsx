
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 ${scrolled ? 'py-3 md:py-4 bg-white/95 dark:bg-black/90 backdrop-blur-2xl border-b border-neutral-200 dark:border-white/5 shadow-xl' : 'py-6 md:py-10 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="group flex items-center gap-2 md:gap-4">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary blur-[10px] opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-10 h-10 md:w-14 md:h-14 bg-neutral-900 dark:bg-white flex items-center justify-center rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <span className="font-display text-primary dark:text-black font-black text-xl md:text-3xl">Z</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-2xl font-black text-neutral-900 dark:text-white tracking-tight leading-none uppercase">Zohaib.M</span>
            <span className="text-[0.45rem] md:text-[0.55rem] font-black text-primary tracking-[3px] md:tracking-[5px] uppercase mt-1 md:mt-2">Elite Architect</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="relative text-[0.65rem] font-black text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white uppercase tracking-[4px] transition-all group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="btn-luxury-gradient px-8 py-3.5 text-neutral-900 font-black rounded-2xl text-[0.65rem] uppercase tracking-[3px] shadow-lg">
            Consult Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 md:w-12 md:h-12 bg-neutral-900 dark:bg-white flex flex-col items-center justify-center gap-1.5 rounded-xl focus:outline-none shadow-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-5 h-0.5 ${isOpen ? 'bg-primary rotate-45 translate-y-2' : 'bg-white dark:bg-black'} transition-all`}></span>
          <span className={`block w-3.5 h-0.5 bg-primary transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 ${isOpen ? 'bg-primary -rotate-45 -translate-y-2' : 'bg-white dark:bg-black'} transition-all`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-white dark:bg-black transition-all duration-700 flex flex-col p-8 pt-24 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-6 md:space-y-8 mb-auto">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-4xl md:text-5xl font-display font-black text-neutral-900 dark:text-white hover:text-primary transition-all uppercase tracking-tighter"
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="text-4xl md:text-5xl font-display font-black text-primary uppercase tracking-tighter"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
        <div className="pt-8 border-t border-neutral-200 dark:border-white/5">
          <p className="text-neutral-500 dark:text-neutral-400 text-xs md:text-sm font-light mb-6 uppercase tracking-widest">Global Engineering Excellence.</p>
          <div className="flex gap-6 text-2xl text-primary">
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="https://wa.me/+923440740774" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
