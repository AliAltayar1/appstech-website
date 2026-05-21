"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";

const navItems = [
  { en: "About", ar: "من نحن", href: "#about" },
  { en: "Services", ar: "خدماتنا", href: "#services" },
  { en: "Tech Stack", ar: "التقنيات", href: "#tech" },
  { en: "Portfolio", ar: "أعمالنا", href: "#portfolio" },
  { en: "Process", ar: "منهجيتنا", href: "#process" },
  { en: "Contact", ar: "تواصل معنا", href: "#contact" },
];

export function Navbar() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/AppsTechLogo.png"
                alt="AppsTech Logo"
                width={50}
                height={50}
                className="object-contain rounded-full"
                style={{ height: "auto" }}
              />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#034bd1]">Apps</span>
                <span className="text-foreground">tech</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {t(item.en, item.ar)}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card hover:bg-muted/50 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4 text-[#00F5FF]" />
                <span className="font-medium">
                  {language === "en" ? "عربي" : "EN"}
                </span>
              </motion.button>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-background font-semibold hover:opacity-90 border-0 neon-glow-cyan"
                >
                  <a href="#contact">{t("Start Project", "ابدأ مشروعك")}</a>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg glass-card"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 glass border-t border-border lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {t(item.en, item.ar)}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-4"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-background font-semibold"
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("Start Your Project", "ابدأ مشروعك")}
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
