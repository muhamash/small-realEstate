import './App.css'
import About from './components/About'
import Client from './components/Client'
import Cta from './components/Cta'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Property from './components/Property'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Property />
      <About />
      <Cta />
      <Faq />
      <Client/>
      <Footer/>
    </>
  )
}

export default App
