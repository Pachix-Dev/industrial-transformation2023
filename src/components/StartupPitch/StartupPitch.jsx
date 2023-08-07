import posterStartupPitch from '../../assets/PosterStartupPitch.webp'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

import './StartupPitch.css'
import { useTranslation } from 'react-i18next'
export function StartupPitch () {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <div className='position-relative mt-5'>
          <video
            width='100%'
            height='auto'
            muted
            loop
            autoPlay
            playsInline
            poster={posterStartupPitch}
          >
            <source
              src='/STARTUP-PITCH-ITM-2023.webm'
              type='video/webm'
            />
          </video>
        </div>
        <p className='mt-5'>{t('startup.description_1')}</p>
        <div className='startup-links-first'>
          <a href='#beneficios'>
            {t('startup.linkButton')}
          </a>
        </div>
        <div className='startup-links-first'>
          <a href='/files/startupFAQS.pdf' target='_blank'>
            FAQ
          </a>
        </div>
        <Row className='mt-5'>
          <Col md>
            <div className='header-startup'>{t('startup.element_1.title')}</div>
            <p className='mt-4'>{t('startup.element_1.description_1')}<br />
              {t('startup.element_1.description_2')}<br />
              {t('startup.element_1.description_3')}<br />
              {t('startup.element_1.description_4')}<br />
              {t('startup.element_1.description_5')}<br />
              {t('startup.element_1.description_6')}<br />
              {t('startup.element_1.description_7')}
            </p>
          </Col>
          <Col md>
            <div className='header-startup'>{t('startup.element_2.title')}</div>
            <p className='mt-4'>
              {t('startup.element_2.description_1')}<br />
              {t('startup.element_2.description_2')}<br />
              {t('startup.element_2.description_3')}<br />
              {t('startup.element_2.description_4')}<br />
              {t('startup.element_2.description_5')}<br />
              {t('startup.element_2.description_6')}<br />
              {t('startup.element_2.description_7')}<br />
            </p>
          </Col>
        </Row>
        <div className='wrapper-startup-links'>
          <a className='startup-links' href='/files/CONVOCATORIA STARTUP PITCH 2023-new.pdf' target='_blank'>{t('startup.button_1')}</a>

          <a className='startup-links' href='https://forms.gle/5iHbJU7Yf1dMcusS9' target='_blank' rel='noreferrer'>{t('startup.button_2')}</a>

          <a className='startup-links' href='https://hfmexico.mx/aviso-de-privacidad/' target='_blank' rel='noreferrer'>{t('startup.button_3')}</a>

          {/* <a className='startup-links' href='/files/startupFAQS.pdf' target='_blank'>FAQ</a> */}
        </div>
        <h1 className='fw-bold text-center mt-5'>{t('startup.title_1')}</h1>
        <p className='text-center'>{t('startup.contacto')}<a href='mailto:eder.rangel@hfmexico.mx' target='_blank' rel='noreferrer'>eder.rangel@hfmexico.mx</a>
        </p>
        <h4 className='mt-5 mb-5 text-danger'>{t('startup.titleCategory')}</h4>

        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>{t('startup.category_1.title')}</Accordion.Header>
            <Accordion.Body>
              {t('startup.category_1.item_1')}<br />
              {t('startup.category_1.item_2')}<br />
              {t('startup.category_1.item_3')}<br />
              {t('startup.category_1.item_4')}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>{t('startup.category_2.title')}</Accordion.Header>
            <Accordion.Body>
              {t('startup.category_2.item_1')}<br />
              {t('startup.category_2.item_2')}<br />
              {t('startup.category_2.item_3')}<br />
              {t('startup.category_2.item_4')}<br />
              {t('startup.category_2.item_5')}<br />
              {t('startup.category_2.item_6')}<br />
              {t('startup.category_2.item_7')}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>{t('startup.category_3.title')}</Accordion.Header>
            <Accordion.Body>
              {t('startup.category_3.item_1')}<br />
              {t('startup.category_3.item_2')}<br />
              {t('startup.category_3.item_3')}<br />
              {t('startup.category_3.item_4')}<br />
              {t('startup.category_3.item_5')}
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey='3'>
            <Accordion.Header>CATEGORÍA ESPECIAL RETO JETRO: VEHÍCULO CERO EMISIÓN</Accordion.Header>
            <Accordion.Body>
              <img src={logojetro} alt='JETRO' width={250} />
              Participa en esta categoría especial, la cual busca startups dentro de la cadena de suministro de vehículos de cero emisiones. En este sentido se buscan soluciones de vehículos eléctricos, enfocados a las partes, proveeduría, software y todo lo relacionado a este tipo de soluciones.
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </Container>
      <section className='mt-5 bg-startup-participar'>
        <Container>
          <h4 className='fw-bold'>{t('startup.businessTitle')}</h4>
          <p>
            {t('startup.stage_1.title')}<br /><br />
            {t('startup.stage_1.description')}<br /><br />
            {t('startup.stage_2.title')}<br /><br />
            {t('startup.stage_2.description')}
          </p>
        </Container>
      </section>
      <Container className='mt-5'>
        <h4 className='fw-bold text-danger'>{t('startup.requirements.title')}</h4>
        <ul>
          <li>{t('startup.requirements.item_1')}</li>
          <li>{t('startup.requirements.item_2')}</li>
          <li>{t('startup.requirements.item_3')}</li>
          <li>{t('startup.requirements.item_4')}</li>
          <li>{t('startup.requirements.item_5')}</li>
          <li>{t('startup.requirements.item_6')}</li>
        </ul>
        <p>
          <strong>{t('startup.physicalPerson.title')}</strong><br />
          {t('startup.physicalPerson.item_1')}<br />
          {t('startup.physicalPerson.item_2')}<br />
          {t('startup.physicalPerson.item_3')}<br />

          <strong>{t('startup.moralPerson.title')}</strong><br />
          {t('startup.moralPerson.item_1')}<br />
          {t('startup.moralPerson.item_2')}<br />
          {t('startup.moralPerson.item_3')}<br />
          {t('startup.moralPerson.item_4')}
          <br />
          <br />
          {t('startup.conditionText')}
        </p>
        <div id='beneficios'>
          <h4 className='text-danger fw-bold'>{t('startup.benefits.title')}</h4>
          <p>{t('startup.benefits.item_1')}<br /><br />
            {t('startup.benefits.item_2')}<br /><br />
            {t('startup.benefits.item_3')}<br /><br />
            {t('startup.benefits.item_4')}
          </p>
          {/* <div>
            <img src={logojetro} alt='logo-jetro' width={250} />
            <h4 className='text-danger fw-bold'>Beneficios exclusivos del Reto Jetro
            </h4>
            <ul>
              <li>
                Diagnósticos especiales de parte de JETRO, quien visitará la empresa y difundirá el diagnóstico con su traducción al japonés para poder tener alcance con empresas japonesas.
              </li>
              <li>
                Se agregarán a la base de datos de proveedores mexicanos de JETRO: <a href='https://www.jetro.go.jp/mexico/indusporte.html' target='_blank' className='text-danger text-break' rel='noreferrer'>https://www.jetro.go.jp/mexico/indusporte.html</a>
              </li>
              <li>
                Se le dará una recomendación especial para los eventos de innovación que se celebran en Japón.
              </li>
              <li>
                Estos beneficios son únicamente para esta categoría, no aplican para las demás categorías.
              </li>
            </ul>
        </div> */}
        </div>
      </Container>
      <section className='startup-expediente text-light'>
        <Container>
          <h4>{t('startup.titleDoubt')}</h4>
          <br /><br />
          <a href='https://forms.gle/5iHbJU7Yf1dMcusS9' target='_blank' rel='noreferrer'>{t('startup.fileButton')}</a>
          <p className='mt-5 fw-bold fs-2'>{t('startup.deadline')}</p>
        </Container>
      </section>
    </>
  )
}
