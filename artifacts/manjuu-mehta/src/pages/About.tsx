import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";

const AWARDS = [
  "Super Woman Award for Inspiring Women (2024)",
  "City Excellence Award by India News Index (2024)",
  "Bharat Good Times – Rising Excellence Award (2024)",
  "Her Story Times Award – Best Vastu Expert (2024)",
  "Forever Star India Award – Best Astro Numerologist (Haridwar)",
  "Sahika India International Award – Best Numerologist (2023)",
  "Nakshatra Alankar Award (2025)",
  "Jyotish Mahakumbh Award (2025) — Presented by Pushkar Singh Dhami",
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
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="/mandala.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto space-y-6"
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                A Decade of Transforming Lives
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Manjuu Mehta is a certified Vastu Advisor, Astrologer, and Karmic Numerologist with over a decade of rich experience in guiding individuals toward success, balance, and prosperity.
                </p>
                <p>
                  She is an elite member of the All India Federation of Astrologers Society (AIFAS), which reflects her credibility and expertise in the field.
                </p>
                <p>
                  Over the years, she has worked with clients across India and internationally, helping them overcome challenges related to career, marriage, business, health, and finances.
                </p>
                <p>
                  Her approach combines deep traditional knowledge with practical solutions, ensuring real and lasting results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
              className="space-y-4"
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Why Clients Trust Her</h3>
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-secondary/40 hover:shadow-sm transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-snug">{item}</p>
                </motion.div>
              ))}
            </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md hover:border-secondary/50 transition-all group"
              >
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="font-serif text-lg font-medium text-foreground leading-snug">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
