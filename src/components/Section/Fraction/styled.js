import styled from "styled-components";

export const Title = styled.h2`
        font-size: 55px;

        margin-left: 50px;
        
        background-color: #FAFFFD;

`

export const Account = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #2E86AB;
    color:white;
    
    height:84vh;
    width: 80vw;
    @media(max-width: 800px) {
                 width: 98vw;
                }

`

export const FractionStyle = styled.div`

display: flex;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 800px) {


                 label{
                     padding-left: 15px;
                 }
         }

    

    
`

export const FractNumber = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 100px;
    margin: 0 50px; 

    
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
}
        input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;

}

        input{
            width: 100px;

            font-size: 35px;

            border: none;
            border: 0px solid black;
            text-align: center;
        }

        input:last-child{
            border-top: 2px solid black;
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
export const SinalMath = styled.div`
            font-size: 35px;
            margin-left: 35px;

`

export const ResponseFrac = styled.div`

            width: 100px;

            font-size: 35px;

            border: 0px solid black;
            text-align: center;
            background-color: white;
            color: black;
            
                &:last-child{
            
                    border-top: 2px solid black;
        }
`