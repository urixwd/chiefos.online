
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          hasScrolled ? 'bg-[#869CB3] shadow-md' : ''
        }`}
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
          
          <div className="flex items-center gap-4">
            {!hasScrolled && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#contact-form"
                onClick={scrollToForm}
                className="font-montserrat text-white hover:text-gray-200 transition-colors duration-200"
              >
                Login
              </motion.a>
            )}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 1 : 0 }}
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 ${
          hasScrolled ? 'block' : 'hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto font-montserrat bg-[#0B044B] text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg md:float-left"
          >
            Get ChiefOS for Free!
          </button>
        </div>
      </motion.div>
    </>
  );
};
