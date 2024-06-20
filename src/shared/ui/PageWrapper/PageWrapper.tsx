'use client'
import styles from './styles.module.scss'
import { Fragment, PropsWithChildren } from 'react'
import { Header } from '@/widgets/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Footer } from '@/widgets/Footer/Footer'

type PageWrapperProps = {
  hideFooter?: boolean
  hideHeader?: boolean
}

export const PageWrapper = ({
  children,
  hideFooter,
  hideHeader,
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <Fragment>
      {!hideHeader && <Header />}
      <main className={styles.wrapper}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </main>
      {!hideFooter && <Footer />}
    </Fragment>
  )
}
