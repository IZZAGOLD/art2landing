'use client'
import styles from './styles.module.scss'
import { SectionHeadingBlock } from '@ui/SectionHeadingBlock/SectionHeadingBlock'
import { useTranslations } from 'next-intl'
import cn from 'classnames'
import ExportedImage from 'next-image-export-optimizer'
import star from '@assets/img/star.png'

export const SectionCoreIdea = () => {
  const t = useTranslations()
  return (
    <section className={cn(styles.wrapper, 'section')}>
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
      <ExportedImage className={styles.image} src={star} alt={'star'} />
    </section>
  )
}
