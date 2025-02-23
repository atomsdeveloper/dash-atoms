"use client";

import React, { Children, createContext, useCallback, useState } from "react";

export interface ILoadingContext {
  loading: boolean;
  handleSetLoading: (value: boolean) => void;
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

  const handleSetLoading = useCallback((state: boolean) => {
    setLoading(state);
  }, []);

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
