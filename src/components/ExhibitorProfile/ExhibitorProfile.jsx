import './ExhibitorProfile.css'
import { useTranslation } from 'react-i18next'
import eder from '../../assets/ederRangel.webp'
export function ExhibitorProfile () {
  const { t } = useTranslation()
  return (
    <>
      <div className='container-parallax pt-5 pb-5'>
        <div className='cont-text'>
          <h1 className='pt-5 pb-5 title-exhibitor'>{t('profile.title')}</h1>
          <p className='exhibitor-description'>
            {t('profile.countries')}<br /><br />
            {t('profile.description')}
          </p>
          <div className='border-bottom border-2 border-light' />
        </div>
        <div className='text-center text-light'>
          <h4 className='mt-3 mb-3'>{t('exhibitorReasons.become_exhibitor')}</h4>
          <img src={eder} alt='Eder Rangel' height={150} loading='lazy' />
          <h4>{t('home.contact_mexico_latam')}</h4>
          <p>
            Eder Raúl Rangel Déziga<br />
            Tel. +52 55 7028 3335 ext. 809
          </p>
          <a href='mailto:eder.rangel@hfmexico.com'>eder.rangel@hfmexico.com</a>
        </div>
      </div>
    </>
  )
}
