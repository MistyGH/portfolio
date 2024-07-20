import React from 'react'
import './about.css'
import ABME from '../../assets/me-about.png'
import { PiStudentBold } from 'react-icons/pi'
import { BsJournalCode } from 'react-icons/bs'
import { FaCodeBranch } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <PiStudentBold className='about__icon' />
              <h5>University</h5>
              <small>2nd Year Student (U of T)</small>
            </article>
            <article className="about__card">
              <FaCodeBranch className='about__icon' />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
            <article className="about__card">
              <BsJournalCode className='about__icon' />
              <h5>Languages</h5>
              <small>10+ Programming Languages</small>
            </article>
          </div>

          <p className='solid'>
          I am a dedicated and ambitious undergraduate pursuing a Bachelor's degree in Computer Engineering at the University of Toronto, with a current CGPA of 3.96 and an expected graduation in 2026. My role as a Software Developer Intern at Scotiabank - Tangerine has provided me with hands-on experience in developing and debugging REST APIs, utilizing reactive programming with Mono and Flux, and monitoring application performance with Dynatrace and GCP. My technical expertise extends to diverse projects, including creating a sophisticated hand gesture recognition system using deep learning and developing an interactive Rubik's Cube simulator in Java. My background as a Programming Lead in a high school robotics club highlights my leadership and problem-solving abilities, while my tutoring experience showcases my commitment to mentoring and supporting others. With a broad skill set and a passion for tackling complex challenges, I am eager to contribute to innovative solutions and advance my development career.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default About