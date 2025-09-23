"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

function InputPassword({ className, ...props }: React.ComponentProps<"input">) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className={cn("relative", className)}>
      <Input
        className="pe-9"
        placeholder="Password"
        type={isVisible ? "text" : "password"}
        {...props}
      />
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        aria-controls="password"
      >
        {isVisible ? (
          <EyeOff size={16} aria-hidden="true" />
        ) : (
          <Eye size={16} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export { InputPassword };
