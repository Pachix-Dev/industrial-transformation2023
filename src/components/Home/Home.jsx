import { useTranslation } from 'react-i18next'
import { CounterDown } from './CounterDown'
import './Home.css'
import { Slider } from './Slider'
import { Col, Container, Ratio, Row } from 'react-bootstrap'
import schneider from '../../assets/logoSchneider.webp'
import mitsubishi from '../../assets/mitsubishi.webp'
import siemens from '../../assets/siemens.webp'
import roue from '../../assets/roue.webp'
import cisco from '../../assets/ciscopartner.webp'
import nokia from '../../assets/nokia.webp'
import ientc from '../../assets/ientc.webp'
import kaeser from '../../assets/kaeser.webp'
import concamin from '../../assets/concamin.webp'
import A3 from '../../assets/A3.webp'
import ahk from '../../assets/ahk.webp'
import canieti from '../../assets/canieti.webp'
import giz from '../../assets/giz.webp'
import gto200 from '../../assets/gto200.webp'
import dual from '../../assets/dual.webp'
import kas from '../../assets/kas.webp'
import pagsid from '../../assets/pagsid.webp'
import onudi from '../../assets/onudi.webp'
import enpact from '../../assets/enpact.webp'
import cancham from '../../assets/cancham.webp'
import camarasuizo from '../../assets/camaraSuizo.webp'
import amsoc80 from '../../assets/80amsoc.webp'
import cinvestav from '../../assets/cinvestav.webp'
import grupomilenio from '../../assets/grupomilenio.webp'
import EFE from '../../assets/EFE.webp'
import heraldo from '../../assets/heraldo.webp'
import cluster from '../../assets/cluster.webp'
import cuatrocero from '../../assets/cuatrocero.webp'
import eleconomista from '../../assets/eleconomista.webp'
import mexicoindustry from '../../assets/mexicoindustry.webp'
import vanguardia from '../../assets/vanguardia.webp'
import am from '../../assets/am.webp'
import directorioauto from '../../assets/directorioauto.webp'
import globalenergy from '../../assets/globalenergy.webp'
import globalindustries from '../../assets/globalindustries.webp'
import revistaconsultoria from '../../assets/revistaconsultoria.webp'
import revistapreferencia from '../../assets/revistapreferencia.webp'
import dpl from '../../assets/dpl.webp'
import Beckhoff from '../../assets/Beckhoff.webp'

import { galleryHome } from '../constants_gallery'
import { Gallery } from '../Gallery/Gallery'
import { Contacts } from '../Contacts'

import ReactPlayer from 'react-player'
import postervideo from '../../assets/posterVideo.webp'

