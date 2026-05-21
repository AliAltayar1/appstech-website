"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./language-provider";

const testimonials = [
  {
    id: 1,
    nameEn: "Ahmed Al-Hassan",
    nameAr: "أحمد الحسن",
    roleEn: "CEO, TechVentures",
    roleAr: "المدير التنفيذي، تيك فينتشرز",
    textEn:
      "Appstech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is remarkable.",
    textAr:
      "قدمت Appstech منصة تجارة إلكترونية استثنائية فاقت توقعاتنا. اهتمامهم بالتفاصيل وخبرتهم التقنية مذهلة.",
    rating: 5,
    avatar: "A",
    color: "#00F5FF",
  },
  {
    id: 2,
    nameEn: "Sarah Mitchell",
    nameAr: "سارة ميتشل",
    roleEn: "Founder, HealthFirst",
    roleAr: "مؤسسة، هيلث فيرست",
    textEn:
      "The mobile app they built for us has transformed how we connect with patients. Professional team with excellent communication throughout.",
    textAr:
      "التطبيق الذي بنوه لنا غيّر طريقة تواصلنا مع المرضى. فريق محترف مع تواصل ممتاز طوال الوقت.",
    rating: 5,
    avatar: "S",
    color: "#8B5CF6",
  },
  {
    id: 3,
    nameEn: "Mohammed Al-Rashid",
    nameAr: "محمد الراشد",
    roleEn: "CTO, FinanceHub",
    roleAr: "المدير التقني، فاينانس هب",
    textEn:
      "Their Django backend architecture is solid and scalable. We've handled 10x our initial traffic without any issues. Highly recommended!",
    textAr:
      "هندسة الخوادم بـ Django التي بنوها صلبة وقابلة للتوسع. تعاملنا مع 10 أضعاف حركة المرور الأولية دون أي مشاكل.",
    rating: 5,
    avatar: "M",
    color: "#FF4ECD",
  },
  {
    id: 4,
    nameEn: "Lisa Chen",
    nameAr: "ليزا تشين",
    roleEn: "Product Manager, EduPlatform",
    roleAr: "مديرة المنتج، إيدو بلاتفورم",
    textEn:
      "From concept to launch, Appstech was a true partner. Their agile approach and regular updates kept us confident throughout the project.",
    textAr:
      "من الفكرة إلى الإطلاق، كانت Appstech شريكاً حقيقياً. منهجهم السريع وتحديثاتهم المنتظمة أبقتنا واثقين طوال المشروع.",
    rating: 5,
    avatar: "L",
    color: "#00FFA3",
  },
];

export function TestimonialsSection() {
  const { t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrev = () => {
    setAutoPlay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
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
            {t("Testimonials", "آراء العملاء")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t("What Our Clients Say", "ماذا يقول عملاؤنا")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "Don't just take our word for it. Here's what our clients have to say about working with us.",
              "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا عن العمل معنا.",
            )}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative p-8 md:p-12 rounded-3xl glass-card"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote
                    className="w-20 h-20"
                    style={{ color: testimonials[currentIndex].color }}
                  />
                </div>

                {/* Rating */}
                <div
                  className={`flex gap-1 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: "#FFD700" }}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote
                  className={`text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed ${isRTL ? "text-right" : ""}`}
                >
                  {`"${t(testimonials[currentIndex].textEn, testimonials[currentIndex].textAr)}"`}
                </blockquote>

                {/* Author */}
                <div
                  className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: `${testimonials[currentIndex].color}20`,
                      color: testimonials[currentIndex].color,
                    }}
                  >
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="font-bold text-foreground">
                      {t(
                        testimonials[currentIndex].nameEn,
                        testimonials[currentIndex].nameAr,
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(
                        testimonials[currentIndex].roleEn,
                        testimonials[currentIndex].roleAr,
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="p-3 rounded-full glass-card hover:bg-muted/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft
                  className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6]"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full glass-card hover:bg-muted/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight
                  className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", labelEn: "Happy Clients", labelAr: "عميل سعيد" },
            { value: "50+", labelEn: "Projects Done", labelAr: "مشروع منجز" },
            {
              value: "5.0",
              labelEn: "Average Rating",
              labelAr: "متوسط التقييم",
            },
            {
              value: "95%",
              labelEn: "Repeat Clients",
              labelAr: "عملاء متكررين",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-4 rounded-xl glass-card"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {t(stat.labelEn, stat.labelAr)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
