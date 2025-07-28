export default function About() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 
    'SASS', 'Git', 'TypeScript', 'Tailwind'
  ]

  return (
    <div className="font-sans bg-gradient-to-br from-emerald-100 to-stone-700 text-gray-900 shadow-[0_4px_6px_rgba(113,152,157,0.5)] rounded-[13px]">
      <section className="p-12 py-20 ">
          <div className="flex flex-col items-center p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                developer : Fullstack & databases
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6">Get to know me!</h3>
                <div className="space-y-4">
                  <p>
                    I'm <span className="inline-block text-2xl">Thomas McMahon</span>, a <span className="text-2xl">Fullstack Developer</span> based in Nashville.
                  </p>
                  <p>
                    A full-stack developer with expertise in JavaScript, React, Python, and SQL, leveraging a background in business analytics to build efficient, data-driven solutions. Passionate about problem-solving, clean code, and optimizing database performance.
                  </p>
                </div>
                <a 
                  href="#contact" 
                  className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <span 
                      key={skill}
                      className="bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}