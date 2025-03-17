import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

// const MobileSVG = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 380 570"
//     className="w-full max-w-[200px] mx-auto block sm:hidden"
//   >
//     {/* Curved path connecting all points */}
//     <path
//       d="M 150 40
//          C 250 40, 320 90, 250 140
//          S 50 200, 80 250
//          C 120 300, 180 340, 150 370
//          C 120 400, 80 440, 100 470
//          S 220 520, 213 510"
//       stroke="#31356E"
//       strokeWidth="3"
//       fill="none"
//       strokeDasharray="8,8"
//     />
//     {/* Points and labels */}
//     {/* Check-In */}
//     <circle cx="150" cy="40" r="6" fill="#31356E" />
//     <text
//       x="150"
//       y="20"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="20"
//       fill="#31356E"
//     >
//       Check-In
//     </text>
//     {/* Briefing */}
//     <circle cx="250" cy="140" r="6" fill="#31356E" />
//     <text
//       x="280"
//       y="170"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="20"
//       fill="#31356E"
//     >
//       Briefing
//     </text>
//     {/* Safety */}
//     <circle cx="80" cy="250" r="6" fill="#31356E" />
//     <text
//       x="98"
//       y="257"
//       textAnchor="start"
//       fontFamily="Arial"
//       fontSize="20"
//       fill="#31356E"
//     >
//       Safety
//     </text>
//     {/* Boat Operation */}
//     <circle cx="150" cy="370" r="6" fill="#31356E" />
//     <text
//       x="170"
//       y="378"
//       textAnchor="start"
//       fontFamily="Arial"
//       fontSize="20"
//       fill="#31356E"
//     >
//       Boat Operation
//     </text>
//     {/* Troubleshooting */}
//     <circle cx="100" cy="470" r="6" fill="#31356E" />
//     <text
//       x="120"
//       y="475"
//       textAnchor="start"
//       fontFamily="Arial"
//       fontSize="20"
//       fill="#31356E"
//     >
//       Troubleshooting
//     </text>
//     {/* Check-Out */}
//     <circle cx="213" cy="510" r="6" fill="#31356E" />
//     <text
//       x="213"
//       y="540"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="20"
//       fill="#31356E"
//     >
//       Check-Out
//     </text>
//   </svg>
// );

// const DesktopSVG = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 570 380"
//     className="w-full max-w-[200px] sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
//   >
//     {/* Curved path connecting all points */}
//     <path
//       d="M 40 150
//        C 40 250, 90 320, 140 250
//        S 200 50, 250 80
//        C 300 120, 340 180, 370 150
//        C 400 120, 440 80, 470 100
//        S 520 220, 510 213"
//       stroke="#31356E"
//       strokeWidth="3"
//       fill="none"
//       strokeDasharray="8,8"
//     />

//     {/* Points and labels */}
//     {/* Check-In */}
//     <circle cx="40" cy="150" r="6" fill="#31356E" />
//     <text
//       x="40"
//       y="130"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="16"
//       fill="#31356E"
//     >
//       Check-In
//     </text>

//     {/* Briefing */}
//     <circle cx="140" cy="250" r="6" fill="#31356E" />
//     <text
//       x="170"
//       y="280"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="16"
//       fill="#31356E"
//     >
//       Briefing
//     </text>

//     {/* Safety */}
//     <circle cx="250" cy="80" r="6" fill="#31356E" />
//     <text
//       x="250"
//       y="60"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="16"
//       fill="#31356E"
//     >
//       Safety
//     </text>

//     {/* Boat Operation */}
//     <circle cx="370" cy="150" r="6" fill="#31356E" />
//     <text
//       x="370"
//       y="180"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="16"
//       fill="#31356E"
//     >
//       Boat Operation
//     </text>

//     {/* Troubleshooting */}
//     <circle cx="470" cy="100" r="6" fill="#31356E" />
//     <text
//       x="470"
//       y="80"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="16"
//       fill="#31356E"
//     >
//       Troubleshooting
//     </text>

//     {/* Check-Out */}
//     <circle cx="510" cy="213" r="6" fill="#31356E" />
//     <text
//       x="510"
//       y="243"
//       textAnchor="middle"
//       fontFamily="Arial"
//       fontSize="16"
//       fill="#31356E"
//     >
//       Check-Out
//     </text>
//   </svg>
// );

export const Features = () => {
  const [isBigImageLoaded, setIsBigImageLoaded] = useState(false);

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
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-chiefnavy">
              ChiefOS is the only AI mate that navigates with your guests every
              step of the way
            </h2>

            {/* Mobile SVG diagram */}
            {/* <div className="block sm:hidden">
              <MobileSVG />
            </div> */}

            {/* SVG diagram - adjusted size for larger screens */}
            {/* <div className="hidden sm:block">
              <DesktopSVG />
            </div> */}
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
                  src="https://f003.backblazeb2.com/file/chiefos-website/screenshots/every-step.png"
                  alt="Chief.OS Screenshot"
                  className="w-full h-auto object-contain max-h-[60vh] cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={
                      isBigImageLoaded
                        ? "https://f003.backblazeb2.com/file/chiefos-website/screenshots/every-step-big.png"
                        : "https://f003.backblazeb2.com/file/chiefos-website/screenshots/every-step.png"
                    }
                    alt="Chief.OS Screenshot"
                    className="w-full h-auto object-contain max-h-[85vh]"
                    onLoad={() => setIsBigImageLoaded(true)}
                  />
                  <DialogClose className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                    <X className="w-6 h-6" />
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
