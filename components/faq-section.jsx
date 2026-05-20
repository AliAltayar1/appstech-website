"use client"

import { motion } from 'framer-motion'
import { useLanguage } from './language-provider'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    questionEn: 'How long does it take to build a web or mobile app?',
    questionAr: 'كم من الوقت يستغرق بناء تطبيق ويب أو جوال؟',
    answerEn: "Project timelines vary based on complexity. A simple web app typically takes 4-8 weeks, while more complex applications with custom features may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    answerAr: 'تختلف الجداول الزمنية للمشاريع بناءً على التعقيد. يستغرق تطبيق ويب بسيط عادةً 4-8 أسابيع، بينما قد تستغرق التطبيقات الأكثر تعقيداً مع ميزات مخصصة 3-6 أشهر. سنقدم جدولاً زمنياً مفصلاً خلال استشارتنا الأولى.',
  },
  {
    questionEn: 'What is your pricing structure?',
    questionAr: 'ما هي هيكلية التسعير لديكم؟',
    answerEn: 'We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your needs.',
    answerAr: 'نقدم نماذج تسعير مرنة تشمل المشاريع بسعر ثابت، والأسعار بالساعة، وترتيبات الفريق المخصص. يعتمد التسعير على نطاق المشروع وتعقيده والجدول الزمني. تواصل معنا للحصول على عرض أسعار مفصل.',
  },
  {
    questionEn: 'Do you provide SEO optimization?',
    questionAr: 'هل توفرون تحسين محركات البحث (SEO)؟',
    answerEn: 'Yes! All our web applications are built with SEO best practices in mind. We implement server-side rendering, optimized meta tags, fast loading times, structured data, and mobile-first design to ensure excellent search engine visibility.',
    answerAr: 'نعم! جميع تطبيقات الويب لدينا مبنية مع مراعاة أفضل ممارسات SEO. نطبق العرض من جانب الخادم، والعلامات الوصفية المحسنة، وأوقات التحميل السريعة، والبيانات المهيكلة، والتصميم المتوافق مع الجوال أولاً.',
  },
  {
    questionEn: 'What happens after the project is launched?',
    questionAr: 'ماذا يحدث بعد إطلاق المشروع؟',
    answerEn: 'We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. We have flexible maintenance plans to ensure your application stays up-to-date and runs smoothly.',
    answerAr: 'نقدم دعماً شاملاً بعد الإطلاق يشمل إصلاح الأخطاء، ومراقبة الأداء، وتحديثات الأمان، وتحسينات الميزات. لدينا خطط صيانة مرنة لضمان بقاء تطبيقك محدثاً ويعمل بسلاسة.',
  },
  {
    questionEn: 'How do you handle project communication?',
    questionAr: 'كيف تتعاملون مع التواصل في المشروع؟',
    answerEn: "We believe in transparent communication. You'll have a dedicated project manager, regular progress updates, access to our project management tools, and scheduled calls to discuss milestones. We're always available via email and WhatsApp.",
    answerAr: 'نؤمن بالتواصل الشفاف. سيكون لديك مدير مشروع مخصص، وتحديثات تقدم منتظمة، ووصول إلى أدوات إدارة المشروع لدينا، ومكالمات مجدولة لمناقشة المراحل. نحن متاحون دائماً عبر البريد الإلكتروني وواتساب.',
  },
  {
    questionEn: 'Where are your servers hosted?',
    questionAr: 'أين يتم استضافة خوادمكم؟',
    answerEn: 'We use industry-leading cloud platforms including AWS, Vercel, and Google Cloud. Server location can be customized based on your target audience to ensure optimal performance and data compliance requirements.',
    answerAr: 'نستخدم منصات سحابية رائدة في الصناعة بما في ذلك AWS و Vercel و Google Cloud. يمكن تخصيص موقع الخادم بناءً على جمهورك المستهدف لضمان الأداء الأمثل ومتطلبات الامتثال للبيانات.',
  },
]

export function FaqSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-[#FF4ECD] mb-4">
            {t('FAQ', 'الأسئلة الشائعة')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t('Frequently Asked Questions', 'الأسئلة الشائعة')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "Got questions? We've got answers. Here are some of the most common questions we receive.",
              'لديك أسئلة؟ لدينا الإجابات. إليك بعض الأسئلة الأكثر شيوعاً التي نتلقاها.'
            )}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl glass-card border-none px-6 data-[state=open]:neon-glow-purple"
              >
                <AccordionTrigger className={`text-left hover:no-underline py-6 ${isRTL ? 'text-right flex-row-reverse' : ''}`}>
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    {t(faq.questionEn, faq.questionAr)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className={`pb-6 ${isRTL ? 'text-right' : ''}`}>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(faq.answerEn, faq.answerAr)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            {t('Still have questions?', 'لا تزال لديك أسئلة؟')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00F5FF] hover:text-[#8B5CF6] transition-colors font-medium"
          >
            {t('Contact us directly', 'تواصل معنا مباشرة')}
            <svg
              className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
