import React from "react";
import { Link, useLocation } from "wouter";
import { Phone, MessageCircle, Menu, X, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const CALL_LINK = "tel:7310952576";
const WA_LINK = "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col relative bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">
              Manjuu Mehta
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={CALL_LINK}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-[#25D366] text-white rounded-md hover:bg-[#20bd5a] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-sm md:hidden flex flex-col border-t">
            <nav className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xl font-serif font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border">
                <a
                  href={CALL_LINK}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-medium border border-primary text-primary rounded-md"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-medium bg-[#25D366] text-white rounded-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1c0a06" }} className="text-white/80 mt-auto">
        {/* Top gold rule */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(to right, transparent, hsl(46 65% 52%), transparent)" }} />

        <div className="container mx-auto px-4 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1 space-y-5">
              <div>
                <h2 className="font-serif text-3xl font-bold text-secondary leading-tight">Manjuu Mehta</h2>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Astrology · Numerology · Vastu</p>
              </div>
              <p className="text-sm text-white/55 leading-relaxed">
                Certified Vastu Advisor, Astrologer, and Karmic Numerologist with over a decade of experience transforming lives through ancient Indian sciences.
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href={CALL_LINK}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-white/70 hover:border-secondary/60 hover:text-secondary transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Call Now
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-white/70 hover:border-[#25D366]/60 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Manjuu Mehta" },
                  { href: "/services", label: "Services" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">Services</h3>
              <ul className="space-y-3">
                {[
                  "Kundli Analysis",
                  "Marriage Compatibility",
                  "Name Correction",
                  "Lucky Numbers",
                  "Home & Office Vastu",
                  "Energy Correction",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-sm text-white/55 hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors flex-shrink-0" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href={CALL_LINK} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                      <Phone className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/35 uppercase tracking-widest mb-0.5">Phone</p>
                      <p className="text-sm text-white/70 group-hover:text-secondary transition-colors font-medium">+91 73109 52576</p>
                      <p className="text-sm text-white/70 group-hover:text-secondary transition-colors font-medium">+91 77373 29191</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:manjuumehta1@gmail.com" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                      <Mail className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/35 uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-sm text-white/70 group-hover:text-secondary transition-colors">manjuumehta1@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/35 uppercase tracking-widest mb-0.5">Address</p>
                      <p className="text-sm text-white/70 leading-relaxed">Krishna Nagar, Kankhal<br />Haridwar, Uttarakhand</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/30">
                &copy; {new Date().getFullYear()} Manjuu Mehta. All rights reserved.
              </p>
              <p className="text-xs text-white/25 text-center">
                Elite Member — All India Federation of Astrologers Society (AIFAS)
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="text-xs text-white/30 hover:text-white/60 transition-colors">About</Link>
                <Link href="/services" className="text-xs text-white/30 hover:text-white/60 transition-colors">Services</Link>
                <Link href="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
          aria-label="WhatsApp Now"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4 md:hidden">
        <a
          href={CALL_LINK}
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
          aria-label="Call Now"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
