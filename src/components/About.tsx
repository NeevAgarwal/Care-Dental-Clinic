import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">
              Precision Care,<br />
              <span className="text-gold italic font-medium">Patient First.</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            
            <div className="space-y-6 text-muted font-normal leading-relaxed text-lg">
              <p>
                At Care Dental Clinic, we believe that world-class dentistry should be completely painless. Under the expert guidance of <strong className="text-ivory font-medium">Dr. D. S. Kundu</strong>, a highly esteemed Dental Surgeon (BDS, Lucknow), we have redefined the standard of dental care in Silchar.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <h3 className="text-ivory font-semibold mb-4 text-xl">Dr. D. S. Kundu</h3>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-gold mr-3">✦</span>
                    <span>Department of Dentistry, S.M. Dev Civil Hospital, Silchar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">✦</span>
                    <span>District Oral & Health Officer, Cachar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">✦</span>
                    <span>Ex-House Surgeon, Dept. of Dentistry (SMCH, Silchar)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">✦</span>
                    <span>Life Member, Indian Dental Association</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">✦</span>
                    <span>Registered with Assam State Dental Council (Regn. No. 1462-A)</span>
                  </li>
                </ul>
              </div>
              <p>
                Our philosophy is simple: we treat every patient like family. From advanced sterilization protocols to state-of-the-art diagnostic equipment, every element of our clinic is designed to provide you with a safe, comfortable, and highly effective treatment experience.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden group border border-white/5 hover:border-gold/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
            <img 
              src="/about-image-new-v2.png"
              alt="Care Dental Clinic"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl z-20 pointer-events-none" />
            
            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/20 to-transparent pointer-events-none z-0 blur-md" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
