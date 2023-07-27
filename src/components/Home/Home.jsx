import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { CounterDown } from './CounterDown'
import { Slider } from './Slider'
import { galleryHome } from '../constants_gallery'
import { Gallery } from '../Gallery/Gallery'
import { Contacts } from '../Contacts'

import './Home.css'
import { Logos } from './Logos'
import { logos } from '../constans_logos'
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
        <Row>
          <Col md={8} className='mx-auto'>
            <a href='https://youtu.be/_API66_gvnk' target='_blank' rel='noreferrer'>
              <img
                src='/posterYoutube.webp' alt='Video Poster'
                className='w-100'
              />
            </a>
          </Col>
        </Row>
        <Logos titulo='home.sponsors' logos={logos.platinumSponsors} />
        <Logos titulo='home.digital' logos={logos.digitalOpening} />
        <Logos titulo='home.gold_sponsors' logos={logos.goldSponsors} />
        <Logos titulo='home.silver_sponsor' logos={logos.silverSponsor} />
        <Logos titulo='home.content_partners' logos={logos.contentPartners} />
        <Logos titulo='home.industry_partners' logos={logos.industryPartners} />
        <Logos titulo='home.strategic_allies' logos={logos.strategicAllies} />
        <Logos titulo='home.broadcasting' logos={logos.broadcasting} />
        <Logos titulo='home.platinum_media' logos={logos.platinumMedia} />
        <Logos titulo='home.gold_media_partners' logos={logos.goldMediaPartners} />
        <Logos titulo='home.silver_media_partners' logos={logos.silverMediaPartners} />

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
