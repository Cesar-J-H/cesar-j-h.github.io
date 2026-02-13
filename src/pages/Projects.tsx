import React, { useState } from 'react';
import { Code2, ExternalLink, Filter, Briefcase, Rocket, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pathway: An AI-Assisted Small Business Helper',
      description: 'Full-stack application providing AI-driven solutions for small business owners',
      longDescription: 'A comprehensive e-commerce platform featuring product management, shopping cart, secure checkout with Stripe integration, and an admin dashboard for inventory management.',
      technologies: ['React', 'Python', 'OpenAI API', 'Google Cloud Functions', "Google APIs", 'Firebase'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: '',
      featured: true,
    },
    {
      id: 2,
      title: 'Pokemon Database',
      description: 'A comprehensive database for Pokemon data with advanced search and filtering capabilities',
      longDescription: 'A robust backend application built with Python and C#, utilizing Microsoft Azure for hosting and MySQL for data storage. The application integrates with the PokeAPI to provide information on Pokemon, including stats, abilities, and types.',
      technologies: ['Python', 'C#','Microsoft Azure', 'MySQL', 'PokeAPI'],
      category: 'Backend',
      githubUrl: 'https://github.com/Cesar-J-H/PokemonDB/tree/main',
      liveUrl: '',
      featured: true,
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-sand">
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="w-12 h-12 text-coral" />
              <h1 className="text-6xl font-bold text-teal">My Projects</h1>
            </div>
            <p className="text-lighterBlue text-xl max-w-3xl mx-auto">
              A collection of my work showcasing full-stack development, APIs, and creative solutions
            </p>
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-teal mb-6 flex items-center gap-2">
                <Star className="w-8 h-8 text-coral" />
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white backdrop-blur-sm rounded-2xl border border-coral overflow-hidden hover:border-red transition-all duration-300 hover:shadow-2xl hover:shadow-coral/10 hover:-translate-y-1"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center w-full">
                          <h3 className="text-2xl font-bold text-lightBlue mb-2">{project.title}</h3>
                          <span className="inline-block px-3 py-1 bg-red/20 text-red text-sm font-semibold rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <Rocket className="w-8 h-8 text-coral" />
                      </div>
                      
                      <p className="text-navy mb-4">{project.longDescription}</p>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-lg border border-teal"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-lighterBlue hover:bg-lightBlue text-white rounded-lg transition-colors"
                            >
                              <FaGithub className="w-4 h-4" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-6 h-6 text-teal" />
              <h2 className="text-2xl font-bold text-teal">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red/50 text-red shadow-lg border border-red'
                      : 'bg-red/20 text-red hover:bg-red/50 border border-red'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-teal mb-6 flex items-center gap-2">
              <Briefcase className="w-8 h-8 text-teal" />
              All Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white backdrop-blur-sm rounded-xl border border-navy overflow-hidden hover:border-teal transition-all duration-300 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-lightBlue">{project.title}</h3>
                    {project.featured && (
                      <Star className="w-5 h-5 text-coral fill-coral" />
                    )}
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-red/20 text-red text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <p className="text-ligtherBlue text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-teal/20 text-teal text-xs rounded border border-teal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 bg-lighterBlue hover:bg-lightBlue text-white text-sm rounded-lg transition-colors flex-1 justify-center"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;