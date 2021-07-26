import { useState } from "react"

import { useIndexPage } from "../../../Context/IndexPage"

import { IndxBtnNext, IndxBtnBack } from "./style"

import { Square } from "./Square"
import { Rectangle } from "./Rectangle"
import { Circle } from "./Circle"
import { Triangle } from "./Triangule"

export const Geometric = () =>{
    
    const { IndexPage, setIndexPage}  = useIndexPage()

    function Proximo(){

        setIndexPage(IndexPage + 1)
   
    }

    function Inicio(){
        setIndexPage(IndexPage - 3)
    }

    function Voltar(){

        setIndexPage(IndexPage - 1)

    }

    function Final(){
        setIndexPage( IndexPage + 3)
    }

    
    if( IndexPage === 0) {
       return (

           <div>

                <Square />


                
                <IndxBtnNext onClick={Proximo}> Next</IndxBtnNext>
                <IndxBtnBack onClick={Final}> Back</IndxBtnBack>
            </div>
           )
    }
    if( IndexPage === 1) {
        return(

            <div>
 
                 <Rectangle />
                 <IndxBtnNext onClick={Proximo}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={Voltar}> Back</IndxBtnBack>
             </div>
            )
 
     }
     if( IndexPage === 2) {
        return  (

            <div>
 
                 <Circle />
                 <IndxBtnNext onClick={Proximo}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={Voltar}> Back</IndxBtnBack>
             </div>
            )
 
     }
     if( IndexPage === 3) {
        return(

            <div>
 
                 <Triangle />
                 <IndxBtnNext onClick={Inicio}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={Voltar}> Back</IndxBtnBack>
             </div>
            )

 
     }
               
        
    
        
        
    }