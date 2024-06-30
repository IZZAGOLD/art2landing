'use client'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import cn from 'classnames'
import { IconArrowUp } from '@ui/icons/Icon.ArrowUp'
import { GOOGLE_FORM_URL } from '@shared/appSettings/index.appSettings'
import { IconSimpleStar } from '@ui/icons/Icon.SimpleStar'
import { IconFlower } from '@ui/icons/Icon.Flower'

export const SectionOpinion = () => {
  const t = useTranslations()
  return (
    <section id={'contacts'} className={cn(styles.wrapper, 'section')}>
      <h2 className={cn(styles.title, 'h1')}>
        {`${t('your')} `}
        <span style={{ color: 'var(--pink-1)' }}>{t('opinion')}</span>
        <br />
        <span style={{ color: 'var(--green-1)' }}>{`${t('isVery')} `}</span>
        <span style={{ color: 'var(--purple-1)' }}>{`${t('important')} `}</span>
        {`${t('forUs')} `}
      </h2>
      <a
        className={styles.linkButton}
        href={GOOGLE_FORM_URL}
        target={'_blank'}
        rel='noreferrer'
      >
        <span className={'h4'}>{t('takeASurvey')}</span>
        <IconArrowUp />
      </a>
      <IconSimpleStar className={styles.star} />
      <IconFlower className={styles.flower} />
    </section>
  )
}
