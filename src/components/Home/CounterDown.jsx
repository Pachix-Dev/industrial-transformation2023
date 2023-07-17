import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
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
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })
  return (
    <Container className='mt-5 mb-5 text-center'>
      <h1>Industrial Tranformation {year} Countdown</h1>
      <p className='pb-3'>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </p>
      <a className='home-register' href='https://itm.ahmreg.com.mx/' target='_blank' rel='noreferrer'>{t('home.registro_itm_2023')}</a>
    </Container>
  )
}
