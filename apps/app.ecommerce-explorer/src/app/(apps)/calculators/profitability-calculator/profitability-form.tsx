"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ProfitabilityFormSchema = z.object({
  totalRevenue: z.number().min(0, {
    message: "Total revenue must be greater than 0.",
  }),
  aov: z.number(),
  cogs: z.number(),
  adSpend: z.number(),
  operatingExpenses: z.number(),
  otherExpenses: z.number(),
});

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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="-mx-24 rounded-[2rem] bg-background px-24 py-24 "
      >
        <div className="grid grid-cols-2 gap-x-8 space-y-8">
          <h2 className="col-start-1 text-6xl font-bold">
            Profitability Calculator
          </h2>
          <p className="col-start-1 text-xl">
            Calculate your profitability on a particular product or service, or
            across your entire business.
          </p>

          <div className="col-start-1">
            <FormField
              control={form.control}
              name="totalRevenue"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="totalRevenue"
                    className="text-xl font-semibold"
                  >
                    Total Revenue (Last Month)
                  </FormLabel>
                  <FormControl className="flex flex-row items-center">
                    <div className="relative w-full">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <DollarSign />
                      </div>
                      <Input
                        {...field}
                        id="totalRevenue"
                        type="number"
                        placeholder="10000"
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                        className="py-6 pl-10 text-xl focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </FormControl>
                  {formState.errors.totalRevenue && (
                    <FormMessage>
                      {formState.errors.totalRevenue.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
          <div className="col-start-1">
            <FormField
              control={form.control}
              name="aov"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel htmlFor="aov" className="text-xl font-semibold">
                    Average Order Value (Last Month)
                  </FormLabel>
                  <FormControl className="flex flex-row items-center">
                    <div className="relative w-full">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <DollarSign />
                      </div>
                      <Input
                        {...field}
                        id="aov"
                        type="number"
                        placeholder="120"
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                        className="py-6 pl-10 text-xl focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </FormControl>
                  {formState.errors.totalRevenue && (
                    <FormMessage>
                      {formState.errors.totalRevenue.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="mt-8 px-6 py-3 text-xl font-semibold"
        >
          Calculate Profitability
        </Button>
      </form>
    </Form>
  );
}
