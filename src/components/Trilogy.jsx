// To add or change a book, edit this list. Set current: true on the book that is out or next.
const books = [
  { numeral: 'I', arc: 'Vengeance', caption: 'Book One: Oath of Vengeance', current: true },
  { numeral: 'II', arc: 'Reckoning', caption: 'Book Two', current: false },
  { numeral: 'III', arc: 'Redemption', caption: 'Book Three', current: false },
]

export default function Trilogy() {
  return (
    <section className="section section-ground">
      <div className="wide">
        <p className="kicker kicker-center">The Trilogy</p>
        <div className="cards">
          {books.map((book) => (
            <div key={book.numeral} className={`book-card${book.current ? ' book-card-current' : ''}`}>
              <div className="book-numeral">{book.numeral}</div>
              <div className="book-arc">{book.arc}</div>
              <div className="book-caption">{book.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
