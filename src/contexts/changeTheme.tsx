import { createContext, SetStateAction, useEffect, useState } from 'react';


interface ChangeThemeReturn {
    theme: string,
    setTheme: (value: SetStateAction<string>) => void;
}

export const ChangeThemeContext = createContext({} as ChangeThemeReturn)

export function ChangeThemeProvider({ children }: ChildrenContextProps) {

    const [theme, setTheme] = useState('light');

    // Pega o tema salvo no localStorage
    useEffect(() => {
        // Caso não possua um salvo, usa o light
        const savedTheme = localStorage.getItem('@theme') || 'ligth';
        setTheme(savedTheme)
    }, []);

    useEffect(() => {
        // Pega o tema salvo no localStorage
        localStorage.setItem('@theme', theme);
    }, [theme]);

    return (
        <ChangeThemeContext.Provider value={{ setTheme, theme }}>
            {children}
        </ChangeThemeContext.Provider>
    )
}


