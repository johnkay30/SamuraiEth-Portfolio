
import React, { useState } from 'react';
import { VideoProject } from '../types';

const projects: VideoProject[] = [
  {
    id: '1',
    title: 'Solana Summer Recap',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://picsum.photos/seed/sol/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'High-octane visual journey through the Solana ecosystem growth. Focused on transaction throughput and ecosystem expansion.'
  },
  {
    id: '2',
    title: 'Ethereum Merge: The Story',
    category: 'Long Form',
    thumbnailUrl: 'https://picsum.photos/seed/eth/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'A 15-minute documentary-style deep dive into the Ethereum Merge, exploring the transition from PoW to PoS.'
  },
  {
    id: '3',
    title: 'NFT Creator Daily',
    category: 'Clips',
    thumbnailUrl: 'https://picsum.photos/seed/nft/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Fast-paced, high-retention clips for top-tier NFT influencers designed to maximize reach on social algorithms.'
  },
  {
    id: '4',
    title: 'DeFi Protocol Launch',
    category: 'Commercials',
    thumbnailUrl: 'https://picsum.photos/seed/defi/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: 'Sleek, futuristic 30s commercial for a leading DEX, highlighting security and cross-chain capabilities.'
  },
  {
    id: '5',
    title: 'The Crypto Podcast',
    category: 'Clips',
    thumbnailUrl: 'https://picsum.photos/seed/podcast/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    description: 'Viral highlights extracted from 2-hour long podcast sessions, pinpointing the most controversial and informative takes.'
  },
  {
    id: '6',
    title: 'Metamask Redesign',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://picsum.photos/seed/ui/800/450',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    description: 'Dynamic UI/UX animation showcasing a conceptual redesign of the world\'s most popular Web3 wallet.'
  }
];

const VideoGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const categories = ['All', 'Clips', 'Long Form', 'Motion Graphics', 'Commercials'];

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

  return (
    <section id="work" className="py-24 px-4 sm:px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <span className="text-samurai uppercase tracking-widest text-xs font-bold mb-4 block">The Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-jp leading-tight">Forged in <span className="text-white/40">Pixels</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-grow sm:flex-grow-0 px-3 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all ${
                  filter === cat ? 'bg-samurai border-samurai text-white' : 'border-white/10 text-gray-400 hover:border-white/30'
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
              className={`group relative overflow-hidden bg-black flex flex-col cursor-pointer border transition-all duration-500 z-0 hover:z-10 ${
                playingId === project.id 
                  ? 'border-samurai scale-100 shadow-[0_0_50px_rgba(255,0,0,0.3)]' 
                  : 'border-white/5 hover:border-samurai/40 lg:hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]'
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                {playingId === project.id ? (
                  <div className="relative w-full h-full bg-black">
                    <video 
                      src={project.videoUrl} 
                      autoPlay 
                      controls 
                      className="w-full h-full object-cover"
                      onEnded={() => setPlayingId(null)}
                    />
                    <button 
                      onClick={stopVideo}
                      className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-samurai text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-red-700 transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-4 md:p-6 flex flex-col justify-end transform transition-transform duration-300">
                      <span className="text-samurai text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">{project.category}</span>
                      <h3 className="text-lg md:text-xl font-bold uppercase leading-none mb-2">{project.title}</h3>
                      <p className="hidden md:block text-gray-400 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-samurai flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(255,0,0,0.5)]">
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
                <div className="p-4 md:p-6 bg-white/5 border-t border-samurai/20 animate-fade-in">
                  <span className="text-samurai text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-lg md:text-xl font-bold uppercase mb-3">{project.title}</h3>
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
