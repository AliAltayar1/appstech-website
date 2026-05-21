import { Inter, IBM_Plex_Sans_Arabic, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata = {
  title: 'Appstech | Premium Web & Mobile App Development',
  description: 'We build high-performance websites and mobile apps using Next.js, Django, and Flutter. Transform your ideas into professional digital solutions.',
  keywords: ['web development', 'mobile app development', 'Next.js', 'Django', 'Flutter', 'SaaS', 'UI/UX'],
  generator: 'v0.app',
  openGraph: {
    title: 'Appstech | Premium Web & Mobile App Development',
    description: 'Transform your ideas into professional digital solutions with our expert team.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexArabic.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
