import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-6">
            <span className="text-2xl font-serif font-bold tracking-widest uppercase text-white">
              Aryan Events
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase -mt-1 text-gold">
              & Weddings Planner
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Crafting unforgettable weddings and events with a touch of luxury and elegance in Roorkee and beyond.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Wedding Planning</li>
            <li>Decoration & Theme</li>
            <li>Corporate Events</li>
            <li>Social Gatherings</li>
            <li>Catering Services</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Veer Bhawan Nagar, Roorkee, Uttarakhand, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 90847 02600</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>info@aryanevents.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-gray-500 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Aryan Events & Weddings Planner. All Rights Reserved.
      </div>
    </footer>
  );
}
