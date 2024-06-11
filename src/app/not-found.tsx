'use client'
import { useEffect, useState } from 'react'
import cl from 'classnames'
import { fontRaleway, fontRalewaySemiBold } from '@/app/styles/fonts'
import { useGetLocalePrefixUrl } from '@lib/hooks/index.hooks'

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
      <body className={cl(fontRalewaySemiBold.className, fontRaleway.variable)}>
        <main className={'nonFound-container'}>404</main>
      </body>
    </html>
  )
}
