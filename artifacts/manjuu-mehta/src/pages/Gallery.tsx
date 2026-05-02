import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";

import img1 from "@assets/image_1777699685931.png";
import img2 from "@assets/image_1777699643703.png";
import img3 from "@assets/image_1777699652093.png";
import img4 from "@assets/image_1777699668308.png";
import img5 from "@assets/image_1777699516622.png";
import img6 from "@assets/image_1777699528316.png";
import img7 from "@assets/image_1777699660792.png";
import img8 from "@assets/image_1777699523149.png";

const GALLERY = [
  {
    src: img1,
    caption: "Manjuu Mehta – Certified Astrologer, Numerologist & Vastu Expert",
    tag: "Portrait",
  },
  {
    src: img2,
    caption: "Sahika India International Excellence Awards – Best Numerologist (2023)",
    tag: "Award Ceremony",
  },
  {
    src: img3,
    caption: "Jyotish Mahakumbh Award (2025) – Amar Ujala & Graphic Era University",
    tag: "Award Ceremony",
  },
  {
    src: img4,
    caption: "Jyotish Mahakumbh 2024-25 – Presented by Shri Pushkar Singh Dhami",
    tag: "Award Ceremony",
  },
  {
    src: img5,
    caption: "Bharat Good Times – Rising Excellence Award (2024)",
    tag: "Award",
  },
  {
    src: img6,
    caption: "City Excellence Award by India News Index (2024) – Haridwar, Uttarakhand",
    tag: "Award",
  },
  {
    src: img7,
    caption: "Nakshatra Alankar Award – AIFAS Future Point Award Ceremony (2025)",
    tag: "Certificate",
  },
  {
    src: img8,
    caption: "Certificate of Appreciation – Rising Excellence Awards by Bharat Good Times",
    tag: "Certificate",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % GALLERY.length));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div className="w-full" onKeyDown={handleKey} tabIndex={-1}>
      {/* Page Header */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src={img3} alt="" className="w-full h-full object-cover object-top" />
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
              Awards · Recognitions · Moments
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-background leading-tight">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A visual testament to a decade of excellence, recognition, and impact in the sacred sciences of Astrology, Numerology, and Vastu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {GALLERY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-secondary/40 transition-all duration-300 bg-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs font-medium text-secondary uppercase tracking-widest mb-1">{item.tag}</span>
                  <p className="text-sm font-serif text-white leading-snug line-clamp-3">{item.caption}</p>
                </div>
                {/* Tag pill always visible */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-full bg-foreground/60 text-secondary text-xs font-medium backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-5 max-h-[90vh] max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].caption}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center space-y-1">
                <span className="text-xs font-medium text-secondary uppercase tracking-widest">{GALLERY[lightbox].tag}</span>
                <p className="text-white font-serif text-lg leading-snug px-4">{GALLERY[lightbox].caption}</p>
                <p className="text-white/40 text-sm">{lightbox + 1} / {GALLERY.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
