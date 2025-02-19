
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
    align: 'center',
    skipSnaps: false,
    containScroll: 'trimSnaps',
    startIndex: 0
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
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
    <section className="py-16 px-6 bg-[#F1F0FB]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-montserrat font-light text-[#31356E] mb-12 text-center"
        >
          And the guests who already used it?
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <Carousel className="relative w-full">
            <CarouselContent ref={emblaRef} className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-4 md:basis-[70%] lg:basis-[60%]"
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
                      <p className="text-lg md:text-xl text-[#31356E] font-light mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>

                      <div>
                        <h3 className="font-montserrat font-semibold text-[#31356E] text-lg">
                          {testimonial.name}
                        </h3>
                        {testimonial.role && (
                          <p className="text-[#31356E]/80">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "bg-[#31356E] scale-125"
                      : "bg-[#31356E]/30 hover:bg-[#31356E]/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
