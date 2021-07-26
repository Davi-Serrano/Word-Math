import { useState, createContext, useContext} from "react"

export const IndexPageContext = createContext();

export default function IndexPageProvider({ children }){


    const [ IndexPage, setIndexPage ] = useState(0);

    return(

        <IndexPageContext.Provider
        value={{
            IndexPage,
            setIndexPage
        }}
        > 
            
            {children}    
        
         </IndexPageContext.Provider>

    )
}

export function useIndexPage(){
    const context = useContext(IndexPageContext)
    const { IndexPage, setIndexPage}  = context ;

    return  { IndexPage, setIndexPage};
}