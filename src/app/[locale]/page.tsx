import { unstable_setRequestLocale } from 'next-intl/server'
import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'
import { SectionCoreIdea } from '@/entities/PageHome/SectionCoreIdea/SectionCoreIdea'
import { SectionOpinion } from '@/entities/PageHome/SectionOpinion/SectionOpinion'
import { SectionMission } from '@/entities/PageHome/SectionMission/SectionMission'
import { SectionFeedBack } from '@/entities/PageHome/SectionFeedBack/SectionFeedBack'
import { GallerySlider } from '@ui/GallerySlider/GallerySlider'

export default function Home({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      <SectionCoreIdea />
      <GallerySlider />
      <SectionMission />
      <SectionFeedBack />
      <SectionOpinion />

      {/*<SectionWhyArtSqrd />*/}
      {/*<SectionMarkets />*/}
      {/*<SectionCards />*/}
      {/*<ContactForm />*/}
    </PageWrapper>
  )
}
