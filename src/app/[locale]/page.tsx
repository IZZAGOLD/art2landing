import { unstable_setRequestLocale } from 'next-intl/server'
import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'
import { SectionCoreIdea } from '@/entities/PageHome/SectionCoreIdea/SectionCoreIdea'
import { GallerySlider } from '@ui/GallerySlider/GallerySlider'
import { SectionMission } from '@/entities/PageHome/SectionMission/SectionMission'
import { SectionFeedBack } from '@/entities/PageHome/SectionFeedBack/SectionFeedBack'
import { SectionOpinion } from '@/entities/PageHome/SectionOpinion/SectionOpinion'
import { SectionVideo } from '@/entities/PageHome/SectionVideo/SectionVideo'
import { ART_CARDS_DATA } from '@ui/ArtCard/index.artCards'
import { ArtCard } from '@ui/ArtCard/ArtCard'
import { WHY_ART_SQRD_CARDS_DATA } from '@ui/WhyArtSqrdCard/index.whyArtSqrdCard'
import { WhyArtSqrdCard } from '@ui/WhyArtSqrdCard/WhyArtSqrdCard'

export default function Home({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      {/*<SectionWhyArtSqrd />*/}
      <SectionCoreIdea />
      <GallerySlider />
      <SectionMission />
      <SectionVideo />
      {/*<SectionFeedBack />*/}
      <SectionOpinion />

      {/*<div>*/}
      {/*  {ART_CARDS_DATA.map((item, index) => {*/}
      {/*    return <ArtCard key={index} {...item} />*/}
      {/*  })}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  {WHY_ART_SQRD_CARDS_DATA.map((item, index) => {*/}
      {/*    return <WhyArtSqrdCard key={index} {...item} />*/}
      {/*  })}*/}
      {/*</div>*/}

      {/*<SectionMarkets />*/}
      {/*<SectionCards />*/}
      {/*<ContactForm />*/}
    </PageWrapper>
  )
}
