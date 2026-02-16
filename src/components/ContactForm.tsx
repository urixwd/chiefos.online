import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Checkbox } from "./ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";
import { APP_URL } from "../constants/urls";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  userType: z.enum(["skipper", "agent", "operator"], {
    required_error: "Please select your role",
  }),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({
      message: "You must accept the Privacy Policy and Terms",
    }),
  }),
  acceptEmails: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const stepAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3 },
};

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      userType: undefined,
      email: "",
      acceptTerms: false as unknown as true,
      acceptEmails: false,
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
          title: "You're in!",
          description:
            "Thank you for signing up. Redirecting you to ChiefOS...",
        });
        form.reset();
        setTimeout(() => {
          window.location.href = APP_URL;
        }, 2000);
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

  const goToStep2 = async () => {
    const valid = await form.trigger("email");
    if (valid) setStep(2);
  };

  const goToStep3 = async () => {
    const valid = await form.trigger(["name", "userType"]);
    if (valid) setStep(3);
  };

  const openWhatsApp = () => {
    const formData = form.getValues();
    const messageLines = [
      "Hi! I'm interested in learning more about ChiefOS\n",
    ];

    if (formData.name) messageLines.push(`Name: ${formData.name}`);
    if (formData.email) messageLines.push(`Email: ${formData.email}`);

    const message = encodeURIComponent(messageLines.join("\n"));
    window.open(`https://wa.me/34624139891?text=${message}`, "_blank");
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-chiefnavy mb-6 text-center font-gilroy">
        Want to make your guests' experience unforgettable?
      </h2>

      {/* Step indicator */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              s <= step ? "bg-chiefnavy w-8" : "bg-gray-300 w-4"
            }`}
          />
        ))}
      </div>

      <div className="max-w-md mx-auto p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Email */}
              {step === 1 && (
                <motion.div key="step1" {...stepAnimation} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-chiefnavy font-gilroy">
                          Email *
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
                  <Button
                    type="button"
                    onClick={goToStep2}
                    className="w-full bg-chiefnavy hover:bg-chiefnavy/90"
                  >
                    Continue
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Name + Role */}
              {step === 2 && (
                <motion.div key="step2" {...stepAnimation} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-chiefnavy font-gilroy">
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
                    name="userType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-chiefnavy font-gilroy">
                          I am a *
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="skipper" id="skipper" />
                              <Label
                                htmlFor="skipper"
                                className="text-sm font-normal cursor-pointer"
                              >
                                Skipper
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="agent" id="agent" />
                              <Label
                                htmlFor="agent"
                                className="text-sm font-normal cursor-pointer"
                              >
                                Agent
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="operator" id="operator" />
                              <Label
                                htmlFor="operator"
                                className="text-sm font-normal cursor-pointer"
                              >
                                Charter Company
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-gray-500" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={goToStep3}
                      className="flex-1 bg-chiefnavy hover:bg-chiefnavy/90"
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Consents + Submit */}
              {step === 3 && (
                <motion.div key="step3" {...stepAnimation} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-gray-700 cursor-pointer">
                            I have read and accept the{" "}
                            <a
                              href="/legal/privacy.html"
                              target="_blank"
                              className="text-chiefnavy underline hover:opacity-80"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              href="/legal/terms.html"
                              target="_blank"
                              className="text-chiefnavy underline hover:opacity-80"
                            >
                              Terms of Service
                            </a>
                          </FormLabel>
                          <FormMessage className="text-gray-500" />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acceptEmails"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-gray-700 cursor-pointer">
                            I agree to receive updates and promotional emails
                            from ChiefOS
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-chiefnavy hover:bg-chiefnavy/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Started"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Prefer via WhatsApp?</p>
          <Button
            onClick={openWhatsApp}
            className="w-full bg-[#3EB66A] hover:bg-[#37C66B]/90 text-white gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp ChiefOS
          </Button>
        </div>
      </div>
    </>
  );
};
