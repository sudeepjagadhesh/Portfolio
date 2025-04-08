import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer crafting exceptional digital experiences
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com"
               className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate Full Stack Developer with 5 years of experience building web applications.
            I specialize in React, Node.js, and modern web technologies to create efficient and scalable solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Developer working"
              className="rounded-lg shadow-lg"
            />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
              <div className="space-y-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="bg-gray-100 px-4 py-2 rounded-full inline-block mr-2 mb-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured online store built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative project management tool with real-time updates',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Let's Work Together</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            I'm currently available for freelance projects or full-time opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
            <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;