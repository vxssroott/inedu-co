import { Briefcase, LineChart, Scale, Handshake, FileSearch, Banknote, type LucideIcon } from "lucide-react";

export type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Training on Address Verification (AVR), Internal Control, Collections and Recovery, and related professional support.",
  },
  {
    number: "02",
    icon: LineChart,
    title: "Management & Business Consultancy",
    description:
      "Audited Financial Statements, Financial Advisory Services, and strategic business advisory support.",
  },
  {
    number: "03",
    icon: Scale,
    title: "Debt Recovery & Portfolio Resolution",
    description:
      "Professional recovery support, portfolio resolution, and structured debt recovery services.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Commission Agency Services",
    description:
      "Sale and purchase of MFB operating licenses, Trade Finance Instruments Deals, PSSP Acquisition, and general commission-based transactions.",
  },
  {
    number: "05",
    icon: FileSearch,
    title: "Business & Address Verifications",
    description:
      "Reliable verification services for individuals, businesses, addresses, and related documentation.",
  },
  {
    number: "06",
    icon: Banknote,
    title: "Loan Facilitation & Credit Support",
    description:
      "Support for loan facilitation, credit access, and financial opportunity processing.",
  },
];

export const WHATSAPP_URL =
  "https://wa.me/2348033243379?text=Good%20day%20INEDU%20%26%20CO%20Professional%20Services.%0A%0AI%20would%20like%20to%20make%20an%20enquiry%20regarding%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0ALocation%3A%20%0AService%20Required%3A%20%0ABrief%20Description%20of%20Request%3A%20%0APreferred%20Callback%20Time%3A%20%0A%0AThank%20you.";
