const facts = [
  { label: 'Calling', value: 'Exalted paladin' },
  { label: 'Vow', value: 'Vengeance' },
  { label: 'Form', value: 'Divine war machine' },
]

export default function Matthias() {
  return (
    <section id="matthias" className="section section-panel">
      <div className="wide split">
        <div className="plate">
          <p className="plate-role">Exalted paladin</p>
          <p className="plate-name">MATTHIAS</p>
        </div>
        <div className="split-text">
          <p className="kicker">Meet the Soulborne</p>
          <h2 className="section-title">Matthias</h2>
          <p>
            A paladin who bled for a war he stopped believing in. Reborn in a divine war machine,
            he carries the strength of the divine and the weight of everything it could not save.
          </p>
          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
