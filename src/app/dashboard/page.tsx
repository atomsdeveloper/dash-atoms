"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Content from "./components/content";

import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/context/theme";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  const { theme, handleSetTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    router.push(`?view=leaderboard`);
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between gap-2 py-2 pr-6 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex h-full w-3/6 items-center gap-2 px-4">
            <SidebarTrigger className={`-ml-1 ${theme ? "text-white" : ""}`} />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex h-full w-3/6 items-center justify-end gap-3">
            <Button
              className={`flex p-2 h-8 rounded-md text-xs gap-1 items-center justify-center`}
              onClick={() => handleSetTheme()}
            >
              {theme ? <Sun size={10} /> : <Moon size={10} />}
              {theme ? <p>Ligth</p> : <p>Dark</p>}
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-0 pt-4">
          <Content />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
export default DashboardPage;
