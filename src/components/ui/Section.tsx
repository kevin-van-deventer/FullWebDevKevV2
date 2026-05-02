import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "full";
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
    >
      <div
        className={cn(
          variant === "default" && "container mx-auto px-4 md:px-6",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
