import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { programITM } from '../constans_program'

export function Dates () {
  const { t } = useTranslation()
  const [program, setProgram] = useState(programITM.oct_4)

  console.log(program)
  return (
    <Container className='program-dates mt-5 mb-5'>
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

      <Row className='mt-5'>
        <Col md>
          <h4 className='text-center'>Stage 1</h4>
          {program?.stage_1.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div className='text-start'>
                  <p>Mier<br />
                    26<br />
                    {conference.hour}
                  </p>
                </div>
                <div>
                  {conference.name}
                </div>
              </div>
            )
          })}
        </Col>
        <Col md>
          <h4 className='text-center'>Stage 2</h4>
          {program?.stage_2.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div className='text-start'>
                  Jue<br />
                  26<br />
                  {conference.hour}
                </div>
                <div>
                  {conference.name}
                </div>
              </div>
            )
          })}
        </Col>
        <Col md>
          <h4 className='text-center'>Stage 3</h4>
          {program?.stage_3.map((conference, index) => {
            return (
              <div key={index} className='program-date-item d-flex align-items-center'>
                <div>
                  Vier<br />
                  26<br />
                  {conference.hour}
                </div>
                <div className='text-center'>
                  {conference.name}
                </div>
              </div>
            )
          })}
        </Col>
      </Row>

    </Container>
  )
}
