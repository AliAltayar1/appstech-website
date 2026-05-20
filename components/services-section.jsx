"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Server,
  Settings,
} from "lucide-react";
import { useLanguage } from "./language-provider";

const services = [
  {
    icon: Globe,
    titleEn: "Custom Web Development",
    titleAr: "تطوير الويب المخصص",
    descEn:
      "Tailored web solutions using Next.js and React with server-side rendering, dynamic routing, and optimal performance.",
    descAr:
      "حلول ويب مصممة باستخدام Next.js و React مع العرض من جانب الخادم والتوجيه الديناميكي والأداء الأمثل.",
    color: "#00F5FF",
  },
  {
    icon: Smartphone,
    titleEn: "Mobile App Development",
    titleAr: "تطوير تطبيقات الجوال",
    descEn:
      "Cross-platform mobile apps with Flutter delivering native performance on iOS and Android simultaneously.",
    descAr:
      "تطبيقات جوال متعددة المنصات مع Flutter توفر أداءً أصلياً على iOS و Android في آن واحد.",
    color: "#8B5CF6",
  },
  {
    icon: Cloud,
    titleEn: "SaaS Platforms",
    titleAr: "منصات SaaS",
    descEn:
      "End-to-end SaaS solutions with subscription management, multi-tenancy, and scalable architecture.",
    descAr:
      "حلول SaaS شاملة مع إدارة الاشتراكات والتعدد المستأجرين والهندسة القابلة للتوسع.",
    color: "#FF4ECD",
  },
  {
    icon: Palette,
    titleEn: "UI/UX Design",
    titleAr: "تصميم UI/UX",
    descEn:
      "User-centered design with modern aesthetics, intuitive interfaces, and seamless user experiences.",
    descAr:
      "تصميم محوره المستخدم مع جماليات حديثة وواجهات بديهية وتجارب مستخدم سلسة.",
    color: "#00FFA3",
  },
  {
    icon: Server,
    titleEn: "API & Backend Systems",
    titleAr: "الـ API والخوادم",
    descEn:
      "Robust RESTful and GraphQL APIs built with Django, featuring authentication, caching, and database optimization.",
    descAr:
      "واجهات برمجة قوية RESTful و GraphQL مبنية بـ Django مع المصادقة والتخزين المؤقت وتحسين قواعد البيانات.",
    color: "#00F5FF",
  },
  {
    icon: Settings,
    titleEn: "Maintenance & Scaling",
    titleAr: "الصيانة والتوسع",
    descEn:
      "Ongoing support, performance optimization, security updates, and infrastructure scaling as you grow.",
    descAr:
      "دعم مستمر وتحسين الأداء وتحديثات الأمان وتوسيع البنية التحتية مع نموك.",
    color: "#8B5CF6",
  },
];

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-[#8B5CF6] mb-4">
            {t("Our Services", "خدماتنا")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t("What We Offer", "ماذا نقدم")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "Comprehensive digital solutions to transform your business and elevate your online presence.",
              "حلول رقمية شاملة لتحويل أعمالك وتعزيز حضورك الرقمي.",
            )}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:translate-y-[-4px] ">
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute -top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl gradient-border`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-[#00F5FF] transition-colors">
                    {t(service.titleEn, service.titleAr)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descEn, service.descAr)}
                  </p>
                </div>

                {/* Background Glow */}
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ backgroundColor: `${service.color}20` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
