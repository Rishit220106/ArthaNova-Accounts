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
        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex-shrink-0 object-contain scale-[1.15] origin-center mix-blend-screen"
      />
      <span className={cn(
        "ml-3 sm:ml-4 lg:ml-5 font-serif font-semibold tracking-wide",
        "text-xl sm:text-2xl lg:text-3xl",
        variant === 'dark' ? "text-text-primary" : "text-white"
      )}>
        <span className="hidden min-[360px]:inline">ArthaNovaccounts</span>
        <span className="inline min-[360px]:hidden leading-tight block">ArthaNov<br />accounts</span>
      </span>
    </div>
  );
};
