import SignupForm from "@/features/auth/components/SignupForm";
import AuthHero from "@/features/auth/components/AuthHero";

export default function SignupPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthHero />
      <SignupForm />
    </div>
  );
}
