
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-8 sm:py-12 px-4 bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[#31356E]">
              Chief.OS is the only AI mate that navigates with you every step of
              the way
            </h2>

            {/* SVG diagram - adjusted size for mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 570 380"
              className="w-full max-w-[200px] sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
            >
              {/* Curved path connecting all points */}
              <path
                d="M 40 150
                   C 40 250, 90 320, 140 250
                   S 200 50, 250 80
                   C 300 120, 340 180, 370 150
                   C 400 120, 440 80, 470 100
                   S 540 150, 530 140"
                stroke="#31356E"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,8"
              />

              {/* Points and labels */}
              {/* Check-In */}
              <circle cx="40" cy="150" r="6" fill="#31356E" />
              <text
                x="40"
                y="130"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="14"
                fill="#31356E"
              >
                Check-In
              </text>

              {/* Briefing */}
              <circle cx="140" cy="250" r="6" fill="#31356E" />
              <text
                x="140"
                y="280"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="14"
                fill="#31356E"
              >
                Briefing
              </text>

              {/* Safety */}
              <circle cx="250" cy="80" r="6" fill="#31356E" />
              <text
                x="250"
                y="60"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="14"
                fill="#31356E"
              >
                Safety
              </text>

              {/* Boat Operation */}
              <circle cx="370" cy="150" r="6" fill="#31356E" />
              <text
                x="370"
                y="180"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="14"
                fill="#31356E"
              >
                Boat Operation
              </text>

              {/* Troubleshooting */}
              <circle cx="470" cy="100" r="6" fill="#31356E" />
              <text
                x="470"
                y="80"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="14"
                fill="#31356E"
              >
                Troubleshooting
              </text>

              {/* Check-Out */}
              <circle cx="530" cy="140" r="6" fill="#31356E" />
              <text
                x="530"
                y="170"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="14"
                fill="#31356E"
              >
                Check-Out
              </text>
            </svg>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pl-2 md:pl-8"
          >
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png"
                  alt="Chief.OS Screenshot"
                  className="w-full h-auto object-contain max-h-[60vh] cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
                <div className="relative">
                  <img
                    src="https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png"
                    alt="Chief.OS Screenshot"
                    className="w-full h-auto object-contain max-h-[85vh]"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
