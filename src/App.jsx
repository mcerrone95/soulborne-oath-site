import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Book from './components/Book.jsx'
import Trilogy from './components/Trilogy.jsx'
import Matthias from './components/Matthias.jsx'
import World from './components/World.jsx'
import Chapter from './components/Chapter.jsx'
import Signup from './components/Signup.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Book />
        <Trilogy />
        <Matthias />
        <World />
        <Chapter />
        <Signup />
      </main>
      <Footer />
    </>
  )
}
