import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";

const CALL_LINK = "tel:7310952576";
const WA_LINK =
  "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "3", label: "Ancient Sciences" },
  { value: "1000+", label: "Lives Transformed" },
  { value: "100%", label: "Personalized Guidance" },
];

const STEPS = [
  { num: "01", title: "Reach Out", desc: "Call or WhatsApp to schedule your consultation at a time that suits you." },
  { num: "02", title: "Share Your Details", desc: "Provide your birth details or specific concerns for a precise reading." },
  { num: "03", title: "Expert Analysis", desc: "Manjuu Mehta performs a deep analysis using Vedic methods and years of experience." },
  { num: "04", title: "Get Your Guidance", desc: "Receive clear, actionable insights and remedies tailored to your life." },
];

// Decorative SVG symbols for each service
function AstrologySymbol() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.7" />
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line key={i}
          x1={60 + 12 * Math.cos((angle * Math.PI) / 180)}
          y1={60 + 12 * Math.sin((angle * Math.PI) / 180)}
          x2={60 + 36 * Math.cos((angle * Math.PI) / 180)}
          y2={60 + 36 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor" strokeWidth="1.2" opacity="0.5"
        />
      ))}
      {[0,60,120,180,240,300].map((angle, i) => (
        <circle key={i} cx={60 + 46 * Math.cos((angle * Math.PI) / 180)} cy={60 + 46 * Math.sin((angle * Math.PI) / 180)} r="4" fill="currentColor" opacity="0.6" />
      ))}
      <path d="M60 20 L65 35 L60 30 L55 35 Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function NumerologySymbol() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <rect x="10" y="10" width="100" height="100" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {[["1","8","11"],["2","9","6"],["3","4","7"]].map((row, ri) =>
        row.map((n, ci) => (
          <g key={`${ri}-${ci}`}>
            <rect x={14 + ci * 32} y={14 + ri * 32} width="28" height="28" rx="4" fill="currentColor" opacity={n === "9" ? 0.18 : 0.07} stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
            <text x={28 + ci * 32} y={34 + ri * 32} textAnchor="middle" fontSize="13" fill="currentColor" opacity="0.8" fontWeight="600">{n}</text>
          </g>
        ))
      )}
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

function VastuSymbol() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <rect x="15" y="15" width="90" height="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="60" y1="15" x2="60" y2="105" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="15" y1="60" x2="105" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="15" y1="15" x2="105" y2="105" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />
      <line x1="105" y1="15" x2="15" y2="105" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="5" fill="currentColor" opacity="0.8" />
      {[{x:60,y:25},{x:95,y:60},{x:60,y:95},{x:25,y:60}].map((p,i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="currentColor" opacity="0.5" />
      ))}
      {[{x:30,y:30},{x:90,y:30},{x:90,y:90},{x:30,y:90}].map((p,i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="currentColor" opacity="0.35" />
      ))}
    </svg>
  );
}

