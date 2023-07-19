import { useTranslation } from 'react-i18next'
import { Contacts } from '../Contacts'

export function Contact () {
  const { t } = useTranslation()
  return (

    <Contacts>
      <h1 className='text-center mb-5'>{t('home.contact')}</h1>
    </Contacts>

  )
}
