"use client";

import * as React from "react";
import {
  ChartColumn,
  ChartSpline,
  Clock,
  LifeBuoy,
  Send,
  Settings2,
  Star,
  Trophy,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      name: "Partidas",
      url: "/",
      icon: Clock,
    },
    {
      name: "Análises",
      url: "/analysis",
      icon: ChartColumn,
    },
    {
      name: "Ligas",
      url: "/leagues",
      icon: Trophy,
    },
    {
      name: "Favoritos",
      url: "/favorite",
      icon: Star,
    },
    {
      name: "Configurações",
      url: "/settings",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Suporte",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex gap-2 p-2 items-center">
              <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <ChartSpline className="size-4" />
              </div>
              <span className="truncate font-medium">Tipster</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
