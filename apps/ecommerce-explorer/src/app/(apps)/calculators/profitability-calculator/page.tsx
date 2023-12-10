import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";

import { ProfitabilityForm } from "./profitability-form";

export const metadata: Metadata = {
  title: {
    default: "Ecom Explorer - Profitability Calculator",
    template: `%s - Ecom Explorer - Profitability Calculator`,
  },
  description:
    "Uncover your true profit potential with our easy-to-use Ecommerce Profitability Calculator. Discover how to optimize your pricing, manage costs, and maximize your online business earnings.",
  keywords: [
    "ecommerce profitability calculator",
    "profit margin calculator",
    "ecommerce profit calculator",
    "profit margin",
    "profitability",
    "profitability calculator",
    "profitability analysis",
    "profitability analysis calculator",
    "profitability analysis tool",
    "online shopping",
    "return rate",
    "ecommerce business",
    "online retail",
    "commerce profitability",
    "gross margins",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const features = [
  "Calculate Profitability",
  "See results instantly",
  "Use it to help set prices",
];

export default function ProfitabilityCalculatorPage() {
  return (
    <section className="m-12 md:m-16 lg:m-32 lg:mx-48 ">
      <PageHeader
        heading="Ecommerce Profitability Calculator"
        subHeading="Calculate your profitability with our calculator and find out how
            much you're earning with your current strategy."
        mainButton={
          <Button
            size="lg"
            className="px-6 py-8 text-xl font-semibold md:py-6"
            asChild
          >
            <Link href="#profitability-calculator">
              Profitability Calculator
            </Link>
          </Button>
        }
        secondaryButton={
          <Button
            size="lg"
            variant="link"
            className="text-xl underline "
            asChild
          >
            <Link href="https://lp.ecomexplorer.com.au/questionnaire-mac">
              Book A Free Profitability Analysis Call
            </Link>
          </Button>
        }
      >
        {features.map((feature) => (
          <div
            className="flex w-full flex-row items-center gap-x-4"
            key={feature}
          >
            <CheckIcon className="h-12 w-12 text-primary" />
            <p className="text-2xl">{feature}</p>
          </div>
        ))}
      </PageHeader>
      <ProfitabilityForm />
    </section>
  );
}
