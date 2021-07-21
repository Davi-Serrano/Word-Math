import { useState } from "react"

import { GeoStyle, Title, CircleBtn } from "../Square/style"

export const Circle = () =>{

    const [ areaC, setAreaC] = useState(0)
    const [ perimeterC, setPerimeterC] = useState(0)


    function CalcCircle () {

            const r = document.querySelector("#radius").value        
            const R = parseInt(r)

            setAreaC(Math.PI*R**2)
            setPerimeterC(Math.PI*2*R)
            
            
        }
        

    return(

        <div>   
                <Title>Circulo</Title>

                < GeoStyle>

                    <div className="question">

                        <label> Qual o tamanho do Raio do círculo? </label>
                        <input type="number" min="1" id="radius" />
                        <CircleBtn onClick={CalcCircle}>Calcular</CircleBtn>

                    </div>

                    <div className="result">

                        <h3>Área:{areaC.toFixed(2)} </h3>
                        <h3>Perimetro:{perimeterC.toFixed(2)} </h3>

                    </div>
                </GeoStyle>

        </div>


    )
}