import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from './../../Data/mens_kurta';
import { Womens_kurta } from './../../Data/womens_kurta';
import TopCard from '../../TopCard';
import IndexComp from '../../IndexComp';
import OfferCard from '../../OfferCard';

function HomePage() {
  return (
    <div className=''>
      <div className='pt-28'>
        <TopCard />
      </div>
      <div className='-mb-15'>
        <MainCarousel />
      </div>


      <div className="-mt-30 lg:mt-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={Womens_kurta} sectionName={"Women's Shorts"} />
      </div>

      <div>
        <IndexComp />
      </div>





      <div className='mt-10 mb-15' >
        <center><OfferCard/></center>

</div>




    </div>

  )
}

export default HomePage;