import { Col, Container, Row } from 'react-bootstrap'
import eder from '../assets/ederRangel.webp'
import simone from '../assets/simoneRobering.webp'
import imke from '../assets/imkeSelle.webp'
import { useTranslation } from 'react-i18next'

export function Contacts ({ children }) {
  const { t } = useTranslation()

  return (
    <section className='home-contactos pt-5 pb-5'>
      {children}
      <Container>
        <Row>
          <Col md className='text-center'>
            <img src={eder} alt='Eder Rangel' height={150} loading='lazy' />
            <h4>{t('home.contact_mexico_latam')}</h4>
            <p>
              Eder Raúl Rangel Déziga<br />
              Tel. +52 55 7028 3335 ext. 809
            </p>
            <a href='mailto:eder.rangel@hfmexico.mx'>eder.rangel@hfmexico.mx</a>
          </Col>
          <Col md className='text-center'>
            <img src={simone} alt='Simone Robering' width={150} loading='lazy' />
            <h4>{t('home.contact_international')}</h4>
            <p>
              Simone Robering<br />
              Tel. +49 511 89 33128
            </p>
            <a href='mailto:simone.Robering@messe.de'>simone.robering@messe.de</a>
          </Col>
          <Col md className='text-center'>
            <img src={imke} alt='Imke Selle' width={150} loading='lazy' />
            <h4>{t('home.contact_international')}</h4>
            <p>
              Imke Selle<br />
              Tel. +49 511 89 31423
            </p>
            <a href='mailto:imke.selle@messe.de'>imke.selle@messe.de</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
