import { Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function Sponsorships() {
  const { t } = useTranslation()
  return (
    <>
      <Container className='mt-5 mb-5'>
        <p>Industrial Transformation Mexico</p>
        <h1>{t('menu.exhibitors_7')}</h1>
        <Row>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg1.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Paquetes de Patrocinios: Platino, Gold y Silver
                </Card.Title>
                <a
                  href='/files/1_patrocinio alianza-ITM-2024-v2.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg2.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Patrocinio de Conferencia Keynote
                </Card.Title>
                <a
                  href='/files/2-Patrocinio-Keynote-ITM-2024.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg3.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Patrocinios Noche de Industriales
                </Card.Title>
                <a
                  href='/files/3-Patrocinios-Noche-de-Industriales-ITM-2024.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg4.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Patrocinio presentación comercial – Transformation Area
                </Card.Title>
                <a
                  href='/files/4-Patrocinio-Transformation-ITM-2024.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg5.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Patrocinio de Módulos de registro
                </Card.Title>
                <a
                  href='/files/5-Patrocinio-Módulos-de-registro-ITM-2024.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg6.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Patrocinio Inauguración
                </Card.Title>
                <a
                  href='/files/6-Patrocinio-Inauguracion-ITM-2024.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4' className='pt-4'>
            <Card>
              <Card.Img variant='top' src='/sponsorbg7.webp' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  Patrocinio Área de Networking
                </Card.Title>
                <a
                  href='/files/7-Patrocinio-Área-de-Networking-ITM-2023.pdf'
                  target='_blank'
                  className='bg-primary text-white rounded p-2 text-decoration-none'
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
