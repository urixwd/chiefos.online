import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  image?: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ariel L.",
    quote:
      "First time I ended my week and discussed my next holiday, rather than the damages I accidentally made or bits I wasn't even aware of.",
  },
  {
    id: 2,
    name: "Ethan R.",
    quote:
      "This service gives you tons of confidence, like you're sitting with me on the yacht.",
  },
  {
    id: 3,
    name: "Anna M.",
    quote:
      "It's like having a co-skipper right next to you, making sure no costly mistakes take place during your holiday.",
  },
  {
    id: 4,
    name: "Alex S.",
    quote:
      "By sharing information with my family, I allowed them to experience sailing from the skipper's perspective as well.",
  },
  {
    id: 5,
    name: "Vlada T.",
    quote:
      "My family and I enjoyed our first day together, without me having to disappear for hours and leave them at the café.",
  },
];

export const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-gilroy font-light text-chiefnavy mb-12 text-center"
        >
          And the guests who already used it?
        </motion.h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10"></div>

          <div className="relative w-full overflow-hidden">
            <div
              ref={emblaRef}
              className="font-gilroy overflow-hidden px-4 md:px-12"
            >
              <div className="flex touch-pan-y">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] px-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-8 md:gap-12 px-4"
                    >
                      {testimonial.image && (
                        <div className="flex-shrink-0">
                          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex-1 text-center">
                        <p className="text-lg md:text-xl text-chiefnavy font-light mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </p>

                        <div>
                          <h3 className="font-semibold text-chiefnavy text-lg">
                            {testimonial.name}
                          </h3>
                          {testimonial.role && (
                            <p className="text-chiefnavy/80">
                              {testimonial.role.split("\n").map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i <
                                    testimonial.role.split("\n").length - 1 && (
                                    <br />
                                  )}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Gradient Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none z-10"></div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-8 py-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "bg-chiefnavy scale-125"
                      : "bg-chiefnavy/30 hover:bg-chiefnavy/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
