import React from 'react'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const images = [
  { src: '/gallery/home/galeriaITM4.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM8.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM9.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM1.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM2.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM3.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM5.webp', width: 300, height: 200 },
  { src: '/gallery/home/galeriaITM6.webp', width: 300, height: 200 }

]

const Gallery = () => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images.map((image, index) => (
        <figure key={index} data-src={image.src} className='gallery-item'>
          <img
            src={image.src}
            className='img-gallery'
            width={image.width}
            height={image.height}
            loading='lazy'
            alt='Highlights ITM 2023'
          />
        </figure>
      ))}
    </LightGallery>
  )
}

export { Gallery }
