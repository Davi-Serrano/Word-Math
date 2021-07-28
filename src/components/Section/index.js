import { useShowMenu } from "../../Context/Menu"

import { Aside, Navegation } from "./styled"

import { Geometric } from "./Geometric/geometric"
import { Nav } from "../Menu"


export const Section = () =>{
    
    const { showMenu} =useShowMenu()

return(

        <Navegation>
                
                <Aside >
            <div className={ ` ${showMenu ? "show" : ""}`} >
                < Nav />
            </div>
                </Aside>
                < Geometric />

        </Navegation>
)
        
        
    }