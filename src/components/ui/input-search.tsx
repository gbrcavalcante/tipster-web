import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export function InputSearch({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className={cn("*:not-first:mt-2", className)}>
      <div className="relative">
        <Input
          className="peer ps-9"
          type="search"
          {...props}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
