import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './GalleryPage.css'
import { Link } from 'react-router-dom'

export function GalleryPage () {
  const { t } = useTranslation()
  return (
    <Container className='galerypage-itm mt-5 mb-5'>
      <h1 className='fw-bold'>{t('gallery.title')}</h1>
      <Row className='mt-5'>
        <Col md={4}>
          <h4 className='fw-bold'>2023</h4>
          <Link to='/galery-itm-2023'>
            <img src='/gallery/home/galeriaITM4.webp' className='w-100' />
          </Link>
        </Col>
        <Col md={4}>
          <h4 className='fw-bold'>{t('gallery.year_4')}</h4>
          <Link to='/galery-itm-2022'>
            <img src='/gallery/2022/itmgalery-2022.webp' className='w-100' />
          </Link>
        </Col>
        <Col md={4}>
          <h4 className='fw-bold'>{t('gallery.year_3')}</h4>
          <Link to='/galery-itm-2021'>
            <img src='/gallery/2021/itmgalery-2021.webp' className='w-100' />
          </Link>
        </Col>
        <Col md={4}>
          <h4 className='fw-bold'>{t('gallery.year_2')}</h4>
          <Link to='/galery-itm-2020'>
            <img src='/gallery/2020/itmgalery-2020.webp' className='w-100' />
          </Link>
        </Col>

        <Col md={4}>
          <h4 className='fw-bold'>{t('gallery.year_1')}</h4>
          <Link to='/galery-itm-2019'>
            <img src='/gallery/2019/itmgalery-2019.webp' className='w-100' />
          </Link>
        </Col>

      </Row>
    </Container>
  )
}
