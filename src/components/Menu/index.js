import { MenuList } from "./List"
import { MenuA } from "./styled"

import Switch from "react-switch";

import { useThemePage } from "../../Context/ThemePage";

export const Nav = ()=>{

        const { Theme, setTheme } = useThemePage()

    function handleTheme(){

        Theme === "ligth" ? setTheme("dark") : setTheme("ligth")
      
      }
return( 

    <MenuA>
        <h3>Menu</h3>
        <MenuList />

        <div className="BtnTheme">

            <Switch     onChange={handleTheme}
                        checked={Theme === "dark"}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={25}
                        width={80}
                        handleDiameter={40}
                        onColor={"#999999"}
                        onHandleColor={"#000000"}
                        offColor={"#999999"}
                        offHandleColor={"#81b6cc"}
                    />
        </div>
   
    </MenuA>


)

}