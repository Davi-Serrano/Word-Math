import { useState } from "react"
import { List } from "../styled"

import { useIndexPage } from "../../../Context/IndexPage"

export const MenuList = () => {

    const { IndexPage, setIndexPage } = useIndexPage()

    const [onehide, setOnehide] = useState(true)
    const [twohide, setTwohide] = useState(true)
    const [threehide, setThreehide] = useState(true)


    function ShowEquation(){

        setOnehide(!onehide)
    }

    function ShowGeometric(){

        setTwohide(!twohide)
    }
    function ShowFunction(){

        setThreehide(!threehide)
    }


    return(

        <ul>
            <li onClick={ShowEquation}>Equaçoes</li>
                    
                    <List>
                        <ul  className={ ` ${onehide ? "hide" : ""}`} >
                            <li>Primeiro grau</li>
                            <li>Segundo Grau</li>
                            <li>Sistema de Equações</li>
                        </ul>
                    </List>

            <li onClick={ShowGeometric}>Geometria</li>

                <List >
                    <ul className={ ` ${twohide ? "hide" : ""}`}  >
                        <li onClick= { () => setIndexPage( IndexPage * 0 )}>Quadrado </li>
                        <li onClick= { () => setIndexPage( IndexPage * 0 + 1)}>Retângulo</li>
                        <li onClick= { () => setIndexPage( IndexPage * 0 + 2)}>Círculo</li>
                        <li onClick= { () => setIndexPage( IndexPage * 0 + 3)}>Triâgulo</li>
                    </ul>
                </List>
                
             <li onClick={ShowFunction}>Funções</li>

                <List >
                    <ul className={ ` ${threehide ? "hide" : ""}`} >
                        <li>Primeiro grau</li>
                        <li>Segundo Grau</li>
                        <li>Sistema de Equações</li>
                    </ul>
                </List>

        </ul>
    )
}