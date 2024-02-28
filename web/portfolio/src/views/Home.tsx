import React from 'react'
import './home.scss'
import Portrait from '../assets/banner_image.png'
import AboutImage from '../assets/about_image.png'

export default function Home() {
  return (
    <div className='home'>

      <section className="banner" id="banner-home">
        <h1>CREA<img src={Portrait} />TIVE</h1>
        <h1>DEVELOPER</h1>
        <h1>BELGIUM</h1>
      </section>

      <section className="about" id="about-home">
        <h2>I'm a 21 year old <span>creative developer</span> who turns<span> ideas</span> into <span>amazing</span> CREATIONS.</h2>
        <img src={AboutImage} alt="about" />
      </section>

      <section className="project" id="project-home">

      <h1>SELECTED</h1>

      </section>
        
    </div>
  )
}
