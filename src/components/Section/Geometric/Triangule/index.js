import { useState } from "react"

import { GeoStyle, Title, TriaBtn } from "../style"

export const Triangle = () =>{

    const [ area, setArea] = useState(0)
    const [ perimeter, setPerimeter] = useState(0)

    function CalcTriangle () {
            const width = document.querySelector("#width").value
            const height = document.querySelector("#height").value      

            const Width = parseInt(width)
            const Height = parseInt(height)

            setArea(Width*Height/2)

            const Pitagoras = Width**2 + Height**2

            setPerimeter(Math.sqrt(Pitagoras) + Width + Height)
            
            
        }
        

    return(

        <div>
                <Title>Triângulo</Title>
                < GeoStyle>
                <div className="question">

                    <label> Qual o tamanho do lado A do retângulo? </label>
                    <input type="number" min="1" id="width" />
                
                    <label> Qual o tamanho do lado B do retângulo? </label>
                    <input type="number" min="1" id="height" />
                
                    <TriaBtn onClick={CalcTriangle}>
                        <div className="calc">
                            calcular
                        </div>
                     </TriaBtn>
                
                </div>

            <div className="result">

                <h3>Área:{area}</h3>
                <h3>Perimetro:{perimeter.toFixed(2)} </h3>
               
            </div>
               
                </GeoStyle>

        </div>

    )}