import styled from "styled-components";

export const Title = styled.h2`
        font-size: 55px;

        padding-left: 50px;
        
        background-color: #FAFFFD;

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
            
            width: 98vw;
    

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

export const IndxBtnNext = styled.div`

        height: 80px;
        width: 80px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        border: 2px solid white;
        background-color: #565554;
        color: white;


        position: absolute;
        top: 70%;
        left: 80%;

        transform: scale(0.8);
        transition: 0.5s ease;

        &:hover{
                transform: scale(1);
                cursor: pointer;
        }

`

export const IndxBtnBack = styled.div`

        height: 80px;
        width: 80px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px solid white;
        background-color: #565554;
        color: white;

        position: absolute;
        top: 70%;
        left: 35%;

        transform: scale(0.8);
        transition: 0.5s ease;

        &:hover{
                transform: scale(1);
                cursor: pointer;
        }

        @media(max-width: 800px) {
            left: 15%;
         }


`