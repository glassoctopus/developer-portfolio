interface Project {
  title: string
  description: string
  image: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with React and Node.js backend",
      image: "/assets/jpeg/project-mockup-example.jpeg"
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time collaboration",
      image: "/assets/jpeg/project-mockup-example.jpeg"
    },
    {
      title: "Portfolio Template",
      description: "Responsive portfolio template for creatives",
      image: "/assets/jpeg/project-mockup-example.jpeg"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href="#"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}