import { Briefcase, LineChart, Scale, Handshake, FileSearch, Banknote, type LucideIcon } from "lucide-react";

export type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    number: "01",
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Capacity-building and operational advisory covering Address Verification (AVR) training, internal control frameworks, and end-to-end collections and recovery practice.",
    capabilities: [
      "Address Verification (AVR) training & field methodology",
      "Internal control design, segregation of duties & process mapping",
      "Collections, recovery workflow and performance governance",
      "Risk & control self-assessment (RCSA) and policy documentation",
    ],
  },
  {
    number: "02",
    icon: LineChart,
    title: "Management & Business Consultancy",
    description:
      "Financial reporting, corporate advisory, and performance improvement engagements delivered to recognised reporting standards and regulatory expectations.",
    capabilities: [
      "Audited financial statements & IFRS-aligned reporting support",
      "Financial advisory, budgeting, forecasting & cash-flow modelling",
      "Corporate restructuring, governance and operating model review",
      "Management accounts, KPI frameworks and board reporting packs",
    ],
  },
  {
    number: "03",
    icon: Scale,
    title: "Debt Recovery & Portfolio Resolution",
    description:
      "Structured non-performing loan (NPL) resolution, skip tracing, negotiated settlement and enforcement support across retail and commercial portfolios.",
    capabilities: [
      "NPL portfolio triage, segmentation and recovery strategy",
      "Skip tracing, debtor profiling and asset identification",
      "Negotiated settlements, restructuring and repayment plans",
      "Pre-litigation demand management & enforcement liaison",
    ],
  },
  {
    number: "04",
    icon: Handshake,
    title: "Commission Agency Services",
    description:
      "Transaction origination, intermediation and deal execution support across licensed financial assets, trade instruments and payment infrastructure.",
    capabilities: [
      "Sale and purchase of MFB operating licenses",
      "Trade finance instruments (LC, BG, SBLC) transaction support",
      "PSSP licence acquisition and regulatory onboarding guidance",
      "Deal origination, counterparty due diligence and mandate handling",
    ],
  },
  {
    number: "05",
    icon: FileSearch,
    title: "Business & Address Verifications",
    description:
      "Independent KYC/KYB field verification, identity validation and documentary due diligence supporting onboarding and credit decisioning.",
    capabilities: [
      "Residential and business address physical verification",
      "KYC / KYB identity and corporate-existence validation",
      "Employment, guarantor and reference confirmation",
      "Documented verification reports with photographic evidence",
    ],
  },
  {
    number: "06",
    icon: Banknote,
    title: "Loan Facilitation & Credit Support",
    description:
      "Credit structuring, lender engagement and facility packaging designed to improve bankability and accelerate approval outcomes.",
    capabilities: [
      "Credit appraisal readiness and facility structuring",
      "Bankable proposal, business plan and documentation packaging",
      "Lender matching, negotiation and disbursement follow-through",
      "Collateral advisory and post-disbursement monitoring support",
    ],
  },
];

export const WHATSAPP_URL =
  "https://wa.me/2348033243379?text=Good%20day%20INEDU%20%26%20CO%20Professional%20Services.%0A%0AI%20would%20like%20to%20make%20an%20enquiry%20regarding%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0ALocation%3A%20%0AService%20Required%3A%20%0ABrief%20Description%20of%20Request%3A%20%0APreferred%20Callback%20Time%3A%20%0A%0AThank%20you.";
