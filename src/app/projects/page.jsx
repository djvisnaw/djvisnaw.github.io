export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  const projects = Array(6).fill({
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
    logo: "H", // Placeholder; could be image or initials
  });

  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Things I’ve made trying to put my dent in the universe.
      </h1>
      <p className="max-w-3xl text-lg mb-12 text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
        adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 transition-colors duration-300"
          >
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold text-xl">
                {project.logo}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 transition"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
              </svg>
              {project.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
