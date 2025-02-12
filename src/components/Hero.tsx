
import { motion } from "framer-motion";

export const Hero = () => {
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="font-montserrat bg-[#0B044B] text-white px-8 py-4 rounded-lg text-xl md:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            Get ChiefOS for Free!
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
