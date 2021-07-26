import { List } from "../styled"

export const MenuList = () => {


    return(

        <ul>
        <li>Equaçoes</li>
                
                <List>
                <ul className="equation" >
                    <li>Primeiro grau</li>
                    <li>Segundo Grau</li>
                    <li>Sistema de Equações</li>
                </ul>
                </List>

        <li>Geometria</li>

                <List >
                <ul className="geometric" >
                    <li>Primeiro grau</li>
                    <li>Segundo Grau</li>
                    <li>Sistema de Equações</li>
                </ul>
                </List>
                
        <li>Funções</li>

                <List>
                <ul className="functions">
                    <li>Primeiro grau</li>
                    <li>Segundo Grau</li>
                    <li>Sistema de Equações</li>
                </ul>
                </List>

        </ul>
    )
}