import { createContext, SetStateAction, useEffect, useState } from 'react';


interface ChangeThemeReturn {
    theme: string,
    handleSetTheme: (value: 'light' | 'dark') => void;
}

export const ChangeThemeContext = createContext({} as ChangeThemeReturn)

export function ChangeThemeProvider({ children }: ChildrenContextProps) {

    const [theme, setTheme] = useState<string>(localStorage.getItem('@theme') || 'dark');

    useEffect(() => {
        // Salva o tema no localStorage
        localStorage.setItem('@theme', theme);
    }, [theme]);

    function handleSetTheme(value: 'light' | 'dark') {
        setTheme(value)
    }

    return (
        <ChangeThemeContext.Provider value={{ handleSetTheme, theme }}>
            {children}
        </ChangeThemeContext.Provider>
    )
}


