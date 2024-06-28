import { unstable_setRequestLocale } from 'next-intl/server'
import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'
import { SectionFeedBack } from '@/entities/PageHome/SectionFeedBack/SectionFeedBack'
import { SectionWhyArtSqrd } from '@/entities/PageHome/SectionWhyArtSQRD/SectionWhyArtSQRD'
import { SectionMission } from '@/entities/PageHome/SectionMission/SectionMission'
import { SectionCoreIdea } from '@/entities/PageHome/SectionCoreIdea/SectionCoreIdea'
import { SectionVideo } from '@/entities/PageHome/SectionVideo/SectionVideo'
import { SectionOpinion } from '@/entities/PageHome/SectionOpinion/SectionOpinion'
import { SectionCards } from '@/entities/PageHome/SectionCards/SectionCards'

export default function Home({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      <SectionWhyArtSqrd />
      <SectionCards />
      <SectionCoreIdea />
      <SectionMission />
      <SectionVideo />
      <SectionFeedBack />
      <SectionOpinion />

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
