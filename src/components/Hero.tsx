import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const roles = ['a Developer', 'a Gamer', 'a Goku Fan'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const index = useRef(0);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let typingInterval: ReturnType<typeof setInterval>;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (index.current < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, index.current + 1));
          index.current++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 1000);
        }
      }, 100);
    } else {
      typingInterval = setInterval(() => {
        if (index.current > 0) {
          setDisplayText(currentRoleText.slice(0, index.current - 1));
          index.current--;
        } else {
          clearInterval(typingInterval);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }, 100);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentRole, isTyping, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm{' '}
            <motion.span
              className="text-[#fbbc42] font-normal saiyan"
            >
              Keshav Mehra
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-4xl text-blue-400 h-16 flex items-center justify-center"
            key={currentRole}
          >
            I'm {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1 text-orange-400"
            >
              |
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center space-x-6 mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;