import { useTranslation } from 'react-i18next'
// import './WhyExhibit.css'
import './WhyVisit.css'
import { Col, Row } from 'react-bootstrap'

export function WhyVisit () {
  const { t } = useTranslation()
  return (
    <>
      <Row className='m-0 my-5'>
        <Col md className='p-0'>
          <div className='exhibit-parallax'>
            <div className='container-text px-4'>
              <h3 className='title-reasons'>{t('visitorReasons.title_1')}</h3>
              <p>{t('visitorReasons.title_2')}</p>
              <p>{t('visitorReasons.description_1')}</p>
              <p>{t('visitorReasons.description_2')}</p>
              <p>{t('visitorReasons.description_3')}</p>
              <ul class='list-unstyled'>
                <li>
                  <p>{t('visitorReasons.description_4')}</p>
                </li>
                <li>
                  <p>{t('visitorReasons.description_5')}</p>
                </li>
                <li>
                  <p>{t('visitorReasons.description_6')}</p>
                </li>
                <li>
                  <p>{t('visitorReasons.description_7')}</p>
                </li>
                <li>
                  <p>{t('visitorReasons.description_8')}</p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md className='p-0'>
          <div className='container-exhibitor' />
        </Col>
      </Row>
    </>
  )
}
