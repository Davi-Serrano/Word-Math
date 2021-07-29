import { useState } from "react"
import Switch from "react-switch";

import IndexPageProvider from "./Context/IndexPage";
import ShowMenuProvider from "./Context/Menu"

import { ThemeProvider } from "styled-components";
import {  lightTheme, darkTheme} from "./styles/theme"
import  GlobalStyle from "./styles/global";

import Header from "./components/Header/index"
import { Section } from "./components/Section";




function App() {
  
  var [ theme, setTheme ] = useState("ligth")

function handleTheme(){

  theme === "ligth" ? setTheme("dark") : setTheme("ligth")

}

  return (
    <ThemeProvider theme={theme === "ligth" ? lightTheme : darkTheme}>
      < IndexPageProvider>
      < ShowMenuProvider>
          
          < Header />
          <Switch 
          onChange={handleTheme}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={"#81b6cc"}
          offColor={"#000"}
          />
          < Section />

          
          < GlobalStyle/>
          
      </ShowMenuProvider>
      </IndexPageProvider>
   
    </ThemeProvider>
  );
}

export default App;
