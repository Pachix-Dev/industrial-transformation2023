import './ExhibitorProfile.css'
import { useTranslation } from 'react-i18next'
import eder from '../../assets/ederRangel.webp'
import { ProductsCategory } from '../ProductsCategory/ProductsCategory'
import { Col, Row } from 'react-bootstrap'
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
              <div className='home-files-download gap-5'>
                <a
                  className='home-register'
                  href={
                    i18n.language === 'en'
                      ? '/files/Factsheet-ITM-2024-ENG-AC.pdf'
                      : '/files/Factsheet-ITM-2024-ESP-V4.pdf'
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='d-md-flex justify-content-evenly fw-bold'>
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
                  className='home-register'
                  href='/files/Floorplan-ITM-2024-21-12-2023.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='d-md-flex justify-content-evenly fw-bold'>
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
                  className='home-register'
                  href='/files/ITM2024-contract-V2.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='d-md-flex justify-content-evenly fw-bold'>
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
                <a className='home-register' href='/sponsorships'>
                  <span className='d-md-flex justify-content-evenly fw-bold'>
                    {t('menu.exhibitors_7')}
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <ProductsCategory />

      <div className='pt-5 pb-5 text-black text-center'>
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
        </a>
      </div>
    </>
  )
}
