import * as React from "react";
import {
  ShoppingBag,
  ShoppingCart,
  ChartSpline,
  ChartNoAxesColumn,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Leaderboard",
      url: "#",
      icon: ChartNoAxesColumn,
      isActive: true,
    },
    {
      title: "Orders",
      url: "#",
      icon: ShoppingCart,
    },
    {
      title: "Products",
      url: "#",
      icon: ShoppingBag,
    },
    {
      title: "Sales Repeat",
      url: "#",
      icon: ChartSpline,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
