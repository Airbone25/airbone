import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skillCategories } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Technical <span className="text-indigo-500 font-medium">Expertise</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-8 flex items-center gap-4">
                  <span>{category.title}</span>
                  <div className="h-px w-12 bg-indigo-500/30" />
                </h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-colors duration-300 group relative overflow-hidden"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      
                      {/* Subtle Glow on Hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10 rounded-2xl"
                        style={{ backgroundColor: skill.color }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;