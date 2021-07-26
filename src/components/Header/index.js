import { useState } from "react";

import { Topheader } from "./style";
 import { FiAlignJustify } from 'react-icons/fi';
 const Header = () => {

  const [ hide, setHide ]= useState(false)
    
    function ShowMenu(){

      setHide(!hide)
    }
    
    
    
    return (
            
            <Topheader>
             <h3 className={`show ${hide ? "hide": "" }`}> Word Math </h3>
              <div className="icon"> 
              < FiAlignJustify onClick={ShowMenu} />
              </div> 
            </Topheader >


        

    )}

export default Header