import React from 'react'
import Resume from '../../assets/Artins-Resume.pdf'

const CTA = () => {
  return (
    <div className="cta"> 
        <a href={Resume} download="Artin's Resume" className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA