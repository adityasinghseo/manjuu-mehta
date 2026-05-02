import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Delhi",
    text: "Manjuu ma'am's Vastu consultation completely transformed the energy of our new home. We've seen remarkable growth in our business since implementing her simple yet effective suggestions."
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    text: "Her numerology reading was incredibly accurate. Changing the spelling of my name as per her guidance has opened up new career opportunities I never thought possible."
  },
  {
    name: "Anita Verma",
    location: "Haridwar",
    text: "I was going through a very tough phase. Manjuu Ji's Kundli analysis and remedies brought peace and understanding back into my life. Her guidance is truly a blessing."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none w-1/2 h-full max-w-lg">
        <img src="/zodiac.png" alt="" className="w-full h-full object-contain opacity-50" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those who have experienced positive transformations through our consultations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.15, duration: 0.5 } }
              }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border relative group hover:shadow-md hover:border-secondary/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6 group-hover:text-secondary/40 transition-colors" />
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <h4 className="font-serif font-bold text-foreground text-lg">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
