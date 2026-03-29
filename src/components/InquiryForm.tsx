import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl border border-gold/10">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-gold" size={32} />
          </div>
          <h3 className="text-2xl font-serif mb-4">Inquiry Sent Successfully</h3>
          <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will contact you shortly to discuss your event.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-gold font-bold uppercase tracking-widest text-sm border-b border-gold pb-1"
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Name *</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors bg-transparent"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone Number *</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors bg-transparent"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Event Type *</label>
              <select
                required
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors bg-transparent appearance-none"
              >
                <option value="">Select Type</option>
                <option value="wedding">Wedding</option>
                <option value="decoration">Decoration</option>
                <option value="corporate">Corporate Event</option>
                <option value="social">Social Gathering</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Estimated Budget (Optional)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors bg-transparent"
              placeholder="e.g. 5-10 Lakhs"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Your Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors bg-transparent resize-none"
              placeholder="Tell us more about your vision..."
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-charcoal text-white py-5 uppercase tracking-[0.3em] font-bold text-sm hover:bg-gold transition-colors duration-500 flex items-center justify-center space-x-3"
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
