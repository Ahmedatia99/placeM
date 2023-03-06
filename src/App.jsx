import react, { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Trending from './components/Trending'
import "@/assets/style/main.css"
import "@/assets/style/imports/funky.css"
import Creators from './components/Creators'

function App() {


  return (
    <div className='bg-background flex flex-col justify-center'>
      <Navigation />
      <HeroSection />
      <Trending />
      <Creators />

    </div>
  )
}
export default App
