import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { hero } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = hero.roles[roleIndex];
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % hero.roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, hero.roles, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Sleek Radial Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 40%)`
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-4"
          >
            Welcome to my universe
          </motion.p>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight text-shiny">
            I'm <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Keshav Mehra</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-light text-slate-400 h-12 mb-12 flex items-center justify-center">
            <span className="mr-3">I'm</span>
            <span className="text-white font-medium border-r-2 border-indigo-500 pr-2 min-w-[20px] text-glow-indigo">
              {displayText}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full shadow-2xl shadow-white/5 hover:bg-slate-100 transition-all duration-300 w-full sm:w-auto"
            >
              {hero.ctaPrimary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/10 text-white font-medium rounded-full backdrop-blur-md transition-all duration-300 w-full sm:w-auto glass-card"
            >
              {hero.ctaSecondary}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative subtle lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;