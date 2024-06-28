import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { unstable_setRequestLocale } from 'next-intl/server'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'
import { SectionPrivacyPolicy } from '@/entities/PageDocuments/SectionPrivacyPolicy/SectionPrivacyPolicy'
import { SectionPersonalData } from '@/entities/PageDocuments/SectionPersonalData/SectionPersonalData'

export default function Documents({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      <SectionPrivacyPolicy />
      <SectionPersonalData />
    </PageWrapper>
  )
}
