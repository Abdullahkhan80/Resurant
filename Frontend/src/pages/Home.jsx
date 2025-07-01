import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Qualities from '../components/Qualities'
import MenuSection from '../components/MenuSection'
import Reservation from './Reservation'
import Footer from '../components/Footer'
import CustomerReviews from '../components/CustomerReviews'
import Team from './Team'

const Home = () => {
  return (
    <>
    <section>
    <HeroSection/>
    <AboutSection/>
    <Team/>
    <MenuSection/>
    <Qualities/>
    <CustomerReviews/>
    </section>
    <Footer/>
    </>
  )
}

export default Home