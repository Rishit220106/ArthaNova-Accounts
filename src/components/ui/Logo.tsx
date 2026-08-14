import React from 'react';
import { cn } from "@/src/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'light' | 'dark'; // Dark bg vs light bg
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'dark', ...props }) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img width="56" height="56"
        src="/logo-an-mark.png"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex-shrink-0 object-contain scale-[1.15] origin-center"
      />
      <div className={cn(
        "ml-3 sm:ml-4 lg:ml-5 font-serif flex items-baseline gap-[0.28em] whitespace-nowrap select-none",
        variant === 'light' ? "text-white" : "text-[#10254A]"
      )}>
        <span className="font-semibold tracking-wide text-xl sm:text-2xl lg:text-3xl">ArthaNova</span>
        <span className="font-medium tracking-wide text-[1.1em]">Accounts</span>
      </div>
    </div>
  );
};
