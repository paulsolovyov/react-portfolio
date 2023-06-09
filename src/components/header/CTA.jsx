import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a className="btn" href={CV} download>Download CV</a>
        <a className="btn btn-primary" href='#contact'>Contact</a>
    </div>
  )
}

export default CTA