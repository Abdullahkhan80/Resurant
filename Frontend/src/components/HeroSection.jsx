import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <section className="relative flex items-center justify-center bg-black h-[70vh] bg-cover bg-center " >
                <img src="images/background.avif" alt="hero" className="w-full opacity-50 absolute h-full object-cover" />
                <div className="absolute inset-0  bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to Gourmet Haven</h1>
                    <p className="text-md md:text-2xl mb-6 font-light">Experience the finest flavors from around the world</p>
                    <button onClick={() => navigate('/reservation')} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">Reserve Now</button>
                </div>
            </section>
        </>
    )
}

export default HeroSection