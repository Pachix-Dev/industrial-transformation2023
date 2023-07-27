import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
export function Slider () {
  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>
        <Carousel.Item>
          <Link to='/startup-pitch' aria-label='read more about Startup Pitch 2023'>
            <video
              width='100%'
              height='auto'
              muted
              loop
              autoPlay
              playsInline
              poster='/PosterStartupPitch.webp'
            >
              <source
                src='/STARTUP-PITCH-ITM-2023.webm'
                type='video/webm'
              />
            </video>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://hfmexico.mx/MTech/' target='_blank' aria-label='Read more about MTECH' rel='noreferrer'>
            <video
              width='100%'
              height='auto'
              muted
              loop
              autoPlay
              playsInline
              poster='/PosterMtech.avif'
            >
              <source
                src='/KV-ITM-MTECH-2023-2500-×-1040-px.webm'
                type='video/webm'
              />
            </video>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://canietimediahouse.com/premios-tic-e-itzamna-2023/' target='_blank' rel='noreferrer'>
            <img
              className='d-block w-100'
              src='/banner-itm-canieti.webp'
              alt='CANIETI'
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/bjxareospace.avif'
            alt='BJX-AEROSPACE-SUMMIT-4.0-2023'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/ITM-FUTURISTIC-MINDS.webp'
            alt='ITM-FUTURISTIC-MINDS'
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            width='100%'
            height='auto'
            muted
            loop
            autoPlay
            playsInline
            poster='/PosterOktober.webp'
          >
            <source
              src='/KV-OKTOBERFEST-ITM-2023-2500-×-1040-px-1.webm'
              type='video/webm'
            />
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
