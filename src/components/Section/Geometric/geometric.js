import { useState } from "react"

import { Square } from "./Square"
import { Rectangle } from "./Rectangle"
import { Circle } from "./Circle"
import { Triangle } from "./Triangule"

export const Geometric = () =>{
    
    const [ indexG, setIndexG ] = useState(0)

    function Proximo(){

         setIndexG(indexG + 1)
   
    }

    function Inicio(){
        setIndexG(indexG - 3)
    }

    function Voltar(){

        setIndexG(indexG - 1)

    }

    function Final(){
        setIndexG( indexG + 3)
    }

    
    if( indexG === 0) {
       return (

           <div>

                <Square />
                <button onClick={Proximo}> Next</button>
                <button onClick={Final}> Back</button>
            </div>
           )
    }
    if( indexG === 1) {
        return(

            <div>
 
                 <Rectangle />
                 <button onClick={Proximo}> Next</button>
                 <button onClick={Voltar}> Back</button>
             </div>
            )
 
     }
     if( indexG === 2) {
        return  (

            <div>
 
                 <Circle />
                 <button onClick={Proximo}> Next</button>
                 <button onClick={Voltar}> Back</button>
             </div>
            )
 
     }
     if( indexG === 3) {
        return(

            <div>
 
                 <Triangle />
                 <button onClick={Inicio}> Next</button>
                 <button onClick={Voltar}> Back</button>
             </div>
            )

 
     }
               
        
    
        
        
    }