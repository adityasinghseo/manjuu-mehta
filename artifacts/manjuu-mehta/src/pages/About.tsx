import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import img1 from "@assets/ChatGPT_Image_May_2,_2026,_11_06_30_AM_1777700202357.png";

const AWARDS = [
  { title: "Super Woman Award for Inspiring Women", year: "2024" },
  { title: "City Excellence Award by India News Index", year: "2024" },
  { title: "Bharat Good Times – Rising Excellence Award", year: "2024" },
  { title: "Her Story Times Award – Best Vastu Expert", year: "2024" },
  { title: "Forever Star India Award", subtitle: "Best Astro Numerologist (Haridwar)", year: "2024" },
  { title: "Sahika India International Award", subtitle: "Best Numerologist", year: "2023" },
  { title: "Nakshatra Alankar Award", year: "2025" },
  { title: "Jyotish Mahakumbh Award", subtitle: "Presented by Shri Pushkar Singh Dhami", year: "2025" }
];

const CALL_LINK = "tel:7310952576";
const WA_LINK =
  "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlights = [
  "Over a decade of rich experience guiding individuals toward success",
  "Elite member of the All India Federation of Astrologers Society (AIFAS)",
  "Worked with clients across India and internationally",
  "Expertise in career, marriage, business, health, and finances",
  "Deep traditional knowledge with practical, result-oriented solutions",
];

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-5 pointer-events-none origin-center flex justify-center items-center"
        >
          <img src="/mandala.png" alt="" className="w-full max-w-4xl h-full object-contain" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30 mb-4">
              <Award className="w-4 h-4" />
              Certified Expert · AIFAS Member
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-background leading-tight">
              About Manjuu Mehta
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A life guided by purpose — helping others find clarity, direction, and prosperity through the timeless wisdom of ancient Indian sciences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <img src="/zodiac.png" alt="" className="w-full h-full object-contain object-right" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-90" />
              <img 
                src={img1} 
                alt="Manjuu Mehta" 
                className="relative z-10 w-full h-[500px] md:h-[650px] object-cover rounded-[2rem] border-4 border-background shadow-2xl object-right-top"
              />
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 w-32 h-32 bg-primary text-primary-foreground rounded-full flex flex-col items-center justify-center p-4 shadow-xl z-20 border-[6px] border-background"
              >
                <span className="text-3xl font-bold font-serif leading-none">10+</span>
                <span className="text-[10px] uppercase text-center font-medium mt-1 tracking-widest opacity-80">Years<br/>Experience</span>
              </motion.div>
            </motion.div>

            {/* Right: Text & Highlights */}
            <div className="space-y-12 order-1 lg:order-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  A Decade of Transforming Lives
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Manjuu Mehta is a certified Vastu Advisor, Astrologer, and Karmic Numerologist with over a decade of rich experience in guiding individuals toward success, balance, and prosperity.
                  </p>
                  <p>
                    She is an elite member of the All India Federation of Astrologers Society (AIFAS), which reflects her credibility and expertise in the field.
                  </p>
                  <p>
                    Over the years, she has worked with clients across India and internationally, helping them overcome challenges related to career, marriage, business, health, and finances.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                className="space-y-4"
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Why Clients Trust Her</h3>
                <div className="grid grid-cols-1 gap-4">
                  {highlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-5 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-300 group"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-muted-foreground leading-snug font-medium group-hover:text-foreground transition-colors duration-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Awards & Recognitions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Her work has been recognized by prestigious institutions and media bodies across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { delay: idx * 0.1, type: "spring", stiffness: 80, damping: 20 } }
                }}
                className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-border/50 to-transparent hover:from-secondary/60 hover:to-primary/20 transition-all duration-700"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                {/* Card Content */}
                <div className="relative h-full bg-background/80 backdrop-blur-sm rounded-[23px] p-8 shadow-sm border border-transparent group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                      <Award className="w-7 h-7" />
                    </div>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {award.title}
                  </h3>
                  {award.subtitle && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-auto border-t border-border/50 pt-4 group-hover:border-secondary/30 transition-colors duration-500">
                      {award.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
