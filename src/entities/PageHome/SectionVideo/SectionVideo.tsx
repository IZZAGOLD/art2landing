'use client'
import styles from './styles.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { WHY_ART_SQRD_CARDS_DATA } from '@ui/WhyArtSqrdCard/index.whyArtSqrdCard'
import { WhyArtSqrdCard } from '@ui/WhyArtSqrdCard/WhyArtSqrdCard'
import { useInView } from 'react-intersection-observer'
import { animated, useSprings } from 'react-spring'
import React from 'react'

export const SectionVideo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  })

  const springs = useSprings(
    WHY_ART_SQRD_CARDS_DATA.length,
    WHY_ART_SQRD_CARDS_DATA.map((_, index) => ({
      transform: inView ? 'translateY(0)' : 'translateY(1000px)',
      delay: 1000 + index * 300, // Add index to delay
      opacity: inView ? 1 : 0,
    }))
  )
  const t = useTranslations()
  return (
    <section ref={ref} className={cn(styles.wrapper, 'section')}>
      <div className={styles.videoWrapper}>
        <video className={styles.video} loop autoPlay muted playsInline>
          <source src={'./children_picture.mp4'} type='video/mp4' />
          <source src={'./children_picture.webm'} type='video/webm' />
        </video>
      </div>
      <div className={styles.titleWrapper}>
        <span className={'h4'}>{t('whyArtSQRD')}</span>
      </div>

      <div className={styles.cards}>
        {springs.map((props, index) => (
          <animated.div style={props} key={index}>
            <WhyArtSqrdCard
              className={cn(styles.card, styles[`card-${index + 1}`])}
              {...WHY_ART_SQRD_CARDS_DATA[index]}
            />
          </animated.div>
        ))}
      </div>
    </section>
  )
}
