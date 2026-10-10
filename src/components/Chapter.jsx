// Each string is one paragraph of the excerpt.
const excerpt = [
  'He tensed as he heard the demon lunge forward, its clawed feet scraping against the stones, for the killing blow. Instead, the beast lurched and gurgled on its own venomous saliva. Its snarls were cut short as the sounds of a godsteel sword erupting from the beast’s chest took the air from its lungs. The sword looked to be an impossible point of light protruding from the beast’s chest. Matthias opened his eyes and saw a faint look of surprise in the demon’s face before its head was sheared from its body. Violet blood splattered outward from the chest wound and now decapitated body, staining and sizzling the flagstone floor.',
  'The scaled remains of the demon’s body slumped over with the force of Wulkao’s push who stood behind the fresh kill breathing heavily. Wordlessly, Wulkao pulled Matthias to his feet as they rushed to Broccan’s aid. Two scaled beasts surrounded Broccan who was deflecting attacks and missing his own offensive strikes. Matthias and Wulkao quickly dispatched the attackers and joined the fray on the other side of the door.',
]

export default function Chapter() {
  return (
    <section id="chapter" className="section section-panel">
      <div className="narrow">
        <p className="kicker">An Excerpt</p>
        <h2 className="section-title">From the pages</h2>
        <blockquote className="excerpt">
          {excerpt.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </blockquote>
      </div>
    </section>
  )
}
