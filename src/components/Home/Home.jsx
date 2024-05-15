import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { Contacts } from '../Contacts'

import './Home.css'

import { ExibitorSlide } from './ExibitorSlide'
import { useLanguage } from '../hooks/useLanguage'
import { Subscribe } from '../Subscribe'
import { useNearScreen } from '../hooks/useNearScreen'
import { Gallery } from './Gallery'
import { Bullets } from './Bullets'
import { WhyExhibit } from '../WhyExhibit/WhyExhibit'
import { AlliesStrategicSlide } from './AlliesStrategicSlide'
import { SocialMediaSlide } from './SocialMediaSlide'
import { MarqueeReact } from './MarqueeReact'
import {exhibitors_1, exhibitors_2} from '../../constans_logos'

export function Home() {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  const [show, ref] = useNearScreen()
  return (
    <>
      <div className='home-newsletter'>
        <a href='#newsletter'>
          <svg
            width={30}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>{' '}
          <strong>{t('footer.suscribe')}</strong>
        </a>
      </div>
      <div className='home-counter-video'>
        <Container className='pt-5 mt-5 text-center home-counterdown-timer'>
          <Row>
            <Col md={5}>
              {stateLang === 'en' ? (
                <img
                  src='/ITMTEXTENGACFEBv2.webp'
                  alt='ITM'
                  width={526}
                  height={413}
                  className='w-100 h-100'
                />
              ) : (
                <img
                  src='/ITMKVTEXTOESPv1.webp'
                  alt='ITM'
                  width={526}
                  height={413}
                  className='w-100 h-100'
                />
              )}
            </Col>
          </Row>
        </Container>
        <div className='position-absolute top-0 w-100 h-100'>
          <video muted loop autoPlay playsInline poster='/BG-ITM-2024.webp'>
            <source src='/BG-ITM-2024.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      <Container fluid className='mt-5'>
        <h1 className='text-center text-secondary fs-2 fw-bold'>{t('home.title-sponsors')}</h1>
        <h3 className='mt-5'>{t('home.sponsors')}</h3>
        <Row className='gap-2 md:justify-content-md-center align-items-center justify-content-center'>
          <Col xs={5} sm={4} md={4} lg={3} className='d-flex justify-content-center'>
            <a href='https://mx.mitsubishielectric.com/fa/en/' target='_blank' rel='noreferrer'>
              <img src='/mitsubishi.webp' className='img-fluid' loading='lazy'
                alt=""
              />
            </a>
          </Col>
          <Col xs={5} sm={4} md={4} lg={3} className='d-flex justify-content-center'>
            <a href='http://www.misumimex.com/' target='_blank' rel='noreferrer'>
              <img src="/misumi.webp" alt="" className="img-fluid" loading='lazy' />
            </a>
          </Col>
          <Col xs={5} sm={4} md={4} lg={3} className="d-flex justify-content-center">
  <a href="http://www.misumimex.com/" target="_blank" rel="noreferrer">
    <img src="/exhibitors/schneider.webp" alt="" className="img-fluid px-4" loading="lazy" />
  </a>
</Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <h3 className='mt-5 mb-4'>{t('menu.title_exhibitors')} 2024</h3>
        <MarqueeReact images={exhibitors_1} />
        <MarqueeReact images={exhibitors_2} direction="left"/>
      </Container>


      <WhyExhibit />
      {/* <Container className='home mt-5 pb-4'>
        <Row>
          <Col md className='my-auto'>
            <h3 className='fw-bold text-start title-reasons'>
              {t('home.highlights_ITM2022')}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t('home.description') }} />
          </Col>
          <Col md>
            <img
              src='/homeITM.webp'
              alt='ITM 2023'
              className='w-100'
              loading='lazy'
            />
          </Col>
        </Row>
      </Container> */}
      <div ref={ref}>
        <Container fluid>
          {show && (
            <Row className='mt-5 pb-5'>
              <Col md className='item-num with-background align-bottom pb-4'>
                <div className='text-center fw-bold'>
                  <Bullets number='15000' duration='4' />
                  <i>{t('home.bullet_1')}</i>
                </div>
              </Col>
              <Col md className='item-num with-background2 align-bottom pb-4'>
                <div className='text-center fw-bold'>
                  <Bullets number='5000' duration='4' />
                  <i>{t('home.bullet_2')}</i>
                </div>
              </Col>
              <Col md className='item-num with-background3 align-bottom pb-4'>
                <div className='text-center fw-bold'>
                  <Bullets number='1370' duration='4' />
                  <i>{t('home.bullet_3')}</i>
                </div>
              </Col>
              <Col md className='item-num with-background4 align-bottom pb-4'>
                <div className='text-center fw-bold'>
                  <Bullets number='260' duration='4' />
                  <i>{t('home.bullet_4')}</i>
                </div>
              </Col>
              <Col md className='item-num with-background5 align-bottom pb-4'>
                <div className='text-center fw-bold '>
                  <Bullets number='13700' duration='4' simbol='m2' />
                  <i>{t('home.bullet_5')}</i>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
      {/* <Container>
        <h3 className='mt-5 mb-4'>{t('menu.exhibitors')} 2023</h3>
        <ExibitorSlide />
      </Container> */}
      <Container>
        <AlliesStrategicSlide />
        <SocialMediaSlide />
      </Container>
      <Container>
        <h3 className='fw-bold text-center title-reasons fs-2 mt-5 mb-5'>
          Highlights ITM 2023
        </h3>
        <Gallery />
      </Container>
      <Contacts />
      <section className='home-gallery' id='newsletter'>
        <Container className='pt-5 pb-5'>
          <h3>
            <strong>{t('footer.suscribe')}</strong>
          </h3>
          {show && <Subscribe />}
        </Container>
      </section>
    </>
  )
}
