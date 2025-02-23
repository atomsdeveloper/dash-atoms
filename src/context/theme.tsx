"use client"

import React, { createContext, useCallback, useEffect, useState } from "react"

export interface IThemeContext {
    theme: string,
    handleSetTheme: (value: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    handleSetTheme: () => {},
})

interface ChildrenProps {
    children: React.ReactNode
}

export const ThemeProvider = ({children}: ChildrenProps) => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        storedTheme && setTheme(storedTheme);

        if(storedTheme === "dark") {
            document.documentElement.classList.add("dark")
        }
    }, [])

    const handleSetTheme = useCallback((value: string) => {
        setTheme(value)
    }, []);
    return (
        <ThemeContext.Provider value={{
            theme,
            handleSetTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}