
import { motion } from "framer-motion";

export const Navbar = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-8"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="/" className="block">
            <img 
              src="https://chiefos-website.s3.eu-central-003.backblazeb2.com/logo-light.png" 
              alt="Chief.OS Logo" 
              className="h-8 md:h-10"
            />
          </a>
        </motion.div>
        
        <div className="flex items-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#contact-form"
            onClick={scrollToForm}
            className="font-montserrat text-white hover:text-gray-200 transition-colors duration-200"
          >
            Login
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#contact-form"
            onClick={scrollToForm}
            className="font-montserrat px-4 sm:px-6 py-2 bg-chiefblue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap"
          >
            Try ChiefOS
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
