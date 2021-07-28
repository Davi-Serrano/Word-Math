import {Title, Account, FractionStyle, FractNumber, CalcBtn, SinalMath } from "../styled"

export const Multiplication = () =>{


    return(

            <div>
                <Title>Multipicação</Title>
                    <Account>
                        <FractionStyle>
                                <FractNumber>
                                    <input type="number" min="1" />
                                    <input type="number" min="1" />
                                </FractNumber>
                                    <SinalMath>X</SinalMath>
                                <FractNumber>
                                    <input type="number" min="1" />
                                    <input type="number" min="1" />
                                </FractNumber>
                                <SinalMath>=</SinalMath>
                                <FractNumber>
                                    <input type="number" min="1" />
                                    <input type="number" min="1" />
                                </FractNumber>

                    </FractionStyle>
                                <CalcBtn>Calcular</CalcBtn>
                    </Account>

            </div>
    )
}