import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Home, Building2, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALL_LINK = "tel:7310952576";
const WA_LINK =
  "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SERVICES = [
  {
    icon: Star,
    title: "Astrology Consultation",
    tagline: "Ancient celestial wisdom for modern life decisions",
    description:
      "With deep mastery of Vedic Jyotish, Manjuu Mehta reads the cosmic blueprint of your life to reveal your true path and guide you through life's most important decisions.",
    items: [
      "Kundli Analysis",
      "Marriage Compatibility",
      "Career & Business Guidance",
      "Health & Life Predictions",
    ],
    accent: "from-primary/10 to-primary/5",
    border: "border-primary/20 hover:border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Hash,
    title: "Numerology Consultation",
    tagline: "The hidden language of numbers decoded",
    description:
      "Every number carries energy. As a certified Karmic Numerologist, Manjuu Mehta unlocks the numerical patterns shaping your destiny to align your name, business, and choices with your highest potential.",
    items: [
      "Name Correction",
      "Lucky Numbers",
      "Business Name Suggestions",
      "Personal Life Analysis",
    ],
    accent: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30 hover:border-secondary/60",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    tagline: "Sacred geometry for spaces that support you",
    description:
      "As a certified Vastu Advisor, Manjuu Mehta harmonizes the energy of your home or office — transforming spaces into environments that attract prosperity, health, and happiness.",
    items: [
      "Home Vastu",
      "Office Vastu",
      "Energy Correction",
      "Property Guidance",
    ],
    accent: "from-accent/10 to-accent/5",
    border: "border-accent/20 hover:border-accent/40",
    iconBg: "bg-accent/20",
    iconColor: "text-accent-foreground",
  },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="/zodiac.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30 mb-4">
              <Building2 className="w-4 h-4" />
              Personalized · Result-Oriented · Trusted
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-background leading-tight">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Three pillars of ancient wisdom — Astrology, Numerology, and Vastu — united to bring transformation, clarity, and prosperity to your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`relative flex flex-col rounded-2xl border-2 ${service.border} bg-gradient-to-b ${service.accent} overflow-hidden transition-all duration-300 hover:shadow-xl group`}
              >
                {/* Service header */}
                <div className="p-8 pb-6 space-y-5">
                  <div className={`inline-flex p-4 rounded-2xl ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-muted-foreground italic">
                      {service.tagline}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Sub-services */}
                <div className="flex-1 px-8 pb-6 space-y-3">
                  {service.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-border/60 last:border-0"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconBg} ${service.iconColor} flex-shrink-0`}
                        style={{ backgroundColor: "currentColor" }}
                      />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="p-8 pt-4 flex flex-col gap-3">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-5 h-auto font-semibold"
                  >
                    <a href={CALL_LINK}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call for Consultation
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full py-5 h-auto font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                  >
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-28 bg-primary text-primary-foreground text-center relative overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              Speak directly with expert now and get instant guidance
            </h2>
            <p className="text-lg text-primary-foreground/80">
              No waiting, no forms — just a direct conversation with a trusted expert.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg h-auto"
              >
                <a href={CALL_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 py-6 text-lg h-auto"
              >
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
