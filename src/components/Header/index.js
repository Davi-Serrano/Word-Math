import { useShowMenu } from "../../Context/Menu";

import { Topheader } from "./style";
 import { FiAlignJustify } from 'react-icons/fi';
 const Header = () => {

  const { showMenu , setShowMenu} = useShowMenu()
  
    
    function MenuMob(){

      setShowMenu(!showMenu)
    }
    
    
    
    return (
            
            <Topheader>
              Word Math 
              <div className="icon"> 
              < FiAlignJustify onClick={MenuMob} />
              </div> 
            </Topheader >


        

    )}

export default Header