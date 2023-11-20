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
    <div className={cn("my-24 grid max-w-7xl grid-cols-6 gap-x-12", className)}>
      <div className="col-span-4 grid space-y-12">
        <h2 className="text-[100px] font-bold leading-[1]">{heading}</h2>
        <p className="text-3xl">{subHeading}</p>
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
