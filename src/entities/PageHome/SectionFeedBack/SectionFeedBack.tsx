'use client'
import styles from './styles.module.scss'
import cn from 'classnames'
import { useKeenSlider } from 'keen-slider/react'
import { useTranslations } from 'next-intl'
import { IconComma } from '@ui/icons/Icon.Comma'
import ExportedImage from 'next-image-export-optimizer'
import ava from '@assets/img/avatar.png'
import one from '@assets/img/gallerySlider/1.png'
import two from '@assets/img/gallerySlider/2.png'
import three from '@assets/img/gallerySlider/3.png'
import four from '@assets/img/gallerySlider/4.png'
import five from '@assets/img/gallerySlider/5.png'
import six from '@assets/img/gallerySlider/6.png'
import seven from '@assets/img/gallerySlider/7.png'
import eight from '@assets/img/gallerySlider/8.png'
import nine from '@assets/img/gallerySlider/9.png'
import ten from '@assets/img/gallerySlider/10.png'
import eleven from '@assets/img/gallerySlider/11.png'
import twelve from '@assets/img/gallerySlider/12.png'

const data = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
]

export const SectionFeedBack = () => {
  const t = useTranslations()
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 16,
    },
  })

  return (
    <section className={cn(styles.wrapper, 'section')}>
      <h2 className={cn(styles.title, 'h1')}>
        {`${t('parents')} `}
        <span style={{ color: 'var(--purple-1)' }}>{t('feedback')}</span>
      </h2>
      <div
        ref={ref}
        className={cn(styles.cards, 'keen-slider')}
        style={{ maxWidth: 1920 }}
      >
        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn('keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.one)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              I appreciate how the app encourages my child to express themselves
              artistically while providing a safe and ad-free environment.
              Overall, I highly recommend this app to parents looking to nurture
              their child's artistic talents and creativity on a digital
              platform. I appreciate how the app encourages my child to express
              themselves artistically while.
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Ann Carter</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn('keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.two)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              I appreciate how the app encourages my child to express themselves
              artistically while providing a safe and ad-free environment.
              Overall, I highly recommend this app to parents looking to nurture
              their child's artistic talents and creativity on a digital
              platform. I appreciate how the app encourages my child to express
              themselves artistically while.
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Ann Carter</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn('keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.three)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              I appreciate how the app encourages my child to express themselves
              artistically while providing a safe and ad-free environment.
              Overall, I highly recommend this app to parents looking to nurture
              their child's artistic talents and creativity on a digital
              platform. I appreciate how the app encourages my child to express
              themselves artistically while.
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Ann Carter</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 428,
            minWidth: 309.5,
          }}
          className={cn('keen-slider__slide')}
        >
          <div className={cn(styles.card, styles.four)}>
            <IconComma />
            <p className={cn(styles.text, 'body2')}>
              I appreciate how the app encourages my child to express themselves
              artistically while providing a safe and ad-free environment.
              Overall, I highly recommend this app to parents looking to nurture
              their child's artistic talents and creativity on a digital
              platform. I appreciate how the app encourages my child to express
              themselves artistically while.
            </p>
            <div className={styles.footer}>
              <ExportedImage src={ava} alt={'avatar'} />
              <span className={cn(styles.text, 'body2')}>Ann Carter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
