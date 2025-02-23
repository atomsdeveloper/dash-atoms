"use client";

import { Button } from "@/components/ui/button";
import { LoadingContext } from "@/context/loading";

import { signIn, signOut, useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import Loading from "./components/loading";
import Login from "./components/login";

export default function DashboardPage() {
  const { loading, handleSetLoading } = useContext(LoadingContext);

  const { data: _, status } = useSession();

  useEffect(() => {
    if (status === "loading" && !loading) {
      handleSetLoading(true);
    } else if (status !== "loading" && loading) {
      handleSetLoading(false);
    }
  }, [status]);

  console.log("S", status);
  console.log("L:", loading);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {loading ? <Loading /> : <Login />}
    </div>
  );
}
