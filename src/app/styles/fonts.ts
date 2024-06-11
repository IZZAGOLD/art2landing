import { Raleway } from 'next/font/google'

export const fontRalewayMedium = Raleway({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-raleway-medium',
})

export const fontRalewaySemiBold = Raleway({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-raleway-semiBold',
})

export const fontRalewayBold = Raleway({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-raleway-bold',
})

export const fontRaleway = Raleway({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-raleway',
})
