import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Navigation = () => {
  const { navigation, hero } = portfolioData;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-white saiyan cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            KM
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/KeshavResume.pdf', '_blank')}
              className="px-5 py-2 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-slate-200 transition-all duration-300"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;