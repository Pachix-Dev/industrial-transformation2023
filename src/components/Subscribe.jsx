import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

export function Subscribe () {
  const { t } = useTranslation()
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>{t('home.name')}</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>{t('home.email')}</Form.Label>
        <Form.Control type='email' />
      </Form.Group>
      <Button variant='dark' type='submit'>
        {t('home.subscription')}
      </Button>
    </Form>
  )
}
