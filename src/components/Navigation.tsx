import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-orange-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-bold text-[#fbbc42] saiyan"
          >
            KM
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 transition-colors duration-300 hover:text-[#fbbc42] hover:scale-105"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.open('/KeshavResume.pdf', '_blank')}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >Download Resume</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;