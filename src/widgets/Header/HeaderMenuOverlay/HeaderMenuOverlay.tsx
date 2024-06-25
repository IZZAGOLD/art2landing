import { HEADER_NAV_DATA } from '@/widgets/Header/index.header'
import cl from 'classnames'
import styles from './styles.module.scss'
import { Link } from '@lib/internalization/index.nextIntl'
import { useTranslations } from 'next-intl'
import ExportedImage from 'next-image-export-optimizer'

type HeaderMenuOverlayProps = {
  isVisible: boolean
}

export const HeaderMenuOverlay = ({ isVisible }: HeaderMenuOverlayProps) => {
  const t = useTranslations()
  return (
    <div className={cl(styles.wrapper, isVisible ? styles.active : '')}>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {HEADER_NAV_DATA.map((navObject, index) => {
            const { label, href } = navObject
            return (
              <li key={index}>
                <Link className={styles.nav__list__link} href={href}>
                  <span className={'body2'}>{t('label')}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/*<div className={styles.markets}>*/}
      {/*  <div className={styles.markets__item}>*/}
      {/*    <Link href={GOOGLE_PLAY_MOBILE_APP_LINK}>*/}
      {/*      <ExportedImage src={google} alt={'play market'} />*/}
      {/*      <SvgGooglePlatText />*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  <div className={styles.markets__item}>*/}
      {/*    <Link href={APP_STORE_MOBILE_APP_LINK}>*/}
      {/*      <IconApple />*/}
      {/*      <SvgAppStoreText />*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}
