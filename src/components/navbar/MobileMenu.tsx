
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  items: { label: string; href: string }[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const MobileMenu = ({ isOpen, items, onItemClick }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4 rounded-lg"
        >
          <div className="py-4 space-y-4 px-4">
            {items.map((item) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                href={item.href}
                onClick={onItemClick}
                className="block font-gilroy text-white hover:text-gray-200 transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
