import React from 'react'
import './Experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle   className='experience__details-icons'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of Frontend*/}

        <div className="experience__backend">
          <h3>Backend Development</h3>
        <div className="experience__content">

        <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle  className='experience__details-icons'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
        </div>


        </div>

      </div>
    </section>
  )
}

export default Experience