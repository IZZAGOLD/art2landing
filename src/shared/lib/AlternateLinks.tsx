'use client'

import { usePathname } from '@lib/internalization/index.nextIntl'
import { Locales } from '@lib/internalization/types/types.internalization'
import { SITE_URL } from '@shared/appSettings/index.appSettings'

export function AlternateLinks() {
  const pathname = usePathname()

  return (
    <>
      {Object.values(Locales).map((locale) => (
        <link
          key={locale}
          rel='alternate'
          href={`${SITE_URL}/${locale}${pathname}`}
          hrefLang={locale}
        />
      ))}
    </>
  )
}
