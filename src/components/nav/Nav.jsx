import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {BsJournalCode} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='container'>
      <icon>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsBriefcase /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalCode /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      </icon>
      <text>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
      </text>
    </nav>
  )
}

export default Nav