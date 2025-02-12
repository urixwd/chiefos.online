
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-light leading-tight">
              Chief.OS is the only AI mate<br />
              that navigates with you every<br />
              step of the way
            </h2>
            
            {/* SVG diagram */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 570 380" 
              className="w-full max-w-lg"
            >
              {/* Curved path connecting all points */}
              <path 
                d="M 100 150
                   C 100 250, 150 300, 200 200
                   S 250 80, 300 100
                   C 350 120, 380 180, 400 150
                   C 420 120, 450 80, 480 100
                   S 520 150, 500 140" 
                stroke="#31356E" 
                strokeWidth="3" 
                fill="none"
                strokeDasharray="8,8"
              />
              
              {/* Points and labels */}
              {/* Check-In */}
              <circle cx="100" cy="150" r="6" fill="#31356E"/>
              <text x="100" y="130" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#31356E">Check-In</text>
              
              {/* Briefing */}
              <circle cx="200" cy="200" r="6" fill="#31356E"/>
              <text x="200" y="230" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#31356E">Briefing</text>
              
              {/* Safety */}
              <circle cx="300" cy="100" r="6" fill="#31356E"/>
              <text x="300" y="80" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#31356E">Safety</text>
              
              {/* Boat Operation */}
              <circle cx="400" cy="150" r="6" fill="#31356E"/>
              <text x="400" y="180" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#31356E">Boat Operation</text>
              
              {/* Troubleshooting */}
              <circle cx="480" cy="100" r="6" fill="#31356E"/>
              <text x="480" y="80" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#31356E">Troubleshooting</text>
              
              {/* Check-Out */}
              <circle cx="500" cy="140" r="6" fill="#31356E"/>
              <text x="500" y="170" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#31356E">Check-Out</text>
            </svg>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <img
              src="https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png"
              alt="Chief.OS Screenshot"
              className="w-[85%] mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
