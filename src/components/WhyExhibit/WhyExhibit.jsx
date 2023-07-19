import { useTranslation } from 'react-i18next'
import './WhyExhibit.css'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import exhibitor from '../../assets/exhibitor.webp'
export function WhyExhibit () {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='exhibit-parallax'>
              <ListGroup as='ol' numbered>
                <ListGroup.Item as='li'><h3>{t('exhibitorReasons.title')}</h3></ListGroup.Item>
                <ListGroup.Item as='li'>{t('exhibitorReasons.description_1')}</ListGroup.Item>
                <ListGroup.Item as='li'>{t('exhibitorReasons.description_2')}</ListGroup.Item>
                <ListGroup.Item as='li'>{t('exhibitorReasons.description_3')}</ListGroup.Item>
                <ListGroup.Item as='li'>{t('exhibitorReasons.description_4')}</ListGroup.Item>
                <ListGroup.Item as='li'>{t('exhibitorReasons.description_5')}</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <div className='exhibitor-img' />
          </Col>
        </Row>
      </Container>
    </>
  )
}
