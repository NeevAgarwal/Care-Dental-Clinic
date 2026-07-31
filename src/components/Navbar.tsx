import { useState, useEffect } from 'react';
import { getGeneralBookingLink } from '../utils/whatsapp';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300 bg-obsidian/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(212,169,74,0.1)] py-2"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-semibold text-xl tracking-wide text-ivory">CARE <span className="text-gold">DENTAL</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/about" className="text-ivory/80 hover:text-gold transition-colors">About</Link>
            <Link to="/services" className="text-ivory/80 hover:text-gold transition-colors">Services</Link>
            <Link to="/reviews" className="text-ivory/80 hover:text-gold transition-colors">Reviews</Link>
            <Link to="/contact" className="text-ivory/80 hover:text-gold transition-colors">Contact</Link>
          </div>

          <a
            href={getGeneralBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-colors duration-300 rounded-sm font-medium text-sm"
          >
            Book Appointment
          </a>

          {/* Hamburger Menu Toggle */}
          <button 
            className="md:hidden text-ivory p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center pt-20 pb-10 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              <Link to="/about" onClick={closeMobileMenu} className="text-2xl font-display text-ivory hover:text-gold transition-colors">About</Link>
              <Link to="/services" onClick={closeMobileMenu} className="text-2xl font-display text-ivory hover:text-gold transition-colors">Services</Link>
              <Link to="/reviews" onClick={closeMobileMenu} className="text-2xl font-display text-ivory hover:text-gold transition-colors">Reviews</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-2xl font-display text-ivory hover:text-gold transition-colors">Contact</Link>
              
              <a
                href={getGeneralBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-4 w-full max-w-xs flex items-center justify-center px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-colors duration-300 rounded-sm font-medium text-lg"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
