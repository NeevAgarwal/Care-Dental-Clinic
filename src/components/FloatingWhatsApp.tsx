import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { getGeneralBookingLink } from '../utils/whatsapp';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (~500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={getGeneralBookingLink()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gold text-obsidian rounded-full shadow-[0_0_20px_rgba(212,169,74,0.4)] hover:shadow-[0_0_30px_rgba(212,169,74,0.6)] hover:bg-gold-hover transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20" />
          
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-obsidian-light border border-gold/20 px-3 py-1.5 rounded-sm text-xs font-medium text-ivory whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with us
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
