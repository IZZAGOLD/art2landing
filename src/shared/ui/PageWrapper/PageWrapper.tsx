'use client'
import styles from './styles.module.scss'
import { Fragment, PropsWithChildren } from 'react'
import { Header } from '@/widgets/Header/Header'
import { Footer } from '@/widgets/Footer/Footer'
import cn from 'classnames'

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
      <main className={cn(styles.wrapper, !hideHeader && styles.withHeader)}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </Fragment>
  )
}
