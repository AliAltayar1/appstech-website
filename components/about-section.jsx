"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Smartphone, Target } from "lucide-react";
import { useLanguage } from "./language-provider";

const features = [
  {
    icon: Shield,
    titleEn: "Django Backend",
    titleAr: "خوادم Django",
    descEn:
      "Secure, scalable backend systems built with Python and Django for enterprise-grade reliability.",
    descAr:
      "أنظمة خوادم آمنة وقابلة للتوسع مبنية بـ Python و Django لموثوقية بمستوى المؤسسات.",
    color: "#00FFA3",
  },
  {
    icon: Zap,
    titleEn: "Next.js Frontend",
    titleAr: "واجهات Next.js",
    descEn:
      "Lightning-fast, SEO-optimized web applications with server-side rendering and modern React.",
    descAr:
      "تطبيقات ويب سريعة كالبرق ومحسّنة لمحركات البحث مع تقنيات React الحديثة.",
    color: "#00F5FF",
  },
  {
    icon: Smartphone,
    titleEn: "Flutter Mobile",
    titleAr: "تطبيقات Flutter",
    descEn:
      "Beautiful, natively compiled mobile applications for iOS and Android from a single codebase.",
    descAr: "تطبيقات جوال جميلة ومُجمَّعة أصلياً لـ iOS و Android من كود واحد.",
    color: "#8B5CF6",
  },
  {
    icon: Target,
    titleEn: "Result-Driven",
    titleAr: "نتائج ملموسة",
    descEn:
      "We focus on delivering measurable business outcomes, not just code.",
    descAr: "نركز على تحقيق نتائج أعمال قابلة للقياس، وليس مجرد كتابة الكود.",
    color: "#FF4ECD",
  },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-[#00F5FF] mb-4">
            {t("About Appstech", "عن Appstech")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t("Why Choose Us?", "لماذا تختارنا؟")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "We combine technical excellence with business acumen to deliver digital products that drive growth.",
              "نجمع بين التميز التقني وفهم الأعمال لتقديم منتجات رقمية تدفع النمو.",
            )}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl glass-card hover:bg-muted/30 transition-all duration-300 border border-transparent hover:border-border/50">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform group-hover:scale-110`}
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t(feature.titleEn, feature.titleAr)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descEn, feature.descAr)}
                </p>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: `${feature.color}08` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', labelEn: 'Projects Delivered', labelAr: 'مشروع منجز' },
              { value: '98%', labelEn: 'Client Satisfaction', labelAr: 'رضا العملاء' },
              { value: '5+', labelEn: 'Years Experience', labelAr: 'سنوات خبرة' },
              { value: '24/7', labelEn: 'Support Available', labelAr: 'دعم متواصل' },
            ].map((stat, index) => (
              <motion.div
                key={stat.labelEn}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t(stat.labelEn, stat.labelAr)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
