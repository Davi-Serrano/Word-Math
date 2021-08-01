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

export const Account = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color:white;
    
    height:84vh;
    width: 80vw;
    @media(max-width: 800px) {
                 width: 100vw;
                }

`

export const FractionStyle = styled.div`

    display: flex;
    flex-direction: column;
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
        @media(max-width: 800px) {

           input{
               width: 60px;
        } 
               
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
            @media (max-width: 800px){
                margin-left: 10px;
            }

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

        @media(max-width: 800px) {

            width: 60px;
}
`