import { testimonialsData } from "../data/testimonials";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

export function ReviewsGrid() {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-gold/30 text-gold py-1 px-4 rounded-full text-sm font-medium">All Reviews</div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tighter mt-5 text-ivory">
            What they say about us
          </h2>
          <p className="text-center mt-5 text-ivory/70 text-lg">
            Real experiences from our patients.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={29} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={27} />
        </div>
      </div>
    </section>
  );
}
