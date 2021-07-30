import { useState } from "react"

import { FuncStyle, Title, Resp, Graph ,CalcBtn } from "./styled"
import { Line } from 'react-chartjs-2';


export const  FuncFirst = () =>{ 

    const [ eixoX, setEixoX ] = useState(0)
    const [ y, setY ] = useState(0)


    const data = {
      labels: [ 0, eixoX],
      datasets: [
        {
          label: 'Função de 1° grau',
          data: [eixoX, y],
          fill: false,
          backgroundColor: 'rgb(0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0.2)',
        },
      ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
  

    function CalcFunc(){

        const a = document.querySelector("#valueA").value
        const x = document.querySelector("#valueX").value
        const b = document.querySelector("#valueB").value

        const A = parseInt(a)
        const X = parseInt(x)
        const B = parseInt(b)

        if(!A || !B || !X){
            alert("Por favor coloque um número válido em todos os campos!!")
        }else{
            setY(A * X + B)
            setEixoX(X)
        }


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
                        <Graph>
                        <Line data={data} options={options}/>   

                        </Graph>
                        <CalcBtn onClick={CalcFunc}>Calcular</CalcBtn>
                        
                </FuncStyle>
        </div>

    )}