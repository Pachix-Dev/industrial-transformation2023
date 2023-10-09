import { useTranslation } from 'react-i18next'
import { Col, Container, Ratio, Row } from 'react-bootstrap'
import { Slider } from './Slider'
import { Contacts } from '../Contacts'

import './Home.css'

import { ExibitorSlide } from './ExibitorSlide'
import { useLanguage } from '../hooks/useLanguage'
import { Subscribe } from '../Subscribe'
export function Home () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  return (
    <>
      <div className='home-newsletter'>
        <a href='#newsletter'>
          <svg width={30} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
          </svg> <strong>{t('footer.suscribe')}</strong>
        </a>
      </div>
      <div className='home-counter-video'>
        <Container className='pt-5 mt-5 text-center home-counterdown-timer'>
          <Row>
            <Col md={6}>
              {
                stateLang === 'en'
                  ? <img src='/Construyamos_eng.webp' alt='ITM' className='w-100' />
                  : <img src='/Construyamos.webp' alt='ITM' className='w-100' />
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
        <div className='home-files-download'>
          <a className='home-register' href='/files/Floorplan-ITM-2024.pdf' target='_blank' rel='noreferrer'>
            <span className='d-md-flex justify-content-evenly fw-bold'>
              {t('menu.exhibitors_5')}
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={25}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75' />
              </svg>
            </span>
          </a>
          <a className='home-register' href='/files/Factsheet-ITM-2024.pdf' target='_blank' rel='noreferrer'>
            <span className='d-md-flex justify-content-evenly fw-bold'>Factsheet 2024
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={25}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75' />
              </svg>
            </span>

          </a>
          <a className='home-register' href='/files/Contract-ITM-2024.pdf' target='_blank' rel='noreferrer'>
            <span className='d-md-flex justify-content-evenly fw-bold'>
              {t('menu.exhibitors_6')}
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={25}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75' />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <Container className='home mt-5 pb-4'>
        <h2 className='mt-5'>{t('home.highlights_ITM2022')}</h2>
        <Row className='text-center'>
          <Col md={8} className='mx-auto'>
            <Ratio aspectRatio='16x9'>
              {
                stateLang === 'en'
                  ? <iframe
                      src='https://www.youtube-nocookie.com/embed/rj6ubgIR6Do'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  : <iframe
                      src='https://www.youtube-nocookie.com/embed/6_H5V9p5UZA'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
              }

            </Ratio>
          </Col>
        </Row>
        <h2 className='mt-5 mb-4'>{t('menu.exhibitors')}</h2>
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
              <img src='/siemens.webp' width={300} loading='lazy' alt='siemens' />
            </a>
          </Col>
        </Row>
        <h3 className='mt-5 mb-3'>{t('home.digital')}</h3>
        <p className='text-center'>
          <a href='https://www.beckhoff.com/es-mx/' target='_blank' rel='noreferrer'>
            <img className='home-digital-logo' src='/Beckhoff.webp' loading='lazy' alt='BecjHoff' width={400} />
          </a>
        </p>

        <h3 className='mt-5 mb-5'>{t('home.gold_sponsors')}</h3>
        <Row className='text-center'>
          <Col md className='mx-auto my-auto'>
            <a href='https://www.cisco.com/c/es_mx/index.html' target='_blank' rel='noreferrer'>
              <img src='/ciscopartner.webp' width={180} loading='lazy' alt='cisco' />
            </a>
          </Col>
          <Col md className='mx-auto my-auto'>
            <a href='https://www.ikusi.com/mx/' target='_blank' rel='noreferrer'>
              <img className='my-5' src='/Ikusi.webp' width={180} loading='lazy' alt='ikusi' />
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
              <img className='my-4' src='/planet.webp' width={250} loading='lazy' alt='planet' />
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
              <img src='/hitachi.webp' width={240} loading='lazy' alt='hitachi' />
            </a>
          </Col>
          <Col md={3} className='mx-auto my-auto'>
            <a href='https://www.hitachienergy.com/' target='_blank' rel='noreferrer'>
              <img src='/hitachi-energy.webp' width={290} loading='lazy' alt='hitachi-energy' />
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
              <img src='/kaeser_1.webp' width={250} loading='lazy' alt='kaeser' />
            </a>
          </Col>
          <Col md={3} className='mx-auto my-auto'>
            <a href='https://www.boschrexroth.com/es/mx/' target='_blank' rel='noreferrer'>
              <img src='/rexroth.webp' width={200} loading='lazy' alt='rexroth' />
            </a>
          </Col>
        </Row>
        <h3 className='mt-5 mb-5'>{t('home.industry_partners')}</h3>
        <Row className='text-center'>
          <Col md={3} className='mx-auto'>
            <a href='https://www.concamin.org.mx/inicio' target='_blank' rel='noreferrer'>
              <img src='/concamin.webp' width={250} loading='lazy' alt='concamin' />
            </a>
          </Col>
        </Row>
        <h3 className='mt-5 mb-5'>{t('home.strategic_allies')}</h3>
        <Row className='text-center'>
          <Col md={3} className='mx-auto'>
            <a href='https://www.a3mexico.com.mx/a3' target='_blank' rel='noreferrer'>
              <img src='/A3.webp' width={190} loading='lazy' alt='A3' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://mexiko.ahk.de/es/' target='_blank' rel='noreferrer'>
              <img src='/ahk.webp' width={190} loading='lazy' alt='ahk' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://www.canieti.org/inicio.aspx' target='_blank' rel='noreferrer'>
              <img src='/canieti.webp' width={190} loading='lazy' alt='canieti' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://www.giz.de/en/worldwide/33041.html' target='_blank' rel='noreferrer'>
              <img src='/giz.webp' width={190} loading='lazy' alt='giz' />
            </a>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col md={3} className='mx-auto'>
            <a href='https://www.gobiernoabiertogto.org.mx/' target='_blank' rel='noreferrer'>
              <img src='/gto200.webp' width={190} loading='lazy' alt='gto200' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://aedual.mx/' target='_blank' rel='noreferrer'>
              <img src='/dual.webp' width={190} loading='lazy' alt='dual' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.kas.de/es/web/mexiko' target='_blank' rel='noreferrer'>
              <img src='/kas.webp' width={190} loading='lazy' alt='kas' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <img src='/pagsid.webp' width={190} loading='lazy' alt='pagsid' />
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.gob.mx/semarnat/acciones-y-programas/organizacion-de-las-naciones-unidas-para-el-desarrollo-industrial-onudi' target='_blank' rel='noreferrer'>
              <img src='/onudi.webp' width={190} loading='lazy' alt='onudi' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://enpact.org/' target='_blank' rel='noreferrer'>
              <img src='/enpact.webp' width={190} loading='lazy' alt='enpact' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://amsoc.mx/es/inicio/' target='_blank' rel='noreferrer'>
              <img src='/80amsoc.webp' width={190} loading='lazy' alt='80 amsoc' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.cinvestav.mx/' target='_blank' rel='noreferrer'>
              <img src='/cinvestav.webp' width={190} loading='lazy' alt='cinvestav' />
            </a>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col md={3} className='mx-auto'>
            <a href='https://www.franciamexico.com/' target='_blank' rel='noreferrer'>
              <img src='/camara-france.webp' width={200} loading='lazy' alt='cci-france' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://www.canchammx.com/' target='_blank' rel='noreferrer'>
              <img src='/cancham.webp' width={190} loading='lazy' alt='cancham' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://swisscham.mx/' target='_blank' rel='noreferrer'>
              <img src='/camaraSuizo.webp' width={190} loading='lazy' alt='camarasuizo' />
            </a>
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.platinum_media')}</h3>
        <p className='text-center'>
          <a href='https://efe.com/' target='_blank' rel='noreferrer'>
            <img src='/EFE.webp' loading='lazy' alt='EFE' width={200} />
          </a>
        </p>
        <Row className='text-center'>
          <Col md={3} className='mx-auto'>
            <a href='https://grupomultimedios.com/' target='_blank' rel='noreferrer'>
              <img src='/multimediosLogo.webp' width={200} loading='lazy' alt='Multimedios' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://globalenergy.mx/' target='_blank' rel='noreferrer'>
              <img src='/globalenergy.webp' width={200} loading='lazy' alt='GlobalEnergy' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://globalindustries.mx/' target='_blank' rel='noreferrer'>
              <img src='/globalindustries.webp' width={200} loading='lazy' alt='Global industries ' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://www.clusterindustrial.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/cluster.webp' width={200} loading='lazy' alt='cluster industrial' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://www.eleconomista.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/eleconomista.webp' width={200} loading='lazy' alt='el economista' />
            </a>
          </Col>
          <Col md={3} className='mx-auto my-auto'>
            <a href='https://dplnews.com/' target='_blank' rel='noreferrer'>
              <img src='/dpl.webp' width={200} loading='lazy' alt='dpl' />
            </a>
          </Col>
          <Col md={3} className='mx-auto my-auto'>
            <a href='https://energyandcommerce.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/Energy-Commerce.webp' width={200} loading='lazy' alt='energy commerce' />
            </a>
          </Col>
          <Col md={3} className='mx-auto my-auto'>
            <a href='https://www.elsoldeleon.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/elsoldeleon.webp' width={240} loading='lazy' alt='El Sol de León' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://mexicoindustry.com/' target='_blank' rel='noreferrer'>
              <img src='/mexicoindustry.webp' width={200} loading='lazy' alt='mexico industry' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.vanguardia-industrial.net/' target='_blank' rel='noreferrer'>
              <img src='/vanguardia.webp' width={200} loading='lazy' alt='vanguardia ' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.am.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/am.webp' width={200} loading='lazy' alt='AM ' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://heraldodemexico.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/heraldo.webp' width={200} loading='lazy' alt='Heraldo' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.directorioautomotriz.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/directorioauto.webp' width={200} loading='lazy' alt='Directorio automotriz ' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://cuatro-cero.mx/' target='_blank' rel='noreferrer'>
              <img src='/cuatrocero.webp' width={200} loading='lazy' alt='cuatro cero' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://revistaconsultoria.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/revistaconsultoria.webp' width={200} loading='lazy' alt='vanguardia ' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='http://www.revistadp.com/' target='_blank' rel='noreferrer'>
              <img src='/revistapreferencia.webp' width={200} loading='lazy' alt='vanguardia ' />
            </a>
          </Col>
        </Row>

      </Container>
      <section className='home-gallery' id='newsletter'>
        <Container className='pt-5 pb-5'>
          <h3><strong>{t('footer.suscribe')}</strong></h3>
          <Subscribe />
        </Container>
      </section>
      <Contacts />
    </>
  )
}
