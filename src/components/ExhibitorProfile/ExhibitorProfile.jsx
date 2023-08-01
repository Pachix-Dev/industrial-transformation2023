import { Col, Row } from 'react-bootstrap'
import './ExhibitorProfile.css'
import { useTranslation } from 'react-i18next'
export function ExhibitorProfile () {
  const { t } = useTranslation()
  return (
    <>
      <Row className='m-0'>
        <Col className='p-0'>
          <div className='container-parallax pt-5 pb-5'>
            <div className='cont-text'>
              <h1 className='pt-5 pb-5 title-exhibitor'>{t('profile.title')}</h1>
              <p className='pb-2'>{t('profile.countries')}</p>
              <p className=' text-drescription'>{t('profile.description')}</p>
              <div className='border-bottom border-2 border-light' />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}
