
import { motion } from "framer-motion";

interface NavbarMenuItemsProps {
  items: { label: string; href: string }[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const NavbarMenuItems = ({ items, onItemClick }: NavbarMenuItemsProps) => {
  return (
    <div className="hidden md:flex items-center gap-6">
      {items.map((item) => (
        <motion.a
          key={item.label}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href={item.href}
          onClick={onItemClick}
          className="font-gilroy text-white hover:text-gray-200 transition-colors duration-200"
        >
          {item.label}
        </motion.a>
      ))}
    </div>
  );
};
