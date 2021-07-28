import { useState, createContext, useContext} from "react"

export const ShowMenuContext = createContext();

export default function ShowMenuProvider({ children }){


    const [ showMenu, setShowMenu ] = useState(true);

    return(

        <ShowMenuContext.Provider
        value={{
            showMenu,
            setShowMenu
        }}
        > 
            
            {children}    
        
         </ShowMenuContext.Provider>

    )
}

export function useShowMenu(){
    const context = useContext(ShowMenuContext)
    const { showMenu, setShowMenu}  = context ;

    return  { showMenu, setShowMenu};
}