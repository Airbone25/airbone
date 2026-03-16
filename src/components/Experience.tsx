import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Work <span className="text-indigo-500 font-medium">History</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent hidden md:block" />
                
                <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-[45%]">
                    <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 shadow-xl group">
                      <div className="flex items-center gap-3 mb-4 text-indigo-400">
                        <Briefcase size={18} />
                        <span className="text-sm font-bold tracking-widest uppercase">{exp.company}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 leading-relaxed mb-6 font-light">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/[0.05] text-slate-300 rounded-full text-xs border border-white/5 group-hover:border-indigo-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[-4px] md:left-1/2 md:ml-[-5px] top-8 w-[10px] h-[10px] rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20" />
                  
                  <div className="hidden md:block w-[45%]" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;