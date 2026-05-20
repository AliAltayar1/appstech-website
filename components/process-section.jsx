"use client"

import { motion } from 'framer-motion'
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code2, 
  TestTube, 
  Rocket, 
  HeartHandshake 
} from 'lucide-react'
import { useLanguage } from './language-provider'

const steps = [
  {
    icon: Search,
    titleEn: 'Discovery',
    titleAr: 'الاكتشاف',
    descEn: 'We dive deep into understanding your business, goals, and target audience.',
    descAr: 'نتعمق في فهم عملك وأهدافك وجمهورك المستهدف.',
    color: '#00F5FF',
  },
  {
    icon: Lightbulb,
    titleEn: 'Strategy',
    titleAr: 'الاستراتيجية',
    descEn: 'Create a comprehensive roadmap with technical architecture and timeline.',
    descAr: 'إنشاء خارطة طريق شاملة مع الهندسة التقنية والجدول الزمني.',
    color: '#8B5CF6',
  },
  {
    icon: Palette,
    titleEn: 'UI/UX Design',
    titleAr: 'التصميم',
    descEn: 'Craft beautiful, user-centric designs with interactive prototypes.',
    descAr: 'تصميم واجهات جميلة محورها المستخدم مع نماذج أولية تفاعلية.',
    color: '#FF4ECD',
  },
  {
    icon: Code2,
    titleEn: 'Development',
    titleAr: 'التطوير',
    descEn: 'Build your product using modern technologies and best practices.',
    descAr: 'بناء منتجك باستخدام أحدث التقنيات وأفضل الممارسات.',
    color: '#00FFA3',
  },
  {
    icon: TestTube,
    titleEn: 'Testing',
    titleAr: 'الاختبار',
    descEn: 'Rigorous quality assurance to ensure flawless performance.',
    descAr: 'ضمان جودة صارم لضمان أداء لا تشوبه شائبة.',
    color: '#00F5FF',
  },
  {
    icon: Rocket,
    titleEn: 'Launch',
    titleAr: 'الإطلاق',
    descEn: 'Deploy your product and ensure a smooth go-live experience.',
    descAr: 'نشر منتجك وضمان تجربة إطلاق سلسة.',
    color: '#8B5CF6',
  },
  {
    icon: HeartHandshake,
    titleEn: 'Support',
    titleAr: 'الدعم',
    descEn: 'Ongoing maintenance, updates, and scaling as your business grows.',
    descAr: 'صيانة مستمرة وتحديثات وتوسع مع نمو عملك.',
    color: '#FF4ECD',
  },
]

export function ProcessSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-[#00F5FF] mb-4">
            {t('Our Process', 'منهجيتنا')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t('How We Work', 'كيف نعمل')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              'Our proven development process ensures transparency, quality, and timely delivery.',
              'عمليتنا التطويرية المُثبتة تضمن الشفافية والجودة والتسليم في الوقت المحدد.'
            )}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} w-px bg-gradient-to-b from-[#00F5FF] via-[#8B5CF6] to-[#FF4ECD] hidden md:block`} />

          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleEn}
                initial={{ opacity: 0, x: isRTL ? (index % 2 === 0 ? 50 : -50) : (index % 2 === 0 ? -50 : 50) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ${isRTL ? (index % 2 === 0 ? 'md:pl-12 md:pr-0 md:text-left' : 'md:pr-12 md:pl-0 md:text-right') : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl glass-card group"
                  >
                    {/* Mobile Icon */}
                    <div
                      className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>

                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {t(step.titleEn, step.titleAr)}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(step.descEn, step.descAr)}
                    </p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center z-10 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      boxShadow: `0 0 20px ${step.color}40`
                    }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
