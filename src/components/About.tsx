import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl"
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
            className="text-4xl md:text-5xl font-bold text-white mb-12"
          >
            About <span className="text-blue-400 font-normal saiyan">Me</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-2xl"
          >
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hey, I'm <span className="text-orange-400 font-semibold">Keshav Mehra</span>, a.k.a Airbone , an undergraduate Computer Science student and a passionate full-stack developer dedicated to building stuff that solves real world problems.
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
              transition={{ type: "spring", stiffness: 300 }}
            >
              I mainly work with <span className="text-blue-400 font-semibold">React.js</span> and <span className="text-blue-400 font-semibold">Next.js</span> as my frameworks of choice, alongside <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-blue-400 font-semibold">TypeScript</span>. My database of choice is either <span className="text-green-400 font-semibold">MongoDB</span> or <span className="text-blue-400 font-semibold">PostgreSQL</span>.
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              transition={{ type: "spring", stiffness: 300 }}
            >
              I am currently exploring the world of AI and machine learning, and I am excited to integrate these technologies into my projects. I believe in the power of technology to create innovative solutions that can make a difference.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;