import { useTranslation } from 'react-i18next'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from 'react-router'
import { Helmet } from 'react-helmet'
import { Menu } from './components/Menu/Menu'

function App () {
  const { t } = useTranslation()
  return (
    <>
      <Menu />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Industrial Transformation</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
            </>
          }
        />
      </Routes>
    </>
  )
}
export default App
