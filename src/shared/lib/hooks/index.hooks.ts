import { usePathname } from 'next/navigation'
import { Locales } from '@lib/internalization/types/types.internalization'
import { DEFAULT_LOCALE } from '@lib/internalization/index.nextIntl'

export function useGetLocalePrefixUrl() {
  const pathname = usePathname()
  const localeUrl = pathname.split('/')[1]
  return typeof window !== 'undefined' &&
    Object.values(Locales).includes(localeUrl as Locales)
    ? localeUrl
    : DEFAULT_LOCALE
}
