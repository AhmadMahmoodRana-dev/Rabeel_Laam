import React from 'react'
import HomePageMainCarousel from '../components/HomePageMainCarousel'
import HomePageBottomSliders from '../components/HomePageBottomSliders'
import HomePageBottomSliders2 from '../components/HomePageBottomSliders2'

const Home = () => {
  return (
    <div className='w-full h-screen px-4'>
      <HomePageMainCarousel />
      <HomePageBottomSliders/>
      <HomePageBottomSliders2/>
    </div>
  )
}

export default Home
