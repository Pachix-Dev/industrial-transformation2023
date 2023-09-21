import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useTranslation } from 'react-i18next'

export function DetailSpeaker (props) {
  const { t, i18n } = useTranslation()
  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Row>
          <Col md={4} className='my-auto'>
            <div className='position-relative'>
              <img src={props?.speaker?.avatar} className='w-100' alt={props?.speaker?.name} />
              <div className='info_speakers'>
                <h2>{props?.speaker?.name}</h2>
                <p className='m-0'>{props?.speaker?.rol}</p>
                <strong><small>{props?.speaker?.company}</small></strong>
              </div>
            </div>

          </Col>
          <Col md={8} className='my-auto'>
            <h5 className='fw-bold text-danger'>{t('program.speech')}</h5>
            <p>{props?.speaker?.conference}</p>
            <h5 className='fw-bold text-danger'>{t('program.about')}</h5>
            <p>
              {i18n.language === 'en' ? props?.speaker?.sketch_eng : props?.speaker?.sketch}
            </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}
