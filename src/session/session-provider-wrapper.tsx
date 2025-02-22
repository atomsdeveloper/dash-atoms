"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ChildrenProps {
  children: ReactNode;
}

const SessionProviderWrapper = ({ children }: ChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
