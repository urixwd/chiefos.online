import { useState } from "react";
import { motion } from "framer-motion";

type UserType = "agents" | "skippers" | "operators";

interface UseCase {
  title: string;
  description: string;
}

interface UseCaseContent {
  [key: string]: UseCase[];
}

const useCaseContent: UseCaseContent = {
  agents: [
    {
      title: "Save time & effort",
      description:
        "Say goodbye to repetitive tasks and focus on what truly matters",
    },
    {
      title: "Maximize profits",
      description:
        "Maximize your revenue potential by unlocking tailored, guest-based upsell recommendations.",
    },
    {
      title: "Better guest experience",
      description:
        "Create a guest experience that exceeds expectations and turns bookings into your reputation.",
    },
  ],
  skippers: [
    {
      title: "Skipper?",
      description:
        "Join more than 700 skippers who have shared their experiences with our community and earned credits for their next sailing adventure.",
    },
  ],
  operators: [
    {
      title: "Maximize profits",
      description:
        "Maximize your revenue potential by unlocking tailored, guest-based upsell recommendations.",
    },
    {
      title: "Save time & effort",
      description:
        "Say goodbye to repetitive tasks and focus on what truly matters",
    },
    {
      title: "Better guest experience",
      description:
        "Create a guest experience that exceeds expectations and turns bookings into your reputation.",
    },
  ],
};

export const UseCases = ({ sectionId }: { sectionId: string }) => {
  const [activeTab, setActiveTab] = useState<UserType>("agents");

  const tabs = [
    { id: "agents" as UserType, label: "Agents" },
    { id: "skippers" as UserType, label: "Skippers" },
    { id: "operators" as UserType, label: "Operators" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50" id={sectionId}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-gilroy font-light text-chiefnavy mb-12 text-left text-center"
        >
          The only AI-powered mate dedicated to guest experience for
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-gilroy px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "border-chiefnavy text-chiefnavy"
                  : "border-transparent text-chiefnavy/50 hover:text-chiefnavy/70 hover:border-chiefnavy/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
