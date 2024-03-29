import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-4 w-full items-start rounded-md border border-l-4 p-4 dark:max-w-none",
        {
          "dark:prose border-red-600 bg-red-50": type === "danger",
          "dark:prose border-yellow-600 bg-yellow-50": type === "warning",
        },
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
