import styled from "styled-components";

export const MenuA = styled.div`

        font-size: 35px;

        li{
            list-style: none;
            &:hover{
                cursor: pointer;
            }
        }

        @media(max-width: 800px) {
            
        width: 100vw;
        position: absolute ;
        background-color: #2E86AB;
        height: 100vh;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;

           }

`

export const List = styled.div`

        font-size: 20px;
        padding-left: 35px;

        
        li{
            list-style: none;
        }

        .hide{
            display: none;
        }
        .geometric{
            display: none;
        }
        .functions{
            display: none;
        }
        

`