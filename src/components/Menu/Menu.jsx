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
import { Link } from 'react-router-dom'

export function Menu () {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>

      <Container fluid className='mt-2'>
        <div className='language-option'>
          <img src={iconworld} width={19} height={19} alt='languages-world' />
          <button onClick={() => i18n.changeLanguage('es')} style={{ color: i18n.language === 'en' ? 'grey' : '' }}>Es</button>
          /
          <button onClick={() => i18n.changeLanguage('en')} style={{ color: i18n.language === 'es' ? 'grey' : '' }}>En</button>
        </div>
        <Navbar expand='lg' className='menu-itm text-center'>
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
                    <NavDropdown.Item href='#action/3.1' onClick={handleClose}>{t('menu.about_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.about_2')}</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title={t('menu.exhibitors')} renderMenuOnMount>
                    <NavDropdown.Item href='#action/3.1' onClick={handleClose}>{t('menu.exhibitors_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_2')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_3')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_4')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_5')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_6')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_7')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_8')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_9')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.exhibitors_10')}</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title={t('menu.visitors')} renderMenuOnMount>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.visitors_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.visitors_2')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.visitors_3')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.visitors_4')}</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title={t('menu.past_events')} renderMenuOnMount>
                    <p className='p-2 mb-0'>{t('menu.itm2022')}</p>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2022_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2022_2')}</NavDropdown.Item>

                    <p className='mt-2 p-2 mb-0'>{t('menu.itm2021')}</p>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2021_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2021_2')}</NavDropdown.Item>

                    <p className='mt-2 p-2 mb-0'>{t('menu.itm2020')}</p>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2020_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2020_2')}</NavDropdown.Item>

                    <p className='mt-2 p-2 mb-0'>{t('menu.itm2019')}</p>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2019_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2019_2')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.itm2019_3')}</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title={t('menu.media_hub')} renderMenuOnMount>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.media_hub_1')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.media_hub_2')}</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2' onClick={handleClose}>{t('menu.media_hub_3')}</NavDropdown.Item>

                  </NavDropdown>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}
