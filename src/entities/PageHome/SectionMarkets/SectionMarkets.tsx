'use client'
import Lottie from 'lottie-react'
import mascot from '@assets/lottie/mascot.json'

export const SectionMarkets = () => {
  return (
    <section style={{ backgroundColor: 'red' }}>
      <Lottie
        style={{ width: '500px', height: '500px', backgroundColor: 'red' }}
        animationData={mascot}
        loop={true}
      />
    </section>
  )
}
