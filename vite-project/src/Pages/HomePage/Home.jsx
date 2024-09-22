import React from 'react'
import Hero from '../HeroPage/Hero'
import RippleEffectCircle from '../../component/Glowing section/Glow'
import Intro from '../../component/Intro/Intro'
import NewsSection from '../../component/NewsSection'
import OurGoals from '../../component/OurGoals'

function Home() {
  return (
    <div className='hero'>
      <Hero/>
      <Intro/>
      <RippleEffectCircle/>
      <NewsSection/>
      <OurGoals/>
    </div>
  )
}

export default Home
