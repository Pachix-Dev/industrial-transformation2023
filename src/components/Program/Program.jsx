import { useTranslation } from 'react-i18next'
import './Program.css'
import { Accordion, Container, Dropdown, Nav, Tab, Tabs } from 'react-bootstrap'

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

  const handleModal = (speaker) => {
    setDetailSpeaker(speaker)
    setModalShow(true)
  }

  return (
    <>
      <div className='program-wrapper'>
        <Container className='pt-5'>
          <h1 className='text-light fw-font'>
            {t('program.stages')}
          </h1>
          <p className='text-light'>{t('program.subtitle')}</p>
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
            <h2 className='text-light fw-font mt-5'>
              {t('program.title')}
            </h2>
            <Tabs
              defaultActiveKey='day1'
              id='fill-tab-example'
              className='mb-3'
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
                        <div className='w-100'>
                          {program?.resume
                            ? <Accordion>
                              <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                  <h2>{program.name}</h2>
                                  <p>{program.rol}</p>
                                  <h6>{program.conference}</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                  {program.resume}
                                </Accordion.Body>
                              </Accordion.Item>
                              </Accordion>
                            : <><h2>{program.name}</h2><p>{program.rol}</p><h6>{program.conference}</h6></>}
                        </div>
                        <div>
                          <Dropdown className='addCalendar'>
                            <Dropdown.Toggle id='dropdown-basic' />
                            <Dropdown.Menu>
                              <Dropdown.Item target='_blank' rel='noopener noreferrer' tabindex='0' href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20230329T153000Z%0ADTEND:20230329T230000Z%0ASUMMARY:XDW%202023%0ADESCRIPTION:Signup%3A%20https%3A%2F%2Ftnw.to%2FXDW%5CnLocation%3A%20Veles%20e%20Vents%2C%20Edificio%20Veles%20e%20Vents%20La%20Marina%20de%2C%2046024%20Valencia%5Cn%5CnX.%20Design%20Week%20is%20an%20ultra-immersive%20gathering%20of%20tourism%20destination%20leaders%2C%20innovators%20and%20entrepreneurs%20from%20all%20over%20the%20world%20to%20explore%20today's%20shifts%20in%20tourism%2C%20with%20a%20focus%20on%20the%20visitor%20experience%2C%20immersive%20content%2C%20data%20and%20technology.%0AEND:VEVENT%0AEND:VCALENDAR%0A">
                                Apple Calendar
                              </Dropdown.Item>
                              <Dropdown.Item target='_blank' rel='noopener noreferrer' tabindex='0' href={`https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20230329T153000Z%2F20230329T230000Z&amp;details=Signup%3A%20https%3A%2F%2Ftnw.to%2FXDW%0D%0ALocation%3A%20Veles%20e%20Vents%2C%20Edificio%20Veles%20e%20Vents%20La%20Marina%20de%2C%2046024%20Valencia%0D%0A%0D%0AX.%20Design%20Week%20is%20an%20ultra-immersive%20gathering%20of%20tourism%20destination%20leaders%2C%20innovators%20and%20entrepreneurs%20from%20all%20over%20the%20world%20to%20explore%20today%27s%20shifts%20in%20tourism%2C%20with%20a%20focus%20on%20the%20visitor%20experience%2C%20immersive%20content%2C%20data%20and%20technology.&amp;text=${decodeURI(program.conference)}`}>
                                Google Calendar
                              </Dropdown.Item>
                              <Dropdown.Item target='_blank' rel='noopener noreferrer' tabindex='0' href='https://outlook.live.com/calendar/0/deeplink/compose?allday=false&amp;body=Signup%3A%20https%3A%2F%2Ftnw.to%2FXDW%0D%0ALocation%3A%20Veles%20e%20Vents%2C%20Edificio%20Veles%20e%20Vents%20La%20Marina%20de%2C%2046024%20Valencia%0D%0A%0D%0AX.%20Design%20Week%20is%20an%20ultra-immersive%20gathering%20of%20tourism%20destination%20leaders%2C%20innovators%20and%20entrepreneurs%20from%20all%20over%20the%20world%20to%20explore%20today%27s%20shifts%20in%20tourism%2C%20with%20a%20focus%20on%20the%20visitor%20experience%2C%20immersive%20content%2C%20data%20and%20technology.&amp;enddt=2023-03-29T23%3A00%3A00%2B00%3A00&amp;path=%2Fcalendar%2Faction%2Fcompose&amp;rru=addevent&amp;startdt=2023-03-29T15%3A30%3A00%2B00%3A00&amp;subject=XDW%202023'>
                                Outlook
                              </Dropdown.Item>
                              <Dropdown.Item target='_blank' rel='noopener' tabindex='0' href='https://outlook.office.com/calendar/0/deeplink/compose?allday=false&amp;body=Signup%3A%20https%3A%2F%2Ftnw.to%2FXDW%0D%0ALocation%3A%20Veles%20e%20Vents%2C%20Edificio%20Veles%20e%20Vents%20La%20Marina%20de%2C%2046024%20Valencia%0D%0A%0D%0AX.%20Design%20Week%20is%20an%20ultra-immersive%20gathering%20of%20tourism%20destination%20leaders%2C%20innovators%20and%20entrepreneurs%20from%20all%20over%20the%20world%20to%20explore%20today%27s%20shifts%20in%20tourism%2C%20with%20a%20focus%20on%20the%20visitor%20experience%2C%20immersive%20content%2C%20data%20and%20technology.&amp;enddt=2023-03-29T23%3A00%3A00%2B00%3A00&amp;path=%2Fcalendar%2Faction%2Fcompose&amp;rru=addevent&amp;startdt=2023-03-29T15%3A30%3A00%2B00%3A00&amp;subject=XDW%202023'>
                                Office 365
                              </Dropdown.Item>
                              <Dropdown.Item target='_blank' rel='noopener' tabindex='0' href='https://calendar.yahoo.com/?desc=Signup%3A%20https%3A%2F%2Ftnw.to%2FXDW%0D%0ALocation%3A%20Veles%20e%20Vents%2C%20Edificio%20Veles%20e%20Vents%20La%20Marina%20de%2C%2046024%20Valencia%0D%0A%0D%0AX.%20Design%20Week%20is%20an%20ultra-immersive%20gathering%20of%20tourism%20destination%20leaders%2C%20innovators%20and%20entrepreneurs%20from%20all%20over%20the%20world%20to%20explore%20today%27s%20shifts%20in%20tourism%2C%20with%20a%20focus%20on%20the%20visitor%20experience%2C%20immersive%20content%2C%20data%20and%20technology.&amp;dur=false&amp;et=20230329T230000Z&amp;st=20230329T153000Z&amp;title=XDW%202023&amp;v=60'>
                                Yahoo
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>

                        </div>
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
                          {program.hour}<br /><br />
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
                                  <p>{program.rol}</p>
                                  <h6>{program.conference}</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                  {program.resume}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            : <><h2>{program.name}</h2><p>{program.rol}</p><h6>{program.conference}</h6></>}
                        </div>
                        <div className='d-inline-flex' />
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
                          {program.hour}<br /><br />
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
                                  <p>{program.rol}</p>
                                  <h6>{program.conference}</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                  {program.resume}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            : <><h2>{program.name}</h2><p>{program.rol}</p><h6>{program.conference}</h6></>}
                        </div>
                        <div className='d-inline-flex' />
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
