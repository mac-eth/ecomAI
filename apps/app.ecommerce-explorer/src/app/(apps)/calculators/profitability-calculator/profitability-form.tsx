"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ProfitabilityFormSchema = z.object({
  totalRevenue: z.number().min(0, {
    message: "Total revenue must be greater than 0",
  }),
  aov: z.number(),
  cogs: z.number(),
  adSpend: z.number(),
  operatingExpenses: z.number(),
  otherExpenses: z.number(),
});

interface FormInputProps {
  label:
    | "totalRevenue"
    | "aov"
    | "cogs"
    | "adSpend"
    | "operatingExpenses"
    | "otherExpenses";
  name: string;
  form: UseFormReturn<z.infer<typeof ProfitabilityFormSchema>>;
}

function DollarSign() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-5 w-5 text-muted-foreground"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function FormInput({ label, name, form }: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={label}
      render={({ field, formState }) => (
        <FormItem>
          <FormLabel htmlFor={label} className="text-lg font-semibold">
            {name}
          </FormLabel>
          <FormControl className="flex flex-row items-center">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <DollarSign />
              </div>
              <Input
                {...field}
                id={label}
                type="number"
                placeholder="10000"
                onChange={(event) => {
                  const value = event.target.value;
                  field.onChange(value === "" ? "" : +value);
                }}
                className="py-6 pl-10 text-xl focus:ring-2 focus:ring-primary"
              />
            </div>
          </FormControl>
          {formState.errors[label] && (
            <FormMessage>{formState.errors[label]?.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}

function FormInputsSection({
  form,
}: {
  form: UseFormReturn<z.infer<typeof ProfitabilityFormSchema>>;
}) {
  return (
    <div className="grid grid-cols-2 gap-x-8 space-y-8">
      <h2 className="col-span-2 col-start-1 text-6xl font-bold">
        Profitability Calculator
      </h2>
      <p className="col-span-2 col-start-1 text-xl">
        Calculate your profitability on a particular product or service, or
        across your entire business. Its recommended to input values from the
        last 30 days.
      </p>

      <div className="col-start-1">
        <FormInput label="totalRevenue" name="Total Revenue" form={form} />
      </div>

      <div className="col-start-2">
        <FormInput label="aov" name="Average Order Value" form={form} />
      </div>

      <div className="col-start-1">
        <FormInput label="cogs" name="COGS" form={form} />
      </div>
      <div className="col-start-2">
        <FormInput label="adSpend" name="Ad Spend" form={form} />
      </div>
      <div className="col-start-1">
        <FormInput
          label="operatingExpenses"
          name="Operating Expenses"
          form={form}
        />
      </div>
    </div>
  );
}

function ProfitabilityDisplaySection({
  totalProfit,
  profitMargin,
  profitPerOrder,
}: {
  totalProfit: number;
  profitMargin: number;
  profitPerOrder: number;
}) {
  return (
    <div className="mx-8 w-full space-y-6 self-center rounded-2xl bg-primary/10 p-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold">Your Profitability </h2>
        <p className="text-4xl font-bold">${totalProfit}</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold">Your Profit Margin </h2>
        <div className="text-4xl font-bold">
          <p>{profitMargin ? profitMargin?.toFixed(2) : 0}%</p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold">Your Profit Per Order </h2>
        <div className="text-4xl font-bold">
          <p>${profitPerOrder ? profitPerOrder.toFixed(2) : 0}</p>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-lg">
          Ecommerce Explorer teaches you how to increase your profitability by
          optimizing your pricing, ad spend, and operating expenses.
        </p>
        <Button size="lg" className="text-xl ">
          Book a Call
        </Button>
      </div>
    </div>
  );
}

export function ProfitabilityForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ProfitabilityFormSchema>>({
    resolver: zodResolver(ProfitabilityFormSchema),
    defaultValues: {
      totalRevenue: 0,
      aov: 0,
      cogs: 0,
      adSpend: 0,
      operatingExpenses: 0,
      otherExpenses: 0,
    },
  });

  function onSubmit(data: z.infer<typeof ProfitabilityFormSchema>) {
    console.log(data);
    toast({
      title: "Success!",
      description: "Your profitability has been calculated.",
    });
  }

  const { totalRevenue, aov, cogs, adSpend, operatingExpenses, otherExpenses } =
    form.watch();
  const totalProfit =
    totalRevenue - cogs - adSpend - operatingExpenses - otherExpenses;
  const profitMargin = totalRevenue ? (totalProfit / totalRevenue) * 100 : 0;
  const profitPerOrder = aov ? totalProfit / (totalRevenue / aov) : 0;

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" p-24 ">
          <div className="grid grid-cols-2">
            <FormInputsSection form={form} />
            <ProfitabilityDisplaySection
              totalProfit={totalProfit}
              profitMargin={profitMargin}
              profitPerOrder={profitPerOrder}
            />
          </div>
        </form>
      </Form>
    </Card>
  );
}
