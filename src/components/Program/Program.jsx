import { useTranslation } from 'react-i18next'
import './Program.css'
import { Container } from 'react-bootstrap'

import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import { speakers } from '../constans_speakers.js'

import { Dates } from './Dates'

export function Program () {
  const { t } = useTranslation()
  return (
    <>
      <div className='program-wrapper'>
        <Container className='pt-5'>
          <h1 className='text-light fw-font'>{t('program.title')}</h1>
          <p className='text-light'>{t('program.subtitle')}</p>
        </Container>
        <div className='program-dates mt-5'>
          <Dates />
        </div>
        <Container className='pt-5'>
          <h1 className='mt-5 text-light'>Speakers</h1>
          <p className='text-light'>Get inspired by our amazing speakers on 04-06 october</p>
          <div className='mt-5 pb-5 program-wrapper-speakers'>
            {speakers.map((image, index) => (
              <div key={index} className='speaker-item text-center h-100'>
                <img src={image.img} className='w-100' alt={`Exibitor ${index + 1}`} />
                <div className='info_speakers'>
                  <h2>{image.name}</h2>
                  <small>{image.company}</small>
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