const SERVICES = [
  {
    id: "astrology",
    label: "01 — Jyotish Vidya",
    title: "Astrology",
    subtitle: "Consultation",
    tagline: "The cosmos holds your blueprint. Let us read it.",
    description: "Vedic astrology — Jyotish — is not fortune telling. It is the precise science of decoding the planetary forces active at your birth and at each turning point of life. Manjuu Mehta's readings are grounded in classical texts and refined by over a decade of practice. Whether you seek clarity on marriage, career, health, or the deeper meaning of your path, a Kundli reading offers answers rooted in cosmic truth.",
    items: [
      { name: "Kundli Analysis", desc: "Deep reading of your birth chart and life map" },
      { name: "Marriage Compatibility", desc: "Kundli matching and compatibility assessment" },
      { name: "Career & Business Guidance", desc: "Best timings, sectors, and strategic direction" },
      { name: "Health & Life Predictions", desc: "Planetary influences on body and wellbeing" },
    ],
    Symbol: AstrologySymbol,
    bg: "bg-background",
    accentBg: "bg-primary/5",
    symbolColor: "text-primary",
    labelColor: "text-primary",
    number: "01",
    flip: false,
  },
  {
    id: "numerology",
    label: "02 — Anka Shastra",
    title: "Numerology",
    subtitle: "Consultation",
    tagline: "Your name is your vibration. Your number is your destiny.",
    description: "Every name and every date carries a numerical frequency that shapes your life invisibly. As a certified Karmic Numerologist, Manjuu Mehta decodes the hidden architecture of numbers to help you align your name, business identity, and major decisions with your most prosperous energy. A simple name correction can sometimes shift the entire trajectory of your fortunes.",
    items: [
      { name: "Name Correction", desc: "Align your name's vibration with your destiny" },
      { name: "Lucky Numbers", desc: "Identify numbers that resonate with your energy" },
      { name: "Business Name Suggestions", desc: "Names that attract growth and prosperity" },
      { name: "Personal Life Analysis", desc: "Comprehensive numerological life reading" },
    ],
    Symbol: NumerologySymbol,
    bg: "bg-foreground",
    accentBg: "bg-secondary/10",
    symbolColor: "text-secondary",
    labelColor: "text-secondary",
    number: "02",
    flip: true,
  },
  {
    id: "vastu",
    label: "03 — Vastu Shastra",
    title: "Vastu",
    subtitle: "Consultation",
    tagline: "Your space is a living energy field. Make it work for you.",
    description: "Vastu Shastra is the ancient Indian science of spatial harmony — the relationship between a building's orientation, layout, and the energy that flows through it. A Vastu-aligned space can profoundly influence the health, wealth, relationships, and mental peace of everyone who inhabits it. Manjuu Mehta's Vastu consultations blend traditional principles with practical, implementable remedies that don't require demolition.",
    items: [
      { name: "Home Vastu", desc: "Room-by-room energy assessment and correction" },
      { name: "Office Vastu", desc: "Workplace alignment for productivity and growth" },
      { name: "Energy Correction", desc: "Remedies to harmonize existing spaces" },
      { name: "Property Guidance", desc: "Direction and plot analysis before buying" },
    ],
    Symbol: VastuSymbol,
    bg: "bg-background",
    accentBg: "bg-primary/5",
    symbolColor: "text-primary",
    labelColor: "text-primary",
    number: "03",
    flip: false,
  },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <img src="/zodiac.png" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Decorative large number */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[20rem] font-serif font-bold text-background/[0.03] leading-none select-none pointer-events-none hidden lg:block">
          ॐ
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30">
              <Sparkles className="w-3.5 h-3.5" />
              Ancient Sciences · Modern Clarity
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-background leading-tight">
              Three Pillars of<br />
              <span className="text-secondary italic">Sacred Guidance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Astrology, Numerology, and Vastu — three distinct lenses of ancient Indian wisdom, each revealing a different dimension of your life's potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-secondary/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-foreground/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections — alternating layout */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          className={`py-24 ${service.bg} relative overflow-hidden`}
        >
          {/* Large background number */}
          <div className={`absolute ${service.flip ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 text-[16rem] font-serif font-bold leading-none select-none pointer-events-none hidden lg:block ${service.bg === "bg-foreground" ? "text-background/[0.04]" : "text-foreground/[0.03]"}`}>
            {service.number}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`flex flex-col ${service.flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center max-w-6xl mx-auto`}>

              {/* Symbol Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex-shrink-0 w-56 h-56 lg:w-72 lg:h-72 rounded-3xl ${service.accentBg} p-8 flex items-center justify-center border ${service.bg === "bg-foreground" ? "border-white/10" : "border-border"} shadow-lg`}
              >
                <div className={service.symbolColor}>
                  <service.Symbol />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="space-y-4"
                >
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${service.bg === "bg-foreground" ? "text-secondary" : "text-primary"}`}>
                    {service.label}
                  </p>
                  <h2 className={`text-4xl md:text-6xl font-serif font-bold leading-none ${service.bg === "bg-foreground" ? "text-background" : "text-foreground"}`}>
                    {service.title}<br />
                    <span className={`${service.bg === "bg-foreground" ? "text-secondary" : "text-primary"} italic`}>
                      {service.subtitle}
                    </span>
                  </h2>
                  <p className={`text-base italic font-medium ${service.bg === "bg-foreground" ? "text-background/60" : "text-muted-foreground"}`}>
                    "{service.tagline}"
                  </p>
                  <p className={`text-base leading-relaxed max-w-xl ${service.bg === "bg-foreground" ? "text-background/70" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                </motion.div>

                {/* Sub-services */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {service.items.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                      className={`flex items-start gap-3 p-4 rounded-xl border ${service.bg === "bg-foreground" ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-border bg-card hover:border-primary/30 hover:shadow-sm"} transition-all`}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${service.bg === "bg-foreground" ? "text-secondary" : "text-primary"}`} />
                      <div>
                        <p className={`font-semibold text-sm ${service.bg === "bg-foreground" ? "text-background" : "text-foreground"}`}>{item.name}</p>
                        <p className={`text-xs mt-0.5 ${service.bg === "bg-foreground" ? "text-background/50" : "text-muted-foreground"}`}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                >
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-5 h-auto font-semibold">
                    <a href={CALL_LINK}><Phone className="w-4 h-4 mr-2" />Call for Consultation</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-7 py-5 h-auto font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 bg-transparent">
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp Now</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How it Works */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img src="/mandala.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">How a Consultation Works</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-border hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="relative w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-md z-10">
                    <span className="font-serif text-2xl font-bold text-primary">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
