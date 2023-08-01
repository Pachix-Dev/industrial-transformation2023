import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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
      <div className='exibitorSlider text-center h-100'>
        <img src='/Beckhoff.webp' width={300} alt='Beckhoff' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/ckd.webp' width={100} alt='CKD' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/dyce.webp' width={200} alt='DYCE' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/EH.webp' width={200} alt='EH' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/Finder.webp' width={200} alt='Finder' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/Fives.webp' width={100} alt='Fives' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/cleveland.webp' width={200} alt='cleveland' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/Ikusi.webp' width={200} alt='Ikusi' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/logoinfo.webp' width={200} alt='logoinfo' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/kaeser.webp' width={200} alt='kaeser' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/kloemecom.webp' width={200} alt='kloemecom' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/mitutoyo.webp' width={200} alt='mitutoyo' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/monitor.webp' width={200} alt='monitor' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/mytec.webp' width={200} alt='mytec' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/polyworks.webp' width={200} alt='polyworks' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/prensasCilindros.webp' width={200} alt='prensasCilindros' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/roue.webp' width={150} alt='roue' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/siemens.webp' width={200} alt='siemens' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/WAGO-Logo.webp' width={250} alt='WAGO-Logo' />
      </div>
      <div className='exibitorSlider text-center h-100'>
        <img src='/KAIZEN.webp' width={200} alt='KAIZEN' />
      </div>
    </Carousel>
  )
}

export { ExibitorSlide }
