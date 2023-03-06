import React from 'react'
import Highlight from './atoms/Highlight'
import Button from './atoms/Button'
import Auctions from './atoms/Auctions'


export default function HeroSection() {
  return (
      <div className=" px-4 mobile:p-0  desktop:max-w-7xl tablet:items-center tablet:flex mobile:mt-9 mt-20 flex justify-center items-center gap-10 mx-auto tablet:flex-nowrap mobile:flex-wrap tablet:max-w-3xl mobile:max-w-[315px]">
        <div className='max-w-md '>
          <h1 className='desktop:text-6xl tablet:text-4xl desktop:max-w-sm  labtop:max-w-xs mobile:text-3xl capitalize tracking-tighter mb-5'>Discover digital art & Collect NFTs</h1>
          <p className='text-base md:text-base mb-9 md:mb-5 mobile:text-xs '>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell
            art from more than 20k NFT artists.
          </p>
          <Button  action="Get Started" imgBefore={"@/../public/images/icons/RocketLaunch.svg"}/>
          <Auctions />
        </div>
        <Highlight imageCard={"@/../public/images/image/Image-Placeholder.svg"} imageAvatar={"@/../public/images/icons/Avatar Placeholder.svg"} cardName="Space Walking" personName="Aminakid"/>
      </div>
  )
}
