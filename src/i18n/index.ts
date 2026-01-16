import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'

type MessageSchema = typeof en

const STORAGE_KEY = 'coffee-kcal-locale'

type LocaleCode = 'en' | 'de' | 'es' | 'fr' | 'ja' | 'ko'
const supportedLocales: LocaleCode[] = ['en', 'de', 'es', 'fr', 'ja', 'ko']

function isValidLocale(locale: string): locale is LocaleCode {
  return supportedLocales.includes(locale as LocaleCode)
}

function getDefaultLocale(): LocaleCode {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && isValidLocale(stored)) {
    return stored
  }

  // Fall back to browser language
  const browserLang = navigator.language?.split('-')[0] ?? ''
  if (isValidLocale(browserLang)) {
    return browserLang
  }

  return 'en'
}

export const i18n = createI18n<[MessageSchema], LocaleCode>({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    de,
    es,
    fr,
    ja,
    ko
  }
})

export function setLocale(locale: string) {
  if (isValidLocale(locale)) {
    ;(i18n.global.locale as unknown as { value: LocaleCode }).value = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }
}

export const availableLocales = [
  { code: 'en', name: 'EN' },
  { code: 'de', name: 'DE' },
  { code: 'es', name: 'ES' },
  { code: 'fr', name: 'FR' },
  { code: 'ja', name: 'JA' },
  { code: 'ko', name: 'KO' }
]
