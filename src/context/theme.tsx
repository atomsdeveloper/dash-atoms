"use client"

import { useSession } from "next-auth/react";
import React, { createContext, useState } from "react"

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

    return (
        <ThemeContext.Provider value={{
            theme,
            handleSetTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}