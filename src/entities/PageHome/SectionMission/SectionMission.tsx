'use client'
import styles from './styles.module.scss'
import cn from 'classnames'
import { SectionHeadingBlock } from '@ui/SectionHeadingBlock/SectionHeadingBlock'
import { useTranslations } from 'next-intl'
import ExportedImage from 'next-image-export-optimizer'
import image from '@assets/img/oon.png'
import { IconHeart } from '@ui/icons/Icon.Heart'
import { IconSimpleStar } from '@ui/icons/Icon.SimpleStar'

export const SectionMission = () => {
  const t = useTranslations()
  return (
    <section id={'mission'} className={cn(styles.wrapper, 'section')}>
      <SectionHeadingBlock label={t('ourMission')} />
      <h2 className={cn(styles.title, 'h1')}>
        {`${t('showImportance')} `}
        <span
          style={{ color: 'var(--pink-1)' }}
        >{`${t('childrenEfforts')} `}</span>
        <span
          style={{ color: 'var(--purple-1)' }}
        >{`${t('stimulatingChildren')} `}</span>
        <br />
        {`${t('thinkCreatively')}`}
        <br />
        <span
          style={{ color: 'var(--green-1)' }}
        >{`${t('notBeSqueezed')} `}</span>
      </h2>
      <div className={styles.imageContainer}>
        <ExportedImage className={styles.image} src={image} alt={'missions'} />
        <IconHeart className={styles.heart} />
      </div>

      <IconSimpleStar className={styles.star} />
    </section>
  )
}
