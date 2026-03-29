import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import { PORTFOLIO_ITEMS, TESTIMONIALS, SERVICES } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Wedding"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gold uppercase tracking-[0.5em] text-sm font-bold mb-6 block"
          >
            Exquisite Weddings & Events
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight"
          >
            Crafting Unforgettable <br /> <span className="italic">Moments</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-charcoal px-10 py-5 uppercase tracking-widest font-bold text-sm transition-all duration-300 w-full md:w-auto"
            >
              Plan Your Event
            </Link>
            <Link
              to="/portfolio"
              className="border border-white text-white hover:bg-white hover:text-charcoal px-10 py-5 uppercase tracking-widest font-bold text-sm transition-all duration-300 w-full md:w-auto"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Scroll to explore</span>
          <div className="w-px h-12 bg-white/20" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SectionHeading
              title="A Legacy of Elegance"
              subtitle="About Aryan Events"
              centered={false}
              className="mb-8"
            />
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
              Based in the heart of Roorkee, Aryan Events & Weddings Planner has been the premier choice for those seeking unparalleled luxury and sophistication in event planning. We believe that every celebration is a unique story waiting to be told.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
              Our team of dedicated professionals brings together creativity, precision, and a deep understanding of Indian traditions to create experiences that are not just events, but lifelong memories.
            </p>
            <Link
              to="/about"
              className="group flex items-center space-x-3 text-gold font-bold uppercase tracking-widest text-sm"
            >
              <span>Our Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                alt="Event Planning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-charcoal p-10 hidden md:block">
              <span className="text-5xl font-serif text-gold block mb-2">10+</span>
              <span className="text-white uppercase tracking-widest text-xs font-bold">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Signature Services"
            subtitle="What We Offer"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-block border-b-2 border-gold pb-2 text-gold font-bold uppercase tracking-widest text-sm hover:text-gold-dark transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Recent Celebrations"
            subtitle="Our Portfolio"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PORTFOLIO_ITEMS.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold uppercase tracking-widest text-xs font-bold mb-2">{item.category}</span>
                  <h3 className="text-3xl font-serif text-white mb-4">{item.title}</h3>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="text-white text-sm uppercase tracking-widest font-bold border-b border-white w-fit pb-1"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="bg-charcoal text-white px-12 py-5 uppercase tracking-widest font-bold text-sm hover:bg-gold transition-colors duration-500"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-gold" size={32} />
              </div>
              <h4 className="text-xl font-serif mb-4">Trustworthy</h4>
              <p className="text-gray-400 text-sm">A decade of experience in delivering excellence.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-gold" size={32} />
              </div>
              <h4 className="text-xl font-serif mb-4">Premium Quality</h4>
              <p className="text-gray-400 text-sm">Only the finest vendors and materials for your event.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-gold" size={32} />
              </div>
              <h4 className="text-xl font-serif mb-4">Timely Execution</h4>
              <p className="text-gray-400 text-sm">Precision planning to ensure everything runs on schedule.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-gold" size={32} />
              </div>
              <h4 className="text-xl font-serif mb-4">Award Winning</h4>
              <p className="text-gray-400 text-sm">Recognized for our creative and luxury designs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="The Luxury Experience"
            subtitle="Our Process"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gold/10">
            <div className="p-12 border-b md:border-b-0 md:border-r border-gold/10 hover:bg-cream transition-colors group">
              <span className="text-6xl font-serif text-gold/20 mb-8 block group-hover:text-gold/40 transition-colors">01</span>
              <h4 className="text-2xl font-serif mb-4">Consultation</h4>
              <p className="text-gray-500 text-sm leading-relaxed">We begin by understanding your vision, preferences, and requirements through a detailed consultation session.</p>
            </div>
            <div className="p-12 border-b md:border-b-0 md:border-r border-gold/10 hover:bg-cream transition-colors group">
              <span className="text-6xl font-serif text-gold/20 mb-8 block group-hover:text-gold/40 transition-colors">02</span>
              <h4 className="text-2xl font-serif mb-4">Planning</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Our experts craft a bespoke plan, including theme development, vendor selection, and meticulous budgeting.</p>
            </div>
            <div className="p-12 hover:bg-cream transition-colors group">
              <span className="text-6xl font-serif text-gold/20 mb-8 block group-hover:text-gold/40 transition-colors">03</span>
              <h4 className="text-2xl font-serif mb-4">Execution</h4>
              <p className="text-gray-500 text-sm leading-relaxed">On the day of the event, we handle everything on-site, ensuring a flawless and stress-free experience for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Client Stories"
            subtitle="Testimonials"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 shadow-lg border-l-4 border-gold"
              >
                <p className="text-lg italic text-gray-600 mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <h5 className="font-serif text-lg text-charcoal">{testimonial.name}</h5>
                    <span className="text-xs uppercase tracking-widest text-gold font-bold">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-24 px-6 bg-white" id="inquiry">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading
              title="Let's Plan Your Dream Event"
              subtitle="Get in Touch"
              centered={false}
              className="mb-8"
            />
            <p className="text-lg text-gray-600 mb-10 font-light">
              Ready to start planning? Fill out the form or reach out to us directly via WhatsApp. We can't wait to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Star size={20} />
                </div>
                <span className="text-charcoal font-medium">Personalized Consultations</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Star size={20} />
                </div>
                <span className="text-charcoal font-medium">Bespoke Design Concepts</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Star size={20} />
                </div>
                <span className="text-charcoal font-medium">End-to-End Management</span>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
