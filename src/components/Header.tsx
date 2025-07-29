import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-4" />{/*invisible div to push the logo and name right... bad work around... but here we are */}
        <div className="flex items-right">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img 
              src="/assets/png/john-doe.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-semibold">Thomas McMahon</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white drop-shadow-md/100 text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img 
            src={menuOpen ? "/assets/svg/ham-menu-close.svg" : "/assets/svg/ham-menu.svg"}
            alt="Menu" 
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-br from-emerald-100 to-stone-700 shadow-inner">
          <ul className="items-center flex flex-col py-4 space-y-4 md:flex-row md:space-y-0 md:space-x-">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
