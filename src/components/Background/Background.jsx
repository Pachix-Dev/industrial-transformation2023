import { useTranslation } from 'react-i18next'
import './Background.css'
import infoEspanol from '../../assets/InfoEspanol.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import bgwebsite from './BannersWebSiteCita2.jpg'
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
        <Row>
          <Col md={6} className='mx-auto'>
            <img className='w-100' src={infoEspanol} alt='hannober-messe-2018' />
          </Col>
        </Row>
        <iframe className='video-container mt-5' width='70%' src='https://www.youtube.com/embed/dM-LExvQw-A' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
      </Container>

    </>

  )
}
