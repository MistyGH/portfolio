import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Artin</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/artin-molaei-forouhar/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/MistyGH" target="_blank"><BsGithub /></a>
        <a href="mailto:artinmolaeiforouhar@gmail.com" ><HiOutlineMail /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Artin Molaei-Forouhar. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer