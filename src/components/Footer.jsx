// TODO: replace the author name. The year updates itself.
export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-mark">SOULBORNE</span>
      <p>© {new Date().getFullYear()} [Author name]. All rights reserved.</p>
    </footer>
  )
}
