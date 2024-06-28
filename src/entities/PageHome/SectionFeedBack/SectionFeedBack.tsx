'use client'
import styles from './styles.module.scss'
import cn from 'classnames'
import { useKeenSlider } from 'keen-slider/react'
import { useTranslations } from 'next-intl'
import { IconComma } from '@ui/icons/Icon.Comma'
import ExportedImage from 'next-image-export-optimizer'
import ava1 from '@assets/img/avatar1.png'
import ava2 from '@assets/img/avatar2.png'
import ava3 from '@assets/img/avatar3.png'
import ava4 from '@assets/img/avatar4.png'

import { useMedia } from 'use-media'

export const SectionFeedBack = () => {
  const t = useTranslations()
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 16,
    },
  })
  const isDesktop = useMedia({ minWidth: '1366px' })

  return (
    <section className={cn(styles.wrapper, 'section')}>
      <h2 className={cn(styles.title, 'h1')}>
        {`${t('parents')} `}
        <span style={{ color: 'var(--purple-1)' }}>{t('feedback')}</span>
      </h2>
      <div
        ref={isDesktop ? undefined : ref}
        className={cn(styles.cards, isDesktop ? '' : 'keen-slider')}
        style={{ maxWidth: 1920, gap: isDesktop ? 16 : 0 }}
      >
        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn(isDesktop ? '' : 'keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.one)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              {t('feedbackDescription1')}
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava1} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Marleen Wauters</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn(isDesktop ? '' : 'keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.two)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              {t('feedbackDescription2')}
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava2} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Gerhard Reuter</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn(isDesktop ? '' : 'keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.three)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              {t('feedbackDescription3')}
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava3} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>
                Victoria Abramova
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn(isDesktop ? '' : 'keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.four)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              {t('feedbackDescription4')}
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava4} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Filipe Costa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
