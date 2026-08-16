import React from 'react';
import { cn } from "@/src/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'light' | 'dark'; // Dark bg vs light bg
  subtitleColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'dark', subtitleColor, ...props }) => {
  const accountsColorClass = subtitleColor
    ? subtitleColor
    : variant === 'light' ? 'text-white' : 'text-black';

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img width="56" height="56"
        src="/logo-an-mark.png"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex-shrink-0 object-contain scale-[1.15] origin-center"
      />
      <div className={cn(
        "ml-3 sm:ml-4 font-serif flex flex-col justify-center leading-none select-none",
        variant === 'light' ? "text-white" : "text-[#10254A]"
      )}>
        <span className="font-semibold tracking-wide text-lg sm:text-xl lg:text-2xl">ArthaNova</span>
        <span className={cn(
          "font-medium tracking-widest text-[0.60em] sm:text-[0.85em] mt-1",
          accountsColorClass
        )}>
          Accounts
        </span>
      </div>
    </div>
  );
};
