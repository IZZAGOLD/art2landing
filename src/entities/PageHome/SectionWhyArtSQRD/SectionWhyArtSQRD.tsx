'use client'
import React from 'react'
import styles from './styles.module.scss'
import ExportedImage from 'next-image-export-optimizer'
import vector from '@assets/img/vector.png'

export const SectionWhyArtSqrd = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.square}>
        <div className={styles.content}></div>
      </div>
      <div className={styles.imageContainer}>
        <ExportedImage className={styles.image} src={vector} alt={'vector'} />
      </div>

      <div style={{ background: 'red', height: '500px' }}></div>
    </section>
  )
}
