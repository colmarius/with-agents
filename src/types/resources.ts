export type CodingResource = {
  id: number;
  title: string;
  subtitle?: string;
  url: string;
  description: string;
  type: 'podcast' | 'video' | 'article' | 'playlist';
  source: string;
  date?: string;
  duration?: string;
  tags?: string[];
};
