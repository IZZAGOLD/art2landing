'use client'
import styles from './styles.module.scss'
import { SectionHeadingBlock } from '@ui/SectionHeadingBlock/SectionHeadingBlock'
import { useTranslations } from 'next-intl'
import cn from 'classnames'
import { GallerySlider } from '@ui/GallerySlider/GallerySlider'
import { IconGreenStar } from '@ui/icons/Icon.GreenStar'

export const SectionCoreIdea = () => {
  const t = useTranslations()
  return (
    <section id={'gallery'} className={cn(styles.wrapper, 'section')}>
      <IconGreenStar className={styles.star} />
      <SectionHeadingBlock label={t('coreIdea')} />
      <h2 className={cn(styles.title, 'h1')}>
        {t('newWay')}
        <span style={{ color: 'var(--pink-1)' }}>
          {` ${t('tellChildren')}`}{' '}
        </span>
        <br />
        <span style={{ color: 'var(--green-1)' }}>
          {`${t('aboutTheirCreativity')} `}
        </span>
        {t('revealTheirIndividuality')}
      </h2>
      <GallerySlider />
    </section>
  )
}
