import styled from "styled-components";

export const MenuA = styled.div `

        font-size: 35px;
        padding: 15px 0 0 0px;
        

        h3{
            border-bottom: 2px solid black;
            text-align:center;
        }

        li{
            list-style: none;

            border-bottom: 2px solid black;
            
            padding: 5px 0;
            text-align: center;
            &:hover{
                cursor: pointer;
                background-color: #81b6cc;
            }
        }

        @media(max-width: 800px) {
            
            width: 100vw;
            position: absolute ;
            color: white;
            background-color: ${props => props.theme.colors.background};
            height: 100vh;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;

        h3, li{
            border: 0px solid black;
        }

           }

`

export const List = styled.div `

        font-size: 20px;
        
        li{
            list-style: none;
            border-left: 1px solid black;
        }

        .hide{
            display: none;
        }

        @media(max-width: 800px) {
           
            li{
                border: 0px solid black;
            }
        }
        

`