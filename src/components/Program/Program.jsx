import { useTranslation } from 'react-i18next'
import './Program.css'
import { Container } from 'react-bootstrap'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { speakers } from '../constans_speakers.js'

import { Dates } from './Dates'

export function Program () {
  const { t } = useTranslation()

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <div className='position-relative vh-100 d-flex justify-content-center align-items-end  text-center '>
        <video
          className='program-videobg'
          muted
          loop
          autoPlay
          playsInline
          poster='/posterVideo.webp'
        >
          <source
            src='/VIDEO PROGRAMA DE CONFERENCIAS.webm'
            type='video/webm'
          />
        </video>
        <div className='w-100'>
          <Container>
            <h1 className='text-light fw-font'>{t('program.title')}</h1>
          </Container>
          <div className='bg-light'>
            <h2 className='fw-bold'>{t('program.subtitle')}</h2>
          </div>
          <Container>
            <Carousel
              responsive={responsive}
              showDots={false}
              arrows
              infinite
              autoPlay
              autoPlaySpeed={3000}
            >
              {speakers.map((image, index) => (
                <div key={index} className='program-wrapper-speakers text-center h-100'>
                  <img src={image.img} width={200} alt={`Exibitor ${index + 1}`} />
                  <p className=' mt-2 text-light'>
                    {image.conference}<br />
                    {image.name}<br />
                    {image.company}
                  </p>
                </div>
              ))}
            </Carousel>
          </Container>
        </div>
      </div>
      <div className='mt-5' style={{ backgroundColor: '#e8001e' }}>
        <h3 className='text-light'>{t('program.titleprogram')}</h3>
      </div>
      <div className='program-dates'>
        <Dates />
      </div>
    </>
  )
}
