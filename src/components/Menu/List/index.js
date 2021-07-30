import { useState } from "react"
import { List } from "../styled"

 import { BsArrowDownShort } from "react-icons/bs";

import { useIndexPage } from "../../../Context/IndexPage"
import { useShowMenu } from "../../../Context/Menu"

export const MenuList = () => {

    const { setShowMenu } = useShowMenu()

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
                            <li onClick= { () => {  setIndexPage( IndexPage * 0 + 4) 
                                                    setShowMenu(true)}}
                            >Adição
                            </li>

                            <li onClick= { () => {  setIndexPage( IndexPage * 0 + 5) 
                                                    setShowMenu(true)}}
                            >Subtração
                            </li>

                            <li onClick= { () => {  setIndexPage( IndexPage * 0 + 6) 
                                                    setShowMenu(true)}}
                            >Multiplicação
                            </li>
                           
                            <li onClick= { () => {  setIndexPage( IndexPage * 0 + 7) 
                                                    setShowMenu(true)}}
                            >Divisão
                            </li>
                        </ul>
                    </List>

            <li onClick={ShowGeometric}>Geometria <BsArrowDownShort size={20} /></li>

                <List >
                    <ul className={ ` ${twohide ? "hide" : ""}`}  >
                        <li onClick= { () => {  setIndexPage( IndexPage * 0 ) 
                                                        setShowMenu(true)}}
                                >Quadrado
                        </li>
                        <li onClick= { () => {  setIndexPage( IndexPage * 0 + 1) 
                                                        setShowMenu(true)}}
                                >Retâgulo
                        </li>
                        <li onClick= { () => {  setIndexPage( IndexPage * 0 + 2) 
                                                        setShowMenu(true)}}
                                >Círculo
                        </li>
                        <li onClick= { () => {  setIndexPage( IndexPage * 0 + 3) 
                                                        setShowMenu(true)}}
                                >Triângulo
                        </li>
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