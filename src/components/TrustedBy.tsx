import { motion } from "framer-motion";

const logos = [
  {
    imgUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/logos/yachtpool-logo.png",
    alt: "Yacht-Pool",
    href: "https://yacht-pool.com",
  },
  {
    imgUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/logo-vernicos-blue-svg.svg",
    alt: "Vernicos",
  },
  {
    imgUrl:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/s68a124db22195a7c/image/i8f82a80371676060/version/1611214283/image.png",
    alt: "Bax Yachting",
  },
  {
    imgUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/graiver-logo.png",
    alt: "Graiver",
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
          className="text-2xl font-gilroy font-light text-chiefnavy mb-12 text-center"
        >
          Trusted by
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-8 items-center"
        >
          {logos.map((logo, index) => (
            <a href={logo.href} target="_blank" key={index}>
              <img
                src={logo.imgUrl}
                alt={logo.alt}
                className="object-contain filter grayscale-0 hover:grayscale transition-all duration-300"
                style={{
                  height: "5rem",
                  width: "12rem",
                }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
