import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useCountdown } from '../hooks/useCountDown'

export function CounterDown () {
  const { t } = useTranslation()
  const [days, hours, minutes, seconds] = useCountdown('2023-10-04')

  if (days + hours + minutes + seconds <= 0) {
    return <span>Time's up!</span>
  } else {
    return (
      <Container className='mt-2 mb-5 text-center home-counterdown-timer'>
        <Row className='counterdown-timer pb-3'>
          <Col md={3} xs={6}>
            <div className='timer-numbers'>
              <span>{days}</span>
            </div>
            <p className='timer-text'>
              {t('home.days')}
            </p>
          </Col>
          <Col md={3} xs={6}>
            <div className='timer-numbers'>
              <span>{hours}</span>
            </div>
            <p className='timer-text'>
              {t('home.hours')}
            </p>
          </Col>
          <Col md={3} xs={6}>
            <div className='timer-numbers'>
              <span>{minutes}</span>
            </div>
            <p className='timer-text'>
              {t('home.minutes')}
            </p>
          </Col>
          <Col md={3} xs={6}>
            <div className='timer-numbers'>
              <span>{seconds}</span>
            </div>
            <p className='timer-text'>
              {t('home.seconds')}
            </p>
          </Col>

        </Row>
        <h1 className='fw-bold mb-5' style={{ color: 'white' }}>Days before ITM 2023</h1>
        <a className='home-register' href='https://itm.ahmreg.com.mx/' target='_blank' rel='noreferrer'>{t('home.registro_itm_2023')}</a>
      </Container>
    )
  }
}
