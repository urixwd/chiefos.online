
import { motion } from "framer-motion";

export const NavbarLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="w-[120px] md:w-[30%] md:max-w-[200px]"
    >
      <a href="/" className="block">
        <img
          src="https://chiefos-website.s3.eu-central-003.backblazeb2.com/logo-light.png"
          alt="Chief.OS Logo"
          className="w-full h-auto"
        />
      </a>
    </motion.div>
  );
};
