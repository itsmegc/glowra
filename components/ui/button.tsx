import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] font-inter",
  {
    variants: {
      variant: {
        default: "bg-rose-accent text-white shadow-soft hover:bg-rose-700",
        secondary: "bg-blush-200 text-rose-700 hover:bg-blush-300",
        outline: "border-2 border-rose-accent text-rose-accent bg-transparent hover:bg-blush-50",
        ghost: "text-rose-accent hover:bg-blush-50",
        link: "text-rose-accent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-8 py-2.5",
        sm: "h-9 px-5 text-xs",
        lg: "h-13 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
