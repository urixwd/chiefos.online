
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-[url('https://chiefos-website.s3.eu-central-003.backblazeb2.com/background.jpg')] bg-cover bg-center bg-no-repeat relative text-white px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-chiefpurple/20 to-black/20" />
      <div className="text-center space-y-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-montserrat font-bold text-4xl md:text-6xl leading-tight"
        >
          Your Fleet Base Operations,<br />
          On AutoPilot
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-montserrat text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          AI powered chief mate that lets you <span className="font-semibold">focus on creating value</span> for your guests, <span className="font-semibold">and nothing else!</span>
        </motion.p>
      </div>

      {/* Hero button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-20 left-0 right-0 z-10 px-6 md:px-0"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={scrollToForm}
          className="w-full md:w-auto font-montserrat bg-[#0B044B] text-white px-8 py-4 rounded-lg text-xl md:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-200"
        >
          Get ChiefOS for Free!
        </motion.button>
      </motion.div>

      {/* Sticky button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 1 : 0 }}
        className={`fixed bottom-6 left-0 right-0 md:left-6 z-50 px-6 md:px-0 pointer-events-${hasScrolled ? 'auto' : 'none'} transition-opacity duration-300`}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={scrollToForm}
          className="w-full md:w-auto font-montserrat bg-[#0B044B] text-white px-8 py-4 rounded-lg text-xl md:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
        >
          Get ChiefOS for Free!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
