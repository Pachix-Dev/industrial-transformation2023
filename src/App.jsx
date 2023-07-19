import { useTranslation } from 'react-i18next'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router'
import { Helmet } from 'react-helmet'
import { Menu } from './components/Menu/Menu'
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer'
import { AboutUs } from './components/AboutUS/AboutUs'
import { Background } from './components/Background/Background'
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
              <Home />
            </>
          }
        />
        <Route
          path='/about-us'
          element={
            <>
              <AboutUs />
            </>
          }
        />
        <Route
          path='/background'
          element={
            <>
              <Background />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
