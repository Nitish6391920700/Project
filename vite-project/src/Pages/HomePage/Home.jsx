import React from 'react'
import Hero from '../HeroPage/Hero'
import RippleEffectCircle from '../../component/Glowing section/Glow'
import Intro from '../../component/Intro/Intro'

function Home() {
  return (
    <div className='hero'>
      <Hero/>
      <Intro/>
      <RippleEffectCircle/>
    </div>
  )
}

export default Home
