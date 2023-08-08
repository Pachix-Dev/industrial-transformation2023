import { useTranslation } from 'react-i18next'
import './Background.css'
import { Col, Container, Ratio, Row } from 'react-bootstrap'
import bgwebsite from '../../assets/BannersWebSiteCita2.webp'
export function Background () {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <img src={bgwebsite} className='w-100 mt-5' />
      </Container>
      <Container fluid className='mb-5'>
        <div className='m-5'>
          <h1 className='title-background'>{t('background.title')}</h1>
          <p className='text-description'>{t('background.description_1')}</p>
        </div>
        <Row className='background-wrapper-stadistic justify-content-center'>
          <Col md={2} className='border-end border-2 d-grid align-items-center'>
            <p dangerouslySetInnerHTML={{ __html: t('background.stadistic_1') }} />
          </Col>
          <Col md={2} className='border-end border-2 d-grid align-items-center'>
            <p dangerouslySetInnerHTML={{ __html: t('background.stadistic_2') }} />
          </Col>
          <Col md={2} className='border-end border-2'>
            <h2 className='text-center' dangerouslySetInnerHTML={{ __html: t('background.stadistic_3') }} />
            <p className='fs-4'>{t('background.stadistic_3_1')}
            </p>
          </Col>
          <Col md={2} className='d-grid align-items-center'>
            <p dangerouslySetInnerHTML={{ __html: t('background.stadistic_4') }} />
          </Col>
        </Row>
        <Row>
          <Col md={8} className='mx-auto'>
            <Ratio aspectRatio='16x9' className='mt-5'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/dM-LExvQw-A'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </>
  )
}
