import React from 'react'
import './about.css'
import Me from '../../assets/pic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi' 
import {AiFillFolderAdd} from 'react-icons/ai'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <FaAward className='about__icon' />
                  <h5>Experience</h5>
                  <small>6 months Experience</small>
                </article>

                <article className='about__card'>
                < FiUsers className='about__icon' />
                  <h5>Clients</h5>
                  <small>80+ users</small>
                </article>

                <article className='about__card'>
                <AiFillFolderAdd className='about__icon' />
                  <h5>Projects</h5>
                  <small>10+ completed projects</small>
                </article>
            </div>
              <p>
                I've spent the last several months in a remote environment,working with HTML,CSS ,Javascript building websites using react and other frameworks.My experience as a full-stack web developer at Trendy-tech insights helped me to practically apply my knowledge.Additionally,working on these tasks ,however has helped me become efficient, productive and fast even in a stressful environment,which is important skill in the IT industry.
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>       
      </div>
    </section>
  )
}

export default about