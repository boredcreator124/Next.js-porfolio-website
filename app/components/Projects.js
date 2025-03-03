import React from 'react';

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A Personal Portfolio built with Next.js, showcasing my projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://next-js-porfolio-website.vercel.app/",
  },
  {
    title: "Porfolio website",
    description: "A porfolio website built with HTML,Css and JavaScript.",
    tech: ["HTML", "Css", "JavaScript"],
    link: "https://boredcreator124.github.io/portfolio/",
  },
  {
    title: "It can be beaten",
    description: "A 2d platformer in Godot.",
    tech: ["Godot"],
    link: "https://github.com/yourgithub/notes-app",
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-500">Projects</h2>
        <p className="text-lg mt-2">Here are some of the projects I&apos;ve worked on.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-pink-500 text-white px-2 py-1 rounded text-sm mr-2">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-pink-500 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
