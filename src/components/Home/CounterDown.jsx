import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function CounterDown () {
  const { t } = useTranslation()

  const calculateTimeLeft = () => {
    const year = new Date().getFullYear()
    const difference = +new Date(`${year}-10-4`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <Col md={3} xs={6} key={interval}>
        <div className='timer-numbers'>
          <span>{timeLeft[interval]}</span>
        </div>
        <p className='timer-text'>
          {interval === 'days' ? t('home.days') : ''}
          {interval === 'hours' ? t('home.hours') : ''}
          {interval === 'minutes' ? t('home.minutes') : ''}
          {interval === 'seconds' ? t('home.seconds') : ''}
        </p>
      </Col>
    )
  })
  return (
    <Container className='mt-5 mb-5 text-center'>
      <h1 className='fw-bold' style={{ color: '#e8001e' }}>Industrial Tranformation {year}</h1>
      <Row className='counterdown-timer pb-3'>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </Row>
      <a className='home-register' href='https://itm.ahmreg.com.mx/' target='_blank' rel='noreferrer'>{t('home.registro_itm_2023')}</a>
    </Container>
  )
}
