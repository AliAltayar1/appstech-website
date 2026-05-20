"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "web", en: "Web Apps", ar: "تطبيقات الويب" },
  { id: "mobile", en: "Mobile", ar: "الجوال" },
  { id: "dashboard", en: "Dashboards", ar: "لوحات التحكم" },
  { id: "fullstack", en: "Full-Stack", ar: "فول ستاك" },
];

const projects = [
  {
    id: 8,
    titleEn: "Khair Jalees — Library Management System",
    titleAr: "خير جليس — نظام إدارة المكتبة",
    descEn:
      "A comprehensive full-stack Library Management System built with Next.js 15 and React 19. Covers the complete book borrowing lifecycle — browsing, borrowing, favoriting, reservations and waitlists for unavailable titles, return requests, and a 5-star rating system. Features a personalized recommendation engine that suggests books based on each user's reading history, and an AI-powered literary chatbot (Gemini 2.5 Flash) that fetches the live library catalog on every request and recommends only books actually in stock. The platform includes a dedicated Admin Dashboard with 9 management modules spanning books, users, borrows, reservations, categories, authors, activity logs, and data export. Built RTL-first with full Arabic support, Framer Motion animations, and Recharts data visualizations.",
    descAr:
      "نظام متكامل لإدارة المكتبات مبني بـ Next.js 15 وReact 19، يغطي دورة حياة استعارة الكتب بالكامل — من التصفح والاستعارة والتفضيل، إلى قوائم الانتظار والحجز للكتب غير المتاحة، وطلبات الإرجاع، ونظام التقييم بخمس نجوم. يتضمن محرك توصيات مخصص يقترح الكتب بناءً على سجل القراءة لكل مستخدم، وروبوت دردشة أدبي مدعوم بالذكاء الاصطناعي (Gemini 2.5 Flash) يجلب فهرس المكتبة الحي مع كل طلب ويوصي فقط بالكتب المتوفرة فعليًا. تضم المنصة لوحة إدارة متخصصة تحتوي على 9 وحدات لإدارة الكتب والمستخدمين والاستعارات والحجوزات والتصنيفات والمؤلفين وسجلات النشاط وتصدير البيانات. مبني بدعم RTL عربي كامل مع رسوم Framer Motion وتصورات Recharts البيانية.",
    category: "fullstack",
    stack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Gemini AI",
    ],
    images: ["/lib.png", "/lib2.png"],
    liveUrl: null,
    color: "#F59E0B",
    type: "web",
  },
  {
    id: 3,
    titleEn: "Arabic Accounting & Inventory System",
    titleAr: "نظام المحاسبة وإدارة المخزون",
    descEn:
      "A streamlined accounting and inventory management system purpose-built for small to medium businesses. Handles sales, purchases, stock tracking, and core financial management through a clean Arabic-first interface designed for non-technical users — reducing the learning curve and boosting operational efficiency.",
    descAr:
      "نظام محاسبة وإدارة مخزون مبسّط مصمم خصيصًا للشركات الصغيرة إلى المتوسطة. يتولى إدارة المبيعات والمشتريات وتتبع المخزون والعمليات المالية الأساسية من خلال واجهة عربية أولى سهلة الاستخدام للمستخدمين غير التقنيين — مما يقلل منحنى التعلم ويرفع الكفاءة التشغيلية.",
    category: "dashboard",
    stack: ["Next.js", "Tailwind CSS", "Radix UI", "Supabase"],
    images: ["/accounting.png", "/accounting2.png"],
    liveUrl: "https://arabic-accounting-system.vercel.app/",
    color: "#00F5FF",
    type: "web",
  },
  {
    id: 1,
    titleEn: "Sharee Plus",
    titleAr: "شرعي بلس",
    descEn:
      "An advanced Flutter application for calculating Islamic financial transactions with precision and scholarly accuracy. Covers inheritance distribution across four jurisprudential schools (Hanafi, Maliki, Shafi'i, Hanbali), Zakat calculation for seven asset categories, Hawl tracking, and expiation calculations — all wrapped in a polished bilingual RTL/LTR interface.",
    descAr:
      "تطبيق Flutter متقدم لحساب المعاملات المالية الإسلامية بدقة واحترافية علمية. يشمل توزيع الفرائض والمواريث وفق أربعة مذاهب فقهية، وحساب الزكاة لسبعة أنواع من الأموال، وتتبع الحَوْل، وحساب الكفارات — كل ذلك في واجهة مزدوجة اللغة تدعم RTL/LTR بتصميم أنيق.",
    category: "mobile",
    stack: ["Flutter", "GetX", "Dio", "PDF Export", "Arabic RTL"],
    images: ["/shareeplus.jpg"],
    liveUrl: null,
    color: "#00FFA3",
    type: "mobile",
  },
  {
    id: 9,
    titleEn: "HomsGov — Administrative District Management",
    titleAr: "هومس غوف — نظام إدارة المناطق الإدارية",
    descEn:
      "A secure, government-grade administrative platform built for Homs Governorate to streamline the management of administrative districts and sub-regions. The system features granular role-based access control (RBAC) — each user sees and interacts only with data permitted by their assigned role, from field officers to department heads and super-administrators. Powered by a Django REST Framework backend with JWT authentication, it delivers a fast, token-secured API consumed by a React + Tailwind CSS frontend. Advanced multi-criteria filtering lets staff slice district records by region, status, date, and custom parameters in real time — replacing paper-heavy workflows with a centralized, auditable digital command center.",
    descAr:
      "منصة إدارية حكومية متكاملة وآمنة، مصممة خصيصًا لمحافظة حمص لتسهيل إدارة المناطق والوحدات الإدارية. يوفر النظام نظام صلاحيات دقيق قائم على الأدوار (RBAC) — حيث يرى كل مستخدم ويتفاعل فقط مع البيانات المخوّل له الوصول إليها، من موظفي الميدان إلى رؤساء الأقسام والمشرفين العامين. يعتمد النظام على خلفية Django REST Framework مع مصادقة JWT تضمن أمان الوصول، تُغذّي واجهة أمامية بـ React وTailwind CSS. تتيح أدوات الفلترة المتقدمة متعددة المعايير تصفية سجلات المناطق حسب المنطقة والحالة والتاريخ والمعايير المخصصة في الوقت الفعلي — لتحل محل المنظومة الورقية بمركز قيادة رقمي مركزي وقابل للتدقيق.",
    category: "fullstack",
    stack: ["Django", "React", "Tailwind CSS", "JWT", "REST API", "RBAC"],
    images: ["/homsgov.jpg"],
    liveUrl: null,
    color: "#3B82F6",
    type: "web",
  },
  {
    id: 2,
    titleEn: "The Hook — Restaurant Menu",
    titleAr: "ذا هوك — قائمة المطعم",
    descEn:
      "A full-featured Arabic-first restaurant menu web application built with Next.js. Supports a shopping cart system, dual-currency pricing (new & old Syrian Pound), live order bill summary, immersive image carousels, pinch-to-zoom dish photography, size variants, customer item notes, and smart category-based filtering — delivering a seamless digital dining experience.",
    descAr:
      "تطبيق ويب متكامل لقائمة مطعم باللغة العربية أولًا، مبني بـ Next.js. يدعم سلة التسوق، والتسعير بعملتين (الليرة السورية الجديدة والقديمة)، وملخص الفاتورة الفوري، وعرض الصور بشكل تفاعلي مع إمكانية التكبير، وخيارات الأحجام، وملاحظات العملاء، والتصفية الذكية حسب الفئات — لتجربة طعام رقمية سلسة.",
    category: "web",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "react-zoom-pan-pinch"],
    images: ["/menu.png", "/menu2.png"],
    liveUrl: "https://thehook-menu-five.vercel.app/",
    color: "#FF6B35",
    type: "web",
  },

  {
    id: 5,
    titleEn: "Elite Auto Garage",
    titleAr: "مرآب السيارات الاحترافي",
    descEn:
      "A polished portfolio website for a professional car garage, showcasing the full range of automotive services, transparent pricing packages, and an elegant visual identity. Built to attract and convert customers through a modern, high-performance web presence.",
    descAr:
      "موقع ويب احترافي لمرآب سيارات، يعرض الخدمات الشاملة وباقات الأسعار الشفافة والهوية البصرية المميزة. مصمم لاستقطاب العملاء وتحويلهم من خلال حضور رقمي عصري وعالي الأداء.",
    category: "web",
    stack: ["Next.js", "Tailwind CSS"],
    images: ["/carage.png", "/carage2.png"],
    liveUrl: null,
    color: "#FF4ECD",
    type: "web",
  },
  {
    id: 6,
    titleEn: "Brew & Bean Coffee Shop",
    titleAr: "مقهى برو آند بين",
    descEn:
      "A visually rich portfolio website for a specialty coffee shop, featuring the brand story, signature menu highlights, ambiance showcase, and contact details — all within a warm, inviting design that reflects the café's unique character and draws in coffee enthusiasts.",
    descAr:
      "موقع ويب بصري غني لمقهى متخصص، يتضمن قصة العلامة التجارية وأبرز عروض القائمة وعرض الأجواء ومعلومات التواصل — كل ذلك في تصميم دافئ وجذاب يعكس طابع المقهى الفريد ويستقطب عشاق القهوة.",
    category: "web",
    stack: ["Next.js", "Tailwind CSS"],
    images: ["/coffeshop.png"],
    liveUrl: "https://coffee-shop-portfolio-nine.vercel.app/",
    color: "#C8843E",
    type: "web",
  },
  {
    id: 7,
    titleEn: "VocabTracker",
    titleAr: "متتبع المفردات",
    descEn:
      "A focused English vocabulary learning and tracking web application. Users can add, categorize, and review vocabulary entries with built-in spaced repetition and quick-recap sessions — making it effortless to expand and retain an ever-growing English lexicon.",
    descAr:
      "تطبيق ويب متخصص لتعلم وتتبع المفردات الإنجليزية. يتيح للمستخدمين إضافة المفردات وتصنيفها ومراجعتها عبر جلسات المراجعة السريعة والتكرار المتباعد — مما يجعل توسيع الرصيد اللغوي والاحتفاظ به أمرًا سهلًا وفعالًا.",
    category: "web",
    stack: ["Next.js", "Tailwind CSS"],
    images: ["/vocab-tracker (1).png", "/vocab-tracker (2).png"],
    liveUrl: "https://vocabulary-tracker-taupe.vercel.app/",
    color: "#34D399",
    type: "web",
  },
  {
    id: 4,
    titleEn: "Chatto AI — Smart Study Companion",
    titleAr: "شاتو AI — مساعد الدراسة الذكي",
    descEn:
      "An intelligent Flutter-based chat application crafted for students and researchers. Chatto AI enables dynamic, context-aware conversations, persistent conversation storage, and seamless retrieval — empowering users to build cumulative knowledge, track learning progress, and structure their research ideas more effectively over time.",
    descAr:
      "تطبيق Flutter ذكي للمحادثات مصمم للطلاب والباحثين. يتيح شاتو AI إجراء محادثات تفاعلية وذكية، مع حفظ المحادثات واسترجاعها بسهولة — مما يساعد المستخدمين على بناء معرفة تراكمية، وتتبع مسيرتهم التعلمية، وتنظيم أفكارهم البحثية بشكل أكثر فاعلية.",
    category: "mobile",
    stack: ["Flutter", "GetX", "AI Integration", "Local Storage"],
    images: ["/chatoo.jpg"],
    liveUrl: null,
    color: "#8B5CF6",
    type: "mobile",
  },
];

