import './tailwind.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-black min-h-screen bg-gradient-to-br from-emerald-100 to-stone-700 flex flex-col items-center">
      <div className="w-full max-w-screen-lg mx-auto px-6 py-12 space-y-12 border border-blue-500">
        <Header />
        <Hero />
        <About />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}
