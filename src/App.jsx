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
import { Contact } from './components/Contact/Contact'
import { WhyVisit } from './components/WhyVisit/WhyVisit'
import { VisitorProfle } from './components/VisitorProfile/VisitorProfile'
import { GalleryPage } from './components/GalleryPage/GalleryPage'
import { Container } from 'react-bootstrap'

import { gallery2019, gallery2020, gallery2021, gallery2022 } from './components/constants_gallery'
import { Gallery } from './components/Gallery/Gallery'
import { DonwLoadLogos } from './components/DonwloadLogos/DonwLoadLogos'
import { Toolkit } from './components/Toolkit/Toolkit'
import { WhyExhibit } from './components/WhyExhibit/WhyExhibit'
import { ExhibitorProfile } from './components/ExhibitorProfile/ExhibitorProfile'
import { AudienceGroups } from './components/AudienceGroups/AudienceGroups'
import { ProductsCategory } from './components/ProductsCategory/ProductsCategory'
import './assets/fonts/stylesheet.css'
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
          path='about-us'
          element={
            <>
              <AboutUs />
            </>
          }
        />
        <Route
          path='background'
          element={
            <>
              <Background />
            </>
          }
        />
        <Route
          path='contact'
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path='why-visit'
          element={
            <>
              <WhyVisit />
            </>
          }
        />
        <Route
          path='why-exibit'
          element={
            <>
              <WhyExhibit />
            </>
          }
        />
        <Route
          path='exibitor-profile'
          element={
            <>
              <ExhibitorProfile />
            </>
          }
        />
        <Route
          path='key-audience-groups'
          element={
            <>
              <AudienceGroups />
            </>
          }
        />
        <Route
          path='products-category'
          element={
            <>
              <ProductsCategory />
            </>
          }
        />
        <Route
          path='visitor-profile'
          element={
            <>
              <VisitorProfle />
            </>
          }
        />
        <Route
          path='toolkit'
          element={
            <Toolkit />
          }
        />
        <Route path='gallery' element={<GalleryPage />} />
        <Route
          path='galery-itm-2019'
          element={
            <Container className='mt-5 mb-5'>
              <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2019</h1>
              <Gallery galleryImgs={gallery2019} galleryName='gallery-itm-2019' />
            </Container>
          }
        />
        <Route
          path='galery-itm-2020'
          element={
            <Container className='mt-5 mb-5'>
              <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2020</h1>
              <Gallery galleryImgs={gallery2020} galleryName='gallery-itm-2020' />
            </Container>
          }
        />
        <Route
          path='galery-itm-2021'
          element={
            <Container className='mt-5 mb-5'>
              <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2021</h1>
              <Gallery galleryImgs={gallery2021} galleryName='gallery-itm-2021' />
            </Container>
          }
        />
        <Route
          path='galery-itm-2022'
          element={
            <Container className='mt-5 mb-5'>
              <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2022</h1>
              <Gallery galleryImgs={gallery2022} galleryName='gallery-itm-2022' />
            </Container>
          }
        />
        <Route
          path='donwload-logos'
          element={
            <DonwLoadLogos />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
