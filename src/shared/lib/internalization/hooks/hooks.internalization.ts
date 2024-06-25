import { Locales } from '@lib/internalization/types/types.internalization'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@lib/internalization/index.nextIntl'
import { useCallback } from 'react'

export function useChangeLocale() {
  const pathname = usePathname()
  const locale = useLocale() as Locales
  const router = useRouter()

  const setLocale = useCallback(
    (locale: Locales) => {
      router.replace(pathname, { locale })
    },
    [pathname, router]
  )

  return [locale, setLocale]
}
