import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'

export function AlliesStrategicSlide() {
  const { t } = useTranslation()
  const logos = [
    {
      src: '/A3.webp',
      width: 190,
      height: 127,
      alt: 'A3',
      link: 'https://www.a3mexico.com.mx/a3',
    },
    {
      src: '/ahk.webp',
      width: 190,
      height: 127,
      alt: 'ahk',
      link: 'https://mexiko.ahk.de/es/',
    },
    {
      src: '/canieti.webp',
      width: 190,
      height: 127,
      alt: 'canieti',
      link: 'https://www.canieti.org/inicio.aspx',
    },
    {
      src: '/giz.webp',
      width: 190,
      height: 127,
      alt: 'giz',
      link: 'https://www.giz.de/en/worldwide/33041.html',
    },
    {
      src: '/gto200.webp',
      width: 190,
      height: 127,
      alt: 'gto200',
      link: 'https://www.gobiernoabiertogto.org.mx/',
    },
    {
      src: '/dual.webp',
      width: 190,
      height: 127,
      alt: 'dual',
      link: 'https://aedual.mx/',
    },
    {
      src: '/kas.webp',
      width: 190,
      height: 127,
      alt: 'kas',
      link: 'https://www.kas.de/es/web/mexiko',
    },
    {
      src: '/pagsid.webp',
      width: 190,
      height: 127,
      alt: 'pagsid',
      link: 'https://www.kas.de/es/web/mexiko',
    },
    {
      src: '/onudi.webp',
      width: 190,
      height: 127,
      alt: 'onudi',
      link: 'https://www.gob.mx/semarnat/acciones-y-programas/organizacion-de-las-naciones-unidas-para-el-desarrollo-industrial-onudi',
    },
    {
      src: '/enpact.webp',
      width: 190,
      height: 127,
      alt: 'enpact',
      link: 'https://enpact.org/',
    },
    {
      src: '/80amsoc.webp',
      width: 190,
      height: 127,
      alt: '80 amsoc',
      link: 'https://amsoc.mx/es/inicio/',
    },
    {
      src: '/cinvestav.webp',
      width: 190,
      height: 127,
      alt: 'cinvestav',
      link: 'https://www.cinvestav.mx/',
    },
    {
      src: '/camara-france.webp',
      width: 200,
      height: 106,
      alt: 'cci-france',
      link: 'https://www.franciamexico.com/',
    },
    {
      src: '/cancham.webp',
      width: 190,
      height: 127,
      alt: 'cancham',
      link: 'https://www.canchammx.com/',
    },
    {
      src: '/concamin.webp',
      width: 200,
      alt: 'concamin',
      link: 'https://www.concamin.org.mx/inicio',
    },
  ]
  return (
    <>
      <h3 className='mt-5 mb-5'>{t('home.strategic_allies')}</h3>
      <Marquee gradient direction='right'>
        {logos.map((logo) => (
          <a
            className='exibitorSlider text-center h-100'
            href={logo.link}
            target='_blank'
            rel='noopener noreferrer'
            key={logo.alt}
          >
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              loading='lazy'
              alt={logo.alt}
            />
          </a>
        ))}
      </Marquee>
    </>
  )
}
