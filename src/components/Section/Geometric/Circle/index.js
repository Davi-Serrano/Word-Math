import { useState } from "react"

export const Circle = () =>{

    const [ areaC, setAreaC] = useState(0)
    const [ perimeterC, setPerimeterC] = useState(0)


    function CalcCircle () {

            const r = document.querySelector("#radius").value        
            const R = parseInt(r)

            setAreaC(Math.PI*R**2)
            setPerimeterC(Math.PI*2*R)
            
            
        }
        
        console.log(perimeterC)

    return(

        <div>   
                <h2>Circulo</h2>
                <label> Qual o tamanho do Raio do círculo? </label>
                <input type="number" min="1" id="radius" />
                <h3>Área:{areaC.toFixed(2)} </h3>
                <h3>Perimetro:{perimeterC.toFixed(2)} </h3>
                <button onClick={CalcCircle}>Calcular</button>

        </div>


    )
}