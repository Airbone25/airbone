import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let's build <span className="text-indigo-500">together.</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {contact.socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-indigo-500/50 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <Icon size={20} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-white font-medium">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
          
          <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm font-light">
              {contact.copyright}
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-light">
              <span>Made by</span>
              <span className="text-white font-medium">Airbone</span>
            </div>
          </footer>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent blur-sm" />
    </section>
  );
};

export default Contact;