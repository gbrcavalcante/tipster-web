import { SignInForm } from "@/components/sign-in-form";
import { TypographyH4 } from "@/components/ui/typography";

export default function SignInPage() {
  return (
    <main className="flex flex-col h-screen w-full p-6 justify-center items-center gap-6">
      <TypographyH4>Tipster</TypographyH4>
      <SignInForm />
    </main>
  );
}
