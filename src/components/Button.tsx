import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "highlighted";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  highlighted: "btn-highlighted",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={cn("btn-pill", variantClass[variant], className)}>
      {children}
    </Link>
  );
}
