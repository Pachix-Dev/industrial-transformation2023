import Carousel from 'react-bootstrap/Carousel'
import bjsxaerospace from '../../assets/bjxareospace.webp'
import futuristic from '../../assets/ITM-FUTURISTIC-MINDS.webp'
import ReactPlayer from 'react-player'
import posterStartupPitch from '../../assets/PosterStartupPitch.webp'
import posterMtech from '../../assets/PosterMtech.webp'
import posterOktober from '../../assets/PosterOktober.webp'
import { Link } from 'react-router-dom'
export function Slider () {
  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>

        <Carousel.Item>
          <Link to='/startup-pitch'>
            <ReactPlayer
              url='/STARTUP-PITCH-ITM-2023.webm'
              width='100%'
              height='auto'
              playing // Autoplay
              loop
              muted
              playsinline
              config={{
                file: {
                  attributes: {
                    poster: posterStartupPitch
                  }
                }
              }}
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://hfmexico.mx/MTech/' target='_blank' aria-label='Read more about MTECH' rel='noreferrer'>
            <ReactPlayer
              url='/KV-ITM-MTECH-2023-2500-×-1040-px.webm'
              width='100%'
              height='auto'
              playing // Autoplay
              loop
              muted
              playsinline
              config={{
                file: {
                  attributes: {
                    poster: posterMtech
                  }
                }
              }}
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
          <ReactPlayer
            url='/KV-OKTOBERFEST-ITM-2023-2500-×-1040-px-1.webm'
            width='100%'
            height='auto'
            playing // Autoplay
            loop
            muted
            playsinline
            config={{
              file: {
                attributes: {
                  poster: posterOktober
                }
              }
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
