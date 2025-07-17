export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">Hey, I'm Thomas McMahon</h1>
            <p className="text-xl mb-8">
              Fullstack developer with expertise in JavaScript, React, Python, and SQL, leveraging a background in business analytics to build efficient, data-driven solutions. Passionate about problem-solving, clean code, and optimizing database performance.
            </p>
            <a 
              href="#projects" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="md:w-1/2 flex justify-center md:justify-end space-x-6">
            {['linkedin', 'github', 'twitter', 'youtube', 'instagram'].map((social) => (
              <a key={social} href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src={`/assets/png/${social}-ico.png`} 
                  alt={social} 
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}