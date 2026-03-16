import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-shiny">
              {about.title.split(' ')[0]} <span className="text-indigo-400 font-medium drop-shadow-[0_0_10px_rgba(129,140,248,0.3)]">{about.title.split(' ')[1]}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 via-white/20 to-transparent" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 relative group overflow-hidden"
          >
            {/* Animated shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:animate-[shimmer-sweep_2s_infinite] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              {about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                  {para.text.split(' ').map((word, wIdx) => {
                    const cleanWord = word.replace(/[.,]/g, '');
                    const isHighlighted = para.highlight === cleanWord || para.highlights?.includes(cleanWord);
                    return (
                      <span key={wIdx} className={isHighlighted ? "text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" : ""}>
                        {word}{' '}
                      </span>
                    );
                  })}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;