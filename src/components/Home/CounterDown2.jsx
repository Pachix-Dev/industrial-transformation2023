import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function CounterDown2 () {
  const { t } = useTranslation()
  return (
    <Container className='pt-5 mt-5 text-center home-counterdown-timer'>
      <div className='pt-5'>
        <h1 className='mb-0 fw-bold text-light'>
          {t('home.titleITM')}
        </h1>
        <h1 className='mb-0 fw-bold counterdown-title'>
          {t('home.titleCounter')}
        </h1>
        <p className='counterdown-description text-light'>
          <svg width={18} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>Calendar Icon</title>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path d='M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' />
            </g>
          </svg> {t('home.dateEvent')}<br />
          <svg width={18} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#ffffff'>
            <title>Location Icon</title>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path d='M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </g>
          </svg> Poliforum León, Guanajuato.
        </p>

        <div className='d-flex align-items-center justify-content-center'>
          <a className='home-register me-3' href='https://itm.ahmreg.com.mx/' target='_blank' rel='noreferrer'>
            {t('home.registro_itm_2023')}
          </a>
          <Link className='home-register' to='/program'>
            {t('program.title')}
          </Link><br /><br />
        </div>
        <p className='counterdown-description mt-3 text-light' dangerouslySetInnerHTML={{ __html: t('home.leyend') }} />
      </div>
    </Container>
  )
}
