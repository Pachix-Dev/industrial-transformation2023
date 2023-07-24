import { Col, Container, Row } from 'react-bootstrap'
import './AudienceGroups.css'
import topics from '../../assets/topics.webp'
import { useTranslation } from 'react-i18next'
export function AudienceGroups () {
  const { t } = useTranslation()
  return (
    <>
      <div className='background-audience mt-5 pt-5 mb-5'>
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={9}>
              <h1 className='mt-5'>{t('audience.title')}</h1>
              <p className='mt-5'>{t('audience.description')}</p>
              <div className='border-bottom border-2 border-light' />
            </Col>
          </Row>
          <Row className='justify-content-md-center'>
            <Col md={5}>
              <img className='w-100 mt-5' src={topics} alt='hannover-itm-topics' />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
