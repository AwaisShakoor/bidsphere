"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { BidSphereCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/form-field";
import {
  signInDefaultValues,
  signInSchema,
  type SignInFormValues,
} from "@/lib/validations/auth";

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: signInDefaultValues,
  });

  async function onSubmit(values: SignInFormValues) {}

  return (
    <BidSphereCard
      title="BidSphere"
      description="Sign in to bid on live auctions and manage your account."
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerHref="/sign-up"
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
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </BidSphereCard>
  );
}
