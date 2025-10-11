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
          src="https://f003.backblazeb2.com/file/chiefos-app/chiefos-logo/chiefos-logo-dark.png"
          alt="Chief.OS Logo"
          className="max-h-10"
        />
      </a>
    </motion.div>
  );
};
