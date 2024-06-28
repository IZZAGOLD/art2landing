'use client'
import s from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { IconCloseButton } from '@ui/icons/Icon.CloseButton'
import ExportedImage from 'next-image-export-optimizer'
import img from '@ui/assets/img/modal_header.png'
import cn from 'classnames'
import { useDisableBodyScroll } from '@lib/hooks/index.hooks'

type ModalProps = {
  setIsOpen: (bol: boolean) => void
  isOpen: boolean
}

export const ModalSuccessfullySubmitted = ({
  setIsOpen,
  isOpen,
}: ModalProps) => {
  const t = useTranslations()
  useDisableBodyScroll(isOpen)
  if (!isOpen) return null

  return (
    <div className={s.darkBG} onClick={() => setIsOpen(false)}>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={s.container}
      >
        <div className={s.header}>
          <div className={s.imageContainer}>
            <ExportedImage
              className={s.image}
              src={img}
              alt={'header modal image'}
            />
          </div>
          <button className={s.closeButton} onClick={() => setIsOpen(false)}>
            <IconCloseButton />
          </button>
        </div>
        <div className={s.body}>
          <h4
            className={cn('h3', s.title)}
            style={{ color: 'var(--purple-1)' }}
          >
            {t('successfullySubmitted')}
          </h4>
          <p className={'body1'}>{t('weWillContact')}</p>
        </div>
      </div>
    </div>
  )
}
