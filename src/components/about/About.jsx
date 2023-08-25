import React from 'react'
import './about.css'
import ABME from '../../assets/me-about.png'
import {PiStudentBold} from 'react-icons/pi'
import {BsJournalCode} from 'react-icons/bs'
import {FaCodeBranch} from 'react-icons/fa'

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
              <PiStudentBold className='about__icon'/>
              <h5>University</h5>
              <small>2nd Year Student</small>
            </article>
            <article className="about__card">
              <FaCodeBranch className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ projects</small>
            </article>
            <article className="about__card">
              <BsJournalCode className='about__icon'/>
              <h5>Languages</h5>
              <small>7+ Programming Languages</small>
            </article>
          </div>

          <p>
          I am a dedicated and ambitious undergraduate student pursuing a Bachelor's degree in Computer Engineering at the University of Toronto. With a current CGPA of 3.94 and expected graduation in 2026, I demonstrate a strong academic foundation. My experience as a Programming Lead for a high school robotics club showcases my leadership and technical skills, while my tutoring background highlights my ability to mentor and support others. I have also completed diverse projects, including developing a hand gesture recognition system and creating a Rubik's Cube program in Java. With a wide range of technical skills and certifications, I am a passionate developer ready to tackle new challenges.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default About