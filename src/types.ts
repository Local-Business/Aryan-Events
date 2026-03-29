export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Decoration' | 'Corporate' | 'Social';
  image: string;
  description: string;
  gallery: string[];
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}
