import { MenuA, MenuB } from "./styled"

export const Nav = ()=>{

return(

    <div>

    <h3>Menu</h3>
    <MenuA>
        <ul>
        <li>Equaçoes</li>
                
                <MenuB>
                <ul className="equation">
                    <li>Primeiro grau</li>
                    <li>Segundo Grau</li>
                    <li>Sistema de Equações</li>
                </ul>
                </MenuB>

        <li>Geometria</li>

                <MenuB>
                <ul className="geometric">
                    <li>Primeiro grau</li>
                    <li>Segundo Grau</li>
                    <li>Sistema de Equações</li>
                </ul>
                </MenuB>
                
        <li>Funções</li>

                <MenuB>
                <ul className="functions">
                    <li>Primeiro grau</li>
                    <li>Segundo Grau</li>
                    <li>Sistema de Equações</li>
                </ul>
                </MenuB>

        </ul>
    </MenuA>

    </div>
)

}