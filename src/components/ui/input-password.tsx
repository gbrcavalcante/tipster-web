"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

function InputPassword({ className, ...props }: React.ComponentProps<"input">) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  return (
    <div className="relative">
      <input
        type={isVisible ? "text" : "password"}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      <button
        className="absolute top-1.5 right-1.5 text-muted-foreground rounded-md p-1 transition hover:text-accent-foreground hover:bg-accent focus:bg-accent focus:outline-none   focus:text-accent-foreground"
        type="button"
        onClick={toggleVisible}
      >
        {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
      </button>
    </div>
  );
}

export { InputPassword };
