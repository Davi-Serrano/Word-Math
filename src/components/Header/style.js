import styled from "styled-components"

export const Topheader = styled.h1`

    display: flex;
    justify-content: center;


    background-color: #2E86AB;

    .icon{
        display: none;
    }

    

    @media(max-width: 800px) {
        justify-content: space-between;
        padding-left: 10px;
        padding-top: 10px;

                 .icon{
                     display: block;
                     margin-right: 10px;
                 }
         }

`