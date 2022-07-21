import React from 'react'
import './header.css'
import CTA from './CTA'
import me from "../../assets/profile pic.jpg"
import Headersocial from "./headersocial"

const header = () => {
  return (
   <header>
    <div className="container header__container">
    <h5>Hello, I'm</h5>
    <h1>Diya.L.Jain</h1>
    <h5 className="text-light">Full Stack Web Developer</h5>
    <CTA />
    <Headersocial />

    <div className="me">
      <img src={me} alt="me" />
    </div>

    <a href="#contact"className="scroll__down">Scroll Down</a>

    </div>
   </header>
  )
}

export default header