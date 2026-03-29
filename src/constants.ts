import { PortfolioItem, Service, Testimonial } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Wedding Celebration',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    description: 'A grand celebration blending traditional Indian customs with modern luxury. Our signature wedding planning service.',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop'
    ],
    highlights: ['Palace Venue', 'Traditional Decor', 'Grand Catering', 'Live Music']
  },
  {
    id: '2',
    title: 'Elegant Floral Decoration',
    category: 'Decoration',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop',
    description: 'Sophisticated floral arrangements and theme-based decorations for all types of events.',
    gallery: [
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop'
    ],
    highlights: ['Theme Decor', 'Exotic Flowers', 'Ambient Lighting']
  },
  {
    id: '3',
    title: 'Corporate Gala Night',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    description: 'Professional event management for corporate awards, galas, and product launches.',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop'
    ],
    highlights: ['LED Stage', 'Awards Ceremony', 'Hospitality Management']
  },
  {
    id: '4',
    title: 'Luxury Birthday Bash',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2070&auto=format&fit=crop',
    description: 'Memorable birthday celebrations with creative themes and high-end entertainment.',
    gallery: [
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2070&auto=format&fit=crop'
    ],
    highlights: ['Theme Party', 'Custom Cake', 'Entertainment']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'wedding-planning',
    title: 'Wedding Planning',
    description: 'Comprehensive wedding planning services, ensuring every detail of your special day is perfect and stress-free.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    features: ['Venue Selection', 'Vendor Coordination', 'Budget Management', 'Traditional Customs']
  },
  {
    id: 'decoration',
    title: 'Decoration & Theme',
    description: 'Transforming venues with exquisite floral designs, lighting, and bespoke theme decorations.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop',
    features: ['Floral Design', 'Stage Setup', 'Lighting Decor', 'Mandap Decoration']
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Professional management for corporate galas, awards ceremonies, and product launches.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    features: ['Stage Design', 'AV Management', 'Guest Hospitality', 'Event Branding']
  },
  {
    id: 'birthday-parties',
    title: 'Birthday Parties',
    description: 'Creative and fun birthday celebrations for all ages, with unique themes and entertainment.',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2070&auto=format&fit=crop',
    features: ['Theme Planning', 'Entertainment', 'Catering', 'Decorations']
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capturing your most precious moments with professional photography and videography services.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop',
    features: ['Wedding Photography', 'Cinematography', 'Pre-wedding Shoot', 'Event Coverage']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali & Vikram',
    role: 'Wedding Clients',
    content: 'Aryan and his team were incredible. They handled our wedding in Roorkee with such grace and professionalism. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1623091423320-5570fd003ce1?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Corporate Client',
    content: 'The best event management company in Roorkee. Flawless execution of our annual corporate awards night.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];
