import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, Star } from "lucide-react";

const CALL_LINK = "tel:7310952576";
const WA_LINK =
  "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img src="/sacred-geometry.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Top gold rule */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest">
              <Star className="w-3 h-3 fill-secondary" />
              Award-Winning Expert
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-background leading-tight">
              Ready for a Life-Changing<br />
              <span className="text-secondary italic">Consultation?</span>
            </h2>

            <p className="text-background/65 text-lg leading-relaxed max-w-md">
              Speak directly with Manjuu Mehta — no forms, no waiting. A single conversation can shift the direction of your entire life.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {["10+ Years Experience", "Trusted Internationally", "Instant Guidance"].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm text-background/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay: 0.1 } } }}
            className="space-y-4"
          >
            {/* Call Card */}
            <a
              href={CALL_LINK}
              className="group flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-background/40 group-hover:text-white/60 mb-0.5 transition-colors">Call Now</p>
                <p className="text-2xl font-serif font-bold text-background group-hover:text-white transition-colors">+91 73109 52576</p>
                <p className="text-xs text-background/40 group-hover:text-white/50 transition-colors mt-0.5">Tap to call directly</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <Phone className="w-3.5 h-3.5 text-background/50 group-hover:text-white/70" />
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#25D366]/20 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-background/40 group-hover:text-white/60 mb-0.5 transition-colors">WhatsApp</p>
                <p className="text-2xl font-serif font-bold text-background group-hover:text-white transition-colors">Message Now</p>
                <p className="text-xs text-background/40 group-hover:text-white/50 transition-colors mt-0.5">Pre-filled consultation message</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <MessageCircle className="w-3.5 h-3.5 text-background/50 group-hover:text-white/70" />
              </div>
            </a>

            {/* Availability note */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-secondary/10 border border-secondary/20">
              <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
              <p className="text-sm text-background/60">
                <span className="text-secondary font-semibold">Available for consultations</span> — India & International clients welcome
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
    </section>
  );
}
