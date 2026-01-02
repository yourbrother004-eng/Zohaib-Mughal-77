
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import SkillMarquee from './components/SkillMarquee';
import Services from './components/Services';
import WorkingProcess from './components/WorkingProcess';
import Impact from './components/Impact';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Advantage from './components/Advantage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-neutral-950 selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillMarquee />
        <Impact />
        <div id="services"><Services /></div>
        <WorkingProcess />
        <div id="portfolio"><Portfolio /></div>
        <Team />
        <div id="testimonials"><Testimonials /></div>
        <TechnicalSkills />
        <FAQ />
        <Advantage />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[2000] flex flex-col gap-4">
        <div className="group relative">
          <div className="absolute -inset-1.5 bg-primary rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a 
            href="https://wa.me/+923440740774" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 flex items-center justify-center rounded-full text-primary shadow-2xl hover:scale-110 transition-transform"
          >
            <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
