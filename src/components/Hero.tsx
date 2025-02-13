
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

export const Hero = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.div 
        id="hero-section"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute bottom-20 left-0 right-0 z-10 flex justify-center"
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
      </motion.div>

      {/* Sticky Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroVisible ? 0 : 1 }}
        className={`fixed bottom-6 z-50 transition-opacity duration-300 ${
          isMobile 
            ? 'left-0 right-0 px-6' 
            : 'left-6'
        } ${isHeroVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={scrollToForm}
          className={`font-montserrat bg-[#0B044B] text-white px-8 py-4 rounded-lg text-xl md:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg ${
            isMobile ? 'w-full' : 'w-auto'
          }`}
        >
          Get ChiefOS for Free!
        </motion.button>
      </motion.div>
    </>
  );
};
