import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-serif text-charcoal mb-8">Let's Discuss Your Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
              Whether you're planning a grand wedding or an intimate social gathering, we're here to help. Reach out to us via the form, phone, or WhatsApp to start your journey towards an unforgettable event.
            </p>

            <div className="space-y-10 mb-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Our Location</h4>
                  <p className="text-gray-500">Veer Bhawan Nagar, Roorkee, Uttarakhand, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-gray-500">+91 90847 02600, +91 84453 52200</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email Us</h4>
                  <p className="text-gray-500">info@aryanevents.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-xl">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 border border-gold/20 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 rounded-full">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gold/20 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 rounded-full">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gold/20 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 rounded-full">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <InquiryForm />
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-32 h-[400px] bg-gray-200 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif text-2xl italic">
            Interactive Map of Roorkee Office
          </div>
          {/* In a real app, you'd embed a Google Map here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55321.25056767673!2d77.85698415!3d29.8658661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb369f68d2d2d%3A0x9b3ddfc0162d4b20!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1711739469284!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
