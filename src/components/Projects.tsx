import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: 'Beautify',
      description: 'Beautify is a powerful and easy-to-use photo editing tool built with React. It allows users to enhance their photos with features like adjusting brightness, contrast, saturation, and more, giving them full control over their image editing experience.',
      techStack: ['React','Vite'],
      githubLink: 'https://github.com/Airbone25/Beautify-Photo-Editor',
      liveLink: 'https://beautify-photo-editor.vercel.app/',
    },
    {
      title: 'Manga-kun',
      description: 'Welcome to Manga-kun, a place where creativity is appreciated. Manga-kun is a platform which provides peoople to show their creative minds and let know people around globe to know about their creations. Here, people can read comic books, novels, mangas, etc. And people who want to showcase their storywriting and drawing skills can upload their creations.',
      techStack: ['React', 'ExpressJS', 'NodeJS', 'MongoDB','Multer','Cloudinary'],
      githubLink: 'https://github.com/Airbone25/Manga-kun',
      liveLink: 'https://manga-kun.vercel.app/',
    },
    {
      title: 'Gappe',
      description: 'Gappe is an empathetic AI-powered chat platform where users connect with personalized virtual personas that remember past interactions and respond with contextual, human-like warmth.',
      techStack: ['NextJS', 'TypeScript', 'TailwindCSS', 'Shadcn','MongoDB','Google Gemini 2.5 pro'],
      githubLink: 'https://github.com/Airbone25/Gappe',
      liveLink: 'https://gappe-sigma.vercel.app/',
    },
    {
      title: 'Financify',
      description: 'A finance dashboard that provides real-time stock market data, portfolio tracking, and financial news, built with Next.js and PostgreSQL.',
      techStack: ['NextJS', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
      githubLink: 'https://github.com/Airbone25/nextjs-finance-dashboard',
      liveLink: 'https://nextjs-finance-dashboard-gamma.vercel.app/dashboard',
    },
    {
      title: 'ChatApp',
      description: 'A real-time chat application that allows users to create accounts, join rooms, and send messages, built with Node.js, and Socket.io.',
      techStack: ['NodeJS', 'ExpressJS', 'Socket.io'],
      githubLink: 'https://github.com/Airbone25/ChatApp',
      liveLink: 'https://chatapp-b2fm.onrender.com',
    },
  ];

  const visibleProjects = projects.slice(currentIndex, currentIndex + 4);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 relative overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            My <span className="text-blue-400 font-normal saiyan">Projects</span>
          </motion.h2>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 20px 80px rgba(59, 130, 246, 0.3)',
                    }}
                    className="bg-gradient-to-br from-gray-800/60 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 shadow-2xl relative overflow-hidden group"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    <div className="relative z-10">
                      <motion.h3
                        className="text-xl md:text-2xl font-bold text-white mb-4"
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-orange-500/30 hover:border-orange-500 transition-all duration-100"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.1,
                            color: '#FF8C00'
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center space-x-2 text-gray-400 hover:text-orange-400"
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.1,
                            color: '#3B82F6'
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                          <span>Live</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(projects.length / 4) }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index * 4)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 4) === index
                      ? 'bg-orange-500 shadow-lg shadow-orange-500/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;