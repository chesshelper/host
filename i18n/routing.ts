import {defineRouting} from 'next-intl/routing';

export const SUPPORTED_LOCALES = ['en', 'pl', 'uk', 'ru'];
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,
 
  // Used when no locale matches
  defaultLocale: 'en'
});