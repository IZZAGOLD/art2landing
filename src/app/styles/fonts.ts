import { Nothing_You_Could_Do, Raleway } from 'next/font/google'

export const fontRaleway = Raleway({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-raleway',
})

export const fontNothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nothing-you-could-do',
})
