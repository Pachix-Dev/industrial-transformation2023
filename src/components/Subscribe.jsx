import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useLanguage } from './hooks/useLanguage'
import { useTranslation } from 'react-i18next'

import { Suspense, lazy, useRef, useState } from 'react'
const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export function Subscribe () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  const captchaRef = useRef()

  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState()
  const onChange = () => {
    setCaptcha(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (captcha === false) {
      event.stopPropagation()
      setMessage('Please verify you are not bot.')
    } else {
      const token = captchaRef.current.getValue()
      captchaRef.current.reset()
      setCaptcha(false)
      const formData = Object.fromEntries(new window.FormData(event.target))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, formData })
      }

      try {
        const res = await fetch(
          'https://industrialtransformation.mx/newsletter/index.php',
          requestOptions
        )
        const data = await res.json()
        if (data?.status === true || data === '23000') {
          setMessage('Your are subscribe now!!')
        } else {
          setMessage('Sorry we couldn\'t verify you are not robot try again...')
        }
      } catch (error) {
        console.log(error)
      }
      document.getElementById('form-newsletter').reset()
    }
  }

  return (
    <>
      <Form id='form-newsletter' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>{t('home.name')}</Form.Label>
          <Form.Control type='text' name='name' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>{t('home.email')}</Form.Label>
          <Form.Control type='email' name='email' required />
        </Form.Group>
        <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
          {
            stateLang === 'en'
              ? <>
                <p className='d-none'>hola</p>
                <ReCAPTCHA
                  sitekey='6LdUjjonAAAAADb5Z9eAiGXqMdmc6aUM8ZLzYjBg'
                  ref={captchaRef}
                  onChange={onChange}
                  hl='en'
                />
                </>
              : <ReCAPTCHA
                  sitekey='6LdUjjonAAAAADb5Z9eAiGXqMdmc6aUM8ZLzYjBg'
                  ref={captchaRef}
                  onChange={onChange}
                  hl='es'
                />

              }
        </Suspense>
        {captcha ? '' : <div style={{ color: '#dc3545' }}>{message}</div>}
        <Button variant='dark' type='submit' className='mt-3'>
          {t('home.subscription')}
        </Button>
      </Form>
    </>
  )
}
