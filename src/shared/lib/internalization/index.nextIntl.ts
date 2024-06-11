import { Locales } from '@lib/internalization/types/types.internalization'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'
import { enumToArray } from '@lib/helpers/index.helpers'

export const DEFAULT_LOCALE = Locales.EN

export const LOCALES_ARRAY = enumToArray(Locales)

export const getLocale = (locale: string) =>
  LOCALES_ARRAY.includes(locale as Locales) ? locale : DEFAULT_LOCALE

export const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({
    locales: LOCALES_ARRAY,
  })

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./locales/${getLocale(locale)}.json`)).default,
  }
})
