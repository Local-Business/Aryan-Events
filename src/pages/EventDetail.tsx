import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import SectionHeading from '../components/SectionHeading';

export default function EventDetail() {
  const { id } = useParams();
  const item = PORTFOLIO_ITEMS.find(i => i.id === id);

  if (!item) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-xs mb-12 hover:text-gold-dark transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              {item.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 leading-tight">
              {item.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
              {item.description}
            </p>

            <div className="space-y-4">
              <h4 className="font-serif text-xl mb-6">Key Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden bg-charcoal shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <SectionHeading
          title="Event Gallery"
          subtitle="Visual Story"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {item.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden bg-charcoal group cursor-zoom-in"
            >
              <img
                src={img}
                alt={`${item.title} gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center bg-charcoal p-20 text-white">
          <h2 className="text-4xl font-serif mb-6">Inspired by this event?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's create something equally spectacular for you. Our team is ready to bring your vision to life.</p>
          <Link
            to="/contact"
            className="bg-gold text-charcoal px-12 py-5 uppercase tracking-widest font-bold text-sm hover:bg-gold-dark transition-colors"
          >
            Plan Your Event
          </Link>
        </div>
      </div>
    </div>
  );
}
