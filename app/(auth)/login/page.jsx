import AuthHero from "@/features/auth/components/AuthHero";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <AuthHero />
      <LoginForm />
    </div>
  );
}
