import { z } from "zod";

const emailField = z
  .string()
  .min(1, "Email is required")
  .email("Enter a valid email address");

const passwordField = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters");

export const loginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      .min(2, "Name must be at least 2 characters"),
    email: emailField,
    password: passwordField,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;

export const loginDefaultValues: LoginFormValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues: SignUpFormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
