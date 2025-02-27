import { motion } from "framer-motion";

const logos = [
  {
    imgUrl:
      "https://yacht-pool.com/wp-content/uploads/2023/11/Yacht-Pool-International-1.png",
    alt: "Yacht-Pool",
    href: "https://yacht-pool.com",
  },
];

export const TrustedBy = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-montserrat font-light text-[#31356E] mb-12 text-center"
        >
          Trusted by
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row md:w-1/2 mx-auto gap-8 md:justify-evenly items-center"
        >
          {logos.map((logo, index) => (
            <a href={logo.href} target="_blank" key={index}>
              <img
                src={logo.imgUrl}
                alt={logo.alt}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{
                  height: "5rem",
                }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
