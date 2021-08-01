import { useState } from "react"

import { GeoStyle, Title, TriaBtn } from "../style"

export const Triangle = () =>{

    const [ area, setArea] = useState(0)
    const [ perimeter, setPerimeter] = useState(0)

    function CalcTriangle () {
            const width = document.querySelector("#width").value
            const height = document.querySelector("#height").value      

            const Width = parseInt(width)
            const Height = parseInt(height)


            if(Width <= 0 || Height <=0 || !Width || !Height ){
                alert("Por favor coloque um número válido ou responda todas as perguntas!!")
            }else{

                setArea(Width*Height/2)
    
                const Pitagoras = Width**2 + Height**2
    
                setPerimeter(Math.sqrt(Pitagoras) + Width + Height)
            }




            
            
        }
        

    return(

        <div>
                <Title>Triângulo</Title>
                < GeoStyle>
                <div className="question">

                    <label> Qual o tamanho da Altura do Triângulo? </label>
                    <input type="number" min="1" id="width" />
                
                    <label> Qual o tamanho da Base do Triângulo? </label>
                    <input type="number" min="1" id="height" />
                
                </div>

                    <TriaBtn onClick={CalcTriangle}>
                        <div className="calc">
                            Calcular
                        </div>
                     </TriaBtn>
                
            <div className="result">

                <h3>Área:{area}</h3>
                <h3>Perímetro:{perimeter.toFixed(2)} </h3>
               
            </div>
               
                </GeoStyle>

        </div>

    )}