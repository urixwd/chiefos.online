import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Chief.OS"
    );
    window.open(`https://wa.me/972545854406?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-chiefpurple text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <img
            src="https://chiefos-website.s3.eu-central-003.backblazeb2.com/logo-light.png"
            alt="Chief.OS Logo"
            className="h-8"
          />
          <p className="text-gray-300 text-sm max-w-md">
            AI-powered platform revolutionizing yacht charter base operations.
            We serve as your virtual chief mate, managing the entire charter
            lifecycle while preventing costly mistakes and ensuring guest
            safety.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="font-montserrat font-semibold text-lg">
            Key Features
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Pre-embarkation Documentation</li>
            <li>Digital Check-ins & Check-outs</li>
            <li>Real-time Troubleshooting</li>
            <li>24/7 AI-powered Support</li>
            <li>Proactive Damage Prevention</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="font-montserrat font-semibold text-lg">
            See ChiefOS in action
          </h3>
          <div className="space-y-2">
            <a
              href="mailto:info@chiefos.online"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Mail size={18} />
              <span>info@chiefos.online</span>
            </a>
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <MessageSquare size={18} />
              <span>Contact via WhatsApp</span>
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Start your free trial today and experience how Chief.OS can
            transform your charter base operations.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Chief.OS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
