import Marquee from 'react-fast-marquee'

import { useTranslation } from 'react-i18next'

export function SocialMediaSlide() {
  const { t } = useTranslation()
  const logos = [
    {
      src: '/EFE.webp',
      width: 200,
      height: 133,
      alt: 'EFE',
      link: 'https://efe.com/',
    },
    {
      src: '/multimediosLogo.webp',
      width: 200,
      height: 155,
      alt: 'Multimedios',
      link: 'https://grupomultimedios.com/',
    },
    {
      src: '/globalenergy.webp',
      width: 200,
      height: 134,
      alt: 'GlobalEnergy',
      link: 'https://globalenergy.mx/',
    },
    {
      src: '/globalindustries.webp',
      width: 200,
      height: 133,
      alt: 'Global industries ',
      link: 'https://globalindustries.mx/',
    },
    {
      src: '/cluster.webp',
      width: 200,
      height: 133,
      alt: 'cluster industrial',
      link: 'https://www.clusterindustrial.com.mx/',
    },
    {
      src: '/eleconomista.webp',
      width: 200,
      height: 133,
      alt: 'el economista',
      link: 'https://www.eleconomista.com.mx/',
    },
    {
      src: '/dpl.webp',
      width: 200,
      height: 76,
      alt: 'dpl',
      link: 'https://dplnews.com/',
    },
    {
      src: '/Energy-Commerce.webp',
      width: 200,
      height: 70,
      alt: 'energy commerce',
      link: 'https://energyandcommerce.com.mx/',
    },
    {
      src: '/elsoldeleon.webp',
      width: 200,
      height: 37,
      alt: 'El Sol de León',
      link: 'https://www.elsoldeleon.com.mx/',
    },
    {
      src: '/mexicoindustry.webp',
      width: 200,
      height: 133,
      alt: 'mexico industry',
      link: 'https://mexicoindustry.com/',
    },
    {
      src: '/vanguardia.webp',
      width: 200,
      height: 133,
      alt: 'vanguardia ',
      link: 'https://www.vanguardia-industrial.net/',
    },
    {
      src: '/am.webp',
      width: 200,
      height: 133,
      alt: 'AM ',
      link: 'https://www.am.com.mx/',
    },
    {
      src: '/directorioauto.webp',
      width: 200,
      height: 133,
      alt: 'Directorio automotriz ',
      link: 'https://www.directorioautomotriz.com.mx/',
    },
    {
      src: '/cuatrocero.webp',
      width: 200,
      height: 125,
      alt: 'cuatro cero',
      link: 'https://cuatro-cero.mx/',
    },
    {
      src: '/revistaconsultoria.webp',
      width: 200,
      height: 133,
      alt: 'revista consultora ',
      link: 'https://revistaconsultoria.com.mx/',
    },
    {
      src: '/revistapreferencia.webp',
      width: 200,
      height: 133,
      alt: 'revista preferencia ',
      link: 'http://www.revistadp.com/',
    },
    {
      src: '/partner12.webp',
      width: 200,
      alt: 'cosmos online ',
      link: 'https://www.cosmos.com.mx/',
    },
    {
      src: '/cuatrocero.webp',
      width: 200,
      alt: 'Cuatro Cero',
      link: 'https://www.cosmos.com.mx/',
    },
    {
      src: '/heraldoHorizontal.webp',
      width: 200,
      alt: 'Heraldo Mexico',
      link: 'https://heraldodemexico.com.mx/',
    },
  ]
  return (
    <>
      <h3 className='mt-5 mb-5'>{t('home.platinum_media')}</h3>
      <Marquee gradient>
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
