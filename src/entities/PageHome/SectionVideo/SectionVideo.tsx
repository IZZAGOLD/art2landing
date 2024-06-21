import styles from './styles.module.scss'
import cn from 'classnames'

export const SectionVideo = () => {
  return (
    <section className={cn(styles.wrapper, 'section')}>
      <video loop autoPlay muted playsInline>
        <source src={'./video2.mov'} />
      </video>
    </section>
  )
}
