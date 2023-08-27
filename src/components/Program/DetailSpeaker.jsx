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
          <h5>{props?.speaker.conference}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4} className='my-auto'>
            <img src={props?.speaker.avatar} className='w-100' />
          </Col>
          <Col md={8} className='my-auto'>
            <p>
              {props?.speaker.sketch || props?.speaker.resume}
            </p>
          </Col>
        </Row>

      </Modal.Body>
      <Modal.Footer />
    </Modal>
  )
}
