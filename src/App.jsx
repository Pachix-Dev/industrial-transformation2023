import { useTranslation } from 'react-i18next'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, useLocation } from 'react-router'
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
import { cumbre2023, gallery2019, gallery2020, gallery2021, gallery2022, galleryConferencias2023, galleryExpositores2023, galleryFuturistic2023, itmujeres2023, mtech2023, nocheIndustriales2023, octoker2023, startupPitch2023 } from './components/constants_gallery'
import { Gallery } from './components/Gallery/Gallery'
import { DonwLoadLogos } from './components/DonwloadLogos/DonwLoadLogos'
import { Toolkit } from './components/Toolkit/Toolkit'
import { WhyExhibit } from './components/WhyExhibit/WhyExhibit'
import { ExhibitorProfile } from './components/ExhibitorProfile/ExhibitorProfile'
import { AudienceGroups } from './components/AudienceGroups/AudienceGroups'
import { ProductsCategory } from './components/ProductsCategory/ProductsCategory'
import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { StartupPitch } from './components/StartupPitch/StartupPitch'
import { Roadshows } from './components/Roadshows/Roadshows'
import { Program } from './components/Program/Program'
import { trackPageView } from './google-analytics'
import { Sponsorships } from './components/Sponsorships/Sponsorships'

function RouteWithHelmet ({ title, description, element }) {
  return (
    <>
      <Helmet>
        <title>{`ITM 2024 | ${title}`}</title>
        <meta name='description' content={description} />
      </Helmet>
      {element}
    </>
  )
}

function App () {
  const { t } = useTranslation()
  const location = useLocation()
  useEffect(() => {
    trackPageView(location)
  }, [location])

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<RouteWithHelmet title='Home' description={t('seo.description')} element={<Home />} />} />
        <Route path='about-us' element={<RouteWithHelmet title='About Us' element={<AboutUs />} />} />
        <Route path='background' element={<RouteWithHelmet title='Background' element={<Background />} />} />
        <Route path='contact' element={<RouteWithHelmet title='Contact' element={<Contact />} />} />
        <Route path='why-visit' element={<RouteWithHelmet title='Why visit' element={<WhyVisit />} />} />
        <Route path='why-exibit' element={<RouteWithHelmet title='Why visit' element={<WhyExhibit />} />} />
        <Route path='exhibitor-profile' element={<RouteWithHelmet title='Exibitor Profile' element={<ExhibitorProfile />} />} />
        <Route path='key-audience-groups' element={<RouteWithHelmet title='Key Audience Groups' element={<AudienceGroups />} />} />
        <Route path='products-category' element={<RouteWithHelmet title='Products Category' element={<ProductsCategory />} />} />
        <Route path='visitor-profile' element={<RouteWithHelmet title='Visitor Profile' element={<VisitorProfle />} />} />
        <Route path='toolkit' element={<RouteWithHelmet title='Toolkit' element={<Toolkit />} />} />
        <Route path='gallery' element={<RouteWithHelmet title='Gallery' element={<GalleryPage />} />} />
        <Route
          path='galery-itm-2019'
          element={<RouteWithHelmet
            title='Galery ITM 2019'
            element={
              <Container className='mt-5 mb-5'><h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2019</h1><Gallery galleryImgs={gallery2019} galleryName='Gallery ITM 2019' /></Container>
            }
                   />}
        />
        <Route
          path='galery-itm-2020'
          element={<RouteWithHelmet
            title='Galery ITM 2020'
            element={
              <Container className='mt-5 mb-5'><h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2020</h1><Gallery galleryImgs={gallery2020} galleryName='Gallery ITM 2020' /></Container>
            }
                   />}
        />
        <Route
          path='galery-itm-2021'
          element={<RouteWithHelmet
            title='Galery ITM 2021'
            element={
              <Container className='mt-5 mb-5'><h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2021</h1><Gallery galleryImgs={gallery2021} galleryName='Gallery ITM 2021' /></Container>
            }
                   />}
        />
        <Route
          path='galery-itm-2022'
          element={<RouteWithHelmet
            title='Galery ITM 2022'
            element={
              <Container className='mt-5 mb-5'><h1 className='text-center fw-bold' style={{ color: '#e8001e' }}>ITM 2022</h1><Gallery galleryImgs={gallery2022} galleryName='Gallery ITM 2022' /></Container>
            }
                   />}
        />
        <Route
          path='galery-itm-2023'
          element={<RouteWithHelmet
            title='Galery ITM 2023'
            element={
              <Container className='mt-5 mb-5'>
                <h1 className='text-center fw-bold text-uppercase' style={{ color: '#e8001e' }}>
                  {t('menu.exhibitors')}
                </h1>
                <Gallery galleryImgs={galleryExpositores2023} />
                <h1 className='mt-5 text-center fw-bold text-uppercase' style={{ color: '#e8001e' }}>
                  {t('gallery.conferences')}
                </h1>
                <Gallery galleryImgs={galleryConferencias2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  FUTURISTIC MINDS
                </h1>
                <Gallery galleryImgs={galleryFuturistic2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  STARTUP PITCH
                </h1>
                <Gallery galleryImgs={startupPitch2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  ITMUJERES
                </h1>
                <Gallery galleryImgs={itmujeres2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  M-TECH
                </h1>
                <Gallery galleryImgs={mtech2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  CUMBRE DE DESARROLLO INDUSTRIAL SOSTENIBLE
                </h1>
                <Gallery galleryImgs={cumbre2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  NOCHE DE INDUSTRIALES/ PREMIOS TIC E ITZAMNÁ
                </h1>
                <Gallery galleryImgs={nocheIndustriales2023} />
                <h1 className='mt-5 text-center fw-bold' style={{ color: '#e8001e' }}>
                  OKTOBERFEST LEÓN
                </h1>
                <Gallery galleryImgs={octoker2023} />
              </Container>
            }
                   />}
        />
        <Route path='donwload-logos' element={<RouteWithHelmet title='Download Logos' element={<DonwLoadLogos />} />} />
        <Route path='startup-pitch' element={<RouteWithHelmet title='Startup Pitch' element={<StartupPitch />} />} />
        <Route path='program' element={<RouteWithHelmet title='Program' element={<Program />} />} />
        <Route path='roadshows' element={<RouteWithHelmet title='Roadshows' element={<Roadshows />} />} />
        <Route path='sponsorships' element={<RouteWithHelmet title='Sponsorships' element={<Sponsorships />} />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
