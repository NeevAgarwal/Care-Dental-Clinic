import { motion } from 'motion/react';
import { getGeneralBookingLink } from '../utils/whatsapp';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/enhanced_qwer.png)' }}
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Painless Dentistry,<br />
            <span className="text-gold font-script text-4xl md:text-5xl lg:text-6xl block mt-2">Perfected.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ivory/90 mb-10 max-w-2xl font-normal leading-relaxed">
            Experience world-class precision and comfort with Dr. D.S. Kundu—Silchar’s most trusted name in premium dental care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-obsidian font-semibold rounded-sm hover:bg-gold-hover transition-colors group"
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={getGeneralBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-semibold rounded-sm hover:bg-gold/10 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
