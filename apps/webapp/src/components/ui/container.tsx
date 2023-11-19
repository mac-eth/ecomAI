import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-5", props.className)}>
      {props.children}
    </div>
  );
}
