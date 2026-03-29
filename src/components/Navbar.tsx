import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-widest uppercase",
            isScrolled ? "text-charcoal" : "text-white"
          )}>
            Aryan Events
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.3em] uppercase -mt-1",
            isScrolled ? "text-gold-dark" : "text-gold-light"
          )}>
            & Weddings Planner
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : isScrolled ? 'text-charcoal' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "px-6 py-2 text-xs uppercase tracking-widest font-bold border transition-all duration-300",
              isScrolled 
                ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-charcoal"
            )}
          >
            Plan Event
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-charcoal' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-charcoal' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-xl border-t border-gold/10 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg uppercase tracking-widest font-serif',
                    location.pathname === link.path ? 'text-gold' : 'text-charcoal'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-charcoal text-white text-center py-4 uppercase tracking-widest font-bold"
              >
                Plan Your Event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
