import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export function Slider () {
  const { stateLang } = useLanguage()
  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>
        <Carousel.Item>
          <Link to='/startup-pitch' aria-label='read more about Startup Pitch 2023'>
            {stateLang === 'en'
              ? <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster='/PosterStartupPitch.webp'
                  src='/STARTUP PITCH ENG.webm'
                />
              : <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster='/PosterStartupPitch.webp'
                  src='/STARTUP-PITCH-ITM-2023.webm'
                />}
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://hfmexico.mx/MTech/' target='_blank' aria-label='Read more about MTECH' rel='noreferrer'>
            {
              stateLang === 'en'
                ? <video
                    width='100%'
                    height='auto'
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster='/PosterStartupPitch.webp'
                    src='/M-TECH ENG.webm'
                  />
                : <video
                    width='100%'
                    height='auto'
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster='/PosterStartupPitch.webp'
                    src='/KV-ITM-MTECH-2023.webm'
                  />
            }
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
            src='/bjxareospace.webp'
            alt='BJX-AEROSPACE-SUMMIT-4.0-2023'
          />
        </Carousel.Item>
        <Carousel.Item>
          {
            stateLang === 'en'
              ? <img
                  className='d-block w-100'
                  src='/FUTURISTIC MINDS ENG.webp'
                  alt='ITM-FUTURISTIC-MINDS'
                />
              : <img
                  className='d-block w-100'
                  src='/ITM-FUTURISTIC-MINDS.webp'
                  alt='ITM-FUTURISTIC-MINDS'
                />
          }
        </Carousel.Item>
        <Carousel.Item>
          {
            stateLang === 'en'
              ? <img
                  className='d-block w-100'
                  src='/ITMujeres_ENG.webp'
                  alt='ITM-MUJERES'
                />
              : <img
                  className='d-block w-100'
                  src='/ITMujeres.webp'
                  alt='ITM-MUJERES'
                />
          }

        </Carousel.Item>
        <Carousel.Item>
          {
            stateLang === 'en'
              ? <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster='/PosterOktober.webp'
                  src='/OKTOBERFESTENG.webm'
                />
              : <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster='/PosterOktober.webp'
                  src='/KV-OKTOBERFEST-ITM-2023-2500-×-1040-px-1.webm'
                />
          }
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
