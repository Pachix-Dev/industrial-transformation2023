import { Col, Container, Ratio, Row } from 'react-bootstrap'

export function Roadshows () {
  return (
    <Container>
      <h1 className='text-center fw-bold mt-5' style={{ color: '#e8001e' }}>Roadshows</h1>

      <Row className=' mt-5 mb-5'>
        <Col md={6}>
          <Ratio aspectRatio='16x9'>
            <iframe
              src='https://www.youtube-nocookie.com/embed/XWI7TjUJu34'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </Ratio>
          <h2>Roadshow: Manufactura avanzada e Industria 4.0</h2>
        </Col>
        <Col md={6}>
          <Ratio aspectRatio='16x9'>
            <iframe
              src='https://www.youtube-nocookie.com/embed/-H5lngSiEpQ'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </Ratio>
          <h2>Roadshow: Transformación Digital e Industria 4.0</h2>
        </Col>
        <Col md={6}>
          <Ratio aspectRatio='16x9'>
            <iframe
              src='https://www.youtube-nocookie.com/embed/60GtP0vi2jw'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </Ratio>
          <h2>Roadshow: Industria 4.0: Retos y oportunidades</h2>
        </Col>
      </Row>

    </Container>
  )
}
