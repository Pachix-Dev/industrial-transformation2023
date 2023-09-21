import { useTranslation } from 'react-i18next'
import './Program.css'
import { Accordion, Container, Nav, Tab, Tabs } from 'react-bootstrap'

import React, { useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import { speakers } from '../constans_speakers.js'

import { DetailSpeaker } from './DetailSpeaker'
import { programITM } from '../constans_program'

export function Program () {
  const { t } = useTranslation()
  const [modalShow, setModalShow] = useState(false)
  const [programs, setPrograms] = useState(programITM.stage_1)
  const [detailSpeaker, setDetailSpeaker] = useState({})

  const handleModal = (id) => {
    const speaker = speakers.find(speaker => speaker.id === id)
    setDetailSpeaker(speaker)
    setModalShow(true)
  }
  const handleModal2 = (speaker) => {
    setDetailSpeaker(speaker)
    setModalShow(true)
  }
  return (
    <>
      <div className='program-wrapper'>
        <Container className='pt-5'>
          <h1 className='text-light fw-font'>
            {t('program.title')}
          </h1>
          <p className='text-light'>{t('program.subtitle')}</p>
          <h2 className='text-light fw-font mt-5 mb-5'>
            {t('program.stages')}
          </h2>

          <div className='program-dates mt-5'>
            <Nav variant='tabs' defaultActiveKey='#day1'>
              <Nav.Item>
                <Nav.Link href='#day1' onClick={() => setPrograms(programITM.stage_1)}>
                  <h4 className='text-light'>Education Area</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#day2' onClick={() => setPrograms(programITM.stage_2)}>
                  <h4 className='text-light'>Leaders of Tomorrow</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#day3' onClick={() => setPrograms(programITM.stage_3)}>
                  <h4 className='text-light'>Transformation Area</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tabs
              defaultActiveKey='day1'
              id='fill-tab-example'
              className='mb-3 mt-5'
            >
              <Tab
                eventKey='day1'
                title={
                  <>
                    <strong>{t('program.day')} 1</strong><br />
                    <span>{t('program.day_1')}, 4 {t('program.month')}</span>
                  </>
                }
              >
                {programs?.oct_4.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item'>
                      <div style={{ width: '200px' }}>
                        <p>
                          <strong>{program.hour}</strong><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>

                      <div className='w-100'>
                        {program?.resume
                          ? <Accordion>
                            <Accordion.Item eventKey='0'>
                              <Accordion.Header>
                                <h2>{program.name}</h2>
                                <p>{program.rol} <strong>{program?.company}</strong></p>
                                <h6>{program.conference}</h6>
                              </Accordion.Header>
                              <Accordion.Body>
                                {program.resume}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          : <><h2>{program.name}</h2><p>{program.rol} <strong>{program?.company}</strong></p><h6>{program.conference}</h6></>}
                      </div>
                      <div className='d-block text-end' style={{ width: '-webkit-fill-available' }}>
                        {
                          program.avatar === ''
                            ? ''
                            : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                          }
                        {
                          program?.avatar2
                            ? <img onClick={() => handleModal(program?.id_s2)} src={program.avatar2} width={100} height={100} className='mt-2 rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                        {
                          program?.avatar3
                            ? <img onClick={() => handleModal(program?.id_s3)} src={program.avatar3} width={100} height={100} className='mt-2 rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                        {
                          program?.avatar4
                            ? <img onClick={() => handleModal(program?.id_s4)} src={program.avatar4} width={100} height={100} className='mt-2 rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                        {
                          program?.avatar5
                            ? <img onClick={() => handleModal(program?.id_s5)} src={program.avatar5} width={100} height={100} className='mt-2 rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                      </div>

                    </div>
                  )
                })}
              </Tab>
              <Tab
                eventKey='day2'
                title={
                  <>
                    <strong>{t('program.day')} 2</strong><br />
                    <span>{t('program.day_2')}, 5 {t('program.month')}</span>
                  </>
                }
              >
                {programs?.oct_5.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item d-flex align-items-center'>
                      <div style={{ width: '100px' }}>
                        <p>
                          <strong>{program.hour}</strong><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-flex align-items-center justify-content-between w-100'>
                        <div className='w-100'>
                          {program?.resume
                            ? <Accordion>
                              <Accordion.Item eventKey={index}>
                                <Accordion.Header>
                                  <h2>{program.name}</h2>
                                  <p>{program.rol} <strong>{program?.company}</strong></p>
                                  <h6>{program.conference}</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                  {program.resume}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            : <><h2>{program.name}</h2><p>{program.rol} <strong>{program?.company}</strong></p><h6>{program.conference}</h6></>}
                        </div>
                        <div className='d-inline-flex'>
                          {
                          program.avatar === ''
                            ? ''
                            : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                          }
                          {
                          program?.avatar2
                            ? <img onClick={() => handleModal(program?.id_s2)} src={program.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                          {
                          program?.avatar3
                            ? <img onClick={() => handleModal(program?.id_s3)} src={program.avatar3} width={100} height={100} className='mt-2 rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                          {
                          program?.avatar4
                            ? <img onClick={() => handleModal(program?.id_s4)} src={program.avatar4} width={100} height={100} className='mt-2 rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            : ''
                          }
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Tab>
              <Tab
                eventKey='day3'
                title={
                  <>
                    <strong>{t('program.day')} 3</strong><br />
                    <span>{t('program.day_3')}, 6 {t('program.month')}</span>
                  </>
                }
              >
                {programs?.oct_6.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item d-flex align-items-center'>
                      <div style={{ width: '100px' }}>
                        <p>
                          <strong>{program.hour}</strong><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-flex align-items-center justify-content-between w-100'>
                        <div>
                          {program?.resume
                            ? <Accordion>
                              <Accordion.Item eventKey={index}>
                                <Accordion.Header>
                                  <h2>{program.name}</h2>
                                  <p>{program.rol} <strong>{program?.company}</strong></p>
                                  <h6>{program.conference}</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                  {program.resume}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            : <><h2>{program.name}</h2><p>{program.rol} <strong>{program?.company}</strong></p><h6>{program.conference}</h6></>}
                        </div>
                        <div className='d-inline-flex'>
                          {
                          program.avatar === ''
                            ? ''
                            : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                          }
                          {
                          program?.avatar2
                            ? <img onClick={() => handleModal(program?.id_s2)} src={program.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
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
              <button key={index} onClick={() => handleModal2(speaker)}>
                <div className='speaker-item h-100'>
                  <img src={speaker.avatar} width={300} height={300} alt={speaker.name} />
                  <div className='info_speakers'>
                    <h2>{speaker.name}</h2>
                    <p className='m-0'>{speaker.rol}</p>
                    <strong><small>{speaker.company}</small></strong>
                  </div>
                </div>
              </button>
            ))}
            <div />
          </div>
        </Container>
        <DetailSpeaker
          show={modalShow}
          onHide={() => setModalShow(false)}
          speaker={detailSpeaker}
        />
      </div>

    </>
  )
}
