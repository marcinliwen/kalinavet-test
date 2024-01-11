import { createSharedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['pl', 'de'] as const;
export const localePrefix = 'as-needed'; // Default

export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/kontakt': '/kontakt',

  // If locales use different paths, you can
  // specify each external path per locale.
  '/o-nas': {
    pl: '/o-nas',
    de: '/uber-uns'
  },
  '/porady': {
    pl: '/porady',
    de: '/tipps'
  },
  '/uslugi': {
    pl: '/uslugi',
    de: '/leistungen',
  },
  '/pytania': {
    pl: '/pytania',
    de: '/fragen'
  }

  // Dynamic params are supported via square brackets
  /* '/news/[articleSlug]-[articleId]': {
    en: '/news/[articleSlug]-[articleId]',
    de: '/neuigkeiten/[articleSlug]-[articleId]'
  }, */

  // Also (optional) catch-all segments are supported
  /* '/categories/[...slug]': {
    en: '/categories/[...slug]',
    de: '/kategorien/[...slug]'
  } */
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });