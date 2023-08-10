import { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { programITM } from '../constans_program'

export function Dates () {
  const { t } = useTranslation()
  const [program, setProgram] = useState(programITM.oct_4)

  console.log(program)
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
        <Tab eventKey='home' title='Stage 1'>
          {program?.stage_1.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div className='text-start'>
                  <p>Mier 04 <br />
                    {conference.hour}
                  </p>
                </div>
                <div>
                  <h2>{conference.name_speaker}</h2>
                  <small>{conference.rol}</small>
                  <p>{conference.name}</p>
                </div>
              </div>
            )
          })}
        </Tab>
        <Tab eventKey='profile' title='Stage 2'>
          {program?.stage_2.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div className='text-start'>
                  Jue  26 <br />
                  {conference.hour}
                </div>
                <div>
                  {conference.name}
                </div>
              </div>
            )
          })}
        </Tab>
        <Tab eventKey='contact' title='Stage 3'>
          {program?.stage_3.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div>
                  Vier 26<br />
                  {conference.hour}
                </div>
                <div className='text-center'>
                  {conference.name}
                </div>
              </div>
            )
          })}
        </Tab>
      </Tabs>
    </Container>
  )
}
