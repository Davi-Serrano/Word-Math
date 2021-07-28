import { useState } from "react"

import {Title, Account, FractionStyle, FractNumber, CalcBtn, SinalMath } from "../styled"

export const Multiplication = () =>{


    const [ Numerator, setNumerator ] = useState()
    const [ Denominator, setDenominator ] = useState()

function CalcMultiplication () {
    
    const numeratorA = document.querySelector("#numA").value
    const numeratorB = document.querySelector("#numB").value
    const denominatorA = document.querySelector("#denA").value
    const denominatorB = document.querySelector("#denB").value

    const NumA = parseInt(numeratorA)
    const NumB = parseInt(numeratorB)

    const DenA = parseInt(denominatorA)
    const DenB = parseInt(denominatorB)


    setNumerator(NumA * NumB)
    setDenominator(DenA * DenB)
    
    
}
var RespNum = 0
    return(

            <div>
                <Title>Multipicação</Title>
                    <Account>
                        <FractionStyle>
                                <FractNumber>
                                    <input type="number" id="numA" min="1" />
                                    <input type="number" id="denA" min="1" />
                                </FractNumber>
                                    <SinalMath>X</SinalMath>
                                <FractNumber>
                                    <input type="number" id="numB" min="1"  />
                                    <input type="number" id="denB" min="1" />
                                </FractNumber>
                                <SinalMath>=</SinalMath>
                                <FractNumber>/
                                    <input  value={Numerator}  />
                                    <input  value={Denominator}  />
                                </FractNumber>

                    </FractionStyle>
                                <CalcBtn onClick={CalcMultiplication}>Calcular</CalcBtn>
                    </Account>

            </div>
    )
}