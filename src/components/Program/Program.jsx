import { useTranslation } from 'react-i18next'
import './Program.css'
import { Container, Nav, Tab, Tabs } from 'react-bootstrap'

import React, { useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import { speakers } from '../constans_speakers.js'

import { DetailSpeaker } from './DetailSpeaker'
import { programITM } from '../constans_program'

export function Program () {
  const { t } = useTranslation()
  const [modalShow, setModalShow] = useState(false)
  const [programs, setPrograms] = useState(programITM.oct_4)
  const [detailSpeaker, setDetailSpeaker] = useState({})

  const handleModal = (speaker) => {
    setDetailSpeaker(speaker)
    setModalShow(true)
  }

  return (
    <>
      <div className='program-wrapper'>
        <Container className='pt-5'>
          <h1 className='text-light fw-font'>{t('program.title')}</h1>
          <p className='text-light'>{t('program.subtitle')}</p>

          <div className='program-dates mt-5'>
            <Nav variant='underline' defaultActiveKey='#day1'>
              <Nav.Item>
                <Nav.Link href='#day1' onClick={() => setPrograms(programITM.oct_4)}>
                  <strong>{t('program.day')} 1</strong><br />
                  <span>{t('program.day_1')}, 4 {t('program.month')}</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#day2' onClick={() => setPrograms(programITM.oct_5)}>
                  <strong>{t('program.day')} 2</strong><br />
                  <span>{t('program.day_2')}, 5 {t('program.month')}</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#day3' onClick={() => setPrograms(programITM.oct_6)}>
                  <strong>{t('program.day')} 3</strong><br />
                  <span>{t('program.day_3')}, 6 {t('program.month')}</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tabs
              defaultActiveKey='home'
              id='uncontrolled-tab-example'
              className='mt-5 mb-3 border-0'
            >
              <Tab eventKey='home' title='Education Area'>
                {programs?.stage_1.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item d-flex align-items-center'>
                      <div style={{ width: '100px' }}>
                        <p>
                          {program.hour}<br /><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-flex align-items-center justify-content-between w-100'>
                        <div>
                          <h2>{program.name}</h2>
                          <p>{program.rol}</p>
                          <h6>{program.conference}</h6>
                        </div>
                        <div className='d-inline-flex'>
                          {
                          program.avatar === ''
                            ? ''
                            : <img onClick={() => handleModal(program)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                        }
                          {
                          program?.avatar2
                            ? <img onClick={() => handleModal(program)} src={program?.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                        }
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Tab>
              <Tab eventKey='profile' title='Leaders of Tomorrow'>
                {programs?.stage_2.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item d-flex align-items-center'>
                      <div style={{ width: '100px' }}>
                        <p>
                          {program.hour}<br /><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-flex align-items-center justify-content-between w-100'>
                        <div>
                          <h2>{program.name}</h2>
                          <p>{program.rol}</p>
                          <h6>{program.conference}</h6>
                        </div>
                        <div className='d-inline-flex'>
                          {
                          program.avatar === ''
                            ? ''
                            : <img onClick={() => handleModal(program)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                        }
                          {
                          program?.avatar2
                            ? <img onClick={() => handleModal(program)} src={program?.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                        }
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Tab>
              <Tab eventKey='contact' title='Transformation Area'>
                {programs?.stage_3.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item d-flex align-items-center'>
                      <div style={{ width: '100px' }}>
                        <p>
                          {program.hour}<br /><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-flex align-items-center justify-content-between w-100'>
                        <div>
                          <h2>{program.name}</h2>
                          <p>{program.rol}</p>
                          <h6>{program.conference}</h6>
                        </div>
                        <div className='d-inline-flex'>
                          {
                          program.avatar === ''
                            ? ''
                            : <img onClick={() => handleModal(program)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                        }
                          {
                          program?.avatar2
                            ? <img onClick={() => handleModal(program)} src={program?.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                        }
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Tab>
            </Tabs>
          </div>

          <h1 className='mt-5 text-light'>{t('program.title_s')}</h1>
          <p className='text-light'>{t('program.subtitle_s')}</p>
          <div className='mt-5 pb-5 program-wrapper-speakers'>
            {speakers.map((speaker, index) => (
              <button key={index} onClick={() => handleModal(speaker)}>
                <div className='speaker-item h-100'>
                  <img src={speaker.avatar} width={300} height={300} alt={speaker.name} />
                  <div className='info_speakers'>
                    <h2>{speaker.name}</h2>
                    <p className='m-0'>{speaker.rol}</p>
                    <small>{speaker.company}</small>
                  </div>
                </div>
              </button>
            ))}
            <div />
          </div>

          <DetailSpeaker
            show={modalShow}
            onHide={() => setModalShow(false)}
            speaker={detailSpeaker}
          />
        </Container>
      </div>

    </>
  )
}
