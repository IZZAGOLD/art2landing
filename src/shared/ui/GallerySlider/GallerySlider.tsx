'use client'
import { useKeenSlider } from 'keen-slider/react'
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
import ExportedImage from 'next-image-export-optimizer'
import cn from 'classnames'
import styles from './styles.module.scss'
import { IconArrowUp } from '@ui/icons/Icon.ArrowUp'
import Link from 'next/link'

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

type GallerySliderProps = {
  is404?: boolean
}

export const GallerySlider = ({ is404 }: GallerySliderProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 16,
    },
  })

  return (
    <div
      ref={ref}
      className={cn(styles.wrapper, 'keen-slider')}
      style={{ maxWidth: 1920 }}
    >
      {data.map((item, index) => {
        if (is404 && index === 0) {
          return (
            <div
              style={{
                maxWidth: 280,
                minWidth: 280,
              }}
              key={'404'}
              className={cn(styles.notFoundWrapper, 'keen-slider__slide')}
            >
              <h1 className={styles.title}>404</h1>
              <span className={'body1'}>Page not found</span>
              <div className={styles.linkButtonWrapper}>
                <Link className={styles.linkButton} href={'/'}>
                  <span className={'h4'}>Main</span>
                  <IconArrowUp />
                </Link>
              </div>
            </div>
          )
        }

        return (
          <div
            key={index}
            style={{
              maxWidth: 280,
              minWidth: 280,
            }}
            className='keen-slider__slide'
          >
            <ExportedImage
              className={styles.img}
              src={item}
              alt={'gallery image'}
            />
          </div>
        )
      })}
    </div>
  )
}
