import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "Who is ChiefOS designed for?",
    answer:
      "ChiefOS is built for agents, skippers, and operators who feel drained by repetitive administrative tasks—those constant check-ins, confirmations, questions, and follow-ups that steal time from creating the guest experiences they truly care about. ChiefOS helps the operations so they can return to being hosts, not operators.",
  },
  {
    id: "item-2",
    question: "Do you support multiple languages for international guests?",
    answer:
      "Many Operators struggle to communicate technical support with guests from all over the world, worrying that misunderstandings might affect the experience. ChiefOS removes that barrier with built-in multilingual support, automatically translating conversations and content into multiple languages—so every guest feels understood, and every host feels confident.",
  },
  {
    id: "item-3",
    question:
      "Can I manage multiple reservations, yachts or bases under one account?",
    answer:
      "Yes. ChiefOS centralizes everything—permissions, records, and insights—under one account. You see each reservation when you need details, and the full fleet when you need clarity.",
  },
  {
    id: "item-4",
    question: "How many team members can I add?",
    answer:
      "ChiefOS gives you unlimited users with defined roles and permissions",
  },
  {
    id: "item-5",
    question: "Can I add my own service providers or upsell partners?",
    answer:
      "Absolutely! ChiefOS lets you connect your own partners or choose from existing vendors, turning upsells into a seamless part of the guest journey. No more WhatsApp juggling or manual coordination.",
  },
  {
    id: "item-6",
    question: "How long does the onboarding and learning of use takes?",
    answer:
      "ChiefOS communicates in your own language and is designed to be completely intuitive, with no learning curve. For most users, setup is immediate. Only agents and operators who request a fully embedded, custom plan may require additional time—anywhere from 10 days to 3 months—depending on the level of customization needed.",
  },
  {
    id: "item-7",
    question: "Are there any extra fees beyond the subscription?",
    answer:
      "ChiefOS keeps pricing transparent—no hidden charges. Any optional integration or service is clearly disclosed in advance, so you're never surprised by your bill.",
  },
  {
    id: "item-8",
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "As seasons shift and fleets change, so do your needs. ChiefOS plans are flexible—you can upgrade or downgrade anytime without penalty, staying aligned with your current operation, not locked into yesterday's.",
  },
  {
    id: "item-9",
    question: "Is there a free trial or guarantee?",
    answer:
      "We offer a free trial—so you can experience the impact before deciding. If it doesn't simplify your life, you walk away. No risk, no pressure, no commitment",
  },
  {
    id: "item-10",
    question: "How secure is my data and payments?",
    answer:
      "ChiefOS uses industry-grade encryption and strict compliance standards, ensuring every transaction and piece of guest data stays protected. You focus on creating the best experiences—we guard the rest.",
  },
];

const FAQ = ({ sectionId }: { sectionId: string }) => {
  return (
    <section className="py-16 px-6 bg-white" id={sectionId}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-gilroy font-light text-chiefnavy mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={item.id} className="border-none">
                  <AccordionTrigger className="text-left font-gilroy text-lg text-chiefnavy hover:text-chiefnavy/80 hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-gilroy text-base text-chiefnavy/80 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
