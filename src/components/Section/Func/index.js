import { useState } from "react"

import { FuncStyle, Title, Resp, CalcBtn } from "./styled"

export const  FuncFirst = () =>{ 

    const [ y, setY ] = useState(0)
  

    function CalcFunc(){

        const a = document.querySelector("#valueA").value
        const x = document.querySelector("#valueX").value
        const b = document.querySelector("#valueB").value

        const A = parseInt(a)
        const X = parseInt(x)
        const B = parseInt(b)

        setY(A * X + B)

    }


    return(

        <div>
                <Title>Função 1° Grau</Title>

                <FuncStyle>

                    <div className="question">
                         f(x) = <Resp>{y}</Resp> =
                        
                        <label> a =</label>
                        <input type="number" id="valueA" />
                        <label> x =</label>
                        <input type="number" id="valueX" />
                        <label> b =</label>
                        <input type="number" id="valueB" />

                    </div>
                        <CalcBtn onClick={CalcFunc}>Calcular</CalcBtn>
                        
                </FuncStyle>
        </div>

    )}