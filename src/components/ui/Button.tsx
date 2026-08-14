import * as React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  withArrow?: boolean;
  to?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow = false, to, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative group";
    
    const variants = {
      primary: "bg-[#10254A] text-white border border-[#10254A] shadow-[0_4px_15px_rgba(16,37,74,0.12)] hover:bg-[#17345C] hover:border-[#17345C] hover:shadow-[0_8px_25px_rgba(16,37,74,0.2)]",
      secondary: "bg-white border border-[#10254A] text-[#10254A] hover:border-[#D4AF37] hover:bg-[#F8F5EE] hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] shadow-sm",
      outline: "border border-[#10254A] bg-white text-[#10254A] hover:border-[#D4AF37] hover:bg-[#F8F5EE]",
      ghost: "text-[#10254A] relative group hover:text-[#D4AF37] bg-transparent",
      link: "text-[#D4AF37] underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-12 px-6 py-2 rounded-full",
      sm: "h-10 rounded-full px-4",
      lg: "h-14 rounded-full px-8 text-base",
      icon: "h-12 w-12 rounded-full",
      ghost: "p-0 h-auto",
    };

    const isGhost = variant === "ghost";
    const combinedClassName = cn(baseStyles, variants[variant], isGhost ? sizes.ghost : sizes[size], className);

    const innerContent = (
      <>
        {variant === "primary" && (
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-200 ease-in-out pointer-events-none" />
        )}
        {/* @ts-ignore */}
        <span className="relative z-10 flex items-center transition-colors duration-[220ms] ease-out">
          {children}
          {withArrow && (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-[220ms] ease-out group-hover:translate-x-1" />
          )}
        </span>
        {isGhost && (
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-[220ms] ease-out group-hover:w-full"></span>
        )}
      </>
    );

    if (to) {
      const MotionLink = motion(Link);
      return (
        <MotionLink
          to={to}
          whileHover={{ y: isGhost ? 0 : -2 }}
          whileTap={{ y: isGhost ? 0 : 1 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={combinedClassName}
          {...(props as any)}
        >
          {innerContent}
        </MotionLink>
      );
    }

    return (
      <motion.button
        whileHover={{ y: isGhost ? 0 : -2 }}
        whileTap={{ y: isGhost ? 0 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {innerContent}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
