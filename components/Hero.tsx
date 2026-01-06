
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-samurai/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 border border-samurai text-samurai text-[10px] tracking-[0.2em] font-bold uppercase mb-6 animate-pulse">
          Digital Blade • Web3 Native • Visual Mastery
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight uppercase font-jp">
          Engineering Unrivaled <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-samurai to-red-400">
            Visual Narratives
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          I don't just edit videos. I craft digital weapons that cut through the noise of the blockchain. Sharp, viral, and purely cinematic for the decentralized era.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#work" className="w-full sm:w-auto px-10 py-4 bg-samurai hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:scale-105 active:scale-95">
            View My Work
          </a>
          <a href="#about" className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:border-white text-white font-black uppercase tracking-widest text-sm transition-all hover:bg-white/5">
            About Us
          </a>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
