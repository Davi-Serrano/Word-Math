import styled from "styled-components";

export const Title = styled.h2`
        font-size: 55px;
        border: 1px solid red
`
export const GeoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 1px solid red;
    height: 80vh;
    width: 80vw;

    
    .question{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;

        margin-left: 0;

        font-size: 35px;
        input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
}
        input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;

}

        input{
            margin-right: 80%;
            width: 50px;

            font-size: 15px;

            border: none;
            border: 1px solid black;
            text-align: center;
        }
        border: 1px solid red;
    }

    .result{
        display: flex;
        justify-content: space-around;

        border: 1px solid red;
        font-size: 25px;
        width: 450px;
        
    }
    


`


export const SquareBtn = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border: 1px solid red ;
        
        font-size: 25px;

        transform: rotate( -90deg);

        transition: 1s ease;

                &:hover{
                    cursor: pointer;
                    transform: rotate( 0deg);
                }
    
`

export const RectBtn = styled.div`


        display: flex;
        justify-content: center;
        align-items: center;
       
        margin-top: 50px;
       
        width: 100px;
        height: 100px;
        border: 1px solid red ;
        
        font-size: 25px;


        transition: 1s ease;

                &:hover{
                    cursor: pointer;
                    height: 50px;;
                }


`

export const CircleBtn = styled.div`    

        display: flex;
        justify-content: center;
        align-items: center;
       
        margin-top: 50px;
       
        width: 100px;
        height: 100px;
        border: 1px solid red ;
        
        font-size: 25px;
        border-radius: 50px;

        transition: 1s ease;
        transform: scale(0.8);

                &:hover{
                    cursor: pointer;
                    transform: scale(1);
                }

`

export const TriaBtn = styled.div`

    display: inline-block;
    margin-top: 20px;
    margin-right: 50px;

    width: 0; 
    height: 0; 

            
    border-left: 150px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 80px solid #5386E4;

    transform: scale(0.8);
    

    .calc{
        margin-top: 20px;
        
    }

        transition: 2s ease;
    

                &:hover{
                    cursor: pointer;
                    border-left: 1px solid transparent;
                    border-right: 150px solid transparent;
                 
                    
                 }

`

export const IndxBtnNext = styled.div`

        height: 80px;
        width: 80px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid red;

        position: absolute;
        top: 70%;
        left: 80%;

`

export const IndxBtnBack = styled.div`

        height: 80px;
        width: 80px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid red;

        position: absolute;
        top: 70%;
        left: 35%;
`