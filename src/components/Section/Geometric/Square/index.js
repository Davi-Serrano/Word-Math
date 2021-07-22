import { GeoStyle } from "../style"
import { Title } from "../style"
import { SquareBtn } from "../style"

import { useState } from "react"

export const Square = () =>{

    const [ area, setArea] = useState(0)
    const [ perimeter, setPerimeter] = useState(0)

    function CalcSquare () {
            const size = document.querySelector("#size").value        
            const Size = parseInt(size)


            if(Size <= 0 || !Size){
                alert("Por favor coloque um número válido")
            }else{
                setArea(Size*Size)
                setPerimeter(Size*4)    

            }
            
        }
        

    return(

        <div>

        <Title>Quadrados</Title>
              
        <GeoStyle>   
            <div className="question">

                <label> Qual o tamanho de um dos lados do quadrado? </label>
                <input type="number" min="1" id="size" />

                <SquareBtn onClick={CalcSquare}>Calcular</SquareBtn>

            </div>
            <div className="result">

                <h3>Área:{area}</h3>
                <h3>Perímetro:{perimeter} </h3>
            </div>

        </GeoStyle>
        </div>


    )
}