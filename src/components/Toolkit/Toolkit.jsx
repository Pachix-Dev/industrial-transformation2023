import { useTranslation } from 'react-i18next'
import { Gallery } from '../Gallery/Gallery'
import { toolkit, toolkitNamesImg } from '../constants_gallery'
import { Container } from 'react-bootstrap'
import './Toolkit.css'
export function Toolkit () {
  const { t } = useTranslation()
  return (
    <Container className='mt-5 mb-5'>
      <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>{t('toolkit.title')}</h1>
      <Gallery galleryImgs={toolkit} galleryName='ITM-TOOLKIT' toolkitNamesImg={toolkitNamesImg} />
    </Container>
  )
}
