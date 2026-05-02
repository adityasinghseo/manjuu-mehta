import { motion } from "framer-motion";
import { Phone, MessageCircle, Award, Star, Shield, Users, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import img1 from "@assets/ChatGPT_Image_May_2,_2026,_11_06_30_AM_1777700202357.png";
import img2 from "@assets/image_1777699643703.png";
import img3 from "@assets/image_1777699652093.png";
import img4 from "@assets/image_1777699668308.png";
import img5 from "@assets/image_1777699516622.png";
import img6 from "@assets/image_1777699528316.png";

const AWARDS = [
  "Super Woman Award for Inspiring Women (2024)",
  "City Excellence Award by India News Index (2024)",
  "Bharat Good Times – Rising Excellence Award (2024)",
  "Her Story Times Award – Best Vastu Expert (2024)",
  "Forever Star India Award – Best Astro Numerologist (Haridwar)",
  "Sahika India International Award – Best Numerologist (2023)",
  "Nakshatra Alankar Award (2025)",
  "Jyotish Mahakumbh Award (2025) — Presented by Pushkar Singh Dhami"
];

const GALLERY_PREVIEW = [
  { src: img1, caption: "Manjuu Mehta – Astrologer, Numerologist & Vastu Expert" },
  { src: img2, caption: "Sahika India International Excellence Awards (2023)" },
  { src: img3, caption: "Jyotish Mahakumbh Award (2025)" },
  { src: img4, caption: "Presented by Shri Pushkar Singh Dhami" },
  { src: img5, caption: "Rising Excellence Award – Bharat Good Times (2024)" },
  { src: img6, caption: "City Excellence Award – Haridwar (2024)" },
];

const CALL_LINK = "tel:7310952576";
const WA_LINK = "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src={img1}
            alt="Manjuu Mehta" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium border border-secondary/30">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              10+ Years of Experience | Trusted by Clients in India & Abroad
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold font-serif leading-tight text-foreground">
              Transform Your Life with <span className="text-primary italic">Expert Guidance</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Authentic Astrology, Vastu & Numerology consultations to help you navigate life's challenges with clarity and confidence.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg h-auto">
                <a href={CALL_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg h-auto border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none w-1/2 h-full max-w-lg">
          <img src="/mandala.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">A Trusted Spiritual Guide</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
              "Manjuu Mehta is a certified professional Vastu Advisor, Astrologer, and Karmic Numerologist with over a decade of experience in transforming lives through ancient sciences. She has helped individuals, families, and businesses achieve clarity, prosperity, and growth through accurate and insightful consultations."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-background mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "10+ Years Experience", desc: "A decade of dedicated practice and proven results." },
              { icon: Users, title: "International Client Base", desc: "Trusted by clients globally for accurate guidance." },
              { icon: Shield, title: "Personalized Solutions", desc: "Tailored remedies that fit your unique life situation." },
              { icon: Award, title: "Award-Winning Expert", desc: "Recognized multiple times for excellence in the field." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
                }}
                className="bg-background/5 border border-border/10 p-8 rounded-2xl text-center hover:bg-background/10 transition-colors"
              >
                <div className="inline-flex p-4 rounded-full bg-secondary/20 text-secondary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-background mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img src="/zodiac.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Recognitions & Excellence</h2>
            <p className="text-lg text-muted-foreground">
              A testament to unwavering dedication, accuracy, and impact in the field of spiritual sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0, transition: { delay: idx * 0.05 } }
                }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-secondary/50 transition-all group"
              >
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="font-serif text-lg font-medium text-foreground">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium border border-secondary/30 mb-4">
              <Images className="w-4 h-4" />
              Award Moments & Milestones
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Gallery</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real moments from award ceremonies and recognitions across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
            {GALLERY_PREVIEW.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-secondary/40 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-serif leading-snug line-clamp-2">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base h-auto">
              <Link href="/gallery">
                <Images className="w-5 h-5 mr-2" />
                View Full Gallery
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/sacred-geometry.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Speak directly with expert now and get instant guidance</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg h-auto">
                <a href={CALL_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 py-6 text-lg h-auto">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
