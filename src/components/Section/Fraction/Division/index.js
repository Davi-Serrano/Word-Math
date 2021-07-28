import { useState } from "react"

import {Title, Account, FractionStyle, FractNumber, CalcBtn, SinalMath, ResponseFrac } from "../styled"

export const Division = () =>{

    const [ Numerator, setNumerator ] = useState(0)
    const [ Denominator, setDenominator ] = useState(0)

function CalcDivision () {
    
    const numeratorA = document.querySelector("#numA").value
    const numeratorB = document.querySelector("#numB").value
    const denominatorA = document.querySelector("#denA").value
    const denominatorB = document.querySelector("#denB").value

    const NumA = parseInt(numeratorA)
    const NumB = parseInt(numeratorB)

    const DenA = parseInt(denominatorA)
    const DenB = parseInt(denominatorB)


    setNumerator(NumA * DenA)
    setDenominator(NumB * DenB)

}
    return(

            <div>
               
                <Title>Divisão</Title>
                    <Account>
                        <FractionStyle>
                                <FractNumber>
                                    <input type="number" id="numA" min="1" />
                                    <input type="number" id="denA" min="1" />
                                </FractNumber>
                                    <SinalMath>/</SinalMath>
                                <FractNumber>
                                    <input type="number" id="numB" min="1" />
                                    <input type="number"id="denB" min="1" />
                                </FractNumber>
                                <SinalMath>=</SinalMath>
                                <FractNumber>
                                    <ResponseFrac>{Numerator}</ResponseFrac>
                                    <ResponseFrac>{Denominator}</ResponseFrac>
                                </FractNumber>

                    </FractionStyle>
                                <CalcBtn onClick={CalcDivision}>Calcular</CalcBtn>
                    </Account>

            </div>
    )
}