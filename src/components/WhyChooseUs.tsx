import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Shield, Star, Award, Heart, Banknote, Smile, Stethoscope } from 'lucide-react';

const reasons = [
  {
    icon: Smile,
    title: "Painless Procedures",
    description: "Advanced techniques ensuring your comfort throughout the treatment.",
    isInteractive: true
  },
  {
    icon: Award,
    title: "Experienced Doctor",
    description: "Decades of expertise under the guidance of Dr. D.S. Kundu."
  },
  {
    icon: Stethoscope,
    title: "Modern Equipment",
    description: "State-of-the-art diagnostic and surgical technology."
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden charges."
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open daily until 11:30 PM for your convenience."
  },
  {
    icon: Heart,
    title: "Family-Friendly Care",
    description: "A welcoming environment for patients of all ages."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-4"
          >
            The <span className="text-gold italic font-medium">Numero Uno</span> Choice
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Setting the benchmark for dental excellence in Silchar and the Barak Valley.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }: { reason: any, index: number, key?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-obsidian border border-white/5 p-8 rounded-xl hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-obsidian-light flex items-center justify-center border border-white/10 mb-6 group-hover:border-gold/50 transition-colors">
          <Icon 
            className={`w-6 h-6 ${reason.isInteractive && isHovered ? 'text-ivory' : 'text-gold'} transition-colors duration-300`} 
          />
        </div>
        <h3 className="text-xl font-semibold text-ivory mb-3">{reason.title}</h3>
        <p className="text-muted text-sm font-normal leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}
