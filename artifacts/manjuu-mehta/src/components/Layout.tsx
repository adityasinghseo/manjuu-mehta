import React from "react";
import { Link, useLocation } from "wouter";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const CALL_LINK = "tel:7310952576";
const WA_LINK = "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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
      <footer className="bg-foreground text-background py-12 mt-auto">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-secondary">Manjuu Mehta</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Certified Vastu Advisor, Astrologer, and Karmic Numerologist transforming lives through ancient sciences.
          </p>
          <div className="pt-8 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Manjuu Mehta. All rights reserved.
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
