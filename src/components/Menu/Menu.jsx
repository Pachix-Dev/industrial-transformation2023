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

export function Menu () {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()
  const location = useLocation()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Navbar className={`mt-2 text-uppercase text-center ${location.pathname === '/' ? 'menu-itm-home' : 'menu-itm'}`} expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'><img src={logoITM} width={160} height={120} alt='ITM-2023' /></Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body className='ms-auto'>
              <Nav>
                <NavDropdown title={t('menu.about_us')} renderMenuOnMount>
                  <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.about_1')}</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/background' onClick={handleClose}>{t('menu.about_2')}</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t('menu.exhibitors')} renderMenuOnMount>
                  <NavDropdown.Item as={Link} to='/contact' onClick={handleClose}>{t('menu.exhibitors_1')}</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/why-exibit' onClick={handleClose}>{t('menu.exhibitors_2')}</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/exibitor-profile' onClick={handleClose}>{t('menu.exhibitors_3')}</NavDropdown.Item>

                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/Factsheet 2023 ITM ENG  170723_compressed.pdf'
                      : '/files/Factsheet-2023-ITM-ESP-170723_compressed.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4')}

                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/MANUAL ITM 2023_INGLES rellenable.pdf'
                      : '/files/ESP-MANUAL-ITM-2023_compressed.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4_1')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/Floorplan-ITM-2023-17072023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_5')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/CONTRACT-ITM-2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_6')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/SPONSORSHIPS-2023-ITM-ENG.pdf'
                      : '#'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_7')}
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
                    to='products-category'
                    onClick={handleClose}
                  >{t('menu.exhibitors_9')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/toolkit'
                    onClick={handleClose}
                  >{t('menu.exhibitors_10')}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t('menu.visitors')} renderMenuOnMount>
                  <NavDropdown.Item
                    as={Link} to='/why-visit'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link} to='/visitor-profile'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/SPECIAL-RATES-ITM-2023-ENG.pdf'
                      : '/files/Tarifas-especiales-ITM-2023-ESP.pdf'}
                    target='_blank'
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

                <NavDropdown title={t('menu.past_events')} renderMenuOnMount>
                  <p className='p-2 mb-0'>{t('menu.itm2022')}</p>

                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/ENG-ITM-2022-RESULTS-v3.pdf'
                      : '/files/ESP-ITM-2022-RESULTADOS-v3.pdf'}
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
                    href={i18n.language === 'en'
                      ? '/files/ENG-Result-report-itm2021.pdf'
                      : '/files/ESP-Result-report-itm2021.pdf'}
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
                    href='/files/ESP-DirectorioDigital-ITM-2019.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2019_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ESP-Passport-ITM-2019pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2019_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/After-Show-report-bis-carta-2019.pdf'
                      : '/files/After-Show-Report-Esp-2019.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.itm2019_3')}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t('menu.media_hub')} renderMenuOnMount>
                  <NavDropdown.Item
                    href='https://cuatro-cero.mx/'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.media_hub_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/gallery'
                    onClick={handleClose}
                  >
                    {t('menu.media_hub_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/donwload-logos'
                    onClick={handleClose}
                  >
                    {t('menu.media_hub_3')}
                  </NavDropdown.Item>

                </NavDropdown>
                <Navbar.Text className='language-option'>
                  <button onClick={() => i18n.changeLanguage('es')} style={{ color: i18n.language === 'en' ? 'white' : '' }}>Es</button>
                  /
                  <button onClick={() => i18n.changeLanguage('en')} style={{ color: i18n.language === 'es' ? 'white' : '' }}>En</button>
                  <img src={iconworld} width={19} height={19} alt='languages-world' />
                </Navbar.Text>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
