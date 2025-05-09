import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){  //now no need of two imports of useContext and ThemeContext
    return useContext(ThemeContext)
}