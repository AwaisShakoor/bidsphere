"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { BidSphereCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/form-field";
import {
  loginDefaultValues,
  loginSchema,
  type LoginFormValues,
} from "@/lib/validations/auth";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });

  async function onSubmit(values: LoginFormValues) {}

  return (
    <BidSphereCard
      title="BidSphere"
      description="Log in to bid on live auctions and manage your account."
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerHref="/signup"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="space-y-5">
          <Field
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={errors.email}
            {...register("email")}
          />
          <Field
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            error={errors.password}
            {...register("password")}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-11 w-full text-sm font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </BidSphereCard>
  );
}
