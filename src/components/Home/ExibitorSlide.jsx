import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { exibitors } from '../constans_logos'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
}

const ExibitorSlide = () => {
  return (
    <Carousel
      responsive={responsive}
      showDots={false}
      arrows
      infinite
      autoPlay
      autoPlaySpeed={3000}
    >
      {exibitors.map((image, index) => (
        <div key={index} className='exibitorSlider text-center h-100'>
          <img src={image} width={200} alt={`Exibitor ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  )
}

export { ExibitorSlide }
