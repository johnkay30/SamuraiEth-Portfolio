
export interface VideoProject {
  id: string;
  title: string;
  category: 'Clips' | 'Long Form' | 'Motion Graphics' | 'Commercials';
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
