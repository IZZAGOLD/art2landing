import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'
import { SectionPrivacyPolicy } from '@/entities/PageDocuments/SectionPrivacyPolicy/SectionPrivacyPolicy'
import { SectionPersonalData } from '@/entities/PageDocuments/SectionPersonalData/SectionPersonalData'
import { Metadata } from 'next'
import { SITE_URL } from '@shared/appSettings/index.appSettings'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const t = await getTranslations({ locale })
  return {
    description: t('documents'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${SITE_URL}/en/documents`,
        ru: `${SITE_URL}/ru/documents`,
      },
    },
  }
}

export default function Documents({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      <SectionPrivacyPolicy />
      <SectionPersonalData />
    </PageWrapper>
  )
}
