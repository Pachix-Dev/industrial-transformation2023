import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './AboutUs.css'

export function AboutUs () {
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
            <p dangerouslySetInnerHTML={{ __html: t('aboutPage.description_1') }} />
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col md className='p-0'>
          <div className='about-description'>
            <p dangerouslySetInnerHTML={{ __html: t('aboutPage.description_2') }} />
          </div>

        </Col>
        <Col md className='p-0'>
          <div className='about-parallax-two' />
        </Col>
      </Row>
    </>
  )
}
