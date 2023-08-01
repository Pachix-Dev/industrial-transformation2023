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
      <Container className='mt-2 mb-3 text-center home-counterdown-timer'>
        <Row className='pb-3'>
          <Col md={6} className='text-light'>
            <h1>JOIN THE ITM</h1>
            <div className='d-flex' style={{ gap: '20px' }}>
              <p>
                {t('home.days')}<br />
                <span>{days}</span>
              </p>
              <p>
                {t('home.hours')}<br />
                <span>{hours}</span>
              </p>
              <p>
                {t('home.minutes')}<br />
                <span>{minutes}</span>
              </p>
              <p>
                {t('home.seconds')}<br />
                <span>{seconds}</span>
              </p>
            </div>

            <h1 className='fw-bold mb-5 counterdown-title' style={{ color: 'white' }}> {t('home.titleCounter')}</h1>
            <a className='home-register' href='https://itm.ahmreg.com.mx/' target='_blank' rel='noreferrer'>{t('home.registro_itm_2023')}</a>
            <p className='text-light mt-5 mb-0'>{t('home.leyend')}</p>
          </Col>
        </Row>

      </Container>
    )
  }
}
