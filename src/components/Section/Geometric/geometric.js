import { useIndexPage } from "../../../Context/IndexPage"

import { IndxBtnNext, IndxBtnBack } from "./style"

import { Square } from "./Square"
import { Rectangle } from "./Rectangle"
import { Circle } from "./Circle"
import { Triangle } from "./Triangule"

import { Addition } from "../Fraction/Addition"
import { Subtratcion } from "../Fraction/Subtratcion"
import { Multiplication } from "../Fraction/Multiplication"
import { Division } from "../Fraction/Division"

export const Geometric = () =>{
    
    const { IndexPage, setIndexPage}  = useIndexPage()

    function NextGeometric(){

        setIndexPage(IndexPage + 1)
   
    }

    function BackGeometric(){

        setIndexPage(IndexPage - 1)

    }

    function NextFraction(){
        setIndexPage(IndexPage + 1)
    }

    function BackFraction(){

        setIndexPage(IndexPage - 1)

    }

    
    if( IndexPage === 0) {
       return (

           <div>

                <Square />


                
                <IndxBtnNext onClick={NextGeometric}> Next</IndxBtnNext>
                <IndxBtnBack onClick={()=> setIndexPage(3)}> Back</IndxBtnBack>
            </div>
           )
    }
    if( IndexPage === 1) {
        return(

            <div>
 
                 <Rectangle />
                 <IndxBtnNext onClick={NextGeometric}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={BackGeometric}> Back</IndxBtnBack>
             </div>
            )
 
     }
     if( IndexPage === 2) {
        return  (

            <div>
 
                 <Circle />
                 <IndxBtnNext onClick={NextGeometric}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={BackGeometric}> Back</IndxBtnBack>
             </div>
            )
 
     }
     if( IndexPage === 3) {
        return(

            <div>
 
                 <Triangle />
                 <IndxBtnNext onClick={()=> setIndexPage(0)}> Next</IndxBtnNext>
                 <IndxBtnBack onClick={BackGeometric}> Back</IndxBtnBack>
            </div>
            )

 
     }

     if( IndexPage === 4) {
        return (
 
            <div>
 
                 <Addition />
                 <IndxBtnNext onClick={NextFraction} > Next</IndxBtnNext>
                 <IndxBtnBack onClick={()=> setIndexPage(7)}> Back</IndxBtnBack>
             </div>
            
            )
        } 

    if( IndexPage === 5) {
        return (
     
            <div>
 
                <Subtratcion />
                <IndxBtnNext onClick={NextFraction}> Next</IndxBtnNext>
                <IndxBtnBack onClick={BackFraction}> Back</IndxBtnBack>
            </div>
                 
                
                )
            }  

    if( IndexPage === 6) {
        return (
         
            <div>
 
            <Multiplication />
            <IndxBtnNext onClick={NextFraction}> Next</IndxBtnNext>
            <IndxBtnBack onClick={BackFraction}> Back</IndxBtnBack>
            </div>
                     
                    
                    )
                }  
    if( IndexPage === 7) {
        return (
             
            <div>
 
            <Division />
            <IndxBtnNext onClick={()=> setIndexPage(4)}> Next</IndxBtnNext>
            <IndxBtnBack onClick={BackFraction}> Back</IndxBtnBack>
            </div>
                         
                        
                )
                    }  
        
    
        
        
    }