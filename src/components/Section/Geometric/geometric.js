import { useState } from "react"

import { IndxBtnNext, IndxBtnBack } from "./style"

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


                
                <IndxBtnNext onClick={Proximo}> Next</IndxBtnNext>
                <IndxBtnBack onClick={Final}> Back</IndxBtnBack>
            </div>
           )
    }
    if( indexG === 1) {
        return(

            <div>
 
                 <Rectangle />
                 <IndxBtnNext onClick={Proximo}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={Voltar}> Back</IndxBtnBack>
             </div>
            )
 
     }
     if( indexG === 2) {
        return  (

            <div>
 
                 <Circle />
                 <IndxBtnNext onClick={Proximo}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={Voltar}> Back</IndxBtnBack>
             </div>
            )
 
     }
     if( indexG === 3) {
        return(

            <div>
 
                 <Triangle />
                 <IndxBtnNext onClick={Inicio}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={Voltar}> Back</IndxBtnBack>
             </div>
            )

 
     }
               
        
    
        
        
    }