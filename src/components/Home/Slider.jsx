import Carousel from 'react-bootstrap/Carousel'
import slideITM from '../../assets/Banners-ITM-ESP-1.webp'
import mTech from '../../assets/M-TECH.webp'
import bjsxaerospace from '../../assets/bjxareospace.webp'
import oktoberfest from '../../assets/oktoberfest.webp'
export function Slider () {
  return (
    <div className='position-relative'>
      <Carousel fade interval={5000} controls={false}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slideITM}
            alt='Banner-ITM-2023'
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            autoPlay
            muted loop
            src='/STARTUP-PITCH-ITM-2023.webm'
            alt='Startup-Pitch-2023'
            className='w-100'
          />
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://hfmexico.mx/MTech/' target='_blank' rel='noreferrer'><img
            className='d-block w-100'
            src={mTech}
            alt='M-TECH-2023'
                                                                                />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={bjsxaerospace}
            alt='BJX-AEROSPACE-SUMMIT-4.0-2023'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={oktoberfest}
            alt='OKTOBERFEST-DISTRITO-LEÓN-GUANAJUATO'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
