import React from 'react';

const VideoShowcase: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-[#080808] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <span className="text-samurai uppercase tracking-widest text-[10px] font-black mb-4 block">Visual Engineering</span>
          <h2 className="text-2xl md:text-5xl font-black uppercase font-jp mb-4">The <span className="text-samurai">SAMURAI</span> Standard</h2>
          <p className="text-xs md:text-lg text-gray-300 font-light max-w-2xl px-2 leading-relaxed">
            Forging high-fidelity narratives and technical motion graphics for the decentralized frontier.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Welcome Video */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-samurai animate-pulse"></div>
              {/* Write up removed as requested */}
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe 
                src="https://www.youtube.com/embed/QVgIWuDBfnA?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1" 
                title="SAMURAI Welcome Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 md:p-6 bg-black/40 border-t border-white/5">
              <p className="text-xs md:text-sm text-gray-400 font-light italic">
                Mission briefing: Visual impact analysis and creative philosophy for the next generation of Web3 media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;