import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { useTranslation } from 'react-i18next'
import './Menu.css'
import logoITM from '../../assets/Logo_ITM.webp'
import iconworld from '../../assets/MundoITM.webp'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Menu() {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()
  const location = useLocation()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <div
      className={`${location.pathname === '/' ? 'menu-itm-home' : 'menu-itm'}`}
    >
      <a href='/exhibitor-profile'>
        <div className='banner-become text-white text-center p-2'>
          <div>
            <span className='bg-secondary rounded-circle p-2 d-inline-flex justify-content-center'>
              <svg
                className='w-3 h-3 text-black'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                width={20}
                viewBox='0 0 18 19'
                data-astro-cid-3ef6ksr2=''
              >
                {' '}
                <path
                  d='M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z'
                  data-astro-cid-3ef6ksr2=''
                />
              </svg>
            </span>{' '}
            ITM 2024
          </div>
          <div>
            <span>{t('menu.banner')} </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width={40}
            >
              <path d='M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z' />
            </svg>
          </div>
        </div>
      </a>
      <Navbar className='text-uppercase text-center' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logoITM} width={160} height={120} alt='ITM-2023' />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body className='ms-auto'>
              <Nav className='align-items-center'>
                <NavDropdown
                  title={t('menu.about_us')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/about-us'
                    onClick={handleClose}
                  >
                    {t('menu.about_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/background'
                    onClick={handleClose}
                  >
                    {t('menu.about_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='key-audience-groups'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_8')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/contact'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_1')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.exhibitors')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/exhibitor-profile'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/exhibitor-information'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_11')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/german-pavilion'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_12')}
                  </NavDropdown.Item>



                  {/* <NavDropdown.Item as={Link} to='/exibitor-profile' onClick={handleClose}>{t('menu.exhibitors_3')}</NavDropdown.Item> */}

                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/Factsheet_ITM_ENG_v2_120124.pdf'
                        : '/files/Factsheet_ITM_2024_AC_ESP_VF_08-03-2024.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/Floorplan_ITM_2024_08.03.2024.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_5')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/ITM2024-contract-V2.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_6')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to='/sponsorships'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_7')}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={t('menu.visitors')}
                  renderMenuOnMount
                  disabled
                >
                  {/* <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/Pasaporte-ITM-2023-ENG.pdf'
                      : '/files/Pasaporte-ITM-2023-ESP.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_0')}
                  </NavDropdown.Item> */}
                  <NavDropdown.Item
                    as={Link}
                    to='/why-visit'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_1')}
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item
                    as={Link} to='/visitor-profile'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_2')}
                  </NavDropdown.Item>

                    <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/HIGHLIGHTS INDUSTRIAL TRANSFORMATION MÉXICO 2023.pdf'
                      : '/files/HITOS INDUSTRIAL TRANSFORMATION MÉXICO 2023.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_2_1')}
                  </NavDropdown.Item>
                  */}
                  <NavDropdown.Item
                    as={Link}
                    to='/hotels'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/United-Meetings-Agreement-2023-ENG.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_4')}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={t('menu.past_events')}
                  renderMenuOnMount
                  disabled
                >
                  <p className='p-2 mb-0'>{t('menu.itm2023')}</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/REPORT-ITM-2023-ENG.pdf'
                        : '/files/RESULTADOS-ITM-2023.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2023_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/DIRECTORIO-ITM-V4.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2023_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/Pasaporte-ITM-2023-ENG.pdf'
                        : '/files/Pasaporte-ITM-2023-ESP.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2023_2')}
                  </NavDropdown.Item>

                  <p className='p-2 mb-0'>{t('menu.itm2022')}</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/ENG-ITM-2022-RESULTS-v3.pdf'
                        : '/files/ESP-ITM-2022-RESULTADOS-v3.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2022_1')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/ESP-DirectorioDigital-ITM-2022.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2022_2')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/ESP-Passport-ITM-2022.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2022_3')}
                  </NavDropdown.Item>

                  <p className='mt-2 p-2 mb-0'>{t('menu.itm2021')}</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/ENG-Result-report-itm2021.pdf'
                        : '/files/ESP-Result-report-itm2021.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2021_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-DirectorioDigital-ITM-2021.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2021_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-Passport-ITM-2021.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2021_3')}
                  </NavDropdown.Item>

                  <p className='mt-2 p-2 mb-0'>{t('menu.itm2020')}</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/Aftershow-report-ITM-2020.pdf'
                        : '/files/Resultados-ITM-virtual-2020.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2020_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-DirectorioDigital-ITM-2020.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2020_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-Passport-ITM-2020.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2020_2')}
                  </NavDropdown.Item>

                  <p className='mt-2 p-2 mb-0'>{t('menu.itm2019')}</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/After-Show-report-bis-carta-2019.pdf'
                        : '/files/After-Show-Report-Esp-2019.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2019_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-DirectorioDigital-ITM-2019.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2019_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-Passport-ITM-2019.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2019_2')}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={t('menu.media_hub')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/gallery'
                    onClick={handleClose}
                  >
                    {t('menu.media_hub_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/toolkit'
                    onClick={handleClose}
                  >
                    TOOLKIT 2024
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/donwload-logos'
                    onClick={handleClose}
                  >
                    {t('menu.media_hub_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/roadshows'
                    onClick={handleClose}
                  >
                    Roadshows
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  href='https://cuatro-cero.mx/'
                  target='_blank'
                  onClick={handleClose}
                >
                  Cuatro Cero
                </Nav.Link>
                <Navbar.Text className='language-option'>
                  <img
                    src={iconworld}
                    width={19}
                    height={19}
                    alt='languages-world'
                  />
                  <button
                    onClick={() => i18n.changeLanguage('es')}
                    style={{ color: i18n.language === 'en' ? 'white' : '' }}
                  >
                    Es
                  </button>
                  /
                  <button
                    onClick={() => i18n.changeLanguage('en')}
                    style={{ color: i18n.language === 'es' ? 'white' : '' }}
                  >
                    En
                  </button>
                </Navbar.Text>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
