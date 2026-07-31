import React from 'react';
import { motion } from 'motion/react';
import { getServiceBookingLink } from '../utils/whatsapp';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    name: "Tooth Extraction",
    image: "/rv.jpg",
    benefit: "Safe, swift, and virtually painless."
  },
  {
    name: "Full Mouth Scaling",
    image: "/service2.jpg",
    benefit: "Deep ultrasonic cleaning for lasting health."
  },
  {
    name: "Root Canal",
    image: "/service4-new.jpg",
    benefit: "Advanced endodontics to save your natural tooth."
  },
  {
    name: "Fixed Dentures",
    image: "/service5.webp",
    benefit: "Eat, chew, and smile with confidence."
  },
  {
    name: "Smile Design",
    image: "/swq.webp",
    benefit: "Aesthetic enhancements for a brilliant smile."
  },
  {
    name: "Pediatric Dentistry",
    image: "/PADITAR.webp",
    benefit: "Gentle care for our youngest patients."
  },
  {
    name: "Teeth Whitening",
    image: "/qaa-new.jpg",
    benefit: "Brighten your smile by several shades in one visit."
  },
  {
    name: "Dental Implants",
    image: "/DENNT.jpg",
    benefit: "Permanent, natural-looking replacements for missing teeth."
  },
  {
    name: "Orthodontics / Braces",
    image: "/pois-new.webp",
    benefit: "Straighten your teeth for a perfect, confident smile."
  },
  {
    name: "Dental Crowns & Bridges",
    image: "/DENTCROWNED.jpg",
    benefit: "Restore damaged teeth and bridge the gaps beautifully."
  },
  {
    name: "Tooth Fillings",
    image: "/tooth-fillings.webp",
    benefit: "Durable, tooth-colored restorations for cavities."
  },
  {
    name: "Periodontal Therapy",
    image: "/THERAPY.jpg",
    benefit: "Advanced treatments for healthy gums and strong foundations."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-4">
              Premium <span className="text-gold italic font-medium">Treatments</span>
            </h2>
            <p className="text-muted font-normal text-lg leading-relaxed">
              Comprehensive dental solutions utilizing cutting-edge hospital-grade equipment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number, key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-obsidian-light border border-white/5 hover:border-gold/30 transition-colors cursor-pointer"
    >
      {/* Background Image */}
      {service.image && (
        <img 
          src={service.image} 
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
      )}
      
      {!service.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-light to-obsidian opacity-100 group-hover:opacity-80 transition-opacity duration-700" />
      )}
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-display font-semibold text-ivory mb-2">{service.name}</h3>
        
        <div>
          <p className="text-gold text-sm font-medium mb-4">{service.benefit}</p>
          <a 
            href={getServiceBookingLink(service.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-obsidian bg-gold px-4 py-2 rounded-sm hover:bg-gold-hover transition-colors w-max"
          >
            Book Now <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
