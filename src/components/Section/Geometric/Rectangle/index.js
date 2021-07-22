import { useState } from "react"

import { GeoStyle, Title, RectBtn } from "../style"

export const Rectangle = () =>{

    const [ area, setArea] = useState(0)
    const [ perimeter, setPerimeter] = useState(0)

    function CalcRectangle () {
            const sizeA = document.querySelector("#sizeRectA").value
            const sizeB = document.querySelector("#sizeRectB").value      

            const SizeA = parseInt(sizeA)
            const SizeB = parseInt(sizeB)

            setArea(SizeA*SizeB)
            setPerimeter(SizeA*2 + SizeB*2)
            
            
        }
    

    return(

        <div>
                <Title>Retângulos</Title>

                <GeoStyle>

                    <div className="question">
                        <label> Qual o tamanho do lado A do retângulo? </label>
                        <input type="number" min="1" id="sizeRectA" />
                        <label> Qual o tamanho do lado B do retângulo? </label>
                        <input type="number" min="1" id="sizeRectB" />
                        <RectBtn onClick={CalcRectangle}>Calcular</RectBtn>
                    </div>
                    <div className="result">
                        <h3>Área:{area}</h3>
                        <h3>Perímetro:{perimeter} </h3>
                    </div>                        
                </GeoStyle>
        </div>

    )}