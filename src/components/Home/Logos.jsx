import { useTranslation } from 'react-i18next'

export function Logos (props) {
  const { t } = useTranslation()
  return (
    <>
      <h3 className='mt-5 mb-5'>{t(props?.titulo)}</h3>
      <div className='home-wrapper-logos'>
        {
         props?.logos.map((logo, index) => {
           return (
             <img key={index} src={logo} loading='lazy' alt={logo} />
           )
         })
        }
      </div>
    </>
  )
}
