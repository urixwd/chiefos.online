import { motion } from "framer-motion";

export const NavbarLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="w-[120px]"
    >
      <a href="/" className="block">
        <img
          src="https://f003.backblazeb2.com/file/chiefos-app/chiefos-logo/chiefos-logo-dark.png"
          alt="Chief.OS Logo"
          className="w-full h-auto"
        />
      </a>
    </motion.div>
  );
};
