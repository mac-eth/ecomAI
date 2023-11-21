import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";

import { ProfitabilityForm } from "./profitability-form";

const features = [
  "Calculate Profitability",
  "See results instantly",
  "Use it to help set prices",
];

export default function ProfitabilityCalculatorPage() {
  return (
    <section className="m-12 md:m-16 lg:m-32 lg:mx-48">
      <PageHeader
        heading="Ecommerce Profitability Calculator"
        subHeading="Calculate your profitability with our calculator and find out how
            much you're earning with your current strategy."
        mainButton={
          <Button size="lg" className="px-6 py-8 text-xl font-semibold md:py-6">
            Profitability Calculator
          </Button>
        }
        secondaryButton={
          <Button size="lg" variant="link" className="text-xl underline">
            Book A Free Profitability Analysis Call
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
