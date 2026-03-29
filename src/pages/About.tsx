import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Star, Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Story & Vision"
          subtitle="About Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-serif text-charcoal mb-8">Crafting Excellence Since 2014</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              Aryan Events & Weddings Planner, founded by **Aryan Shah**, was established with a simple yet profound vision: to bring a new level of luxury and sophistication to the event planning industry in Roorkee and across India.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              Based in **Veer Bhawan Nagar, Roorkee**, what started as a small team of passionate individuals has grown into a premier event management firm, known for our creative vision, meticulous planning, and flawless execution.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Our commitment to quality and excellence has earned us the trust of hundreds of families and corporate clients, making us one of the most sought-after event planners in the region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 hidden md:block">
              <span className="text-charcoal uppercase tracking-widest text-xs font-bold block mb-2">Based in</span>
              <span className="text-3xl font-serif text-charcoal">Roorkee, India</span>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-gold" size={32} />
            </div>
            <h4 className="text-xl font-serif mb-4">Passion</h4>
            <p className="text-gray-500 text-sm">We are deeply passionate about creating beautiful and meaningful experiences.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-gold" size={32} />
            </div>
            <h4 className="text-xl font-serif mb-4">Creativity</h4>
            <p className="text-gray-500 text-sm">Our designs are unique, creative, and tailored to each client's vision.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-gold" size={32} />
            </div>
            <h4 className="text-xl font-serif mb-4">Excellence</h4>
            <p className="text-gray-500 text-sm">We strive for excellence in every detail, from planning to execution.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-gold" size={32} />
            </div>
            <h4 className="text-xl font-serif mb-4">Integrity</h4>
            <p className="text-gray-500 text-sm">We build lasting relationships with our clients based on trust and transparency.</p>
          </div>
        </div>

        {/* Trust Building Section */}
        <div className="bg-charcoal p-16 md:p-24 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Why Trust Aryan Events?</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              With over a decade of experience and a portfolio of successful events, we have the expertise and resources to handle any event, regardless of its scale or complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm uppercase tracking-widest font-bold">Verified Vendors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm uppercase tracking-widest font-bold">Professional Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm uppercase tracking-widest font-bold">Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
