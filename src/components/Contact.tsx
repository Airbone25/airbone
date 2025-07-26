import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Airbone25',
      color: '#FF8C00',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/keshav-mehra-543362296/',
      color: '#0077B5',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:keshavmehra2005@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-gray-900 to-blue-900 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Let's <span className="text-orange-400 font-normal saiyan">Connect</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            I'm always open for internships, freelance gigs, interesting projects or dicussion on animes. 
            Let's create something amazing together!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-16"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    boxShadow: `0 10px 30px ${link.color}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <motion.div
                    className="p-4 bg-gray-800/50 rounded-2xl border border-gray-600 hover:border-orange-500 transition-all duration-300"
                    whileHover={{
                      backgroundColor: `${link.color}20`,
                      borderColor: link.color,
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      className="text-gray-400 group-hover:text-white transition-colors duration-300" 
                    />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                  >
                    {link.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </motion.div>
                  
                  {/* Energy aura effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${link.color}30, transparent)`,
                      filter: 'blur(12px)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-gray-700/50 pt-8 mt-12"
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.p
              className="text-gray-400 mb-4"
            >
              Made with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="inline text-red-500" size={16} />
              </motion.span> by Airbone
            </motion.p>
            <motion.p
              className="text-sm text-gray-500"
            >
              © 2025 Keshav Mehra. All rights reserved.
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;