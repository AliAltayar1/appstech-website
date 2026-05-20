"use client"

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Instagram, Globe } from 'lucide-react'
import { useLanguage } from './language-provider'

const footerLinks = {
  company: {
    titleEn: 'Company',
    titleAr: 'الشركة',
    links: [
      { en: 'About', ar: 'من نحن', href: '#about' },
      { en: 'Services', ar: 'خدماتنا', href: '#services' },
      { en: 'Portfolio', ar: 'أعمالنا', href: '#portfolio' },
      { en: 'Contact', ar: 'تواصل معنا', href: '#contact' },
    ],
  },
  services: {
    titleEn: 'Services',
    titleAr: 'الخدمات',
    links: [
      { en: 'Web Development', ar: 'تطوير الويب', href: '#services' },
      { en: 'Mobile Apps', ar: 'تطبيقات الجوال', href: '#services' },
      { en: 'SaaS Platforms', ar: 'منصات SaaS', href: '#services' },
      { en: 'UI/UX Design', ar: 'تصميم UI/UX', href: '#services' },
    ],
  },
  resources: {
    titleEn: 'Resources',
    titleAr: 'الموارد',
    links: [
      { en: 'Blog', ar: 'المدونة', href: '#' },
      { en: 'Case Studies', ar: 'دراسات الحالة', href: '#portfolio' },
      { en: 'FAQ', ar: 'الأسئلة الشائعة', href: '#faq' },
      { en: 'Privacy Policy', ar: 'سياسة الخصوصية', href: '#' },
    ],
  },
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export function Footer() {
  const { language, setLanguage, t, isRTL } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <motion.a
                href="#"
                className="flex items-center gap-2 group mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF] via-[#8B5CF6] to-[#FF4ECD] rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-lg font-bold text-background">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-foreground">Apps</span>
                  <span className="text-[#00F5FF]">tech</span>
                </span>
              </motion.a>
              
              <p className={`text-sm text-muted-foreground mb-6 max-w-xs ${isRTL ? 'text-right' : ''}`}>
                {t(
                  'Building high-performance websites and mobile apps that drive business growth.',
                  'نبني مواقع وتطبيقات عالية الأداء تدفع نمو الأعمال.'
                )}
              </p>

              {/* Language Toggle */}
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Globe className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.titleEn} className={isRTL ? 'text-right' : ''}>
                <h4 className="font-semibold text-foreground mb-4">
                  {t(section.titleEn, section.titleAr)}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.en}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors"
                      >
                        {t(link.en, link.ar)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              {currentYear} Appstech. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-[#00F5FF] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-[#00F5FF] via-[#8B5CF6] to-[#FF4ECD]" />
    </footer>
  )
}
