'use client'
import { useEffect, useState } from 'react'
import cl from 'classnames'
import cn from 'classnames'
import { fontRaleway } from '@/app/styles/fonts'
import { useGetLocalePrefixUrl } from '@lib/hooks/index.hooks'
import '@/app/styles/app.scss'
import styles from '@/app/styles/notFoundStyles.module.scss'
import Link from 'next/link'
import { IconLogo } from '@ui/icons/Icon.Logo'
import { GallerySlider } from '@ui/GallerySlider/GallerySlider'
import 'keen-slider/keen-slider.min.css'

export default function NotFound() {
  const locale = useGetLocalePrefixUrl()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <html lang={locale}>
      <body className={cl(fontRaleway.variable, styles.body)}>
        <header className={styles.header}>
          <div className={styles.content}>
            <Link href={'/'}>
              <IconLogo />
            </Link>
          </div>
        </header>

        <main className={styles.wrapper}>
          <div className={cn(styles.sliderWrapper)}>
            <GallerySlider is404 />
          </div>
        </main>
      </body>
    </html>
  )
}
