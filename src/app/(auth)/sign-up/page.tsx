import { SignUpForm } from "@/components/sign-up-form";
import { TypographyH4 } from "@/components/ui/typography";

export default function SignUpPage() {
  return (
    <main className="flex flex-col h-dvh w-full p-6 justify-center items-center gap-6">
      <TypographyH4>Tipster</TypographyH4>
      <SignUpForm />
    </main>
  );
}
