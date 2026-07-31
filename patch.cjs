const fs = require('fs');
let code = fs.readFileSync('src/components/ui/Button.tsx', 'utf8');

code = code.replace(/duration-200 ease-out/g, 'duration-[220ms] ease-out');
code = code.replace(/duration: 0.2/g, 'duration: 0.22');

code = code.replace(
  /const baseStyles = ".*?";/,
  `const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative group";`
);

code = code.replace(
  /const variants = \{([\s\S]*?)\};/,
  `const variants = {
      primary: "bg-[#D4AF37] text-[#07162D] border border-[#D4AF37]/50 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:bg-[#E6C65A] hover:border-[#E6C65A] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)]",
      secondary: "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-[#D4AF37]/40 hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] shadow-premium",
      outline: "border border-white/20 bg-transparent hover:bg-white/10 hover:border-[#D4AF37]/40 hover:text-white text-white",
      ghost: "text-white relative group hover:text-[#D4AF37] bg-transparent",
      link: "text-[#D4AF37] underline-offset-4 hover:underline",
    };`
);

code = code.replace(
  /const sizes = \{([\s\S]*?)\};/,
  `const sizes = {
      default: "h-12 px-6 py-2 rounded-full",
      sm: "h-10 rounded-full px-4",
      lg: "h-14 rounded-full px-8 text-base",
      icon: "h-12 w-12 rounded-full",
      ghost: "p-0 h-auto",
    };`
);

code = code.replace(
  /<span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-\[220ms\] ease-out">/,
  `{/* @ts-ignore */}
        <span className={cn("relative z-10 flex items-center transition-colors duration-[220ms] ease-out", variant === "primary" ? "group-hover:text-[#07162D]" : "group-hover:text-white")}>`
);

fs.writeFileSync('src/components/ui/Button.tsx', code);
