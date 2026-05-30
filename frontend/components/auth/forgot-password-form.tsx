"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { BidSphereCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/form-field";
import {
  forgotPasswordDefaultValues,
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/lib/validations/auth";

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: forgotPasswordDefaultValues,
  });

  async function onSubmit(values: ForgotPasswordFormValues) {}

  return (
    <BidSphereCard
      title="Reset your password"
      description="Enter your email and we'll send you a link to reset your password."
      footerText="Remember your password?"
      footerLinkText="Log in"
      footerHref="/login"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <Field
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email}
          {...register("email")}
        />

        <Button
          type="submit"
          size="lg"
          className="h-11 w-full text-sm font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send reset link"}
        </Button>
      </form>
    </BidSphereCard>
  );
}
