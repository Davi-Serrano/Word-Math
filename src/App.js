import { useState } from "react"

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

console.log(theme)
  return (
    <ThemeProvider theme={theme === "ligth" ? lightTheme : darkTheme}>
      < IndexPageProvider>
      < ShowMenuProvider>
          
          < Header />
          <button onClick={handleTheme}> Mudar Tema</button>
          < Section />

         
          < GlobalStyle/>
          
      </ShowMenuProvider>
      </IndexPageProvider>
   
    </ThemeProvider>
  );
}

export default App;
