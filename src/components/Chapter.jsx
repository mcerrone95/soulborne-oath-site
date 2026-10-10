// TODO: replace this with 150 to 250 words from the opening of the book.
const excerpt =
  '[Paste 150 to 250 words from the opening of your book here. Pick the lines that make a stranger keep reading.]'

export default function Chapter() {
  return (
    <section id="chapter" className="section section-panel">
      <div className="narrow">
        <p className="kicker">Chapter One</p>
        <h2 className="section-title">Read the opening</h2>
        <blockquote className="excerpt">{excerpt}</blockquote>
      </div>
    </section>
  )
}
