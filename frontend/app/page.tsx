import { LoginForm } from "@/components/auth/login-form";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-muted/40 px-4 py-16">
      <main className="flex w-full max-w-lg flex-col items-center gap-8 text-center">
        <div className="w-full">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}