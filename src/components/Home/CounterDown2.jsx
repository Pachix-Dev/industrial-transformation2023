import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useCountdown } from '../hooks/useCountDown'

export function CounterDown2 () {
  const { t } = useTranslation()
  const [days, hours, minutes, seconds] = useCountdown('2023-10-04')

  if (days + hours + minutes + seconds <= 0) {
    return <span>Time's up!</span>
  } else {
    return (
      <Container className='mt-2 text-center home-counterdown-timer'>

        <div className='counterdown-timer d-flex justify-content-center'>
          <div className='timer-numbers'>
            <span>{days}</span>
            <p className='timer-text'>
              {t('home.days')}
            </p>
          </div>

          <div className='timer-numbers'>
            <span>{hours}</span>
            <p className='timer-text'>
              {t('home.hours')}
            </p>
          </div>

          <div className='timer-numbers'>
            <span>{minutes}</span>
            <p className='timer-text'>
              {t('home.minutes')}
            </p>
          </div>

          <div className='timer-numbers'>
            <span>{seconds}</span>
            <p className='timer-text'>
              {t('home.seconds')}
            </p>
          </div>
        </div>

        <h1 className='fw-bold counterdown-title' style={{ color: 'white' }}>
          {t('home.titleCounter')}
        </h1>
        <p className='m-0'>
          <small className='text-light mt-3 mb-0'>{t('home.leyend')}</small><br /><br />
          <a className='home-register' href='https://itm.ahmreg.com.mx/' target='_blank' rel='noreferrer'>
            {t('home.registro_itm_2023')}
          </a>

        </p>

      </Container>
    )
  }
}
