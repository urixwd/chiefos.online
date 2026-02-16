import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import pricingData from "../lib/pricing.json";

interface PricingProps {
  sectionId?: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: {
    value: number;
    currency: string;
    price_note: string;
  };
  key_features: string[];
  cta: {
    text: string;
    note?: string;
  };
}

export const Pricing = ({ sectionId }: PricingProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const plans: PricingPlan[] = pricingData;

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.8; // 80% of screen width
    const newIndex = Math.round(scrollLeft / cardWidth);

    setActiveIndex(Math.min(Math.max(0, newIndex), plans.length - 1));
  }, [plans.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth * 0.8;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section id={sectionId} className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-gilroy font-light text-chiefnavy mb-4 text-left md:text-center"
        >
          Choose Your Plan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-gilroy text-chiefnavy/70 mb-12 text-left md:text-center max-w-3xl mx-auto"
        >
          Select the perfect plan, tailored to your needs
        </motion.p>

        {/* Mobile: Swipeable Cards */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide"
            style={{
              scrollPaddingLeft: "0",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-start w-[80%] first:ml-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-[20%]" />
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-chiefnavy"
                    : "w-4 bg-chiefnavy/30"
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Scrollable Layout */}
        <div className="hidden md:block">
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide justify-center">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] lg:w-[calc(25%-18px)]"
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // "Try it" button - opens app.chiefos.online in new window
    if (plan.cta.text.toLowerCase().includes("try")) {
      window.open("https://app.chiefos.online/", "_blank");
    }
    // "Book a demo" button - scrolls to contact form
    else if (
      plan.cta.text.toLowerCase().includes("demo") ||
      plan.cta.text.toLowerCase().includes("contact")
    ) {
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
    }
  };

  const isTryButton = plan.cta.text.toLowerCase().includes("try");

  return (
    <div className="bg-white border border-chiefnavy/10 rounded-xl p-6 h-full flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-chiefnavy/20 transition-all duration-300">
      {/* Header - Fixed height */}
      <div className="mb-6 h-[180px]">
        <h3 className="font-gilroy text-xl font-medium text-chiefnavy mb-2">
          {plan.name}
        </h3>
        <p className="font-gilroy text-chiefnavy/70 leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Price - Fixed height for both price and note */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1 h-[48px]">
          <span className="font-gilroy text-4xl font-semibold text-chiefnavy">
            {plan.price.value === 0
              ? "Free"
              : `${plan.price.currency}${plan.price.value}`}
          </span>
        </div>
        <div className="h-[48px] mt-1">
          <p className="font-gilroy text-xs text-chiefnavy/60 leading-relaxed">
            {plan.price.price_note}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex-grow mb-10">
        <ul className="space-y-3">
          {plan.key_features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-chiefnavy/60 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-gilroy text-sm text-chiefnavy/80">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA - Aligned at bottom */}
      <div className="mt-auto">
        <button
          onClick={handleCTAClick}
          className={`w-full font-gilroy px-6 py-3 text-chiefnavy font-semibold rounded-lg transition-all duration-300 ${
            isTryButton
              ? "bg-gradient-to-r from-chiefyellow via-chiefyellow to-yellow-300 hover:from-chiefyellow/90 hover:via-chiefyellow/90 hover:to-yellow-300/90"
              : "bg-chiefyellow hover:bg-chiefyellow/90"
          }`}
        >
          {plan.cta.text}
        </button>
        <div className="h-[32px] mt-2">
          {plan.cta.note && (
            <p className="font-gilroy text-xs text-chiefnavy/60 text-center">
              {plan.cta.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
