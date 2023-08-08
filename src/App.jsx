import { useTranslation } from 'react-i18next'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router'
import { Helmet } from 'react-helmet'
import { Menu } from './components/Menu/Menu'
import { Home } from './components/Home/Home'
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
import { useEffect } from 'react'
import { initializeGA, logPageView } from './analytics'
import { Footer } from './components/Footer/Footer'
import { StartupPitch } from './components/StartupPitch/StartupPitch'
import { Program } from './components/Program/Program'
import { Roadshows } from './components/Roadshows/Roadshows'

function App () {
  const { t } = useTranslation()

  useEffect(() => {
    initializeGA()
    logPageView()
  }, [])

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
              <Helmet>
                <title>ITM 2023 | About Us</title>
              </Helmet>
              <AboutUs />
            </>
          }
        />
        <Route
          path='background'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Background</title>
              </Helmet>
              <Background />
            </>
          }
        />
        <Route
          path='contact'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Contact</title>
              </Helmet>
              <Contact />
            </>
          }
        />
        <Route
          path='why-visit'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Why visit</title>
              </Helmet>
              <WhyVisit />
            </>
          }
        />
        <Route
          path='why-exibit'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Why Exibit</title>
              </Helmet>
              <WhyExhibit />
            </>
          }
        />
        <Route
          path='exibitor-profile'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Exibitor Profile</title>
              </Helmet>
              <ExhibitorProfile />
            </>
          }
        />
        <Route
          path='key-audience-groups'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Key Audience Groups</title>
              </Helmet>
              <AudienceGroups />
            </>
          }
        />
        <Route
          path='products-category'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Products Category</title>
              </Helmet>
              <ProductsCategory />
            </>
          }
        />
        <Route
          path='visitor-profile'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Visitor Profile</title>
              </Helmet>
              <VisitorProfle />
            </>
          }
        />
        <Route
          path='toolkit'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Toolkit</title>
              </Helmet>
              <Toolkit />
            </>
          }
        />
        <Route path='gallery' element={<GalleryPage />} />
        <Route
          path='galery-itm-2019'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Galery ITM 2019</title>
              </Helmet>
              <Container className='mt-5 mb-5'>
                <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2019</h1>
                <Gallery galleryImgs={gallery2019} galleryName='Gallery ITM 2019' />
              </Container>
            </>
          }
        />
        <Route
          path='galery-itm-2020'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Galery ITM 2020</title>
              </Helmet>
              <Container className='mt-5 mb-5'>
                <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2020</h1>
                <Gallery galleryImgs={gallery2020} galleryName='Gallery ITM 2020' />
              </Container>
            </>
          }
        />
        <Route
          path='galery-itm-2021'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Galery ITM 2021</title>
              </Helmet>
              <Container className='mt-5 mb-5'>
                <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2021</h1>
                <Gallery galleryImgs={gallery2021} galleryName='Gallery ITM 2021' />
              </Container>
            </>
          }
        />
        <Route
          path='galery-itm-2022'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Galery ITM 2022</title>
              </Helmet>
              <Container className='mt-5 mb-5'>
                <h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2022</h1>
                <Gallery galleryImgs={gallery2022} galleryName='Gallery ITM 2022' />
              </Container>
            </>
          }
        />
        <Route
          path='donwload-logos'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Download Logos</title>
              </Helmet>
              <DonwLoadLogos />
            </>
          }
        />
        <Route
          path='startup-pitch'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Download Logos</title>
              </Helmet>
              <StartupPitch />
            </>
          }
        />
        <Route
          path='program'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Program</title>
              </Helmet>
              <Program />
            </>
          }
        />
        <Route
          path='roadshows'
          element={
            <>
              <Helmet>
                <title>ITM 2023 | Roadshows</title>
              </Helmet>
              <Roadshows />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
