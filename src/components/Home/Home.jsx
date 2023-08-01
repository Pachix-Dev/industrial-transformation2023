import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { CounterDown } from './CounterDown'
import { Slider } from './Slider'
import { galleryHome } from '../constants_gallery'
import { Gallery } from '../Gallery/Gallery'
import { Contacts } from '../Contacts'

import './Home.css'

import { ExibitorSlide } from './ExibitorSlide'
export function Home () {
  const { t } = useTranslation()
  return (
    <>
      <div className='home-counter-video'>
        <CounterDown />
        <div className='position-absolute top-0 w-100 h-100'>
          <video
            muted
            loop
            autoPlay
            playsInline
            poster='/posterVideo.webp'
          >
            <source
              src='/VIDEO COUNTDOWN ITM 2023.webm'
              type='video/webm'
            />
          </video>
        </div>
      </div>

      <Container className='home mt-5 pb-4'>
        <Slider />
        <h2 className='mt-5'>{t('home.highlights_ITM2022')}</h2>
        <Row className='text-center'>
          <Col md={8} className='mx-auto'>
            <a href='https://youtu.be/_API66_gvnk' target='_blank' rel='noreferrer'>
              <img
                src='/posterYoutube.webp' alt='Video Poster'
                className='w-100'
              />
            </a>
          </Col>
        </Row>
        <h2 className='mt-5'>{t('menu.exhibitors')}</h2>
        <ExibitorSlide />

        <h3 className='mt-5 mb-5'>{t('home.sponsors')}</h3>
        <Row className='text-center'>
          <Col md={4}>
            <a href='https://www.se.com/mx/es/' target='_blank' rel='noreferrer'>
              <img src='/logoSchneider.webp' width={250} loading='lazy' alt='schneider' />
            </a>
          </Col>
          <Col md={4}>
            <a href='https://mx.mitsubishielectric.com/fa/en' target='_blank' rel='noreferrer'>
              <img src='/mitsubishi.webp' width={250} loading='lazy' alt='mitsubishi' />
            </a>
          </Col>
          <Col md={4}>
            <a href='https://new.siemens.com/mx/es.htm' target='_blank' rel='noreferrer'>
              <img src='/siemens.webp' width={250} loading='lazy' alt='siemens' />
            </a>
          </Col>
        </Row>
        <h3 className='mt-5 mb-5'>{t('home.digital')}</h3>
        <p className='text-center'>
          <a href='hhttps://www.beckhoff.com/es-mx/' target='_blank' rel='noreferrer'>
            <img className='home-digital-logo' src='/Beckhoff.webp' loading='lazy' alt='BecjHoff' width={400} />
          </a>
        </p>

        <h3 className='mt-5 mb-5'>{t('home.gold_sponsors')}</h3>
        <Row className='text-center'>
          <Col md className='mx-auto'>
            <a href='https://www.cisco.com/c/es_mx/index.html' target='_blank' rel='noreferrer'>
              <img src='/ciscopartner.webp' width={180} loading='lazy' alt='cisco' />
            </a>
          </Col>
          <Col md className='mx-auto'>
            <a href='https://www.roue.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/roue.webp' width={180} loading='lazy' alt='roue' />
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
          <Col md={3} className='mx-auto'>
            <a href='https://ientc.com/' target='_blank' rel='noreferrer'>
              <img src='/ientc.webp' width={200} loading='lazy' alt='ientc' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://mx.kaeser.com/' target='_blank' rel='noreferrer'>
              <img src='/kaeser.webp' width={200} loading='lazy' alt='kaeser' />
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
            <a href='https://www.canchammx.com/' target='_blank' rel='noreferrer'>
              <img src='/cancham.webp' width={190} loading='lazy' alt='cancham' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://swisscham.mx/' target='_blank' rel='noreferrer'>
              <img src='/camaraSuizo.webp' width={190} loading='lazy' alt='camarasuizo' />
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

        <h3 className='mt-5 mb-5'>{t('home.platinum_media')}</h3>
        <p className='text-center'>
          <a href='https://efe.com/' target='_blank' rel='noreferrer'>
            <img src='/EFE.webp' loading='lazy' alt='EFE' width={200} />
          </a>
        </p>
        <Row className='text-center'>
          <Col md={3} className='mx-auto'>
            <a href='https://www.clusterindustrial.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/cluster.webp' width={200} loading='lazy' alt='cluster industrial' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://cuatro-cero.mx/' target='_blank' rel='noreferrer'>
              <img src='/cuatrocero.webp' width={200} loading='lazy' alt='cuatro cero' />
            </a>
          </Col>

          <Col md={3} className='mx-auto'>
            <a href='https://www.eleconomista.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/eleconomista.webp' width={200} loading='lazy' alt='el economista' />
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
            <a href='https://www.directorioautomotriz.com.mx/' target='_blank' rel='noreferrer'>
              <img src='/directorioauto.webp' width={200} loading='lazy' alt='Directorio automotriz ' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://globalenergy.mx/' target='_blank' rel='noreferrer'>
              <img src='/globalenergy.webp' width={200} loading='lazy' alt='vanguardia ' />
            </a>
          </Col>
          <Col md={3} className='mx-auto'>
            <a href='https://globalindustries.mx/' target='_blank' rel='noreferrer'>
              <img src='/globalindustries.webp' width={200} loading='lazy' alt='vanguardia ' />
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

          <Col md={3} className='mx-auto my-auto'>
            <a href='https://dplnews.com/' target='_blank' rel='noreferrer'>
              <img src='/dpl.webp' width={200} loading='lazy' alt='dpl' />
            </a>
          </Col>
        </Row>

      </Container>
      <section className='home-gallery'>
        <Container className='pt-4'>
          <h3>{t('home.galery2022')}</h3>
          <Gallery galleryImgs={galleryHome} galleryName='gallery-home' />
          <div className='pb-5 pt-5'>
            <a href='/gallery' className='home-gallery-seemore'> VER MÁS</a>
          </div>
        </Container>
      </section>
      <Contacts />
    </>
  )
}
