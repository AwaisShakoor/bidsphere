"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FieldProps = React.ComponentProps<typeof Input> & {
  label: string;
  error?: { message?: string };
};

function Field({ label, error, className, id, name, ...props }: FieldProps) {
  const fieldId = id ?? name;

  return (
    <div className="space-y-1.5 text-left">
      <Label htmlFor={fieldId}>{label}</Label>
      <Input
        id={fieldId}
        name={name}
        aria-invalid={!!error}
        className={cn("h-11 px-3.5 text-sm", className)}
        {...props}
      />
      {error?.message ? (
        <p className="text-sm text-destructive">{error.message}</p>
      ) : null}
    </div>
  );
}

export { Field };
