import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/artin-molaei-forouhar/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/MistyGH" target="_blank"><BsGithub /></a>
        <a href="mailto:artinmolaeiforouhar@gmail.com" ><HiOutlineMail /></a>
    </div>
  )
}

export default HeaderSocials