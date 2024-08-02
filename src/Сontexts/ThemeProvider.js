import React from "react";
import {themes, ThemeContext} from "./ThemeContext";

const currentTheme = () => {
    return themes.dark
}


function ThemeProvider({children}) {
    const [theme, setTheme] = React.useState(currentTheme)

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}


export default ThemeProvider
