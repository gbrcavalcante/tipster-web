import Link from "next/link";

export function TermsPrivacyFooter() {
  return (
    <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      Ao clicar em continuar, você concorda com nossos{" "}
      <Link
        href="#"
        className="hover:text-primary underline underline-offset-4"
      >
        Termos de Serviço
      </Link>{" "}
      e{" "}
      <Link
        href="#"
        className="hover:text-primary underline underline-offset-4"
      >
        Política de Privacidade
      </Link>
      .
    </div>
  );
}
