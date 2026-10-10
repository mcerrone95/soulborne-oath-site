const entries = [
  {
    title: 'The Exalted',
    text: 'An order of twelve knights, conscripted with divine purpose and gifted with divine abilities. Their charge: uphold the Oath, whatever the cost. Humanity must not fall under their watch.',
  },
  {
    title: 'The Eternus War',
    text: 'Waged by an unseen enemy of many names, known as the Fallen. He commands the Damned Legion, an army of lost and corrupted souls that fights a war of attrition against humanity from the Hells, a separate plane of existence.',
  },
  {
    title: 'The Oath',
    text: 'A divine purpose held by all of humanity, and above all by the Exalted: protect humankind, even at the expense of oneself.',
  },
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
