import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="md:text-5xl text-6xl text-white text-center mb-16"
          >
            <span className="text-orange-400 saiyan">Experience</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/60 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Animated border */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-sm -z-10"
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    Web Developer Intern
                  </motion.h3>
                  <motion.h4
                    className="text-xl text-orange-400 font-semibold mb-4 md:mb-0"
                  >
                    Infits
                  </motion.h4>
                </div>
                
                <div className="flex flex-col space-y-2 text-gray-300">
                  <motion.div
                    className="flex items-center space-x-2"
                  >
                    <Calendar size={18} />
                    <span>Feb 5, 2025 - May 5, 2025</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                  >
                    <MapPin size={18} />
                    <span>Remote</span>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="flex items-start space-x-3 mb-6"
              >
                <Code className="text-blue-400 mt-1" size={20} />
                <p className="text-gray-300 text-lg leading-relaxed">
                  Worked on developing web applications using cutting-edge technologies including 
                  <span className="text-blue-400 font-semibold"> React.js</span>, 
                  <span className="text-orange-400 font-semibold"> Firebase</span>, 
                  <span className="text-green-400 font-semibold"> Node.js</span>, and 
                  <span className="text-purple-400 font-semibold"> Next.js</span>. 
                  Contributed to building scalable and efficient web solutions.
                </p>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap gap-3"
                transition={{ delay: 0.8 }}
              >
                {['React.js', 'Firebase', 'Node.js', 'Next.js', 'JavaScript', 'Web Development'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-orange-500/30 hover:border-orange-500 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;