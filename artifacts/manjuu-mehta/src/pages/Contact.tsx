import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";

const CALL_LINK = "tel:7310952576";
const WA_LINK =
  "https://wa.me/917310952576?text=Hello%2C%20I%20want%20consultation%20regarding%20Astrology%2FNumerology%2FVastu";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contactItems = [
  {
    icon: Phone,
    label: "Primary Phone",
    value: "+91 7310952576",
    link: "tel:7310952576",
    linkLabel: "Call Now",
    bg: "bg-primary/10",
    iconColor: "text-primary",
    btnClass: "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all",
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    value: "+91 7737329191",
    link: "tel:7737329191",
    linkLabel: "Call Now",
    bg: "bg-primary/10",
    iconColor: "text-primary",
    btnClass: "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+91 7310952576",
    link: WA_LINK,
    linkLabel: "Chat on WhatsApp",
    bg: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
    btnClass: "bg-[#25D366] hover:bg-[#20bd5a] text-white hover:shadow-lg hover:shadow-[#25D366]/30 transition-all",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "manjuumehta1@gmail.com",
    link: "mailto:manjuumehta1@gmail.com",
    linkLabel: "Send Email",
    bg: "bg-secondary/20",
    iconColor: "text-secondary-foreground",
    btnClass: "bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-lg hover:shadow-secondary/30 transition-all",
  },
];

export default function Contact() {
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-background leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reach out directly — no forms, no waiting. A personal consultation is just a call or message away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Contact Manjuu Mehta
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 80, damping: 20 }}
                  className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-border/50 to-transparent hover:from-secondary/50 hover:to-primary/20 transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-secondary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                  
                  <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-[23px] p-8 flex flex-col gap-6 shadow-sm border border-transparent group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl ${item.bg} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        <p className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className={`w-full rounded-full py-6 h-auto font-bold text-base mt-auto ${item.btnClass}`}
                    >
                      <a
                        href={item.link}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.linkLabel}
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Address + Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="flex items-start gap-4 p-8 bg-card rounded-2xl border border-border">
                <div className="p-3 rounded-xl bg-secondary/20 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">
                    Address
                  </p>
                  <p className="font-serif text-xl font-semibold text-foreground">
                    Krishna Nagar, Kankhal
                  </p>
                  <p className="text-muted-foreground">Haridwar, Uttarakhand, India</p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="Manjuu Mehta Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2!2d78.1500!3d29.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949d7f4d0c235%3A0x1e3a1cb2a1e3f2cd!2sKrishna%20Nagar%2C%20Kankhal%2C%20Haridwar%2C%20Uttarakhand%20249408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
