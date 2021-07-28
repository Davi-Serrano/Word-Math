import { useIndexPage } from "../../../Context/IndexPage"



import { Addition } from "./Addition/index"
import { Subtratcion } from "./Subtratcion"

export const Fraction = () =>{
    
    const { IndexPage}  = useIndexPage()

    
    
    if( IndexPage === 4) {
       return (

                <Addition />
            
           
           )
    }
    if( IndexPage === 5) {
        return(


                 <Subtratcion />
              
             
            )
 
     }                 
    
        
        
    }