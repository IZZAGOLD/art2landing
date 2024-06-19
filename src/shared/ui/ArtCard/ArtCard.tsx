import styles from './styles.module.scss'
import { ElementType } from 'react'
import { StaticImageData } from 'next/image'
import ExportedImage from 'next-image-export-optimizer'
import cn from 'classnames'
import { useTranslations } from 'next-intl'

export type ArtCardProps = {
  title: string
  description: string
  Icon: ElementType
  date: string
  img: string | StaticImageData
  coreColor: string
  className?: string
}

export const ArtCard = ({
  title,
  img,
  Icon,
  date,
  description,
  className,
  coreColor,
}: ArtCardProps) => {
  const t = useTranslations()

  return (
    <div
      style={{
        borderColor: `var(--${coreColor}-3)`,
        backgroundColor: `var(--${coreColor}-2)`,
        color: coreColor === 'yellow' ? 'var(--10)' : 'var(--20)',
      }}
      className={cn(styles.wrapper, className || '')}
    >
      <div className={styles.header}>
        <Icon />
        <div
          style={{ backgroundColor: `var(--${coreColor}-1)` }}
          className={styles.dateWrapper}
        >
          <span className={'body2'}>{t(date)}</span>
        </div>
      </div>

      <div className={styles.textWrapper}>
        <h4 className={cn(styles.title, 'h2')}>{t(title)}</h4>
        <p className={cn(styles.description, 'body2')}>{t(description)}</p>
      </div>
      <div className={styles.imageContainer}>
        <ExportedImage className={styles.image} src={img} alt={'art image'} />
      </div>
    </div>
  )
}
