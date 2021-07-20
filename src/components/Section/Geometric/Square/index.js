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
        
        console.log(area, perimeter)

    return(

        <div>   
                <h2>Quadrados</h2>
                <label> Qual o tamnho tem um dos lados do quadrado? </label>
                <input type="number" min="1" id="size" />
                <h3>Área:${area}</h3>
                <h3>Perimetro:${perimeter} </h3>
                <button onClick={CalcSquare}>Calcular</button>

        </div>


    )
}