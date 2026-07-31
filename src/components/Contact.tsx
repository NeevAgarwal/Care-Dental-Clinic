import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../utils/whatsapp';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.treatment) newErrors.treatment = 'Please select a treatment';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsRedirecting(true);
    
    const message = `Hello, I am ${formData.name}. I would like to book an appointment for ${formData.treatment} on ${formData.date || 'a suitable date'} at ${formData.time || 'a suitable time'}.${formData.message ? `\n\nAdditional Message: ${formData.message}` : ''}`;
    
    const link = buildWhatsAppLink(message);
    
    setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-display text-4xl font-semibold text-ivory mb-4">Visit <span className="text-gold italic font-medium">Us</span></h2>
              <p className="text-muted font-normal leading-relaxed">Experience premium dental care in the heart of Silchar.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-obsidian border border-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-ivory font-medium mb-1">Clinic Address</h4>
                  <p className="text-muted text-sm font-normal leading-relaxed">
                    Care Dental Clinic<br />
                    Hospital Road, Point, near Chandsi Homoeo Hall,<br />
                    adj. to Hotel Maruti, Silchar, Assam 788001
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/bATGbv85coqPBFVt5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-2 text-gold hover:text-gold-hover text-sm font-medium transition-colors"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-obsidian border border-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-ivory font-medium mb-1">Contact</h4>
                  <a href="tel:07002696853" className="block text-muted text-sm font-normal hover:text-gold transition-colors">070026 96853</a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block text-muted text-sm font-normal hover:text-gold transition-colors flex items-center gap-1 mt-1">
                    <MessageCircle className="w-3 h-3" /> WhatsApp Available
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-obsidian border border-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-ivory font-medium mb-1">Extended Hours</h4>
                  <ul className="text-muted text-sm font-normal leading-relaxed space-y-1 w-full max-w-xs">
                    <li className="flex justify-between gap-4"><span>Mon - Wed:</span> <span>9:30 am – 11:30 pm</span></li>
                    <li className="flex justify-between gap-4"><span>Thursday:</span> <span>9:00 am – 11:30 pm</span></li>
                    <li className="flex justify-between gap-4"><span>Fri - Sat:</span> <span>9:30 am – 11:30 pm</span></li>
                    <li className="flex justify-between gap-4"><span>Sunday:</span> <span>9:30 am – 10:30 pm</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-80 bg-obsidian rounded-sm border border-white/10 overflow-hidden relative grayscale-0 transition-all duration-500">
              <iframe 
                src="https://maps.google.com/maps?q=CARE%20DENTAL%20CLINIC%20-%20DR.%20D.S.%20KUNDU,%20Silchar,%20Assam%20788001&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Care Dental Clinic Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-obsidian border border-white/5 p-8 rounded-xl shadow-2xl relative"
          >
            <h3 className="text-2xl font-display font-semibold text-ivory mb-6">Request an Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-obsidian-light border ${errors.name ? 'border-red-500/50' : 'border-white/10'} focus:border-gold rounded-sm px-4 py-3 text-ivory text-sm outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-obsidian-light border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} focus:border-gold rounded-sm px-4 py-3 text-ivory text-sm outline-none transition-colors`}
                    placeholder="+91"
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Treatment *</label>
                <select 
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className={`w-full bg-obsidian-light border ${errors.treatment ? 'border-red-500/50' : 'border-white/10'} focus:border-gold rounded-sm px-4 py-3 text-ivory text-sm outline-none transition-colors appearance-none`}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Tooth Extraction">Tooth Extraction</option>
                  <option value="Root Canal">Root Canal</option>
                  <option value="Full Mouth Scaling">Full Mouth Scaling</option>
                  <option value="Fixed Dentures">Fixed Dentures</option>
                  <option value="Smile Design">Smile Design</option>
                  <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                  <option value="Other">Other</option>
                </select>
                {errors.treatment && <span className="text-red-400 text-xs mt-1 block">{errors.treatment}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Preferred Date</label>
                  <input 
                    type="text" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="DD/MM/YYYY"
                    className="w-full bg-obsidian-light border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-ivory text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Preferred Time</label>
                  <select 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-obsidian-light border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-ivory text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-obsidian-light border border-white/10 focus:border-gold rounded-sm px-4 py-3 text-ivory text-sm outline-none transition-colors resize-none"
                  placeholder="Tell us about your concerns..."
                />
              </div>

              <button 
                type="submit"
                disabled={isRedirecting}
                className="w-full bg-gold hover:bg-gold-hover text-obsidian font-semibold py-4 rounded-sm transition-colors mt-4 flex items-center justify-center gap-2"
              >
                {isRedirecting ? (
                  <>Redirecting to WhatsApp...</>
                ) : (
                  <>
                    Submit Request <ArrowUpRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-muted mt-4">
                This form will securely redirect you to WhatsApp to complete your booking.
              </p>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
