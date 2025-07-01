import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Qualities from '../components/Qualities'
import MenuSection from '../components/MenuSection'
import Reservation from './Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <section>
    <HeroSection/>
    <AboutSection/>
    <MenuSection/>
    <Qualities/>
    </section>
    <Footer/>
    </>
  )
}

export default Home