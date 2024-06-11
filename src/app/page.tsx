import { redirect } from 'next/navigation'
import { DEFAULT_LOCALE } from '@lib/internalization/index.nextIntl'

export default function RootPage() {
  redirect(DEFAULT_LOCALE)
}
