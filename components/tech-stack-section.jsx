"use client"

import { motion } from 'framer-motion'
import { useLanguage } from './language-provider'

const technologies = [
  {
    name: 'Django',
    category: 'Backend',
    categoryAr: 'الخادم',
    description: 'Python Web Framework',
    color: '#092E20',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    categoryAr: 'الواجهة',
    description: 'React Framework',
    color: '#000000',
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    categoryAr: 'الجوال',
    description: 'Cross-Platform UI',
    color: '#02569B',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    categoryAr: 'قاعدة البيانات',
    description: 'Relational Database',
    color: '#336791',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    categoryAr: 'البنية التحتية',
    description: 'Containerization',
    color: '#2496ED',
  },
  {
    name: 'AWS / Vercel',
    category: 'Cloud',
    categoryAr: 'السحابة',
    description: 'Cloud Infrastructure',
    color: '#FF9900',
  },
]

export function TechStackSection() {
  const { t } = useLanguage()

  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
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
            {t('Tech Stack', 'التقنيات')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {t('Technologies We Use', 'التقنيات التي نستخدمها')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              'We leverage cutting-edge technologies to build robust, scalable, and high-performance applications.',
              'نستفيد من أحدث التقنيات لبناء تطبيقات قوية وقابلة للتوسع وعالية الأداء.'
            )}
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl glass-card text-center transition-all duration-300 hover:bg-muted/30">
                {/* Icon Placeholder */}
                <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold"
                    style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                </div>
                
                {/* Name */}
                <h3 className="text-lg font-bold mb-1 text-foreground">
                  {tech.name}
                </h3>
                
                {/* Category */}
                <p className="text-xs text-[#00F5FF] font-medium mb-2">
                  {t(tech.category, tech.categoryAr)}
                </p>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground">
                  {tech.description}
                </p>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: `${tech.color}15` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Orbit Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mobile-hide-orb mt-16 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00F5FF] via-[#8B5CF6] to-[#FF4ECD] flex items-center justify-center neon-glow-purple">
                <span className="text-2xl font-bold text-background">A</span>
              </div>
            </div>
            
            {/* Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-[#00F5FF]/20 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-4 rounded-full border border-[#8B5CF6]/20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            <div className="absolute inset-8 rounded-full border border-[#FF4ECD]/20 animate-spin" style={{ animationDuration: '20s' }} />
            
            {/* Orbit Dots */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={angle}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px)`,
                  top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px)`,
                  backgroundColor: ['#00F5FF', '#8B5CF6', '#FF4ECD', '#00FFA3', '#00F5FF', '#8B5CF6'][i],
                  boxShadow: `0 0 10px ${['#00F5FF', '#8B5CF6', '#FF4ECD', '#00FFA3', '#00F5FF', '#8B5CF6'][i]}`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
