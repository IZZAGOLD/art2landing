import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'
import { Metadata } from 'next'
import { SITE_URL } from '@shared/appSettings/index.appSettings'
import { SectionDonations } from '@/entities/PageHome/SectionDonations/SectionDonations'
import { SectionMission } from '@/entities/PageHome/SectionMission/SectionMission'
import { SectionWhyArtSqrd } from '@/entities/PageHome/SectionWhyArtSQRD/SectionWhyArtSQRD'
import { SectionCards } from '@/entities/PageHome/SectionCards/SectionCards'
import { SectionVideo } from '@/entities/PageHome/SectionVideo/SectionVideo'
import { SectionFeedBack } from '@/entities/PageHome/SectionFeedBack/SectionFeedBack'
import { SectionOpinion } from '@/entities/PageHome/SectionOpinion/SectionOpinion'
import { SectionCoreIdea } from '@/entities/PageHome/SectionCoreIdea/SectionCoreIdea'
import { Suspense } from 'react'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const t = await getTranslations({ locale })
  return {
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        ru: `${SITE_URL}/ru`,
      },
    },
  }
}

export default function Home({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      <SectionWhyArtSqrd />
      <SectionCards />
      <SectionCoreIdea />
      <SectionDonations />
      <SectionMission />
      <Suspense>
        <SectionVideo />
        <SectionFeedBack />
        <SectionOpinion />
      </Suspense>
    </PageWrapper>
  )
}
