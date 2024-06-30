import styles from './styles.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'

export const SectionVideo = () => {
  const t = useTranslations()
  return (
    <section className={cn(styles.wrapper, 'section')}>
      <div className={styles.videoWrapper}>
        <video className={styles.video} loop autoPlay muted playsInline>
          <source src={'./children_picture.mp4'} type='video/mp4' />
          <source src={'./children_picture.webm'} type='video/webm' />
        </video>
        <div className={styles.titleWrapper}>
          <span className={'h4'}>{t('whyArtSQRD')}</span>
        </div>
      </div>
    </section>
  )
}
