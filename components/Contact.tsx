
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Initiating...");
    setTimeout(() => {
      setResult("Message Received.");
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50 dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal reveal-up">
          <span className="text-primary font-bold uppercase tracking-[8px] text-[0.7rem] md:text-xs">Direct Access</span>
          <h2 className="text-4xl md:text-8xl font-display font-black text-neutral-900 dark:text-white mt-4 uppercase">Elite <span className="text-primary italic">Collaboration.</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 grid gap-6">
            {[
              { icon: 'bi-envelope-at', label: 'Priority Email', value: 'zmwofficial1@gmail.com', link: 'mailto:zmwofficial1@gmail.com' },
              { icon: 'bi-telephone-outbound', label: 'Executive Line', value: '+92 344 074 0774', link: 'tel:+923440740774' },
              { icon: 'bi-geo-alt', label: 'Main Studio', value: 'Okara Punjab, PK', link: '#' },
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link}
                className="group p-8 md:p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-[2.5rem] transition-all hover:-translate-y-2 hover:border-primary reveal reveal-left shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <i className={item.icon}></i>
                </div>
                <div className="text-[0.6rem] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">{item.value}</div>
              </a>
            ))}
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 p-8 md:p-16 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-[3rem] shadow-2xl reveal reveal-right">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[0.65rem] font-black text-neutral-500 dark:text-neutral-400 uppercase tracking-[4px] px-2">Identity</label>
                  <input 
                    type="text" placeholder="Full Name" required 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-8 py-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[0.65rem] font-black text-neutral-500 dark:text-neutral-400 uppercase tracking-[4px] px-2">Link</label>
                  <input 
                    type="email" placeholder="Email Address" required 
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-8 py-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black text-neutral-500 dark:text-neutral-400 uppercase tracking-[4px] px-2">Vision</label>
                <textarea 
                  rows={4} placeholder="Describe your project goals..." required 
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-8 py-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full py-6 md:py-8 btn-luxury-gradient text-neutral-900 font-black rounded-[2.5rem] uppercase tracking-[5px] text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                Launch Collaboration
              </button>
              {result && <div className="text-center text-primary font-bold text-xs uppercase tracking-widest animate-pulse mt-4">{result}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
