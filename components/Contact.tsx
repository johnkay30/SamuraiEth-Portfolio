
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <span className="text-samurai uppercase tracking-widest text-xs font-bold mb-4 block">The Mission</span>
          <h2 className="text-6xl font-black uppercase font-jp mb-8 leading-tight">Prepare Your <br/> <span className="text-samurai">Digital Conquest</span></h2>
          <p className="text-gray-400 text-lg font-light mb-12 max-w-md">
            Ready to elevate your project to the next level? Fill out the form or reach out directly on social media. Samu's blade is ready.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded group-hover:bg-samurai transition-colors">
                <span className="text-xl">🐦</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Twitter / X</p>
                <p className="text-white font-bold">@Samu_Edits</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded group-hover:bg-samurai transition-colors">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Discord</p>
                <p className="text-white font-bold">Samu#1337</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded group-hover:bg-samurai transition-colors">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email</p>
                <p className="text-white font-bold">contact@samu.io</p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="space-y-6 bg-white/5 p-10 rounded-2xl border border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Project Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-samurai" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-samurai" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Service Needed</label>
              <select className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-samurai">
                <option>Viral Clips</option>
                <option>Long Form Documentary</option>
                <option>Motion Graphics</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-samurai"></textarea>
            </div>
            <button className="w-full py-4 bg-samurai hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] text-sm transition-all shadow-[0_10px_30px_rgba(255,0,0,0.2)]">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-24 border-t border-white/5 pt-12 text-center text-gray-600 text-[10px] uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Samu • Forged in the Digital Dojo
      </div>
    </section>
  );
};

export default Contact;
