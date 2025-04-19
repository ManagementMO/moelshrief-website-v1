
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
  const baseStyles = "relative font-medium rounded-md flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden group";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-futuristic-purple to-futuristic-purple-light text-white hover:from-futuristic-purple-light hover:to-futuristic-purple",
    secondary: "bg-gradient-to-r from-futuristic-blue to-futuristic-blue-dark text-white hover:from-futuristic-blue-dark hover:to-futuristic-blue",
    outline: "bg-transparent border border-futuristic-purple text-futuristic-purple hover:bg-futuristic-purple/10",
    ghost: "bg-transparent text-futuristic-purple hover:bg-futuristic-purple/10",
  };
  
  const sizeStyles = {
    sm: "text-sm h-8 px-3",
    md: "text-base h-10 px-4",
    lg: "text-lg h-12 px-6",
  };
  
  // Advanced RTX glow effect
  const glowStyles = glowEffect 
    ? "before:content-[''] before:absolute before:inset-0 before:rounded-md before:bg-futuristic-purple/30 before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300" 
    : "";

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
      {/* Reflective highlight effect */}
      <span className="absolute inset-0 w-full h-full overflow-hidden rounded-md">
        <span className="absolute top-0 left-0 right-0 h-[1px] bg-white/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></span>
        <span className="absolute -top-full -left-1/4 w-[200%] h-[200%] rounded-full bg-white/5 blur-md group-hover:top-[-20%] transition-all duration-700"></span>
      </span>
      
      {/* Button content with subtle shadow */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Interactive ripple effect */}
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-active:w-[300%] group-active:h-[300%] group-active:opacity-0 transition-all duration-500 ease-out"></span>
      </span>
    </button>
  );
};

export { FuturisticButton };
