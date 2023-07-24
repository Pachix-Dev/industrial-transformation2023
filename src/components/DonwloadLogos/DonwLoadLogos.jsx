import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import itmlogo1 from '../../assets/ITM-logo-red1.webp'
import itmlogo2 from '../../assets/ITM-logo-white1.webp'
import itmlogo3 from '../../assets/ITM-logo-red-back.webp'
import itmlogo4 from '../../assets/ITM-logo-rgb.webp'
import itmlogo5 from '../../assets/ITM-logo-black.webp'
import itmlogo6 from '../../assets/ITM-logo-black-white.webp'
import itmlogo7 from '../../assets/ITM-logo-black2.webp'
import './DonwLoadLogos.css'

export function DonwLoadLogos () {
  const { t } = useTranslation()
  return (
    <Container className='mt-5 mb-5'>
      <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>{t('downloadlogos')}</h1>
      <Row>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_Logo_red_font_4c.pdf' target='_blank'>
              <img src={itmlogo1} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_Logo_red_font_rgb_225ppi</p>
          </div>
        </Col>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_Logo_white_font_4c.pdf' target='_blank'>
              <img src={itmlogo2} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_Logo_white_font_rgb_225ppi</p>
          </div>
        </Col>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_red_back_4c_x1.pdf' target='_blank'>
              <img src={itmlogo3} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_red_back_225ppi</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_Logo_4c.pdf' target='_blank'>
              <img src={itmlogo4} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_Logo_rgb_225ppi</p>
          </div>
        </Col>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_Logo_1c.pdf' target='_blank'>
              <img src={itmlogo5} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_Logo_1c_225ppi</p>
          </div>
        </Col>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_Logo_white_font_1c.pdf' target='_blank'>
              <img src={itmlogo6} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_Logo_white_font_1c_225ppi</p>
          </div>
        </Col>
        <Col md={4} className='mt-3'>
          <div className='donwload-logos-detail'>
            <a href='/files/Industrial-Transformation_Mexico_Logo_black_font_1c.pdf' target='_blank'>
              <img src={itmlogo7} alt='ITM-Logo-red' className='w-100' />
            </a>
            <p>Industrial-Transformation_Mexico_Logo_black_font_1c_225ppi</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
