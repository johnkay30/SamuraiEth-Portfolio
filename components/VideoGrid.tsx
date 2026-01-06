
import React, { useState } from 'react';
import { VideoProject } from '../types';

const projects: VideoProject[] = [
  {
    id: '1',
    title: 'Solana Summer Recap',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://picsum.photos/seed/sol/800/450',
    videoUrl: '#',
    description: 'High-octane visual journey through the Solana ecosystem growth.'
  },
  {
    id: '2',
    title: 'Ethereum Merge: The Story',
    category: 'Long Form',
    thumbnailUrl: 'https://picsum.photos/seed/eth/800/450',
    videoUrl: '#',
    description: 'A 15-minute documentary-style deep dive into the Ethereum Merge.'
  },
  {
    id: '3',
    title: 'NFT Creator Daily',
    category: 'Clips',
    thumbnailUrl: 'https://picsum.photos/seed/nft/800/450',
    videoUrl: '#',
    description: 'Fast-paced, high-retention clips for top-tier NFT influencers.'
  },
  {
    id: '4',
    title: 'DeFi Protocol Launch',
    category: 'Commercials',
    thumbnailUrl: 'https://picsum.photos/seed/defi/800/450',
    videoUrl: '#',
    description: 'Sleek, futuristic 30s commercial for a leading DEX.'
  },
  {
    id: '5',
    title: 'The Crypto Podcast',
    category: 'Clips',
    thumbnailUrl: 'https://picsum.photos/seed/podcast/800/450',
    videoUrl: '#',
    description: 'Viral highlights extracted from 2-hour long podcast sessions.'
  },
  {
    id: '6',
    title: 'Metamask Redesign',
    category: 'Motion Graphics',
    thumbnailUrl: 'https://picsum.photos/seed/ui/800/450',
    videoUrl: '#',
    description: 'Dynamic UI/UX animation showcasing a conceptual redesign.'
  }
];

const VideoGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Clips', 'Long Form', 'Motion Graphics', 'Commercials'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-samurai uppercase tracking-widest text-xs font-bold mb-4 block">The Portfolio</span>
            <h2 className="text-5xl font-black uppercase font-jp">Forged in <span className="text-white/40">Pixels</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  filter === cat ? 'bg-samurai border-samurai text-white' : 'border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden bg-black aspect-video cursor-pointer"
            >
              <img 
                src={project.thumbnailUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-300">
                <span className="text-samurai text-[10px] font-black uppercase tracking-widest mb-1">{project.category}</span>
                <h3 className="text-xl font-bold uppercase leading-none mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                <div className="w-16 h-16 bg-samurai flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.516 7.548c0-.466.308-.88.745-1.018l9.303-2.91a1.082 1.082 0 011.35 1.258l-2.008 10.42a1.082 1.082 0 01-1.42.846l-7.97-2.6a1.082 1.082 0 01-.745-1.018z" transform="rotate(45 10 10)"/>
                    <path d="M6 4l10 6-10 6V4z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
