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
export function Home () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  const [show, ref] = useNearScreen()
  return (
    <>
      <div className='home-newsletter'>
        <a href='#newsletter'>
          <svg width={30} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
          </svg> <strong>{t('footer.suscribe')}</strong>
        </a>
      </div>
      <div className='home-counter-video'>
        <Container className='pt-5 mt-5 text-center home-counterdown-timer'>
          <Row>
            <Col md={5}>
              {
                stateLang === 'en'
                  ? <img src='/ITM-HOME2024-ENV2.webp' alt='ITM' width={526} height={413} className='w-100 h-100' />
                  : <img src='/ITM-HOME2024-ESV2.webp' alt='ITM' width={526} height={413} className='w-100 h-100' />
              }
            </Col>
          </Row>
        </Container>
        <div className='position-absolute top-0 w-100 h-100'>
          <video
            muted
            loop
            autoPlay
            playsInline
            poster='/BG-ITM-2024.webp'
          >
            <source
              src='/BG-ITM-2024.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>

      <Container className='home mt-5 pb-4'>
        <Row>
          <Col md className='my-auto'>
            <h3 className='fw-bold text-start title-reasons'>{t('home.highlights_ITM2022')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('home.description') }} />
          </Col>
          <Col md>
            <img src='/homeITM.webp' alt='ITM 2023' className='w-100' loading='lazy' />
          </Col>
        </Row>
      </Container>
      <div ref={ref}>
        <Container>
          {show &&
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
            </Row>}
          <h3 className='fw-bold text-center title-reasons fs-2 mt-5 mb-5'>
            Highlights ITM 2023
          </h3>
          <Gallery />
        </Container>
        <WhyExhibit />
        <Container>
          <h3 className='mt-5 mb-4'>{t('menu.exhibitors')}</h3>
          <ExibitorSlide />
          <h3 className='mt-5 mb-5'>{t('home.sponsors')}</h3>
          <Row className='text-center  pb-5'>
            <Col md={4}>
              <a href='https://www.se.com/mx/es/' target='_blank' rel='noreferrer'>
                <img src='/logoSchneider.webp' width={185} loading='lazy' alt='schneider' className='py-3' />
              </a>
            </Col>
            <Col md={4}>
              <a href='https://mx.mitsubishielectric.com/fa/en' target='_blank' rel='noreferrer'>
                <img src='/mitsubishi.webp' width={250} loading='lazy' alt='mitsubishi' className='py-3' />
              </a>
            </Col>
            <Col md={4}>
              <a href='https://new.siemens.com/mx/es.htm' target='_blank' rel='noreferrer'>
                <img src='/siemens.webp' width={300} height={150} loading='lazy' alt='siemens' />
              </a>
            </Col>
          </Row>
          <h3 className='mt-5 mb-3'>{t('home.digital')}</h3>
          <p className='text-center'>
            <a href='https://www.beckhoff.com/es-mx/' target='_blank' rel='noreferrer'>
              <img className='home-digital-logo' src='/Beckhoff.webp' loading='lazy' alt='BecjHoff' width={400} height={130} />
            </a>
          </p>

          <h3 className='mt-5 mb-5'>{t('home.gold_sponsors')}</h3>
          <Row className='text-center'>
            <Col md className='mx-auto my-auto'>
              <a href='https://www.cisco.com/c/es_mx/index.html' target='_blank' rel='noreferrer'>
                <img src='/ciscopartner.webp' width={180} height={142} loading='lazy' alt='cisco' />
              </a>
            </Col>
            <Col md className='mx-auto my-auto'>
              <a href='https://www.ikusi.com/mx/' target='_blank' rel='noreferrer'>
                <img className='my-5' src='/Ikusi.webp' width={180} height={79} loading='lazy' alt='ikusi' />
              </a>
            </Col>
            <Col md className='my-auto'>
              <a href='https://isat.com.mx/' target='_blank' rel='noreferrer'>
                <img className='my-4' src='/isat.webp' width={180} loading='lazy' alt='isat' />
              </a>
            </Col>
          </Row>
          <Row className='text-center'>
            <Col md className='my-auto'>
              <a href='https://www.plannet.mx/' target='_blank' rel='noreferrer'>
                <img className='my-4' src='/planet.webp' width={250} height={166} loading='lazy' alt='planet' />
              </a>
            </Col>
            <Col md className='mx-auto my-auto'>
              <a href='https://www.roue.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/roue.webp' width={220} loading='lazy' alt='roue' />
              </a>
            </Col>
          </Row>
          <h3 className='mt-5 mb-5'>{t('home.silver_sponsor')}</h3>
          <Row className='text-center'>
            <Col md={3} className='mx-auto'>
              <a href='https://www.nokia.com/es_int/' target='_blank' rel='noreferrer'>
                <img src='/nokia.webp' width={250} loading='lazy' alt='nokia' />
              </a>
            </Col>
          </Row>
          <h3 className='mt-5 mb-5'>{t('home.content_partners')}</h3>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://claroty.com/' target='_blank' rel='noreferrer'>
                <img src='/claroty.webp' width={290} loading='lazy' alt='claroty' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://hexagon.com/' target='_blank' rel='noreferrer'>
                <img src='/hexagon.webp' width={290} loading='lazy' alt='hexagon' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://hitachi.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/hitachi.webp' width={240} height={127} loading='lazy' alt='hitachi' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.hitachienergy.com/' target='_blank' rel='noreferrer'>
                <img src='/hitachi-energy.webp' width={290} height={153} loading='lazy' alt='hitachi-energy' />
              </a>
            </Col>
          </Row>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://ientc.com/' target='_blank' rel='noreferrer'>
                <img src='/ientc.webp' width={250} loading='lazy' alt='ientc' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://mx.kaeser.com/' target='_blank' rel='noreferrer'>
                <img src='/kaeser_1.webp' width={250} height={117} loading='lazy' alt='kaeser' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.boschrexroth.com/es/mx/' target='_blank' rel='noreferrer'>
                <img src='/rexroth.webp' width={200} height={133} loading='lazy' alt='rexroth' />
              </a>
            </Col>
          </Row>
          <h3 className='mt-5 mb-5'>{t('home.industry_partners')}</h3>
          <Row className='text-center'>
            <Col md={3} className='mx-auto'>
              <a href='https://www.concamin.org.mx/inicio' target='_blank' rel='noreferrer'>
                <img src='/concamin.webp' width={250} height={150} loading='lazy' alt='concamin' />
              </a>
            </Col>
          </Row>
          <AlliesStrategicSlide />
          <SocialMediaSlide />

        </Container>
        <section className='home-gallery' id='newsletter'>
          <Container className='pt-5 pb-5'>
            <h3><strong>{t('footer.suscribe')}</strong></h3>
            {show && <Subscribe />}
          </Container>
        </section>
      </div>
      <Contacts />
    </>
  )
}
