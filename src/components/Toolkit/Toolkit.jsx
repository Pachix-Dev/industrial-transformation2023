import { Container } from 'react-bootstrap'
import '../Toolkit/Toolkit.css'
import { galleryToolkit } from '../constants_gallery'
import { useTranslation } from 'react-i18next'
import { GalleryToolkit } from '../GalleryToolkit/Gallerytoolkit'

export function Toolkit () {
  const { t } = useTranslation()
  return (
    <section className='toolkit-gallery'>
      <Container className='pt-4'>
        <h1 className='text-center my-5 title-toolkit'> {t('toolkit.title')} </h1>
        <GalleryToolkit galleryToolkit={galleryToolkit} />
      </Container>
    </section>
  )
}
