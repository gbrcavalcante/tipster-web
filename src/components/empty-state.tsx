import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  children: React.ReactNode;
  className?: string;
}

interface EmptyStateIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

interface EmptyStateTextProps {
  children: string;
  className?: string;
}

function EmptyState({ children, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-12 px-6 space-y-4 border-2 border-dotted rounded-2xl",
        className
      )}
      role="status"
      aria-live="polite"
    >
      {children}
    </div>
  );
}

function EmptyStateIcon({ icon, className, size = 48 }: EmptyStateIconProps) {
  const Icon = icon;
  return (
    <div className={cn("text-muted-foreground", className)}>
      <Icon size={size} strokeWidth={2} />
    </div>
  );
}

function EmptyStateTitle({ children, className }: EmptyStateTextProps) {
  return (
    <h2 className={cn("text-xl font-semibold text-foreground", className)}>
      {children}
    </h2>
  );
}

function EmptyStateDescription({ children, className }: EmptyStateTextProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm max-w-md leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

interface EmptyStateActionsProps {
  children: React.ReactNode;
  className?: string;
}

function EmptyStateActions({ children, className }: EmptyStateActionsProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-2 mt-6", className)}>
      {children}
    </div>
  );
}

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
};
