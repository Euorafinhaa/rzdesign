import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-press inline-flex h-12 touch-manipulation items-center justify-center rounded-pill px-6 text-center text-sm font-medium",
  {
    variants: {
      variant: {
        primary: "bg-night text-on-night hover:bg-night-raised",
        ghost: "border border-line bg-paper text-ink hover:border-strong",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  asChild = false,
  className,
  variant,
  type,
  ...props
}: ButtonProps) {
  if (asChild) {
    return <Slot className={cn(buttonVariants({ variant }), className)} {...props} />;
  }

  return (
    <button
      type={type ?? "button"}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
