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
import { WhyExhibit } from './components/WhyExhibit/WhyExhibit'
import { ExhibitorProfile } from './components/ExhibitorProfile/ExhibitorProfile'
import { AudienceGroups } from './components/AudienceGroups/AudienceGroups'
import { ProductsCategory } from './components/ProductsCategory/ProductsCategory'
import { Toolkit } from './components/Toolkit/Toolkit'
import { WhyVisit } from './components/WhyVisit/WhyVisit'

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
        <Route
          path='/why-exhibit'
          element={
            <>
              <WhyExhibit />
            </>
          }
        />
        <Route
          path='/exhibitor-profile'
          element={
            <>
              <ExhibitorProfile />
            </>
          }
        />
        <Route
          path='/audience-groups'
          element={
            <>
              <AudienceGroups />
            </>
          }
        />
        <Route
          path='/products-category'
          element={
            <>
              <ProductsCategory />
            </>
          }
        />
        <Route
          path='/toolkit'
          element={
            <>
              <Toolkit />
            </>
          }
        />
        <Route
          path='/why-visit'
          element={
            <>
              <WhyVisit />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
