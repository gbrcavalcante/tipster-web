import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"

export function MotionSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
