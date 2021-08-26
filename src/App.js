import React from 'react'
import Banner from './components/Banner'
// import Carousel from './components/Carousel'
import Navigation from './components/Navigation'
import Services from './components/Services'
import About from './components/About'
import Accesible from './components/Accesible'
import Accessibles from './components/Accessibles'
import LegalServices from './components/LegalServices'
import Expert from './components/Expert'
import Footer from './components/Footer'
import Shape from './components/Shape'
import Shapes from './components/Shapes'
import Faq from './components/Faq'

export default function App() {
  return (
    <div className="">
      <div className="img-banner">
        <Navigation />
        <Banner />
      </div>
      <Services />
      <Accessibles />
      <Shapes />
      <About />
      <Shape />
      <div className="bg-gray">
        <Accesible />
        <Faq />
        <LegalServices />
      </div>
      <Expert />
      <Footer />
    </div>
  )
}
