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
            <a  href='http://www.misumimex.com/' target='_blank' rel='noreferrer'>
              <img src="/misumi.webp" alt="" className="img-fluid" loading='lazy'/>      
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid className='my-5'>
        <h3 className='mt-5 mb-4'>{t('menu.title_exhibitors')} 2024</h3>
        <Row className='gap-2 md:justify-content-md-center align-items-center justify-content-center pt-4'>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.benq.com/es-mx/index.html" target='_blank'>
              <img src="/exhibitors/benq.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
           <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="http://www.ryasa.com.mx/" target='_blank'>
              <img src="/exhibitors/ryasa.webp" alt="ryasa" className="img-fluid"/>      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.euchner.mx/" target='_blank'>
              <img src="/exhibitors/euchner.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.ifm.com/mx/" target='_blank'>
              <img src="/exhibitors/ifm.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
        </Row>
        <Row className='gap-2 md:justify-content-md-center align-items-center justify-content-center pt-4'>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.ika.technology/" target='_blank'>
              <img src="/exhibitors/ika.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.infoportal-mx.com/" target='_blank'>
              <img src="/exhibitors/info-portal.webp" alt="" className="img-fluid"/>     
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://shop.knipex.com.mx/" target='_blank'>
              <img src="/exhibitors/knipex.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://store.lacasadelcontrol.com.mx/" target='_blank'>
              <img src="/exhibitors/ccg.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
        </Row>
        <Row className='gap-2 md:justify-content-md-center align-items-center justify-content-center pt-4'>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.leanmdc.com/" target='_blank'>
              <img src="/exhibitors/lean-mdc.webp" alt="" className="img-fluid"/>     
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://mx.misumi-ec.com/es/" target='_blank'>
              <img src="/exhibitors/misumi.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.mitutoyo.com.mx/es_MX" target='_blank'>
              <img src="/exhibitors/mitutoyo.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href='https://mx.mitsubishielectric.com/fa/en/' target='_blank' rel='noreferrer'>
              <img src='/mitsubishi.webp' className='img-fluid' loading='lazy'alt='mitsubishi'/>
            </a>
          </Col>
        </Row>
        <Row className='gap-2 md:justify-content-md-center align-items-center justify-content-center pt-4'>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.mytec.mx/" target='_blank'>
              <img src="/exhibitors/mytec.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://lasalle.mx/" target='_blank'>
              <img src="/exhibitors/la-salle.webp" alt="" className="img-fluid"/>      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.tecmilenio.mx/es" target='_blank'>
              <img src="/exhibitors/tec-milenio.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.wago.com/mx-es/" target='_blank'>
              <img src="/exhibitors/wago.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
        </Row>
        <Row className='gap-2 md:justify-content-md-center align-items-center justify-content-center pt-4'>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="" target='_blank'>
              <img src="/exhibitors/pulsar.webp" alt="pulsar" className="img-fluid" />      
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} className='d-flex justify-content-center'>
            <a href="https://www.ckdmex.com.mx/" target='_blank'>
              <img src="/exhibitors/ckd.webp" alt="" className="img-fluid" />      
            </a>
          </Col>
        </Row>
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
        <Container>
          {show && (
            <Row className='mt-5 pb-5'>
              <Col md>
                <Bullets number='15000' duration='4' />
                <div className='text-center fw-bold'>
                  <i>{t('home.bullet_1')}</i>
                </div>
              </Col>
              <Col md>
                <Bullets number='5000' duration='4' />
                <div className='text-center fw-bold'>
                  <i>{t('home.bullet_2')}</i>
                </div>
              </Col>
              <Col md>
                <Bullets number='1370' duration='4' />
                <div className='text-center fw-bold'>
                  <i>{t('home.bullet_3')}</i>
                </div>
              </Col>
              <Col md>
                <Bullets number='260' duration='4' />
                <div className='text-center fw-bold'>
                  <i>{t('home.bullet_4')}</i>
                </div>
              </Col>
              <Col md>
                <Bullets number='13700' duration='4' simbol='m2' />
                <div className='text-center fw-bold '>
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
