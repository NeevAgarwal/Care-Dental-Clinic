import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function SmileTransformation() {
  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-light border-y border-white/5">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center space-x-2 border border-gold/30 bg-gold/5 px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-medium uppercase tracking-widest text-gold">Smile Design</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6"
          >
            Life-Changing <span className="text-gold italic font-medium">Transformations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Witness the art of modern dentistry. We restore confidence and bring smiles back to life with precision, compassionate care, and advanced aesthetic techniques.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden group aspect-[4/3] md:aspect-square border border-white/10 bg-obsidian flex items-center justify-center"
          >
            <img 
              src="/clinic-image-1.jpeg" 
              alt="Before Treatment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden group aspect-[4/3] md:aspect-square border-2 border-gold/40 shadow-[0_0_40px_rgba(212,175,55,0.15)] z-10 md:scale-110 bg-obsidian flex items-center justify-center"
          >
            <img 
              src="/clinic-image-2.jpeg" 
              alt="After Treatment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </motion.div>

          {/* Enhanced / Detail */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="relative rounded-2xl overflow-hidden group aspect-[4/3] md:aspect-square border border-white/10 bg-obsidian flex items-center justify-center"
          >
            <img 
              src="/clinic-image-3.jpeg" 
              alt="Perfected Smile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
