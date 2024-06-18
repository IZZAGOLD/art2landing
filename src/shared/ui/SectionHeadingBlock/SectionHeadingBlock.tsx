import styles from './styles.module.scss'
import { ElementType } from 'react'
import { IconStars } from '@ui/icons/Icon.Stars'
import cn from 'classnames'

type SectionHeadingBlockProps = {
  label: string
  Icon?: ElementType
  classNames?: string
}

export const SectionHeadingBlock = ({
  label,
  Icon = IconStars,
  classNames,
}: SectionHeadingBlockProps) => {
  return (
    <div className={cn(styles.wrapper, classNames || '')}>
      <span className={'h4'}>{label}</span>
      <Icon />
    </div>
  )
}