export function Home () {
  const { t } = useTranslation()
  return (
    <>

      <div className='home-counter-video'>
        <CounterDown />
        <div className='position-absolute top-0 w-100 h-100'>
          <ReactPlayer
            url='/VIDEO COUNTDOWN ITM 2023.webm'
            width='100%'
            height='auto'
            playing // Autoplay
            loop
            muted
            playsinline
            config={{
              file: {
                attributes: {
                  poster: postervideo
                }
              }
            }}
          />
        </div>
      </div>
      <Slider />
      <Container className='home mt-5'>
        <h2>{t('home.highlights_ITM2022')}</h2>
        <Row>
          <Col md={8} className='mx-auto'>
            <Ratio aspectRatio='16x9' className='mt-5'>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=_API66_gvnk'
                width='100%'
                height='100%'
                playing={false} // Autoplay
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />

            </Ratio>
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.sponsors')}</h3>
        <Row>
          <Col md={4}>
            <img src={schneider} className='w-100' loading='lazy' alt='schneider' />
          </Col>
          <Col md={4}>
            <img src={mitsubishi} className='w-100' loading='lazy' alt='mitsubishi' />
          </Col>
          <Col md={4}>
            <img src={siemens} className='w-100' loading='lazy' alt='siemens' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.digital')}</h3>
        <Row>
          <Col md={4} className='mx-auto'>
            <img src={Beckhoff} className='w-100' loading='lazy' alt='Beckhoff_NAT' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.gold_sponsors')}</h3>
        <Row>
          <Col md={2} className='mx-auto'>
            <img src={cisco} className='w-100' loading='lazy' alt='cisco' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={roue} className='w-100' loading='lazy' alt='roue' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.silver_sponsor')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={nokia} className='w-100' loading='lazy' alt='nokia' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.content_partners')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={ientc} className='w-100' loading='lazy' alt='ientc' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={kaeser} className='w-100' loading='lazy' alt='kaeser' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.industry_partners')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={concamin} className='w-100' loading='lazy' alt='concamin' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.strategic_allies')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={A3} className='w-100' loading='lazy' alt='A3' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={ahk} className='w-100' loading='lazy' alt='ahk' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={canieti} className='w-100' loading='lazy' alt='canieti' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={giz} className='w-100' loading='lazy' alt='giz' />
          </Col>
        </Row>

        <Row>
          <Col md className='mx-auto'>
            <img src={gto200} className='w-100' loading='lazy' alt='gto200' />
          </Col>
          <Col md className='mx-auto'>
            <img src={dual} className='w-100' loading='lazy' alt='dual' />
          </Col>
          <Col md className='mx-auto'>
            <img src={kas} className='w-100' loading='lazy' alt='kas' />
          </Col>
          <Col md className='mx-auto'>
            <img src={pagsid} className='w-100' loading='lazy' alt='pagsid' />
          </Col>
          <Col md className='mx-auto'>
            <img src={onudi} className='w-100' loading='lazy' alt='onudi' />
          </Col>
        </Row>

        <Row>
          <Col md className='mx-auto'>
            <img src={enpact} className='w-100' loading='lazy' alt='enpact' />
          </Col>
          <Col md className='mx-auto'>
            <img src={cancham} className='w-100' loading='lazy' alt='cancham' />
          </Col>
          <Col md className='mx-auto'>
            <img src={camarasuizo} className='w-100' loading='lazy' alt='camarasuizo' />
          </Col>
          <Col md className='mx-auto'>
            <img src={amsoc80} className='w-100' loading='lazy' alt='80 amsoc' />
          </Col>
          <Col md className='mx-auto'>
            <img src={cinvestav} className='w-100' loading='lazy' alt='cinvestav' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.broadcasting')}</h3>
        <Row>
          <Col md={3} className='mx-auto'>
            <img src={grupomilenio} className='w-100' loading='lazy' alt='grupo milenio' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={EFE} className='w-100' loading='lazy' alt='EFE' />
          </Col>
          <Col md={3} className='mx-auto'>
            <img src={heraldo} className='w-100' loading='lazy' alt='el heraldo' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.platinum_media')}</h3>
        <Row>
          <Col md className='mx-auto'>
            <img src={cluster} className='w-100' loading='lazy' alt='cluster industrial' />
          </Col>
          <Col md className='mx-auto'>
            <img src={cuatrocero} className='w-100' loading='lazy' alt='cuatro cero' />
          </Col>
          <Col md className='mx-auto'>
            <img src={eleconomista} className='w-100' loading='lazy' alt='el economista' />
          </Col>
          <Col md className='mx-auto'>
            <img src={mexicoindustry} className='w-100' loading='lazy' alt='mexico industry' />
          </Col>
          <Col md className='mx-auto'>
            <img src={vanguardia} className='w-100' loading='lazy' alt='vanguardia ' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.gold_media_partners')}</h3>
        <Row>
          <Col md={2} className='mx-auto'>
            <img src={am} className='w-100' loading='lazy' alt='am' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={directorioauto} className='w-100' loading='lazy' alt='directorio automotriz' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={globalenergy} className='w-100' loading='lazy' alt='global energy' />
          </Col>
        </Row>
        <Row>
          <Col md={2} className='mx-auto'>
            <img src={globalindustries} className='w-100' loading='lazy' alt='global industries' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={revistaconsultoria} className='w-100' loading='lazy' alt='revista consultoria' />
          </Col>
          <Col md={2} className='mx-auto'>
            <img src={revistapreferencia} className='w-100' loading='lazy' alt='revista de preferencia' />
          </Col>
        </Row>

        <h3 className='mt-5 mb-5'>{t('home.silver_media_partners')}</h3>
        <Row className='mb-5'>
          <Col md={3} className='mx-auto'>
            <img src={dpl} className='w-100' loading='lazy' alt='dpl' />
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
