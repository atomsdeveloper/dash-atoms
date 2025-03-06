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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/context/theme";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const DashboardPage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [language, setLanguage] = React.useState("pt-br");
  const { theme, handleSetTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    i18n.changeLanguage(language);
    router.push(router.asPath, undefined, { locale: language });
  }, [language, i18n, router]);

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
              className={`flex h-8 w-16 rounded-full text-xs ${theme ? "justify-end" : "justify-start"}`}
              onClick={() => handleSetTheme()}
            >
              {theme ? <Moon size={10} /> : <Sun size={10} />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-8 w-16 rounded-full text-xs">
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Escolha um idioma</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={setLanguage}
                >
                  <DropdownMenuRadioItem value="en">
                    Inglês
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="pt">
                    Português
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
              <div className="aspect-video rounded-xl bg-muted/100" />
              <div className="aspect-video rounded-xl bg-muted/100" />
              <div className="aspect-video rounded-xl bg-muted/100" />
              <div className="aspect-video rounded-xl bg-muted/100" />
            </div>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/100" />
            <div className="aspect-video rounded-xl bg-muted/100" />
            <div className="aspect-video rounded-xl bg-muted/100" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
export default DashboardPage;
