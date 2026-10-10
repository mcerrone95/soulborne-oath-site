const links = [
  { href: '#book', label: 'The Book' },
  { href: '#matthias', label: 'Matthias' },
  { href: '#world', label: 'The World' },
  { href: '#chapter', label: 'Chapter' },
  { href: '#signup', label: 'Launch List' },
]

export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top">SOULBORNE</a>
      <nav className="nav">
        {links.map((link) => (
          <a key={link.href} className="navlink" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
