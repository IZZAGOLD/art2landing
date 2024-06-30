'use clieny'
import { HEADER_NAV_DATA } from '@/widgets/Header/index.header'
import cl from 'classnames'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Link } from '@lib/internalization/index.nextIntl'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import ExportedImage from 'next-image-export-optimizer'
import googlePlay from '@assets/svg/Svg.GooglePlay.svg'
import { LangSwitcher } from '@lib/internalization/view/LangSwitcher/LangSwitcher'
import { enumToArray } from '@lib/helpers/index.helpers'
import { Locales } from '@lib/internalization/types/types.internalization'
import { useChangeLocale } from '@lib/internalization/hooks/hooks.internalization'
import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
} from '@shared/appSettings/index.appSettings'

type HeaderMenuOverlayProps = {
  isVisible: boolean
}

export const HeaderMenuOverlay = ({ isVisible }: HeaderMenuOverlayProps) => {
  const t = useTranslations()
  const [locale, setLocale] = useChangeLocale()

  useEffect(() => {
    if (isVisible) return document.body.classList.add('overlay')
    return document.body.classList.remove('overlay')
  }, [isVisible])

  return (
    <div className={cl(styles.wrapper, isVisible ? styles.active : '')}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {HEADER_NAV_DATA.map((item, index) => {
            return (
              <li key={index} className={styles.link}>
                <Link href={item.href}>
                  <span className={'body2'}>{t(item.langKey)}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className={styles.buttons}>
        <div className={styles.marketsButtons}>
          <a
            href={GOOGLE_PLAY_URL}
            className={cn(styles.marketButton, styles.gp)}
          >
            <ExportedImage src={googlePlay} alt={'google play'} />
          </a>
          <a
            href={APP_STORE_URL}
            className={cn(styles.marketButton, styles.ap)}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M18.0341 11.1677C18.0561 9.54663 18.9733 8.01271 20.4283 7.16362C19.5104 5.91927 17.9729 5.13032 16.3733 5.08282C14.6672 4.91284 13.0132 6.05184 12.1438 6.05184C11.2576 6.05184 9.919 5.09969 8.47757 5.12784C6.59873 5.18546 4.84718 6.19938 3.93309 7.75851C1.96814 10.9876 3.43381 15.7333 5.31606 18.3435C6.25779 19.6216 7.3584 21.0493 8.79853 20.9987C10.2078 20.9432 10.7341 20.1457 12.4352 20.1457C14.1205 20.1457 14.6143 20.9987 16.0837 20.9665C17.5958 20.9432 18.5486 19.6827 19.4573 18.3925C20.1339 17.4818 20.6546 16.4752 21 15.4102C19.2229 14.6967 18.0361 12.9992 18.0341 11.1677Z'
                fill='currentColor'
              />
              <path
                d='M15.2587 3.36624C16.0832 2.42675 16.4894 1.21919 16.391 0C15.1314 0.125581 13.9678 0.697026 13.1321 1.60047C12.315 2.48319 11.8897 3.66951 11.9701 4.84209C13.2303 4.85441 14.4691 4.29845 15.2587 3.36624Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </div>

        <LangSwitcher
          className={styles.langSwitcher}
          onClick={setLocale}
          data={enumToArray(Locales).filter((el) => el !== locale)}
          defaultValue={locale}
        />
      </div>
    </div>
  )
}
