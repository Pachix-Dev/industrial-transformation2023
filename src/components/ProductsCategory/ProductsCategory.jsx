import { Row, Col, Container } from 'react-bootstrap'
import './ProductsCategory.css'
import category01 from '../../assets/categoria01.webp'
import category02 from '../../assets/categoria02.webp'
import category03 from '../../assets/categoria03.webp'
import category04 from '../../assets/categoria04.webp'
import category05 from '../../assets/categoria05.webp'
import category06 from '../../assets/categoria06.webp'
import category07 from '../../assets/categoria07.webp'
import category08 from '../../assets/categoria08.webp'

import { useTranslation } from 'react-i18next'
export function ProductsCategory () {
  const { t } = useTranslation()
  return (
    <div className='container-back my-5'>
      <h3 className='text-center title-category py-5'>{t('productsCategory.title')}</h3>
      <Container>
        <Row className='mb-5'>
          <Col md={3} className='mb-5'>
            <img src={category01} alt='hannover-messe-itm-metalworking' className='img-fluid mx-auto d-block' />
            <h5 className='text-center mb-4 item-title category-a'>{t('productsCategory.machine.machine_title')}</h5>
            <ul className='item-list mx-3 list-a'>
              <li>{t('productsCategory.machine.machine_1')}</li>
              <li>{t('productsCategory.machine.machine_2')}</li>
              <li>{t('productsCategory.machine.machine_3')}</li>
              <li>{t('productsCategory.machine.machine_4')}</li>
              <li>{t('productsCategory.machine.machine_5')}</li>
              <li>{t('productsCategory.machine.machine_6')}</li>
              <li>{t('productsCategory.machine.machine_7')}</li>
              <li>{t('productsCategory.machine.machine_8')}</li>
              <li>{t('productsCategory.machine.machine_9')}</li>
              <li>{t('productsCategory.machine.machine_10')}</li>
              <li>{t('productsCategory.machine.machine_11')}</li>
              <li>{t('productsCategory.machine.machine_12')}</li>
              <li>{t('productsCategory.machine.machine_13')}</li>
            </ul>
          </Col>
          <Col md={3} className='mb-5'>
            <img src={category02} alt='hannover-messe-itm-automation' className='img-fluid mx-auto d-block' />
            <h5 className='text-center mb-4 item-title category-b'>{t('productsCategory.robotization.robotization_title')}</h5>
            <ul className='item-list mx-3 list-b'>
              <li>{t('productsCategory.robotization.robotization_1')}</li>
              <li>{t('productsCategory.robotization.robotization_2')}</li>
              <li>{t('productsCategory.robotization.robotization_3')}</li>
              <li>{t('productsCategory.robotization.robotization_4')}</li>
              <li>{t('productsCategory.robotization.robotization_5')}</li>
              <li>{t('productsCategory.robotization.robotization_6')}</li>
              <li>{t('productsCategory.robotization.robotization_7')}</li>
              <li>{t('productsCategory.robotization.robotization_8')}</li>
              <li>{t('productsCategory.robotization.robotization_9')}</li>
              <li>{t('productsCategory.robotization.robotization_10')}</li>
              <li>{t('productsCategory.robotization.robotization_11')}</li>
              <li>{t('productsCategory.robotization.robotization_12')}</li>
              <li>{t('productsCategory.robotization.robotization_13')}</li>
            </ul>
          </Col>
          <Col md={3} className='mb-5'>
            <img src={category03} alt='hannover-messe-itm-digital-factory' className='img-fluid mx-auto d-block' />
            <h5 className='text-center mb-4 item-title category-c'>{t('productsCategory.manufacture.manufacture_title')}</h5>
            <ul className='item-list mx-3 list-c'>
              <li>{t('productsCategory.manufacture.manufacture_1')}</li>
              <li>{t('productsCategory.manufacture.manufacture_2')}</li>
              <li>{t('productsCategory.manufacture.manufacture_3')}</li>
              <li>{t('productsCategory.manufacture.manufacture_4')}</li>
              <li>{t('productsCategory.manufacture.manufacture_5')}</li>
              <li>{t('productsCategory.manufacture.manufacture_6')}</li>
              <li>{t('productsCategory.manufacture.manufacture_7')}</li>
              <li>{t('productsCategory.manufacture.manufacture_8')}</li>
              <li>{t('productsCategory.manufacture.manufacture_9')}</li>
              <li>{t('productsCategory.manufacture.manufacture_10')}</li>
              <li>{t('productsCategory.manufacture.manufacture_11')}</li>
              <li>{t('productsCategory.manufacture.manufacture_12')}</li>
            </ul>
          </Col>
          <Col md={3} className='mb-5'>
            <img src={category04} alt='hannover-messe-itm-smart-logistics' className='img-fluid mx-auto d-block' />
            <h5 className='text-center mb-4 item-title category-d'>{t('productsCategory.logistics.logistics_title')}</h5>
            <ul className='item-list mx-3 list-d'>
              <li>{t('productsCategory.logistics.logistics_1')}</li>
              <li>{t('productsCategory.logistics.logistics_2')}</li>
              <li>{t('productsCategory.logistics.logistics_3')}</li>
              <li>{t('productsCategory.logistics.logistics_4')}</li>
              <li>{t('productsCategory.logistics.logistics_5')}</li>
              <li>{t('productsCategory.logistics.logistics_6')}</li>
              <li>{t('productsCategory.logistics.logistics_7')}</li>
              <li>{t('productsCategory.logistics.logistics_8')}</li>
              <li>{t('productsCategory.logistics.logistics_9')}</li>
              <li>{t('productsCategory.logistics.logistics_10')}</li>
              <li>{t('productsCategory.logistics.logistics_11')}</li>
              <li>{t('productsCategory.logistics.logistics_12')}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={3} className='mb-5'>
            <img src={category05} alt='hannover-messe-itm-research-institutions' className='img-fluid mx-auto d-block' />
            <h5 className='text-center item-title category-e'>{t('productsCategory.research.research_title')}</h5>
            <ul className='item-list mx-3 list-e'>
              <li>{t('productsCategory.research.research_1')}</li>
              <li>{t('productsCategory.research.research_2')}</li>
              <li>{t('productsCategory.research.research_3')}</li>
            </ul>
          </Col>
          <Col md={3} className='mb-5'>
            <img src={category06} alt='hannover-messe-itm-government' className='img-fluid mx-auto d-block' />
            <h5 className='text-center item-title category-f'>{t('productsCategory.government.government_title')}</h5>
            <ul className='item-list mx-3 list-f'>
              <li>{t('productsCategory.government.government_1')}</li>
              <li>{t('productsCategory.government.government_2')}</li>
              <li>{t('productsCategory.government.government_3')}</li>
            </ul>
          </Col>
          <Col md={3} className='mb-5'>
            <img src={category07} alt='hannover-messe-itm-power-solutions' className='img-fluid mx-auto d-block' />
            <h5 className='text-center item-title category-g'>{t('productsCategory.energySolutions.energySolutions_title')}</h5>
            <ul className='item-list mx-3 list-g'>
              <li>{t('productsCategory.energySolutions.energySolutions_1')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_2')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_3')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_4')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_5')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_6')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_7')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_8')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_9')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_10')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_11')}</li>
              <li>{t('productsCategory.energySolutions.energySolutions_12')}</li>
            </ul>
          </Col>
          <Col md={3} className='mb-5'>
            <img src={category08} alt='hannover-messe-itm-additive-manufacturing' className='img-fluid mx-auto d-block' />
            <h5 className='text-center item-title category-h'>{t('productsCategory.additive.additive_title')}</h5>
            <ul className='item-list mx-3 list-h'>
              <li>{t('productsCategory.manufacture.manufacture_1')}</li>
              <li>{t('productsCategory.manufacture.manufacture_2')}</li>
              <li>{t('productsCategory.manufacture.manufacture_3')}</li>
              <li>{t('productsCategory.manufacture.manufacture_4')}</li>
              <li>{t('productsCategory.manufacture.manufacture_5')}</li>
              <li>{t('productsCategory.manufacture.manufacture_6')}</li>
              <li>{t('productsCategory.manufacture.manufacture_7')}</li>
              <li>{t('productsCategory.manufacture.manufacture_8')}</li>
              <li>{t('productsCategory.manufacture.manufacture_9')}</li>
              <li>{t('productsCategory.manufacture.manufacture_10')}</li>
              <li>{t('productsCategory.manufacture.manufacture_11')}</li>
              <li>{t('productsCategory.manufacture.manufacture_12')}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
