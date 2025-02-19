
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { NavbarMenuItems } from "./navbar/NavbarMenuItems";
import { MobileMenu } from "./navbar/MobileMenu";

const menuItems = [
  { label: "Guides & Tutorials", href: "#contact-form" },
  { label: "Help Center", href: "#contact-form" },
  { label: "Blog", href: "#contact-form" },
  { label: "Community", href: "#contact-form" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isStickyButtonVisible, setIsStickyButtonVisible] = useState(false);
  const isMobile = useIsMobile();

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFormVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const stickyButtonObserver = new IntersectionObserver(
      ([entry]) => {
        setIsStickyButtonVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById("hero-section");
    const formElement = document.getElementById("contact-form");

    if (heroElement) {
      heroObserver.observe(heroElement);
      stickyButtonObserver.observe(heroElement);
    }
    if (formElement) {
      formObserver.observe(formElement);
    }

    return () => {
      if (heroElement) {
        heroObserver.unobserve(heroElement);
        stickyButtonObserver.unobserve(heroElement);
      }
      if (formElement) {
        formObserver.unobserve(formElement);
      }
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroVisible && !isMenuOpen
          ? "bg-transparent"
          : isMobile
          ? "bg-chiefblue shadow-lg"
          : "bg-[url('https://chiefos-website.s3.eu-central-003.backblazeb2.com/background.jpg')] bg-auto shadow-lg"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          (!isHeroVisible || isMenuOpen) && !isMobile
            ? "bg-gradient-to-br from-chiefpurple/20 to-black/20"
            : ""
        } z-10`}
      />
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-20">
        <div className="flex items-center">
          <div className="flex items-center gap-12">
            <NavbarLogo />
            <NavbarMenuItems items={menuItems} onItemClick={scrollToForm} />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#"
              className="hidden md:block font-montserrat px-4 py-2 text-white hover:text-gray-200 transition-all duration-200"
            >
              Login
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#contact-form"
              onClick={scrollToForm}
              className={`min-w-[120px] md:w-auto font-montserrat px-4 md:px-6 py-2 bg-chiefblue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 text-center ${
                !isStickyButtonVisible && !isFormVisible ? "" : "opacity-0"
              }`}
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

        <MobileMenu
          isOpen={isMenuOpen}
          items={menuItems}
          onItemClick={scrollToForm}
        />
      </div>
    </motion.nav>
  );
};
