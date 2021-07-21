import styled from "styled-components";

export const Title = styled.h2`
        font-size: 55px;
        border: 1px solid red
`
export const GeoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    border: 1px solid red;
    height: 80vh;
    width: 80vw;

    
    .question{
        display: flex;
        flex-direction: column;
        align-items: center;

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
    .Square{
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
    }


`