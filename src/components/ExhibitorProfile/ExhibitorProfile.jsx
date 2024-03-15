import './ExhibitorProfile.css'
import { useTranslation } from 'react-i18next'
import eder from '../../assets/ederRangel.webp'
import { ProductsCategory } from '../ProductsCategory/ProductsCategory'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
export function ExhibitorProfile() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className='container-parallax pt-5 pb-5'>
        <div className='container text-white'>
          <Row>
            <Col md='8'>
              <p>INDUSTRIAL TRANSFORMATION MÉXICO 2024</p>
              <h2 className='title-exhibitor'>{t('profile.subtitle')}</h2>
              <p
                className='exhibitor-description'
                dangerouslySetInnerHTML={{ __html: t('profile.description') }}
              />
              <div className='home-files-download gap-3 row row-cols-auto justify-content-center align-items-start' >
                <a
                  className='home-register col text-center mb-3'
                  href={
                    i18n.language === 'en'
                      ? '/files/Factsheet-ITM-2024-ENG-V8.pdf'
                      : '/files/Factsheet_ITM_2024_AC_ESP_VF_08-03-2024.pdf'
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='d-flex justify-content-evenly align-items-center fw-bold'>
                    Factsheet 2024
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      width={25}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
                      />
                    </svg>
                  </span>
                </a>
                <a
                  className='home-register col text-center mb-3'
                  href='/files/Floorplan_ITM_2024_08.03.2024.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='d-flex justify-content-evenly align-items-center fw-bold'>
                    {t('menu.exhibitors_5')}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      width={25}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
                      />
                    </svg>
                  </span>
                </a>
                <a
                  className='home-register col text-center mb-3'
                  href='/files/ITM2024-contract-V2.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='d-flex justify-content-evenly align-items-center fw-bold'>
                    {t('menu.exhibitors_6')}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      width={25}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
                      />
                    </svg>
                  </span>
                </a>
                <a className='home-register col text-center' href='/sponsorships'>
                  <span className='d-flex justify-content-evenly align-items-center fw-bold'>
                    {t('menu.exhibitors_7')}
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Container className='my-5'>
        <h1 className='fs-1 fw-bold text-center text-uppercase' style={{ color: '#DD0000' }}>{t("profile.why-exhibit.title")}</h1>
        <Row className='gap-5 mt-5'>
          <Col sm className='text-center'>
            <div className='' style={{ color: '#DD0000' }}>
              <p className='fs-2 fw-bold text-uppercase'><span style={{ fontSize: '70px' }}>15,000</span> <br /><span className='text-black'>
                {t("profile.why-exhibit.description-1")}</span> <br /> <span className='fs-1 fw-bold'>{t("profile.why-exhibit.description-2")} </span> </p>
              <img src="/countries.webp" alt="" className="img-fluid" width='300' />
            </div>
          </Col>
          <Col sm className='text-center'>
            <div style={{ color: '#DD0000' }}>
              <p className='fs-2 fw-bold text-uppercase'><span className='fs-1'></span> <br /> {t("profile.why-exhibit.description-3")} </p>
              <img src="/attendees.webp" alt="" className="img-fluid" width='350' />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='fs-5 fw-semibold mt-5 pt-3' style={{ color: '#DD0000' }}>
        <h1 className='fs-1 fw-bold text-center text-uppercase my-5'>{t("profile.segments.title")}</h1>
        <Row className='gap-5 '>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_1.webp" alt="Imagen 1" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-1")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_2.webp" alt="Imagen 2" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-2")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_3.webp" alt="Imagen 3" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-3")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_4.webp" alt="Imagen 4" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-4")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_5.webp" alt="Imagen 5" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-5")}</p>
          </Col>
        </Row>
        <Row className='gap-5 pt-4'>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_6.webp" alt="Imagen 1" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-6")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_7.webp" alt="Imagen 2" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-7")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_8.webp" alt="Imagen 3" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-8")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_9.webp" alt="Imagen 4" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-9")}</p>
          </Col>
          <Col className="columna text-center d-flex flex-column justify-content-start align-items-center">
            <img src="/segment_icon_10.webp" alt="Imagen 5" className="imagen" width={150} />
            <p className="texto">{t("profile.segments.item-10")}</p>
          </Col>
        </Row>
      </Container>
      <section>
        <h1 className='fs-1 fw-bold text-center text-uppercase my-5' style={{ color: '#DD0000' }}>{t("profile.rates.title")}</h1>
        <Container fluid>
          <Row className="justify-content-md-center gap-2 m-2">
            <Col lg={6}>
              <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src="/stand-1.webp" className="img-fluid rounded" alt="stand 1" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="fw-bold fs-2">{t("profile.rates.stand-1.title")}</h5>
                      <p className="card-text fs-3"> <span className='text-danger fw-bold'> {t("profile.rates.stand-1.price")} </span> <br /> {t("profile.rates.stand-1.type")} </p>
                      <p className="card-text"> {t("profile.rates.stand-1.description")} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center gap-4 mx-2 mt-5">
            <Col lg={5}>
              <div className="card h-100" >
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src="/stand-2.webp" className="img-fluid rounded" alt="stand 2" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="fw-bold fs-2">{t("profile.rates.stand-2.title")}</h5>
                      <p className="card-text fs-3"> <span className='text-danger fw-bold'> {t("profile.rates.stand-2.price")} </span> <br /> {t("profile.rates.stand-2.type")} </p>
                      <p className="card-text"> {t("profile.rates.stand-2.description")} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="card h-100" >
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src="/stand-3.webp" className="img-fluid rounded" alt="stand 1" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="fw-bold fs-2">{t("profile.rates.stand-3.title")}</h5>
                      <p className="card-text fs-3"> <span className='text-danger fw-bold'> {t("profile.rates.stand-3.price")} </span> <br /> {t("profile.rates.stand-3.type")} </p>
                      <p className="card-text"> {t("profile.rates.stand-3.description")} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-5'>
        <div className='background-info d-flex justify-content-center align-items-center' style={{ height: "350px" }}>
          <div className='w-50'>
            <a
              className='home-register col text-center mb-3 text-reset text-decoration-none'
              href={
                i18n.language === 'en'
                  ? '/files/Factsheet-ITM-2024-ENG-V8.pdf'
                  : '/files/Factsheet_ITM_2024_AC_ESP_VF_08-03-2024.pdf'
              }
              target='_blank'
              rel='noreferrer'
            >
              <span className='d-flex justify-content-evenly align-items-center fw-bold text-white fs-2'>
                {t("profile.btn-exhibitor-info")}
              </span>
            </a>
          </div>
        </div>
        <div className='background-exhibit'></div>
      </section>
      <div className='pb-5 text-black text-center'>
        <div className='border-bottom border-2 border-light' />
        <h4 className='mt-3 mb-3'>{t('exhibitorReasons.become_exhibitor')}</h4>
        <img src={eder} alt='Eder Rangel' height={150} loading='lazy' />
        <h4>{t('home.contact_mexico_latam')}</h4>
        <p>
          Eder Raúl Rangel Déziga
          <br />
          Tel. +52 55 7028 3335 ext. 809
        </p>
        <a className='text-black' href='mailto:eder.rangel@igeco.mx'>
          eder.rangel@igeco.mx
        </a><br />
        <a className='text-black' href='mailto:eder.rangel@igeco.mx'>
          <Button variant="outline-danger" size="lg" className='mt-3'>
            {t("profile.btn-sent-message")}
          </Button>
        </a><br />
      </div>
    </>
  )
}
