import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Subscribe () {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [inputs, setInputs] = useState([])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost/backend', inputs).then(function (response) {
      console.log(response.data)
      navigate('/')
    })
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>{t('home.name')}</Form.Label>
          <Form.Control type='text' onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>{t('home.email')}</Form.Label>
          <Form.Control type='email' onChange={handleChange} />
        </Form.Group>
        <Button variant='dark' type='submit'>
          {t('home.subscription')}
        </Button>
      </Form>
    </>
  )
}
