import React from "react";
import { cn } from "@/lib/utils";

export function Stat({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className, "space-y-2")}>{children}</div>;
}

export function StatTitle({ children }: { children: string }) {
  return (
    <h4 className="text-sm font-medium text-muted-foreground">{children}</h4>
  );
}

export function StatDescription({ children }: { children: string }) {
  return <p className="text-2xl font-bold">{children}</p>;
}
