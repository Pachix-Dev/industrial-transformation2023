import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import './GalleryToolkit.css'

export function GalleryToolkit (props) {
  const onInit = () => {
    console.log('lightGallery has been initialized')
  }
  return (
    <>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {props?.galleryToolkit.map((img, index) => {
          return (
            <a
              key={index}
              data-src={img}
              className='gallery-item'
            >
              <img
                src={img}
                alt={`home-gallery-2022-${index}`}
                className='w-100 p-3 img-toolkit'
                loading='lazy'
              />
            </a>

          )
        })}
      </LightGallery>
    </>
  )
}
