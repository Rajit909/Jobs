import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs()
  return (
    <>
      <Navbar/>
        {/* hero */}
        <HeroSection/>
        {/* categoryCarousel */}
        <CategoryCarousel/>
        {/* Latest jobs */}
        <LatestJobs/>

      <Footer/>
    </>
  )
}

export default Home