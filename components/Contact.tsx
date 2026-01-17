import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/2">
          <span className="text-samurai uppercase tracking-widest text-[10px] font-black mb-4 block">The Mission</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-jp mb-6 md:mb-8 leading-tight">Prepare Your <br/> <span className="text-samurai">Digital Conquest</span></h2>
          <p className="text-gray-300 text-sm md:text-lg font-light mb-10 md:mb-12 max-w-md leading-relaxed">
            Ready to elevate your project to the next level? Reach out directly via any of the channels below or fill out the mission brief. SAMURAIETH is ready to forge your vision at SAMURAI.ETH.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {[
              { label: 'X / Twitter', value: '@samuraietherius', icon: '𝕏', href: 'https://x.com/samuraietherius?s=21' },
              { label: 'TikTok', value: '@samuraieth', icon: '📱', href: 'https://www.tiktok.com/@samuraieth?_r=1&_t=ZS-939KQ3yBmmj' },
              { label: 'YouTube', value: '@samuraieth', icon: '📺', href: 'https://youtube.com/@samuraieth?si=4ivmqUGr-hflM4-L' },
              { label: 'Email', value: 'samuraiethereius@gmail.com', icon: '📧', href: 'mailto:samuraiethereius@gmail.com' }
            ].map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all border border-white/5 hover:border-samurai/20"
              >
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg group-hover:bg-samurai group-hover:text-white transition-all shrink-0 text-lg">
                  {link.icon}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest truncate">{link.label}</p>
                  <p className="text-white font-bold text-xs md:text-sm truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="space-y-5 md:space-y-6 bg-[#0a0a0a] p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-10 w-20 h-0.5 bg-samurai"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Project Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs md:text-sm focus:outline-none focus:border-samurai text-white transition-colors placeholder:text-gray-500" placeholder="e.g. Protocol Launch" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs md:text-sm focus:outline-none focus:border-samurai text-white transition-colors placeholder:text-gray-500" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Service Needed</label>
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs md:text-sm focus:outline-none focus:border-samurai text-white transition-colors appearance-none cursor-pointer">
                  <option className="bg-black">Commercial Ads</option>
                  <option className="bg-black">Motion Graphics</option>
                  <option className="bg-black">Podcast Edit</option>
                  <option className="bg-black">Other / Full Retainer</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Mission Details</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs md:text-sm focus:outline-none focus:border-samurai text-white transition-colors resize-none placeholder:text-gray-500" placeholder="Describe your vision..."></textarea>
            </div>
            
            <button type="button" className="w-full py-6 bg-samurai hover:bg-[#2d558a] text-white font-black uppercase tracking-[0.25em] text-xs md:text-sm transition-all shadow-[0_15px_40px_rgba(32,60,97,0.4)] active:scale-[0.97] rounded-xl flex items-center justify-center gap-4 mt-4">
              <span>Send Transmission</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-20 md:mt-24 border-t border-white/5 pt-12 text-center text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] px-4">
        © {new Date().getFullYear()} SAMURAI.ETH • Web3 Visual Engineering • forged with discipline
      </div>
    </section>
  );
};

export default Contact;