"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

function TelegramIcon({ className, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const { t, isRTL } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `[AppsTech] New Project Inquiry — ${formData.project || "General"}`,
        from_name: formData.name,
        replyto: formData.email,
        name: formData.name,
        email: formData.email,
        company: formData.company || "N/A",
        project_type: formData.project,
        message: formData.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          message: "",
        });
      } else {
        setError(
          t(
            "Something went wrong. Please try again or contact us directly.",
            "حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
          ),
        );
      }
    } catch {
      setError(
        t(
          "Network error. Please check your connection.",
          "خطأ في الشبكة. يرجى التحقق من اتصالك.",
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      labelEn: "Email Us",
      labelAr: "راسلنا بالبريد",
      valueEn: "ali.altayar.developer@gmail.com",
      valueAr: "ali.altayar.developer@gmail.com",
      href: "mailto:ali.altayar.developer@gmail.com",
      color: "#00F5FF",
    },
    {
      icon: MessageCircle,
      labelEn: "WhatsApp",
      labelAr: "واتساب",
      valueEn: "+971 50 545 1061",
      valueAr: "‎+971 50 545 1061",
      href: "https://wa.me/971505451061?text=Hello%20AppsTech!%20I%20visited%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.%20%F0%9F%91%8B",
      color: "#00FFA3",
    },
    {
      icon: null,
      isTelegram: true,
      labelEn: "Telegram",
      labelAr: "تيليجرام",
      valueEn: "Message us on Telegram",
      valueAr: "راسلنا على تيليجرام",
      href: "https://t.me/+971505451061",
      color: "#8B5CF6",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-[#00FFA3] mb-4">
            {t("Contact", "تواصل معنا")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t("Let's Build Your Digital Product", "لنبني منتجك الرقمي")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "Ready to start your project? Get in touch with us and let's discuss how we can help bring your vision to life.",
              "مستعد لبدء مشروعك؟ تواصل معنا ودعنا نناقش كيف يمكننا مساعدتك في تحويل رؤيتك إلى واقع.",
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl glass-card">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#00FFA3]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#00FFA3]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {t("Message Sent!", "تم إرسال الرسالة!")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "Thank you for reaching out. We'll get back to you within 24 hours.",
                      "شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.",
                    )}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : ""}`}
                      >
                        {t("Full Name", "الاسم الكامل")}
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("John Doe", "محمد أحمد")}
                        className="bg-muted/50 border-border focus:border-[#00F5FF] focus:ring-[#00F5FF]/20"
                        dir={isRTL ? "rtl" : "ltr"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : ""}`}
                      >
                        {t("Email", "البريد الإلكتروني")}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-muted/50 border-border focus:border-[#00F5FF] focus:ring-[#00F5FF]/20"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : ""}`}
                    >
                      {t("Company (Optional)", "الشركة (اختياري)")}
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("Your Company", "اسم شركتك")}
                      className="bg-muted/50 border-border focus:border-[#00F5FF] focus:ring-[#00F5FF]/20"
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : ""}`}
                    >
                      {t("Project Type", "نوع المشروع")}
                    </label>
                    <select
                      id="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className={`w-full h-10 px-3 rounded-md bg-muted/50 border border-border focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 text-foreground ${isRTL ? "text-right" : ""}`}
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      <option value="">
                        {t("Select a project type", "اختر نوع المشروع")}
                      </option>
                      <option value="web">
                        {t("Web Application", "تطبيق ويب")}
                      </option>
                      <option value="mobile">
                        {t("Mobile App", "تطبيق جوال")}
                      </option>
                      <option value="saas">
                        {t("SaaS Platform", "منصة SaaS")}
                      </option>
                      <option value="design">
                        {t("UI/UX Design", "تصميم UI/UX")}
                      </option>
                      <option value="other">{t("Other", "آخر")}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : ""}`}
                    >
                      {t("Tell us about your project", "أخبرنا عن مشروعك")}
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t(
                        "Describe your project, goals, and timeline...",
                        "صف مشروعك وأهدافك والجدول الزمني...",
                      )}
                      className="bg-muted/50 border-border focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 resize-none"
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      <span>⚠</span>
                      <span>{error}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-background font-semibold py-6 neon-glow-cyan hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t("Sending...", "جارٍ الإرسال...")}
                      </span>
                    ) : (
                      <span
                        className={`flex items-center gap-2 justify-center ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <Send className="w-5 h-5" />
                        {t("Send Message", "إرسال الرسالة")}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3
                className={`text-xl font-bold text-foreground mb-6 ${isRTL ? "text-right" : ""}`}
              >
                {t("Or reach us directly", "أو تواصل معنا مباشرة")}
              </h3>

              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.labelEn}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-muted/30 transition-all group ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    {method.isTelegram ? (
                      <TelegramIcon
                        className="w-6 h-6"
                        style={{ color: method.color }}
                      />
                    ) : (
                      <method.icon
                        className="w-6 h-6"
                        style={{ color: method.color }}
                      />
                    )}
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="text-sm text-muted-foreground">
                      {t(method.labelEn, method.labelAr)}
                    </div>
                    <div className="font-semibold text-foreground text-sm break-all">
                      {t(method.valueEn, method.valueAr)}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6 rounded-xl glass-card"
            >
              <h4
                className={`font-bold text-foreground mb-4 ${isRTL ? "text-right" : ""}`}
              >
                {t("Office Hours", "ساعات العمل")}
              </h4>
              <div className={`space-y-2 text-sm ${isRTL ? "text-right" : ""}`}>
                <div
                  className={`flex justify-between ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span className="text-muted-foreground">
                    {t("Sunday - Thursday", "الأحد - الخميس")}
                  </span>
                  <span className="text-foreground font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div
                  className={`flex justify-between ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span className="text-muted-foreground">
                    {t("Friday - Saturday", "الجمعة - السبت")}
                  </span>
                  <span className="text-foreground font-medium">
                    {t("Closed", "مغلق")}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#00F5FF]/10 to-[#8B5CF6]/10 border border-[#00F5FF]/20"
            >
              <div
                className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#00F5FF]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00F5FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {t("Quick Response Guarantee", "ضمان الرد السريع")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "We respond to all inquiries within 24 hours. For urgent matters, reach us via WhatsApp.",
                      "نرد على جميع الاستفسارات خلال 24 ساعة. للأمور العاجلة، تواصل معنا عبر واتساب.",
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
