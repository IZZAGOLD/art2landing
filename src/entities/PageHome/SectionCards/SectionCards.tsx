'use client'
import React from 'react'
import styles from './styles.module.scss'
import { ART_CARDS_DATA } from '@ui/ArtCard/index.artCards'
import { ArtCard } from '@ui/ArtCard/ArtCard'
import { useInView } from 'react-intersection-observer'
import { animated, useSprings } from 'react-spring'
import cn from 'classnames'

export const SectionCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  })

  const springs = useSprings(
    ART_CARDS_DATA.length,
    ART_CARDS_DATA.map((_, index) => ({
      transform: inView ? 'translateY(0)' : 'translateY(1000px)',
      delay: 500 + index * 100, // Add index to delay
      opacity: inView ? 1 : 0,
    }))
  )

  return (
    <section className={styles.wrapper} ref={ref}>
      <div className={styles.cards}>
        {springs.map((props, index) => (
          <animated.div style={props} key={index}>
            <ArtCard
              className={cn(styles.card, styles[`card-${index + 1}`])}
              {...ART_CARDS_DATA[index]}
            />
          </animated.div>
        ))}
      </div>
    </section>
  )
}
