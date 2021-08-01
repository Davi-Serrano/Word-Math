import styled from "styled-components";

export const Title = styled.h2`
        font-size: 55px;

        padding-left: 50px;
        
        background-color: #FAFFFD;
       
        @media (max-width: 800px){
            font-size: 25px;
            padding-left: 15px;
        }

`
export const FuncStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    
    color:white;
    
    height:84vh;
    width: 80vw;

    
    
    .question{
        display: flex;
        justify-content: center;
        font-size: 25px;
        
        input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
    
}
        input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;

        }

        input{
            width: 50px;
            
            font-size: 15px;

            border: none;
            border: 1px solid black;
            text-align: center;
            font-weight: bold;
        }
    }

        label{
            margin-left: 1em;
        }


    @media(max-width: 800px) {
            
            width: 100vw;

            .question {
                input{
            width: 25px;
            height: 25px;      
            font-size: 10px;
            }
        }
    }
    
    
    `

export const Resp = styled.div`

            width: 50px;

            margin: 0 0.5em;
                
            border: 1px solid black;
            background-color: white;
            color: black;

            display: flex;
            justify-content: center;
            align-items: center;
            
            font-size: 15px;
            font-weight: bold;
                
                @media (max-width: 800px){
                    width: 25px;
                    height: 25px;      
                    font-size: 10px;
                
            }

`
export const CalcBtn = styled.div`

            font-size: 25px;
            padding: 5px;
            margin-top: 15px;
            border: 2px solid white;
            background-color: #565554;

            transition: 0.5s ;
             &:hover{
                 transform: translateY(-5px);
                 cursor: pointer;
             }

      
`

export const Graph = styled.div`

            width: 500px;
            border: 2px solid white;
            background-color: white;

            @media (max-width: 800px){
                   
                width: 250px;
                
            }


    
`


