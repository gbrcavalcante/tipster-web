"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const routeTitleMap: Record<string, string> = {
  "/": "Partidas",
  "": "Partidas",
  analysis: "Análises",
  leagues: "Ligas",
  favorite: "Favoritos",
  settings: "Configurações",
  support: "Suporte",
  feedback: "Feedback",
  "upgrade-plan": "Fazer upgrade do plano",
  account: "Conta",
  payment: "Pagamento",
};

export function NavBreadcrumb() {
  const currentPathname = usePathname();

  const pathSegments = currentPathname.split("/");
  const currentPageSlug = pathSegments.slice(-1)[0];
  const parentPathSegments = pathSegments.slice(0, -1);

  if (parentPathSegments.length < 2) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">
              {routeTitleMap[currentPageSlug] || currentPageSlug}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {parentPathSegments.map((pathSegment, segmentIndex) => (
          <div key={segmentIndex} className="flex items-center gap-3">
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={pathSegment} className="capitalize">
                {routeTitleMap[pathSegment] || pathSegment}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </div>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">
            {routeTitleMap[currentPageSlug] || currentPageSlug}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
