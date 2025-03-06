export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A Personal Portfolio  designed to showcase my projects, skills, and experience.",
      link: "https://github.com/Saqlaina-Mushtaq/My-Portfolio.git",
    },
    {
      title: "Notes App",
      description: "A lightweight and user-friendly Notes App with CRUD features. Perfect for quick note-taking and organization!.",
      link: "https://github.com/Saqlaina-Mushtaq/NotesApp.git",
    },
    {
      title: "News Search App ",
      description: "A real-time News Search App built  powered by a News API.",
      link: "https://github.com/Saqlaina-Mushtaq/javascript-Project/tree/5fcb4892e363b1bde4b174b0671a136c67d46b6a/project%20using%20API",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
        <p className="mt-4 text-lg">Here are some of my recent works:</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
