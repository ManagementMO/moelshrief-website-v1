
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FuturisticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glowEffect?: boolean;
  className?: string;
}

const FuturisticButton = ({
  children,
  variant = "primary",
  size = "md",
  glowEffect = false,
  className,
  ...props
}: FuturisticButtonProps) => {
  const baseStyles = "relative font-medium rounded-md flex items-center justify-center transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-futuristic-purple text-white hover:bg-futuristic-purple-light",
    secondary: "bg-futuristic-blue text-white hover:bg-futuristic-blue-dark",
    outline: "bg-transparent border border-futuristic-purple text-futuristic-purple hover:bg-futuristic-purple/10",
    ghost: "bg-transparent text-futuristic-purple hover:bg-futuristic-purple/10",
  };
  
  const sizeStyles = {
    sm: "text-sm h-8 px-3",
    md: "text-base h-10 px-4",
    lg: "text-lg h-12 px-6",
  };
  
  const glowStyles = glowEffect ? "before:content-[''] before:absolute before:inset-0 before:rounded-md before:bg-futuristic-purple/30 before:blur-md before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 btn-glow" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        glowStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { FuturisticButton };
