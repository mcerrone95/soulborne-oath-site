// The year updates itself.
export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-mark">SOULBORNE</span>
      <p>© {new Date().getFullYear()} Matthew Cerrone. All rights reserved.</p>
    </footer>
  )
}
