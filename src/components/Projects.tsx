interface Project {
  title: string
  description: string
  link: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "D6 RPG Companion",
      description: "Table Top RPG companion WIP. : Django + Next.js",
      link: "https://github.com/glassoctopus/DsixRPGcompanionFE"
    },
    {
      title: "String Theory",
      description: "a dev's first fullstack CRUD app, Next.js + Firebase",
      link: "https://github.com/glassoctopus/StringTheory"
    },
    {
      title: "Solar System",
      description: "Basic front end animation practice where I relearned some trig for the orbits.",
      link: "https://github.com/glassoctopus/solarSystem"
    }
  ]

  return (
    <section id="projects" className="flex justify-center-safe gap-12 py-20">
      {/* ... existing header code ... */}
      
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="md:w-1/2">
              {/* Make the entire image clickable */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={`/project-images/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-auto hover:shadow-2xl transition-shadow"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                {/* Make title clickable too */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}