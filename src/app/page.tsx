"use client";

import { Button } from "@/components/ui/button";

import { signIn, signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  return (
    <div className="">
      {status}
      {session?.user?.name}
      {session?.user?.email}
      {session?.user?.image}
      {session?.expires}
      <Button onClick={() => signIn("google")}>Entrar com o Google</Button>;
      <Button onClick={() => signOut()}> Sair da conta.</Button>
    </div>
  );
}
