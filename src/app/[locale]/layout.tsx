import '@/app/styles/app.scss'
import 'keen-slider/keen-slider.min.css'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { LOCALES_ARRAY } from '@lib/internalization/index.nextIntl'
import {
  LocaleProps,
  Locales,
} from '@lib/internalization/types/types.internalization'
import { SITE_DOMAIN, SITE_URL } from '@shared/appSettings/index.appSettings'
import cl from 'classnames'
import { fontRaleway } from '@styles/fonts'

export function generateStaticParams() {
  return LOCALES_ARRAY.map((locale) => ({ locale }))
}

async function getMessages(locale: Locales) {
  try {
    return (
      await import(`../../shared/lib/internalization/locales/${locale}.json`)
    ).default
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const t = await getTranslations({ locale })
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: `%s | ${SITE_DOMAIN}`,
      default: 'Example',
    },
    alternates: {
      canonical: '/',
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren<LocaleProps>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      {/*<head>*/}
      {/*  <meta name='Last-Modified' content={`${new Date().toUTCString()}`} />*/}
      {/*  <AlternateLinks />*/}
      {/*</head>*/}

      <body className={cl(fontRaleway.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
