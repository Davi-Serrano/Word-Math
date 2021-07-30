import { FuncStyle, Title, Resp, CalcBtn } from "./styled"

export const  FuncFirst = () =>{ 

    return(

        <div>
                <Title>Função 1° Grau</Title>

                <FuncStyle>

                    <div className="question">
                         f(x)  <Resp></Resp> =
                        
                        <label> a =</label>
                        <input type="number" min="1" id="valueA" />
                        <label> x =</label>
                        <input type="number" min="1" id="valueX" />
                        <label> b =</label>
                        <input type="number" min="1" id="valueB" />

                    </div>
                        <CalcBtn>Calcular</CalcBtn>
                        
                </FuncStyle>
        </div>

    )}