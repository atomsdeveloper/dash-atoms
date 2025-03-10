"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChartPie } from "lucide-react";

export function TeamSwitcher() {
  const { open } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="flex items-center justify-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 w-3/4 items-center justify-center gap-2 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                {open ? (
                  <>
                    <ChartPie size={16} />
                    <p className="text-xs"> Dashbang </p>
                  </>
                ) : (
                  <ChartPie size={14} />
                )}
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
