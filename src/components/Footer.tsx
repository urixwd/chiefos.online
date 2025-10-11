import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = ({ sectionId }: { sectionId: string }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Chief.OS"
    );
    window.open(`https://wa.me/972545854406?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-chiefblue text-white py-12 px-6" id={sectionId}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <img
            src="https://f003.backblazeb2.com/file/chiefos-app/chiefos-logo/chiefos-logo-dark.png"
            alt="Chief.OS Logo"
            className="h-8"
          />
          <p className="text-gray-300 text-xl font-semibold max-w-md">
            Focus on your guests and let Chief.OS handle the rest
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="font-gilroy font-semibold text-lg">Key Features</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Proactive Damage Prevention</li>
            <li>Real-time Troubleshooting</li>
            <li>24/7 AI-powered Support</li>
            <li>Digital Check-ins & Check-outs</li>
            <li>Pre-embarkation Documentation</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="font-gilroy font-semibold text-lg">
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
              className="hidden flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
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
      {/* add foooter with two linke - Terms & Conditions	Privacy & Security - that look like links but don't do anything. */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400">
        <a
          href="/legal/terms.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white underline"
        >
          Terms and Conditions
        </a>
        <span>&nbsp;</span>
        <a
          href="/legal/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white underline"
        >
          Privacy Policy
        </a>
        <span>&nbsp;</span>
        <a
          href="/legal/imprint.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white underline"
        >
          Imprint
        </a>
      </div>
    </footer>
  );
};
