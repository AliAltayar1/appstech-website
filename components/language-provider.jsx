"use client"

import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en')

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }, [])

  const t = useCallback((en, ar) => {
    return language === 'ar' ? ar : en
  }, [language])

  const dir = language === 'ar' ? 'rtl' : 'ltr'
  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRTL }}>
      <div dir={dir} className={isRTL ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
