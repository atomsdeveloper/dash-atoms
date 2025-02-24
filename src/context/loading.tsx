"use client";

import React, { createContext, useState } from "react";

export interface ILoadingContext {
  loading: boolean;
  handleSetLoading: () => void;
}

export const LoadingContext = createContext<ILoadingContext>({
  loading: false,
  handleSetLoading: () => {},
});

interface LoadingProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSetLoading = () => {
    setLoading(prev => !prev);
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        handleSetLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
