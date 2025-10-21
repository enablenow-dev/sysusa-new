import Button from '@/app/components/ui/Button'
import React from 'react'
import Link from 'next/link'
import Home from '@/app/page'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Image from 'next/image'
import LogoMarquee from '@/app/components/ui/LogoMarquee'
import OurCapabilities from '@/app/components/sections/OurCapabilities'
import ResultsSection from '@/app/components/sections/ResultsSection'





function page() {


   
  
  return (
   <>
  <Hero/>
  <About/>
 <LogoMarquee/>
 <OurCapabilities/>
 <ResultsSection/>

   </>
  )
  
}

export default page