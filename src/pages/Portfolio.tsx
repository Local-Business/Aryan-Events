import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { PORTFOLIO_ITEMS } from '../constants';

const CATEGORIES = ['All', 'Wedding', 'Decoration', 'Corporate', 'Social'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Masterpieces"
          subtitle="Portfolio"
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 text-xs uppercase tracking-widest font-bold border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-transparent text-charcoal border-charcoal/10 hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold uppercase tracking-widest text-[10px] font-bold mb-2">{item.category}</span>
                  <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="text-white text-xs uppercase tracking-widest font-bold border-b border-white w-fit pb-1 hover:text-gold hover:border-gold transition-colors"
                  >
                    Explore Gallery
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-500 font-serif text-xl italic">No events found in this category yet. Stay tuned for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
