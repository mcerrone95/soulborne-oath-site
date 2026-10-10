import Embers from './Embers.jsx'
import Sigil from './Sigil.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Embers />
      <Sigil />
      <p className="hero-kicker">Book One of the Soulborne Trilogy</p>
      <h1 className="hero-title">SOULBORNE</h1>
      <p className="hero-subtitle">Oath of Vengeance</p>
      <p className="hero-tagline">
        He lost everything. What woke in the fire was no longer only a man.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#chapter">Read the opening</a>
        <a className="btn btn-outline" href="#signup">Join the launch list</a>
      </div>
      <p className="hero-status">Coming soon</p>
    </section>
  )
}
