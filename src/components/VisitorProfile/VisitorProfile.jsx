import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function VisitorProfle () {
  const { t } = useTranslation()
  return (
    <>
      <Row className='m-0'>
        <Col md className='p-0 '>
          <div className='visitorprofile-parallax' />
        </Col>
        <Col md className='p-0'>
          <div className='visitorprofile-description'>
            <p>{t('aboutPage.description_1')}</p>
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col md className='p-0'>
          <div className='visitorprofile-description'>
            <p>{t('aboutPage.description_2')}</p>
          </div>

        </Col>
        <Col md className='p-0'>
          <div className='visitorprofile-parallax-two' />
        </Col>
      </Row>
    </>
  )
}
