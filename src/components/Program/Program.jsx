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
      <div className='program-wrapper'>
        <Container className='pt-5'>
          <h1 className='text-light fw-font'>{t('program.title')}</h1>
          <h5 className='text-light'>{t('program.subtitle')}</h5>
        </Container>
        <div className='program-dates mt-5 pt-5'>
          <Dates />
        </div>
        <Container className='pt-5'>
          <h1 className='mt-5 text-light'>SPEAKERS</h1>
          <p className='text-light'>Get inspired by our amazing speakers on 04-06 october</p>
          <div className='mt-5 program-wrapper-speakers'>
            {speakers.map((image, index) => (
              <div key={index} className='speaker-item text-center h-100'>
                <img src={image.img} width={200} alt={`Exibitor ${index + 1}`} />
                <div className='info_speakers'>
                  <p className=' mt-2 text-light'>
                    {image.conference}<br />
                    {image.name}<br />
                    {image.company}
                  </p>
                </div>
              </div>
            ))}
            <div />
          </div>
        </Container>
      </div>

    </>
  )
}
