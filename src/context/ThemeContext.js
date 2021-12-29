import { createContext, useState } from "react";

const ThemeContext = createContext()


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        console.log("Se cambio el tema")
        setTheme(!theme)
    }

    const data = {
        theme,
        changeTheme
    }


    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext