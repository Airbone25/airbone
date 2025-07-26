import React from 'react';
import { motion, Variants } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Node.js', color: '#6DA55F' },
    { name: 'Express.js', color: '#404d59' },
    { name: 'TailwindCSS', color: '#38B2AC' },
    { name: 'MongoDB', color: '#4ea94b' },
    { name: 'PostgreSQL', color: '#316192' },
    { name: 'TypeScript', color: '#007ACC' },
    { name: 'Supabase', color: '#4479A1' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Three.js', color: '#000000' },
    { name: 'Socket.io', color: '#010101' },
    { name: 'C#', color: '#239120' },
    { name: 'Java', color: '#007396' },
    { name: 'C', color: '#00599C' },
    { name: 'C++', color: '#00599C' },
    { name: 'PHP', color: '#777BB4' },
    { name: 'Websockets', color: '#000000' },
    { name: 'WebRTC', color: '#646CFF' },
    { name: 'Web Scrapping', color: '#117AC9' },
    { name: 'REST APIs', color: '#00A4FF' },
    { name: 'Git', color: '#F05032' },
    { name: 'GitHub', color: '#181717' },
    { name: 'JWTs', color: '#FCC624' },
    { name: 'MarkDown', color: '#F5792A' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Flask', color: '#000000' },
    { name: 'Numpy', color: '#013243' },
    { name: 'Pandas', color: '#150458' },
    { name: 'Matplotlib', color: '#E24A33' },
    { name: 'Scikit-learn', color: '#F7931E' },
    { name: 'TensorFlow', color: '#FF6F00' },
    { name: 'Shadcn', color: '#000000' },
    { name: 'Framer Motion', color: '#000000' },
    { name: 'Vite', color: '#646CFF' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl text-white text-center mb-16"
          >
            <span className="text-yellow-400 saiyan">Tech Stack</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  boxShadow: `0 10px 30px ${skill.color}40`,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-orange-500 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    background: `linear-gradient(to right, ${skill.color}20, ${skill.color}10)`,
                  }}
                >
                  <span className="text-white font-medium text-sm md:text-base">
                    {skill.name}
                  </span>
                </motion.div>

                {/* Energy aura effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${skill.color}30, transparent)`,
                    filter: 'blur(8px)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;