import { getGeneralBookingLink } from '../utils/whatsapp';

export function Footer() {
  return (
    <footer className="bg-obsidian pt-16 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <span className="font-display font-semibold text-2xl tracking-wide text-ivory block mb-4">
              CARE <span className="text-gold">DENTAL</span>
            </span>
            <p className="text-muted font-normal leading-relaxed text-sm max-w-sm mb-6">
              The Numero Uno Dentist of Silchar & Barak Valley. Delivering painless, hospital-grade dental care with a patient-first approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory font-medium mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm font-normal text-muted">
              <li><a href="#about" className="hover:text-gold transition-colors">About Dr. Kundu</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Patient Stories</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Popular Treatments */}
          <div>
            <h4 className="text-ivory font-medium mb-4 uppercase tracking-wider text-sm">Popular Treatments</h4>
            <ul className="space-y-3 text-sm font-normal text-muted">
              <li><a href={getGeneralBookingLink()} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Painless Tooth Extraction</a></li>
              <li><a href={getGeneralBookingLink()} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Advanced Root Canal</a></li>
              <li><a href={getGeneralBookingLink()} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Smile Designing</a></li>
              <li><a href={getGeneralBookingLink()} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Fixed Dentures</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-muted">
          <p>&copy; {new Date().getFullYear()} Care Dental Clinic — Dr. D.S. Kundu. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
