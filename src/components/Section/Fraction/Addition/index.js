import { useState } from "react"

import {Title, Account, FractionStyle, FractNumber, CalcBtn, SinalMath, ResponseFrac } from "../styled"

export const Addition = () =>{


    const [ Numerator, setNumerator ] = useState(0)
    const [ Denominator, setDenominator ] = useState(0)

function CalcAddition () {
    
    const numeratorA = document.querySelector("#numA").value
    const numeratorB = document.querySelector("#numB").value
    const denominatorA = document.querySelector("#denA").value
    const denominatorB = document.querySelector("#denB").value

    const NumA = parseInt(numeratorA)
    const NumB = parseInt(numeratorB)

    const DenA = parseInt(denominatorA)
    const DenB = parseInt(denominatorB)


    if(!NumA || !NumB || !DenA || !DenB){
        alert("Por favor coloque um número válido em todos os campos!!")
    }else{

        setNumerator((NumA * DenB) + (NumB * DenA))
        setDenominator(DenA * DenB)
    }


    
    
}

    return(

            <div>
                <Title>Adição</Title>
                    <Account>
                        <FractionStyle>
                                <FractNumber>
                                    <input type="number" id="numA" min="1" />
                                    <input type="number" id="denA" min="1" />
                                </FractNumber>
                                    <SinalMath>+</SinalMath>
                                <FractNumber>
                                    <input type="number" id="numB" min="1"  />
                                    <input type="number" id="denB" min="1" />
                                </FractNumber>
                                <SinalMath>=</SinalMath>
                                <FractNumber>
                                    <ResponseFrac>{Numerator}</ResponseFrac>
                                    <ResponseFrac>{Denominator}</ResponseFrac>
                                </FractNumber>

                    </FractionStyle>
                                <CalcBtn onClick={CalcAddition}>Calcular</CalcBtn>
                    </Account>

            </div>
    )
}