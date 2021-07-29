import { useState, createContext, useContext} from "react"

export const ThemePageContext = createContext();

export default function ThemePageProvider({ children }){


    const [ themw, setTheme ] = useState("ligth");

    return(

        <ThemePageContext.Provider
        value={{
            theme,
            setTheme
        }}
        >      
            {children}    
        
         </ThemePageContext.Provider>

    )
}

export function useThemePage(){
    const context = useContext(ThemePageContext)
    const { theme, setTheme}  = context ;

    return  { theme, setTheme};
}