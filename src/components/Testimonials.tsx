import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-obsidian-light/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-16">
          Patient <span className="text-gold italic font-medium">Stories</span>
        </h2>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Quote */}
              <p className="text-lg md:text-xl text-ivory/90 font-normal italic mb-6 max-w-2xl leading-relaxed">
                "{testimonialsData[currentIndex].text}"
              </p>
              
              {/* Rating & Author */}
              <div className="flex items-center gap-4">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="text-sm">
                  <span className="text-ivory font-medium">{testimonialsData[currentIndex].name}</span>
                  <span className="text-muted ml-2">— Verified Google Review</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
