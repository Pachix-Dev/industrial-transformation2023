import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useTranslation } from 'react-i18next'

export function DetailSpeaker (props) {
  const { t } = useTranslation()
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <h4>{props?.speaker.conference}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4}>
            <img src={props?.speaker.img} className='w-100' />
          </Col>
          <Col md={8}>
            <h4>{t('program.about')}</h4>
            <p>
              {props?.speaker.sketch}
            </p>
          </Col>
        </Row>

      </Modal.Body>
      <Modal.Footer />
    </Modal>
  )
}
