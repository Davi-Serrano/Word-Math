import { GeoStyle } from "./style"
import { Title } from "./style"
import { SquareBtn } from "./style"

import { useState } from "react"

export const Square = () =>{

    const [ area, setArea] = useState(0)
    const [ perimeter, setPerimeter] = useState(0)

    function CalcSquare () {
            const size = document.querySelector("#size").value        
            const Size = parseInt(size)

            setArea(Size*Size)
            setPerimeter(Size*4)
            
            
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

                <p>Área:{area}</p>
                <p>Perimetro:{perimeter} </p>
            </div>

        </GeoStyle>
        </div>


    )
}