import { useState } from "react"
import { List } from "../styled"

 import { BsArrowDownShort } from "react-icons/bs";

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
            <li onClick={ShowEquation}>Frações <BsArrowDownShort size={20} /></li>
                    
                    <List>
                        <ul  className={ ` ${onehide ? "hide" : ""}`} >
                            <li onClick= { () => setIndexPage( IndexPage * 0 + 4)}>Adição</li>
                            <li onClick= { () => setIndexPage( IndexPage * 0 + 5)}>Subtração</li>
                            <li onClick= { () => setIndexPage( IndexPage * 0 + 6)}>Multiplicação</li>
                            <li onClick= { () => setIndexPage( IndexPage * 0 + 7)}>Divisão</li>
                        </ul>
                    </List>

            <li onClick={ShowGeometric}>Geometria <BsArrowDownShort size={20} /></li>

                <List >
                    <ul className={ ` ${twohide ? "hide" : ""}`}  >
                        <li onClick= { () => setIndexPage( IndexPage * 0 )}>Quadrado </li>
                        <li onClick= { () => setIndexPage( IndexPage * 0 + 1)}>Retângulo</li>
                        <li onClick= { () => setIndexPage( IndexPage * 0 + 2)}>Círculo</li>
                        <li onClick= { () => setIndexPage( IndexPage * 0 + 3)}>Triângulo</li>
                    </ul>
                </List>
                
             <li onClick={ShowFunction}>Funções <BsArrowDownShort size={20} /></li>

                <List >
                    <ul className={ ` ${threehide ? "hide" : ""}`} >
                        <li>Primeiro grau</li>
                    </ul>
                </List>

        </ul>
    )
}