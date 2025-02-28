"use client"

import { useSession } from "next-auth/react";
import React, { createContext, useState, useEffect } from "react"

export interface IThemeContext {
    theme: boolean,
    handleSetTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: false,
    handleSetTheme: () => {},
})

interface ChildrenProps {
    children: React.ReactNode
}

export const ThemeProvider = ({children}: ChildrenProps) => {
    const { data: session } = useSession();
    const [theme, setTheme] = useState<boolean>(false);

    const handleSetTheme = async () => {
        setTheme(prev => !prev)
    };

    // Atualiza a classe do <html> sempre que `theme` mudar
    useEffect(() => {
        if (theme) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme,
            handleSetTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}