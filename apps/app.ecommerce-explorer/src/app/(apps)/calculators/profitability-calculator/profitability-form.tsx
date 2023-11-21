"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="mx-auto space-y-8 md:grid md:grid-cols-2 md:gap-x-8">
      <h2 className="text-xl font-bold md:col-span-2 md:col-start-1 md:text-6xl">
        Profitability Calculator
      </h2>
      <p className="col-start-1 text-xl md:col-span-2">
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
    <div className="my-6 w-full space-y-6 md:mx-16">
      <Card className="bg-accent">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            Your Profitability
          </CardTitle>
          <DollarSign />
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">${totalProfit}</p>
        </CardContent>
      </Card>
      <Card className="bg-accent">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            Your Profit Margin
          </CardTitle>
          <DollarSign />
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {profitMargin ? profitMargin?.toFixed(2) : 0}%
          </p>
        </CardContent>
      </Card>
      <Card className="bg-accent">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            Profit Per Order
          </CardTitle>
          <DollarSign />
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            ${profitPerOrder ? profitPerOrder?.toFixed(2) : 0}
          </p>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <p className="text-lg">
          Ecommerce Explorer teaches you how to increase your profitability by
          optimizing your pricing, ad spend, and operating expenses. If you want
          to become more profitable, book a call with us and we&apos;ll show you
          how.
        </p>
        <Button size="lg" className="w-full text-xl ">
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="m-8 md:m-24 ">
          <div className="md:grid md:grid-cols-2">
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
