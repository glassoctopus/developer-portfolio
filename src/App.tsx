import './tailwind.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
<div className="font-sans min-h-screen bg-gradient-to-br from-emerald-100 to-stone-700 text-gray-900">
  <div className="container p-12 m-12">
          <Header />
          <Hero />
          <About />
          <Projects />
          {/* <Contact /> */}
          <Footer />
        </div>
      </div>
  )
}