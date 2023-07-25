import Carousel from 'react-bootstrap/Carousel'
import bjsxaerospace from '../../assets/bjxareospace.webp'
import futuristic from '../../assets/ITM-FUTURISTIC-MINDS.webp'

export function Slider () {
  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>
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
          <a href='https://hfmexico.mx/MTech/' target='_blank' rel='noreferrer'>
            <video
              autoPlay
              muted loop
              src='/KV-ITM-MTECH-2023-2500-×-1040-px.webm'
              alt='Startup-Pitch-2023'
              className='w-100'
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
            src={futuristic}
            alt='ITM-FUTURISTIC-MINDS'
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            autoPlay
            muted loop
            src='/KV-OKTOBERFEST-ITM-2023-2500-×-1040-px-1.webm'
            alt='Startup-Pitch-2023'
            className='w-100'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
