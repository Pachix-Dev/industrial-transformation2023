import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'
import { Contacts } from '../Contacts'
import { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { CustomRecaptcha } from '../CustomRecaptcha'
import { useLanguage } from '../hooks/useLanguage'
export function Contact () {
  const { t } = useTranslation()
  const captchaRef = useRef()
  const { stateLang } = useLanguage()
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
          'https://industrialtransformation.mx/newsletter/contact.php',
          requestOptions
        )
        const data = await res.json()
        if (data.status) {
          setMessage('Message send successfully!!')
        } else {
          setMessage('Sorry we couldn\'t verify you are not robot try again...')
        }
      } catch (error) {
        console.log(error)
      }
      document.getElementById('form-newsletter').reset()
    }
  }

  const renderReCAPTCHA = () => {
    return (
      <CustomRecaptcha
        sitekey='6LdUjjonAAAAADb5Z9eAiGXqMdmc6aUM8ZLzYjBg'
        onChange={onChange}
        language={stateLang === 'en' ? 'en' : 'es'}
        ref={captchaRef}
      />
    )
  }
  return (
    <>
      <Contacts>
        <h1 className='text-center mb-5'>{t('home.contact')}</h1>
      </Contacts>
      <Container className='mt-5 mb-5'>
        <h1 className='text-center fw-bold'>{t('contactForm.title')}</h1>
        <Form id='form-newsletter' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>{t('home.name')}</Form.Label>
            <Form.Control type='text' name='name' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>{t('home.email')}</Form.Label>
            <Form.Control type='email' name='email' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasiSubject'>
            <Form.Label>{t('contactForm.subject')}</Form.Label>
            <Form.Control type='text' name='subject' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicMessage'>
            <Form.Label>{t('contactForm.message')}</Form.Label>
            <Form.Control type='text-area' name='message' required />
          </Form.Group>
          {renderReCAPTCHA()}
          {captcha ? '' : <div style={{ color: '#dc3545' }}>{message}</div>}
          <Button variant='dark' type='submit' className='mt-3'>
            {t('contactForm.send')}
          </Button>
        </Form>
      </Container>
    </>
  )
}
