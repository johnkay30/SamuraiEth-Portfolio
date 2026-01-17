export interface VideoProject {
  id: string;
  title: string;
  category: 'Podcast Edit' | 'Motion Graphics' | 'Commercial Ads';
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}