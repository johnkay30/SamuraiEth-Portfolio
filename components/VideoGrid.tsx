import React, { useState } from 'react';
import { VideoProject } from '../types.ts';

const projects: VideoProject[] = [
  {
    id: '1',
    title: 'The Digital Blade: Visual Masterclass',
    category: 'Commercial Ads',
    thumbnailUrl: 'https://img.youtube.com/vi/Ltg_hz1dz2E/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Ltg_hz1dz2E?autoplay=1&rel=0',
    description: 'A flagship showcase of visual engineering. Forging high-fidelity narratives for the decentralized frontier.'
  },
  {
    id: '9',
    title: 'The Infinite Machina Podcast',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://img.youtube.com/vi/ejzY8-kdSTM/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ejzY8-kdSTM?autoplay=1&rel=0',
    description: 'High-retention cinematic editing for long-form discussions, optimizing narrative flow and visual engagement for the Web3 audience.'
  },
  {
    id: '8',
    title: 'Football.fun',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://img.youtube.com/vi/0Cov_mpdUkk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/0Cov_mpdUkk?autoplay=1&rel=0',
    description: 'Football.fun motion graphics Ads. High-intensity visual promotion bridging the world of sports with Web3 technology.'
  },
  {
    id: '7',
    title: 'Protocol Motion Dynamics',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://img.youtube.com/vi/-iAYH0aSWf0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/-iAYH0aSWf0?autoplay=1&rel=0',
    description: 'Advanced motion graphics showcasing protocol mechanics and architectural fluid dynamics in the Web3 space.'
  },
  {
    id: '2',
    title: 'Solana Summer Recap',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://picsum.photos/seed/sol/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'High-octane visual journey through the Solana ecosystem growth. Focused on transaction throughput and ecosystem expansion.'
  },
  {
    id: '3',
    title: 'Ethereum Merge: The Story',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://picsum.photos/seed/eth/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'A documentary-style deep dive into the Ethereum Merge, exploring the transition from PoW to PoS.'
  },
  {
    id: '4',
    title: 'NFT Creator Daily',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://picsum.photos/seed/nft/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'High-retention edits for top-tier NFT influencers designed to maximize reach on social algorithms.'
  },
  {
    id: '5',
    title: 'DeFi Protocol Launch',
    category: 'Commercial Ads',
    thumbnailUrl: 'https://picsum.photos/seed/defi/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: 'Sleek, futuristic 30s commercial for a leading DEX, highlighting security and cross-chain capabilities.'
  },
  {
    id: '6',
    title: 'The Crypto Podcast',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://picsum.photos/seed/podcast/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    description: 'Viral highlights extracted from 2-hour long podcast sessions, pinpointing the most controversial and informative takes.'
  }
];

const VideoGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const categories = ['All', 'Commercial Ads', 'Motion Graphics', 'Podcast Edit'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleCardClick = (id: string) => {
    if (playingId === id) return;
    setPlayingId(id);
  };

  const stopVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId(null);
  };

  const isYouTube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

  return (
    <section id="work" className="py-16 md:py-24 px-4 sm:px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="w-full">
            <span className="text-samurai uppercase tracking-widest text-[10px] font-black mb-2 block">The Portfolio</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-jp leading-tight">Visual <span className="text-white/40">Work</span></h2>
          </div>
          
          <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2 w-full lg:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-4 py-2.5 text-[9px] font-black uppercase tracking-widest border transition-all shrink-0 ${
                  filter === cat ? 'bg-samurai border-samurai text-white' : 'border-white/10 text-gray-500 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => handleCardClick(project.id)}
              className={`group relative overflow-hidden bg-black flex flex-col cursor-pointer border transition-all duration-500 ${
                playingId === project.id 
                  ? 'border-samurai scale-[1.02] md:scale-100 shadow-[0_0_50px_rgba(32,60,97,0.3)] z-20' 
                  : 'border-white/5 hover:border-samurai/40 lg:hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(32,60,97,0.15)] z-0'
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                {playingId === project.id ? (
                  <div className="relative w-full h-full bg-black">
                    {isYouTube(project.videoUrl) ? (
                      <iframe 
                        src={project.videoUrl}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <video 
                        src={project.videoUrl} 
                        autoPlay 
                        controls 
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={() => setPlayingId(null)}
                      />
                    )}
                    <button 
                      onClick={stopVideo}
                      className="absolute top-2 right-2 z-30 bg-samurai text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#2d558a] transition-all shadow-xl active:scale-90"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.thumbnailUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 md:p-6 flex flex-col justify-end">
                      <span className="text-samurai text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">{project.category}</span>
                      <h3 className="text-base md:text-xl font-black uppercase leading-tight mb-1">{project.title}</h3>
                      <p className="hidden md:block text-gray-400 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 md:scale-50 md:group-hover:scale-100">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-samurai flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(32,60,97,0.5)]">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 4l10 6-10 6V4z"/>
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                
                <div className={`absolute inset-0 pointer-events-none border transition-colors duration-500 ${
                  playingId === project.id ? 'border-samurai/40' : 'border-transparent group-hover:border-samurai/20'
                }`}></div>
              </div>

              {playingId === project.id && (
                <div className="p-4 md:p-6 bg-[#111] border-t border-samurai/20 animate-fade-in">
                  <span className="text-samurai text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-lg md:text-xl font-black uppercase mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;