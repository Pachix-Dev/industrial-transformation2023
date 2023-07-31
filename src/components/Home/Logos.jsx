import { useTranslation } from 'react-i18next'

export function Logos (props) {
  const { t } = useTranslation()
  return (
    <>
      <h3 className='mt-5 mb-5'>{t(props?.titulo)}</h3>
      {props?.first && <p className='text-center'><img src={props?.first} loading='lazy' alt='EFE' width={200} /></p>}
      <div className='home-wrapper-logos'>
        {
         props?.logos.map((logo, index) => {
           return (
             <a key={index} href=''>
               <img src={logo} loading='lazy' alt={logo} width={200} />
             </a>
           )
         })
        }
      </div>
    </>
  )
}