// ── Description with Read More ────────────────────────────────────────────────
const CHAR_LIMIT = 160;

function ProjectDescription({ descEn, descAr, color }) {
  const { t, isRTL } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const text = t(descEn, descAr);
  const isLong = text.length > CHAR_LIMIT;

  return (
    <div
      className={`text-sm text-muted-foreground mb-4 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.p
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isLong && !expanded
            ? text.slice(0, CHAR_LIMIT).trimEnd() + "…"
            : text}
        </motion.p>
      </AnimatePresence>

      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
          className="mt-1 flex items-center gap-0.5 text-xs font-semibold transition-colors hover:opacity-80"
          style={{ color }}
        >
          {expanded ? (
            <>
              {t("Show less", "عرض أقل")}
              <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              {t("Read more", "اقرأ المزيد")}
              <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

// ── Image Slider ──────────────────────────────────────────────────────────────
function ProjectImageSlider({ images, title, liveUrl, color, isFirstCard }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  // ── Touch swipe tracking ──────────────────────────────────────────────────
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current === null || !hasMultiple) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;

      // Only act on predominantly horizontal swipes (avoids fighting page scroll)
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) {
          // Swipe left → next
          setCurrent((c) => (c + 1) % images.length);
        } else {
          // Swipe right → prev
          setCurrent((c) => (c - 1 + images.length) % images.length);
        }
      }
      touchStartX.current = null;
      touchStartY.current = null;
    },
    [hasMultiple, images.length],
  );

  // ── Preload the next image so the transition is instant ───────────────────
  useEffect(() => {
    if (!hasMultiple) return;
    const nextIndex = (current + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [current, hasMultiple, images]);

  const prev = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrent((c) => (c - 1 + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrent((c) => (c + 1) % images.length);
    },
    [images.length],
  );

  const Inner = (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={isFirstCard && current === 0}
            loading={isFirstCard && current === 0 ? "eager" : "lazy"}
            quality={80}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10 pointer-events-none" />

      {/* Live badge */}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/50 border border-white/10 text-white hover:bg-black/70 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </a>
      )}

      {/* Slider controls — hidden on desktop until hover, always visible on touch screens */}
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40 border border-white/10 text-white
              opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-60 transition-opacity hover:bg-black/60"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40 border border-white/10 text-white
              opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-60 transition-opacity hover:bg-black/60"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-4 h-1.5 opacity-100"
                    : "w-1.5 h-1.5 opacity-50"
                }`}
                style={{ backgroundColor: i === current ? color : "#fff" }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <div
      className="relative h-52 overflow-hidden bg-black/20 touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">{Inner}</div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export function PortfolioSection() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-[#00FFA3] mb-4">
            {t("Portfolio", "أعمالنا")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t("Featured Projects", "مشاريع مميزة")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "Explore our portfolio of successful projects delivered across various industries and platforms.",
              "استكشف محفظة مشاريعنا الناجحة المُسلَّمة عبر مختلف الصناعات والمنصات.",
            )}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-background"
                  : "glass-card text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {t(cat.en, cat.ar)}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl"
                  style={{ boxShadow: `0 0 0 1px ${project.color}15` }}
                >
                  {/* Image / Slider */}
                  <ProjectImageSlider
                    images={project.images}
                    title={project.titleEn}
                    liveUrl={project.liveUrl}
                    color={project.color}
                    isFirstCard={index === 0}
                  />

                  {/* Category Badge */}
                  <div
                    className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} z-20`}
                  >
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                      style={{
                        backgroundColor: `${project.color}25`,
                        color: project.color,
                        border: `1px solid ${project.color}40`,
                      }}
                    >
                      {project.type === "mobile"
                        ? t("Mobile", "جوال")
                        : t("Web", "ويب")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title + Live link */}
                    <div
                      className={`flex items-start justify-between gap-2 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <h3 className="text-lg font-bold">
                        <span className="group-hover:text-[#00F5FF] transition-colors">
                          {t(project.titleEn, project.titleAr)}
                        </span>
                      </h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0 flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                          style={{
                            color: project.color,
                            backgroundColor: `${project.color}15`,
                            border: `1px solid ${project.color}30`,
                          }}
                        >
                          <ExternalLink className="w-3 h-3" />
                          {t("Live", "مباشر")}
                        </a>
                      )}
                    </div>

                    {/* Description with Read More */}
                    <ProjectDescription
                      descEn={project.descEn}
                      descAr={project.descAr}
                      color={project.color}
                    />

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-xs font-mono bg-muted/60 text-muted-foreground border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass-card border-border hover:bg-muted/50"
          >
            {t("View All Projects", "عرض كل المشاريع")}
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
