"use client";

import { LoadingContext } from "@/context/loading";

import { useSession } from "next-auth/react";
import { useContext } from "react";
import Loading from "./components/loading";
import Login from "./components/login";

export default function HomePage() {
  const { loading, handleSetLoading } = useContext(LoadingContext);

  const { data: _, status } = useSession();
  
  return (
    <div className="flex h-full w-full items-center justify-center">
      {loading ? <Loading /> : <Login />}
    </div>
  );
}
