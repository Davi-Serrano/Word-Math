import { useState } from "react"

import { Square } from "./Geometric/Square"
import { Rectangle } from "./Geometric/Rectangle"
import { Circle } from "./Geometric/Circle"
import { Triangle } from "./Geometric/Triangule"

export const Section = () =>{
    
    const [ a, setA ] = useState(0)

    function Proximo(){

        setA(a +1)
    }
    function Voltar(){

        setA(a - 1)
    }

    
    if( a === 0) {
       return (

           <div>

            <Square />
            <button onClick={Proximo}> Next</button>
            <button onClick={Voltar}> Back</button>
       </div>
           )
    }
    if( a === 1) {
        return <Rectangle />
 
     }
     if( a === 2) {
        return  < Circle />
 
     }
     if( a === 3) {
        return < Triangle />

 
     }
               
        
    
        
        
    }