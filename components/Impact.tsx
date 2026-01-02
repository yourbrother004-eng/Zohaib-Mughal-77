
import React, { useState, useEffect, useRef } from 'react';

const Counter: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};

const Impact: React.FC = () => {
  const stats = [
    { end: 300, label: 'Revenue Growth', suffix: '%', duration: 2000 },
    { end: 0.8, label: 'Load Speed', suffix: 's', duration: 1500, float: true },
    { end: 99.9, label: 'Cloud Uptime', suffix: '%', duration: 1000, float: true },
    { end: 150, label: 'Global Launches', suffix: '+', duration: 2500 },
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-black border-y border-neutral-100 dark:border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_100%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center reveal reveal-up">
              <div className="text-4xl sm:text-5xl md:text-8xl font-display font-black text-neutral-900 dark:text-white mb-2 flex justify-center tracking-tighter">
                {stat.float ? (
                  <div className="flex">
                    <Counter end={stat.end} duration={stat.duration} />
                    <span>{stat.suffix}</span>
                  </div>
                ) : (
                  <Counter end={stat.end} duration={stat.duration} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-primary text-[0.6rem] md:text-[0.75rem] font-black uppercase tracking-[4px] md:tracking-[6px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
