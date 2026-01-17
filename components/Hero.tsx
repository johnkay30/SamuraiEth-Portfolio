import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-black">
      {/* Background elements - optimized for mobile performance */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#203C61]/30 rounded-full blur-[40px] sm:blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#203C61]/20 rounded-full blur-[40px] sm:blur-[100px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Enhanced Visibility Badge */}
        <div className="group relative mb-10 flex items-center justify-center">
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 bg-samurai/40 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          
          <div className="relative flex items-center gap-3 px-6 py-2.5 bg-black/60 border-2 border-samurai backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(32,60,97,0.4)]">
            {/* Status Indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-samurai opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-samurai"></span>
            </span>
            
            {/* Highly Visible Text */}
            <span className="text-white text-[10px] sm:text-[13px] tracking-[0.2em] font-black uppercase font-jp drop-shadow-sm">
              Digital blade. web3 Native. visual engineering
            </span>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-[1.05] uppercase font-jp max-w-[15ch] sm:max-w-none tracking-tight">
          Architecting the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#203C61] via-[#4a6fa5] to-white">
            Visual Standard
          </span>
        </h1>
        
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed px-2">
          A crypto-native video creator helping brands and creators turn podcasts, streams, and audio into compelling visual stories, commercials, and high-end motion graphics.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-samurai hover:bg-[#2d558a] text-white font-black uppercase tracking-widest text-[11px] transition-all shadow-[0_0_20px_rgba(32,60,97,0.3)] hover:scale-105 active:scale-95 text-center">
            View the Archive
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white text-white font-black uppercase tracking-widest text-[11px] transition-all hover:bg-white/5 text-center">
            The Strategy
          </a>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1 opacity-40">
        <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-300">Scroll</span>
        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;