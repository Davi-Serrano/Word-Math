import {Title, Account, FractionStyle, FractNumber, CalcBtn, SinalMath } from "../styled"

export const Division = () =>{


    return(

            <div>
                <Title>Divisão</Title>
                    <Account>
                        <FractionStyle>
                                <FractNumber>
                                    <input type="number" min="1" />
                                    <input type="number" min="1" />
                                </FractNumber>
                                    <SinalMath>/</SinalMath>
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