import { useState } from "react"

import {Title, Account, FractionStyle, FractNumber, CalcBtn, SinalMath, ResponseFrac } from "../styled"

export const Subtratcion = () =>{


    const [ Numerator, setNumerator ] = useState(0)
    const [ Denominator, setDenominator ] = useState(0)

function CalcSubtratcion () {
    
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
       
        var numerator = (NumA * DenB) + (NumB * DenA)
        var denominator = (DenA * DenB)

        while(numerator % 2 === 0 && denominator % 2 === 0){
            numerator = numerator / 2
            denominator = denominator / 2
        }
        while(numerator % 3 === 0 && denominator % 3 === 0){
            numerator = numerator / 3
            denominator = denominator / 3
        }
        while(numerator % 5 === 0 && denominator % 5 === 0){
            numerator = numerator / 5
            denominator = denominator / 5
        }
        while(numerator % 7 === 0 && denominator % 7 === 0){
            numerator = numerator / 7
            denominator = denominator / 7
        }
        while(numerator % 9 === 0 && denominator % 9 === 0){
            numerator = numerator / 9
            denominator = denominator / 9
        }
        while(numerator % 13 === 0 && denominator % 13 === 0){
            numerator = numerator / 13
            denominator = denominator / 13
        }

        setNumerator(numerator)
        setDenominator(denominator)
    }
    
}

    return(

            <div>
                <Title>Subtração</Title>
                    <Account>
                        <FractionStyle>
                                <FractNumber>
                                    <input type="number" id="numA" min="1" />
                                    <input type="number" id="denA" min="1" />
                                </FractNumber>
                                    <SinalMath>-</SinalMath>
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
                                <CalcBtn onClick={CalcSubtratcion}>Calcular</CalcBtn>
                    </Account>

            </div>
    )
}