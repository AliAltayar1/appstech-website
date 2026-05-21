"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Smartphone, Globe2 } from "lucide-react";
import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";

const trustIndicators = [
  { icon: Globe2, en: "Web Apps", ar: "تطبيقات الويب" },
  { icon: Smartphone, en: "Mobile Apps", ar: "تطبيقات الجوال" },
  { icon: Code2, en: "SaaS Platforms", ar: "منصات SaaS" },
  { icon: Sparkles, en: "UI/UX Design", ar: "تصميم UI/UX" },
];

console.log("hero component loaded with features:");

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating Elements — orbs hidden on mobile to prevent GPU crash */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="mobile-hide-orb absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00F5FF]/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="mobile-hide-orb absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="mobile-hide-orb absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-[#FF4ECD]/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {t(
                "Building the future of digital products",
                "نبني مستقبل المنتجات الرقمية",
              )}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-foreground">{t("We Build ", "نحوّل ")}</span>
            <span className="bg-gradient-to-r from-[#00F5FF] via-[#8B5CF6] to-[#FF4ECD] bg-clip-text text-transparent">
              {t("High-Performance", "أفكارك إلى")}
            </span>
            <br />
            <span className="text-foreground">
              {t("Websites & Mobile Apps", "مواقع وتطبيقات احترافية")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-balance"
          >
            {t(
              "Transform your vision into reality with cutting-edge technology. We specialize in Django backends, Next.js frontends, and Flutter mobile apps.",
              "حوّل رؤيتك إلى واقع مع أحدث التقنيات. نتخصص في تطوير الخوادم بـ Django، والواجهات بـ Next.js، وتطبيقات الجوال بـ Flutter.",
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-background font-semibold text-lg px-8 py-6 neon-glow-cyan hover:opacity-90 transition-opacity"
            >
              <a
                href="#contact"
                className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                {t("Start Your Project", "ابدأ مشروعك")}
                <ArrowRight
                  className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted/50 text-gray-400 hover:text-foreground  font-semibold text-lg px-8 py-6 glass-card"
            >
              <a href="#portfolio">{t("View Portfolio", "شاهد أعمالنا")}</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">
              {t("What we deliver", "ما نقدمه")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.en}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <item.icon className="w-5 h-5 text-[#00F5FF]" />
                  <span className="text-sm font-medium text-foreground">
                    {t(item.en, item.ar)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
