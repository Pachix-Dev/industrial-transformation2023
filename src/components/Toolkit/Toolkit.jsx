import { useTranslation } from 'react-i18next'
import { Gallery } from '../Gallery/Gallery'
import { toolkitES, toolkitEN, toolkitNames } from '../constants_gallery'
import { Container } from 'react-bootstrap'
import './Toolkit.css'
export function Toolkit () {
  const { t, i18n } = useTranslation()
  return (
    <Container className='mt-5 mb-5'>
      <h1 className='text-center fw-bold mb-5' style={{ color: '#e8001e' }}>{t('toolkit.title')}</h1>
      <Gallery
        galleryImgs={i18n.language === 'en' ? toolkitES : toolkitEN}
        galleryName='ITM-TOOLKIT'
        toolkitNamesImg={toolkitNames}
      />
    </Container>
  )
}
