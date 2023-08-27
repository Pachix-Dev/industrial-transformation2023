import { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { programITM } from '../constans_program'

export function Dates () {
  const { t } = useTranslation()
  const [program, setProgram] = useState(programITM.oct_4)
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col className='text-center'>
          <button style={{ backgroundColor: program === programITM.oct_4 ? '#e8001e' : '' }} onClick={() => setProgram(programITM.oct_4)}>
            4 {t('program.month')}
          </button>
        </Col>
        <Col className='text-center'>
          <button style={{ backgroundColor: program === programITM.oct_5 ? '#e8001e' : '' }} onClick={() => setProgram(programITM.oct_5)}>
            5 {t('program.month')}
          </button>
        </Col>
        <Col className='text-center'>
          <button style={{ backgroundColor: program === programITM.oct_6 ? '#e8001e' : '' }} onClick={() => setProgram(programITM.oct_6)}>
            6 {t('program.month')}
          </button>
        </Col>
      </Row>
      <Tabs
        defaultActiveKey='home'
        id='uncontrolled-tab-example'
        className='mt-5 mb-3 border-0'
      >
        <Tab eventKey='home' title='Education Area'>
          {program?.stage_1.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div className='text-start'>
                  <p>
                    {conference.hour}<br /><br />
                    <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg> {conference.duration}
                  </p>
                </div>
                <div className='d-flex align-items-center'>
                  <img src={conference.avatar} width={100} className='rounded-circle me-4' alt='speaker' />
                  <div>
                    <h2>{conference.name_speaker}</h2>
                    <p>{conference.rol}</p>
                    <h6>{conference.name}</h6>
                  </div>
                </div>
              </div>
            )
          })}
        </Tab>
        <Tab eventKey='profile' title='Leaders of Tomorrow'>
          {program?.stage_2.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div className='text-start'>
                  Jue  26 <br />
                  {conference.hour}
                </div>
                <div>
                  <h2>{conference.name_speaker}</h2>
                  <p>{conference.rol}</p>
                  <h6>{conference.name}</h6>
                </div>
              </div>
            )
          })}
        </Tab>
        <Tab eventKey='contact' title='Transformation Area'>
          {program?.stage_3.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div>
                  Vier 26<br />
                  {conference.hour}
                </div>
                <div className='text-center'>
                  <h2>{conference.name_speaker}</h2>
                  <p>{conference.rol}</p>
                  <h6>{conference.name}</h6>
                </div>
              </div>
            )
          })}
        </Tab>
      </Tabs>

    </Container>
  )
}
