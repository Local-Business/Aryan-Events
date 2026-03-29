import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Exquisite Offerings"
          subtitle="Our Services"
        />

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-20 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3 text-gray-600">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 relative"
              >
                <div className="aspect-[4/3] overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -z-10 -top-10 -left-10 w-full h-full border border-gold/20 hidden lg:block" />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Custom Packages */}
        <div className="mt-32 bg-charcoal p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                alt="Background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
          </div>
          <div className="relative z-10">
            <SectionHeading
              title="Bespoke Packages"
              subtitle="Tailored for You"
              className="mb-8"
            />
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
              Every event is unique. We offer custom packages tailored to your specific needs, budget, and vision. From intimate gatherings to grand celebrations, we have the perfect solution for you.
            </p>
            <button className="bg-gold text-charcoal px-12 py-5 uppercase tracking-widest font-bold text-sm hover:bg-gold-dark transition-colors">
              Get a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
