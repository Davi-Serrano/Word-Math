import { useState } from "react"

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
        
        console.log(area, perimeter)

    return(

        <div>
                <h2>Triângulo</h2>
                <label> Qual o tamanho do lado A do retângulo? </label>
                <input type="number" min="1" id="width" />
                <label> Qual o tamanho do lado B do retângulo? </label>
                <input type="number" min="1" id="height" />
                <h3>Área:{area}</h3>
                <h3>Perimetro:{perimeter.toFixed(2)} </h3>
                <button onClick={CalcTriangle}>Calcular</button>

        </div>

    )}