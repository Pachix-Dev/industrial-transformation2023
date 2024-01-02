import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './VisitorProfile.css'

export function VisitorProfle () {
  const { t } = useTranslation()
  return (
    <>
      <Row className='m-0 mt-5'>
        <Col md className='p-0 visitorprofile-parallax' />
        <Col md className='p-0'>
          <div className='visitorprofile-description p-3'>
            <h1>{t('visitorProfile.industry.title')}</h1>
            <ul className='whyvisit-list mt-3'>
              <li>
                {t('visitorProfile.industry.item_1')}
              </li>
              <li>
                {t('visitorProfile.industry.item_2')}
              </li>
              <li>
                {t('visitorProfile.industry.item_3')}
              </li>
              <li>
                {t('visitorProfile.industry.item_4')}
              </li>
              <li>
                {t('visitorProfile.industry.item_5')}
              </li>
              <li>
                {t('visitorProfile.industry.item_6')}
              </li>
              <li>
                {t('visitorProfile.industry.item_7')}
              </li>
              <li>
                {t('visitorProfile.industry.item_8')}
              </li>
              <li>
                {t('visitorProfile.industry.item_9')}
              </li>
              <li>
                {t('visitorProfile.industry.item_10')}
              </li>
              <li>
                {t('visitorProfile.industry.item_11')}
              </li>
              <li>
                {t('visitorProfile.industry.item_12')}
              </li>
              <li>
                {t('visitorProfile.industry.item_13')}
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col md className='p-0 my-auto'>
          <div className='visitorprofile-description p-3'>
            <h1>{t('visitorProfile.buyers.title')}</h1>
            <p>{t('visitorProfile.buyers.item_1')}</p>
            <h5>{t('visitorProfile.buyers.item_2')}</h5>
            <p>{t('visitorProfile.buyers.item_3')}</p>
          </div>
        </Col>
        <Col md className='p-0 visitorprofile-parallax-two' />
      </Row>

    </>
  )
}
