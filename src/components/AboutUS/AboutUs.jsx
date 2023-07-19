import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './AboutUs.css'

export default function AboutUs () {
  const { t } = useTranslation()
  return (
    <>
      <h1 className='about-title'>{t('aboutPage.title')}</h1>
      <Row className='m-0'>
        <Col md className='p-0 '>
          <div className='about-parallax' />
        </Col>
        <Col md className='p-0'>
          <div className='about-description'>
            <p>{t('aboutPage.description_1')}</p>
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col md className='p-0'>
          <div className='about-description'>
            <p>{t('aboutPage.description_2')}</p>
          </div>

        </Col>
        <Col md className='p-0'>
          <div className='about-parallax-two' />
        </Col>
      </Row>
    </>
  )
}
