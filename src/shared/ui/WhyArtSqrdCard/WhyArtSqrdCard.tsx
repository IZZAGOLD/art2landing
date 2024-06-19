import styles from './styles.module.scss'
import { ElementType } from 'react'
import cn from 'classnames'
import { useTranslations } from 'next-intl'

export type WhyArtSqrdCardProps = {
  Icon: ElementType
  description: string
  coreColor: string
  className?: string
}

export const WhyArtSqrdCard = ({
  Icon,
  description,
  coreColor,
  className,
}: WhyArtSqrdCardProps) => {
  const t = useTranslations()

  return (
    <div
      style={{
        backgroundColor: `var(--${coreColor}-2)`,
        color: coreColor === 'yellow' ? `var(--10)` : 'var(--20)',
      }}
      className={cn(styles.wrapper, className || '')}
    >
      <Icon />
      <h4 className={'body1'}>{t(description)}</h4>
    </div>
  )
}
