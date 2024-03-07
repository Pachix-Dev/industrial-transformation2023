import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { useTranslation } from 'react-i18next'
import iconworld from '../../assets/MundoITM.webp'
import { useNearScreen } from '../hooks/useNearScreen'

export function Footer() {
  const { t, i18n } = useTranslation()
  const [show, ref] = useNearScreen()
  return (
    <footer>
      {/* <img src='/BannerITMv1.webp' className='w-100' alt='ITM 2024' /> */}
      <div className='background-logo-footer'>
        <Row className='justify-content-md-center m-0 p-0'>
          <Col xs={4} sm={2} lg={2} className='p-3 d-flex justify-content-center align-items-center'>
            <img src="/itm_logo.webp" alt="igeco-logo" className="img-fluid" width='150' />
          </Col>
          <Col xs={4} sm={2} lg={2} className='p-3 d-flex justify-content-center align-items-center'>
            <img src="/logo_gto_veda.png" alt="guanajuato-veda" className="img-fluid" />
          </Col>
          <Col xs={4} sm={2} lg={2} className='p-3 d-flex justify-content-center align-items-center'>
            <img src="/logo_veda_leon.webp" alt="guanajuato-veda" className="img-fluid" />
          </Col>
          <Col xs={4} sm={2} lg={2} className='p-3 d-flex justify-content-center align-items-center'>
            <img src="/igeco_bn.webp" alt="igeco-logo" className="img-fluid" />
          </Col>
          <Col xs={4} sm={2} lg={2} className='p-3 d-flex justify-content-center align-items-center'>
            <img src="/deutsche_messe_bn.webp" alt="deutsche-messe" className="img-fluid" />
          </Col>
        </Row>
      </div>
      <div className='footer-socialmedia mt-5'>
        <a
          href='https://www.facebook.com/Indtransmex/'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Facebook</title>
            <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/company/industrial-transformation-mexico/'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>LinkedIn</title>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        </a>
        <a
          href='https://twitter.com/Indtransmex'
          target='_blank'
          rel='noreferrer'
          aria-label='twiiter'
        >
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <title>Twitter</title>
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
            </g>
          </svg>
        </a>
        <a
          href='https://www.instagram.com/industrial_transformation_mx/'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Instagram</title>
            <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
          </svg>
        </a>
      </div>
      <Container ref={ref}>
        <Row className='mt-5 mb-5'>
          <Col md={8}>
            {show && (
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14887.859950910688!2d-101.654688!3d21.113962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe571ff11b0d%3A0x6d9c73bfdbbd1fc8!2sPoliforum%20Le%C3%B3n!5e0!3m2!1ses!2smx!4v1709834039135!5m2!1ses!2smx'
                width='100%'
                height={260}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='mapa igeco'
              />
            )}
          </Col>
          <Col md={4}>
            <div className='footer-wrapper-info-contact'>
              <div>
                <p>
                  <strong>ITM 2024</strong>
                </p>
                <p>
                  <svg
                    width='19'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                    />
                  </svg>{' '}
                  {t('footer.dateFooter')}
                  <br />
                  <p>Poliforum Léon, Guanajuato, México</p>
                  <p>
                    {' '}
                    {t('footer.day_1')} <br />
                    &nbsp;&nbsp;11:00 - 19:00 hrs
                  </p>
                  <p>
                    {t('footer.day_2')} <br />
                    &nbsp;&nbsp;11:00 - 17:00 hrs
                  </p>
                </p>
              </div>
              <div>
                <p>
                  <strong>{t('home.sales_contact')}</strong>
                </p>
                <p>
                  Eder Raúl Rangel Déziga
                  <br />
                  Tel: +52 (55) 7028-3335 ext. 809
                  <br />
                  <a href='mailto:eder.rangel@igeco.mx'>eder.rangel@igeco.mx</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='footer-language d-flex'>
          <strong>Italian German Exhibition Company</strong>
          <div className='language-option-footer ms-auto'>
            <img src={iconworld} width={19} height={19} alt='languages-world' />
            <button
              onClick={() => i18n.changeLanguage('es')}
              style={{ color: i18n.language === 'en' ? 'black' : '' }}
            >
              Es
            </button>
            /
            <button
              onClick={() => i18n.changeLanguage('en')}
              style={{ color: i18n.language === 'es' ? 'black' : '' }}
            >
              En
            </button>
          </div>
        </div>
        <div className='pt-5 pb-5'>
          <a
            href='https://hfmexico.mx/aviso-de-privacidad/'
            target='_blank'
            rel='noreferrer'
          >
            {t('home.privacy_policy')}
          </a>{' '}
          | <a href='/contact'>{t('home.contact')}</a>
        </div>
      </Container>
    </footer>
  )
}
