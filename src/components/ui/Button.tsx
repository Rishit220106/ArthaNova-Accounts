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
      primary: "bg-[#D4AF37] text-[#07162D] border border-[#D4AF37]/50 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:bg-[#E6C65A] hover:border-[#E6C65A] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)]",
      secondary: "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-[#D4AF37]/40 hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] shadow-premium",
      outline: "border border-white/20 bg-transparent hover:bg-white/10 hover:border-[#D4AF37]/40 hover:text-white text-white",
      ghost: "text-white relative group hover:text-[#D4AF37] bg-transparent",
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
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-200 ease-in-out pointer-events-none" />
        )}
        {/* @ts-ignore */}
        <span className={cn("relative z-10 flex items-center transition-colors duration-[220ms] ease-out", variant === "primary" ? "group-hover:text-[#07162D]" : "group-hover:text-white")}>
          {children}
          {withArrow && (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-[220ms] ease-out group-hover:translate-x-1" />
          )}
        </span>
        {isGhost && (
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-[220ms] ease-out ease-out group-hover:w-full"></span>
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
