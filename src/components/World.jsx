// TODO: replace each text line with your own worldbuilding.
const entries = [
  { title: 'The Exalted', text: '[One line about the Exalted and their order]' },
  { title: 'The War', text: '[One line about the war that broke Matthias]' },
  { title: 'The War Machines', text: '[One line about the divine war machines]' },
]

export default function World() {
  return (
    <section id="world" className="section section-ground">
      <div className="wide">
        <p className="kicker">The World</p>
        <h2 className="section-title">Gods, steel, and the cost of both</h2>
        <div className="cards">
          {entries.map((entry) => (
            <div key={entry.title} className="world-card">
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
