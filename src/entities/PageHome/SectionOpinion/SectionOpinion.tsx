'use client'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import cn from 'classnames'
import { IconArrowUp } from '@ui/icons/Icon.ArrowUp'
import ExportedImage from 'next-image-export-optimizer'
import star from '@assets/img/simple_star.png'
import flower from '@assets/img/flower.png'

export const SectionOpinion = () => {
  const t = useTranslations()
  return (
    <section className={cn(styles.wrapper, 'section')}>
      <h2 className={cn(styles.title, 'h1')}>
        {`${t('opinion')} `}
        <span style={{ color: 'var(--pink-1)' }}>{t('opinion')}</span>
        <br />
        <span style={{ color: 'var(--green-1)' }}>{`${t('isVery')} `}</span>
        <span style={{ color: 'var(--purple-1)' }}>{`${t('important')} `}</span>
        {`${t('forUs')} `}
      </h2>
      <a
        className={styles.linkButton}
        href={'https://google.com'}
        target={'_blank'}
        rel='noreferrer'
      >
        <span className={'h4'}>{t('takeASurvey')}</span>
        <IconArrowUp />
      </a>
      <ExportedImage className={styles.star} src={star} alt={'star'} />
      <ExportedImage className={styles.flower} src={flower} alt={'flower'} />
    </section>
  )
}
