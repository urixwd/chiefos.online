import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { PhoneInput } from "./ui/phone-input";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .transform((str) => str.trim())
    .refine((str) => str === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str), {
      message: "Invalid email format",
    })
    .optional(),
  whatsapp: z
    .string()
    .min(1, "WhatsApp number is required")
    .refine((value) => isValidPhoneNumber(value), {
      message: "Invalid phone number",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/myzkdnbn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description:
            "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setShowEmail(whatsappNumber.length > 0);
  }, [whatsappNumber]);

  const openWhatsApp = () => {
    const formData = form.getValues();
    const messageLines = [
      "Hi! I'm interested in learning more about Chief.OS\n",
    ];

    if (formData.name) messageLines.push(`Name: ${formData.name}`);
    if (formData.email) messageLines.push(`Email: ${formData.email}`);
    if (formData.whatsapp) messageLines.push(`WhatsApp: ${formData.whatsapp}`);

    const message = encodeURIComponent(messageLines.join("\n"));
    window.open(`https://wa.me/34624139891?text=${message}`, "_blank");
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-chiefnavy mb-6 text-center font-montserrat">
        Want to make your guests' experience unforgettable?
      </h2>
      <div className="max-w-md mx-auto p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-chiefnavy font-montserrat">
                    Name *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage className="text-gray-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-chiefnavy font-montserrat">
                    WhatsApp Number *
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="GR"
                      placeholder="Enter your phone number"
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        setWhatsappNumber(value || "");
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-gray-500" />
                </FormItem>
              )}
            />

            {showEmail && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-chiefnavy font-montserrat">
                        Work Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-gray-500" />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-chiefnavy hover:bg-chiefnavy/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "See ChiefOS in action"}
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Prefer via WhatsApp?</p>
          <Button
            onClick={openWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp ChiefOS
          </Button>
        </div>
      </div>
    </>
  );
};
