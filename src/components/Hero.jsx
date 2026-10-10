import Embers from './Embers.jsx'
import cover from '../assets/cover.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Embers />
      <div className="hero-inner">
        <img
          className="hero-cover"
          src={cover}
          width="800"
          height="1200"
          alt="Cover of Oath of Vengeance by Matthew Cerrone: an armored paladin in a tattered cloak stands before a burning castle, a stone eagle at his side."
        />
        <div className="hero-text">
          <p className="hero-kicker">Book One of the Soulborne Trilogy</p>
          <h1 className="hero-title">SOULBORNE</h1>
          <p className="hero-subtitle">Oath of Vengeance</p>
          <p className="hero-tagline">
            He lost everything. What woke in the fire was no longer only a man.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#chapter">Read an excerpt</a>
            <a className="btn btn-outline" href="#signup">Join the launch list</a>
          </div>
          <p className="hero-status">Coming soon</p>
        </div>
      </div>
    </section>
  )
}
