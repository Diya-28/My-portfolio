import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/Nav'
import About from './components/about/about'
import Experience from './components/Experience/Experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
   <>
   <Header />
   <Nav />
   <About />
   <Experience />
   <Portfolio />
   <Contact />
   <Footer />
   </>
  )
}

export default App