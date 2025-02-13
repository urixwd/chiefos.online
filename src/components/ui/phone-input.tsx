"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import PhoneInput2, { Country } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Input } from "./input";

type PhoneInputProps = Omit<React.ComponentProps<typeof PhoneInput2>, "ref">;

const PhoneInput = React.forwardRef<any, PhoneInputProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <>
        <div className="flex flex-1 gap-2" id="phone-input-container">
          <style>
            {`
            #phone-input-container input[type="tel"] {
              outline-color: #020817 !important;
              outline-offset: 4px !important;
              border-top-right-radius: 6px !important;
              border-bottom-right-radius: 6px !important;
              height: 100% !important;
              margin-left: 8px !important;
              border: 1px solid #E2E8F0 !important;
              padding: 8px 12px !important;
            }
          `}
          </style>
          <PhoneInput2
            ref={ref}
            value={value}
            onChange={onChange}
            className="flex-1 phone-input"
            style={{ fontSize: "16px" }}
            flagComponent={FlagComponent}
            countrySelectComponent={CountrySelect}
            numberInputComponent={NumberInput}
            {...props}
          />
        </div>
      </>
    );
  }
);
PhoneInput.displayName = "PhoneInput";

interface FlagProps {
  country: Country;
  countryName: string;
}

const FlagComponent = ({ country, countryName }: FlagProps) => (
  <span className="flex h-4 w-6 overflow-hidden rounded-sm">
    {country && flags[country]?.({ title: countryName })}
  </span>
);

const CountrySelect = ({
  value,
  onChange,
  options,
}: {
  value: Country;
  onChange: (value: Country) => void;
  options: { value: Country; label: string }[];
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "flex gap-1 rounded-e-none px-3 shadow-none",
            open && "bg-accent"
          )}
        >
          <span className="flex h-4 w-6 overflow-hidden rounded-sm">
            {value && flags[value]?.({ title: value })}
          </span>
          <CaretSortIcon className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span className="flex h-4 w-6 overflow-hidden rounded-sm">
                    {flags[option.value]?.({ title: option.label })}
                  </span>
                  <span className="ml-2">{option.label}</span>
                  {value === option.value && (
                    <CheckIcon className="ml-auto h-4 w-4 opacity-50" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const NumberInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <Input
    {...props}
    ref={ref}
    style={{ fontSize: "16px" }}
    className="!rounded-s-none !rounded-e-md !px-3 !py-2 flex-1 !text-[rgb(2,8,23)] !placeholder-[#64758B] focus:!outline-[#020817] focus:!outline-offset-4 !border-input"
  />
));
NumberInput.displayName = "NumberInput";

export { PhoneInput };
