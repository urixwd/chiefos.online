import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Login", href: "#contact-form" },
  { label: "Guides & Tutorials", href: "#contact-form" },
  { label: "Help Center", href: "#contact-form" },
  { label: "Blog", href: "#contact-form" },
  { label: "Community", href: "#contact-form" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Close menu first to avoid any interference
    setIsMenuOpen(false);

    // Small delay to ensure menu is closed
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled || isMenuOpen ? "bg-[#869CB3] shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-[30%] max-w-[200px]"
          >
            <a href="/" className="block">
              <img
                src="https://chiefos-website.s3.eu-central-003.backblazeb2.com/logo-light.png"
                alt="Chief.OS Logo"
                className="w-full h-auto"
              />
            </a>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href={item.href}
                  onClick={scrollToForm}
                  className="font-montserrat text-white hover:text-gray-200 transition-colors duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#contact-form"
              onClick={scrollToForm}
              className="min-w-[120px] md:w-auto font-montserrat px-4 md:px-6 py-2 bg-chiefblue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 text-center"
            >
              Try ChiefOS
            </motion.a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    href={item.href}
                    onClick={scrollToForm}
                    className="block font-montserrat text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
