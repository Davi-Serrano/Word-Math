 import { Topheader } from "./style";
 import { FiAlignJustify } from 'react-icons/fi';
 const Header = () => {
    
    function ShowMenu(){

        alert("Oi")
    }
    
    
    
    return (
            
            <Topheader >
              Word Math <div className="icon"> 
              < FiAlignJustify onClick={ShowMenu}/>
              </div> 
            </Topheader >


        

    )}

export default Header