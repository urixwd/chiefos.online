import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .transform((str) => str.trim())
    .refine((str) => str === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str), {
      message: "Invalid email format",
    })
    .optional(),
  whatsapp: z.string().refine((value) => !value || isValidPhoneNumber(value), {
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
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Chief.OS"
    );
    window.open(`https://wa.me/972545854406?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold text-[#31356E] mb-6">
        See ChiefOS in action
      </h2>

      <div className="mb-8 hidden">
        <Button
          onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
        >
          <MessageSquare className="w-5 h-5" />
          Contact via WhatsApp
        </Button>
      </div>

      <div className="relative mb-8 hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-50 text-gray-500">
            Or fill the form
          </span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-chiefpurple">Name *</FormLabel>
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
                <FormLabel className="text-chiefpurple">
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
                    <FormLabel className="text-chiefpurple">
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
            className="w-full bg-chiefpurple hover:bg-chiefpurple/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "See ChiefOS in action"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
