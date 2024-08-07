import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel'
import { Mens_Kurta } from '../../Data/Mens/Men_Kurta'
import { Accessories } from '../../Data/Mens/Accessories'
import { Shoes } from '../../Data/Mens/Shoes'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='flex flex-col justify-center space-y-10 py-20 px-5 lg:px-10'>
            <HomeSectionCarosel data={Mens_Kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarosel data={Shoes} sectionName={"Mens shoes"}/>
            <HomeSectionCarosel data={Mens_Kurta} sectionName={"Womens sarees"}/>
            <HomeSectionCarosel data={Mens_Kurta} sectionName={"Accessories"}/>
        </div>
    </div>
  )
}

export default HomePage