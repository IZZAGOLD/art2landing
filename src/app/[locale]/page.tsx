import { unstable_setRequestLocale } from 'next-intl/server'
import { LocaleProps } from '@lib/internalization/types/types.internalization'
import { PageWrapper } from '@ui/PageWrapper/PageWrapper'

export default function Home({ params }: LocaleProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <PageWrapper>
      <div>test</div>
    </PageWrapper>
  )
}
