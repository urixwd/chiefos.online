import { SVGProps } from "react";

export const LanguageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="25%"
    height="auto"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Omega symbol (Ω) - taller version */}
    <path d="M4 10h2.5c-1.2-1.4-2-3.2-2-5C4.5 2.5 6.5 1 9.5 1s5 1.5 5 4c0 1.8-0.8 3.6-2 5H15" />

    {/* Letter A at bottom */}
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

export default LanguageIcon;
