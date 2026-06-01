import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-muted/40 px-4 py-10 sm:py-14">
      {children}
    </div>
  );
}
