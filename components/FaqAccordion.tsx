"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What industries and technical domains does Zuvan Softsol support?",
    answer:
      "We support high-growth technology startups, mid-tier enterprises, and large corporate entities across FinTech, HealthTech, SaaS, eCommerce, Cloud Infrastructure, and IT Services with specialized engineering and leadership talent.",
  },
  {
    question: "How quickly can Zuvan deploy technical talent to our project?",
    answer:
      "For individual contract specialists, our turnaround is typically 24 to 72 hours. For dedicated engineering pods or complex executive searches, we deliver a curated shortlist within 3 to 5 business days.",
  },
  {
    question: "What engagement models are available for staffing and recruitment?",
    answer:
      "We offer flexible engagement models: Time & Materials (Contract Staffing), Contract-to-Hire (C2H), Direct Placement (Permanent Recruitment), and Managed Dedicated Pods aligned to your technical roadmap.",
  },
  {
    question: "Where are Zuvan's services available geographically?",
    answer:
      "Zuvan Software Services Pvt. Ltd. operates nationwide across India, with delivery hubs serving clients in Hyderabad, Bengaluru, Pune, Mumbai, Delhi NCR, and Chennai, as well as remote distributed teams.",
  },
  {
    question: "How does Zuvan verify and vet technical candidates before presentation?",
    answer:
      "Every candidate undergoes a multi-step evaluation: comprehensive technical assessment by domain experts, past project verification, cultural alignment screening, and background reference checks.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:border-slate-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "text-slate-500"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

