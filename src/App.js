import IndexPageProvider from "./Context/IndexPage";
import ShowMenuProvider from "./Context/Menu"

import { ThemeProvider } from "styled-components";
import {  lightTheme, darkTheme} from "./styles/theme"
import  GlobalStyle from "./styles/global";

import Header from "./components/Header/index"
import { Section } from "./components/Section";




function App() {
  

  var theme = darkTheme

  return (
    <ThemeProvider theme={theme}>
      < IndexPageProvider>
      < ShowMenuProvider>
          
          < Header />
          
          < Section />

         
          < GlobalStyle/>
          
      </ShowMenuProvider>
      </IndexPageProvider>
   
    </ThemeProvider>
  );
}

export default App;
