import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function TrustBar() {
  return (
    <section className="border-y border-gold/20 bg-obsidian-light py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center pt-8 md:pt-0"
          >
            <div className="text-3xl md:text-4xl font-bold text-ivory mb-2">
              <AnimatedCounter value={5} duration={1.5} />.0 <span className="text-gold text-2xl">★</span>
            </div>
            <div className="text-sm font-medium tracking-widest text-muted uppercase">Google Rating</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center pt-8 md:pt-0"
          >
            <div className="text-3xl md:text-4xl font-bold text-ivory mb-2">
              <AnimatedCounter value={1418} duration={2.5} /><span className="text-gold">+</span>
            </div>
            <div className="text-sm font-medium tracking-widest text-muted uppercase">Verified Reviews</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center pt-8 md:pt-0"
          >
            <div className="text-3xl md:text-4xl font-bold text-ivory mb-2">
              <AnimatedCounter value={15} duration={2} /><span className="text-gold">+</span>
            </div>
            <div className="text-sm font-medium tracking-widest text-muted uppercase">Years Experience</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
