import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  className?: string;
  children?: React.ReactNode;
  heading?: string;
  subHeading?: string;
  mainButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
}

export function PageHeader({
  className,
  children,
  heading,
  subHeading,
  mainButton,
  secondaryButton,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        " my-8 grid max-w-7xl items-center md:my-12 md:grid-cols-6 md:gap-x-12",
        className,
      )}
    >
      <div className="mx-auto my-8 space-y-12 text-center md:col-span-4 md:my-0 md:text-left">
        <h2 className="text-5xl font-bold leading-[1] md:text-[100px]">
          {heading}
        </h2>
        <p className="text-2xl md:text-3xl">{subHeading}</p>
        <div className="flex flex-col gap-4 md:flex-row">
          {mainButton}
          {secondaryButton}
        </div>
      </div>
      <div className="col-span-2 flex w-full flex-col items-center justify-center gap-y-6">
        {children}
      </div>
    </div>
  );
}
