import { logos } from '../../components/constans_logos'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { CounterDown } from './CounterDown'
import { Slider } from './Slider'
import { galleryHome } from '../constants_gallery'
import { Gallery } from '../Gallery/Gallery'
import { Contacts } from '../Contacts'

import './Home.css'
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
            poster={logos.postervideo}
          >
            <source
              src='/VIDEO COUNTDOWN ITM 2023.webm'
              type='video/webm'
            />
          </video>
        </div>
      </div>

      <Container className='home mt-5'>
        <Slider />

        <h2 className='mt-5'>{t('home.highlights_ITM2022')}</h2>
        <Row>
          <Col md={8} className='mx-auto'>
            <a href='https://youtu.be/_API66_gvnk' target='_blank' rel='noreferrer'>
              <img
                src={logos.posterYotube} alt='Video Poster'
                className='w-100'
              />
            </a>
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.sponsors')}</h3>
        <Row>
          <Col md={4}>
            <img src={logos.schneider} className='w-100' loading='lazy' alt='schneider' />
          </Col>
          <Col md={4}>
            <img src={logos.mitsubishi} className='w-100' loading='lazy' alt='mitsubishi' />
          </Col>
          <Col md={4}>
            <img src={logos.siemens} className='w-100' loading='lazy' alt='siemens' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.digital')}</h3>
        <Row>
          <Col md={4} className='mx-auto'>
            <img src={logos.Beckhoff} className='w-100' loading='lazy' alt='Beckhoff_NAT' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.gold_sponsors')}</h3>
        <Row>
          <Col md={2} className='mx-auto'>
            <img src={logos.cisco} className='w-100' loading='lazy' alt='cisco' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={logos.roue} className='w-100' loading='lazy' alt='roue' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.silver_sponsor')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={logos.nokia} className='w-100' loading='lazy' alt='nokia' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.content_partners')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={logos.ientc} className='w-100' loading='lazy' alt='ientc' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={logos.kaeser} className='w-100' loading='lazy' alt='kaeser' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.industry_partners')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={logos.concamin} className='w-100' loading='lazy' alt='concamin' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.strategic_allies')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={logos.A3} className='w-100' loading='lazy' alt='A3' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={logos.ahk} className='w-100' loading='lazy' alt='ahk' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={logos.canieti} className='w-100' loading='lazy' alt='canieti' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={logos.giz} className='w-100' loading='lazy' alt='giz' />
          </Col>
        </Row>

        <Row>
          <Col md className='mx-auto'>
            <img src={logos.gto200} className='w-100' loading='lazy' alt='gto200' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.dual} className='w-100' loading='lazy' alt='dual' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.kas} className='w-100' loading='lazy' alt='kas' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.pagsid} className='w-100' loading='lazy' alt='pagsid' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.onudi} className='w-100' loading='lazy' alt='onudi' />
          </Col>
        </Row>

        <Row>
          <Col md className='mx-auto'>
            <img src={logos.enpact} className='w-100' loading='lazy' alt='enpact' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.cancham} className='w-100' loading='lazy' alt='cancham' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.camarasuizo} className='w-100' loading='lazy' alt='camarasuizo' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.amsoc80} className='w-100' loading='lazy' alt='80 amsoc' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.cinvestav} className='w-100' loading='lazy' alt='cinvestav' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.broadcasting')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={logos.grupomilenio} className='w-100' loading='lazy' alt='grupo milenio' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={logos.EFE} className='w-100' loading='lazy' alt='EFE' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={logos.heraldo} className='w-100' loading='lazy' alt='el heraldo' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.platinum_media')}</h3>
        <Row>
          <Col md className='mx-auto'>
            <img src={logos.cluster} className='w-100' loading='lazy' alt='cluster industrial' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.cuatrocero} className='w-100' loading='lazy' alt='cuatro cero' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.eleconomista} className='w-100' loading='lazy' alt='el economista' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.mexicoindustry} className='w-100' loading='lazy' alt='mexico industry' />
          </Col>
          <Col md className='mx-auto'>
            <img src={logos.vanguardia} className='w-100' loading='lazy' alt='vanguardia ' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.gold_media_partners')}</h3>
        <Row>
          <Col md={2} className='mx-auto'>
            <img src={logos.am} className='w-100' loading='lazy' alt='am' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={logos.directorioauto} className='w-100' loading='lazy' alt='directorio automotriz' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={logos.globalenergy} className='w-100' loading='lazy' alt='global energy' />
          </Col>
        </Row>
        <Row>
          <Col md={2} className='mx-auto'>
            <img src={logos.globalindustries} className='w-100' loading='lazy' alt='global industries' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={logos.revistaconsultoria} className='w-100' loading='lazy' alt='revista consultoria' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={logos.revistapreferencia} className='w-100' loading='lazy' alt='revista de preferencia' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.silver_media_partners')}</h3>
        <Row className='mb-5'>
          <Col md={3} className='mx-auto'>
            <img src={logos.dpl} className='w-100' loading='lazy' alt='dpl' />
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
