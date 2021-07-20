

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme} from "./styles/theme"
import  GlobalStyle from "./styles/global";

import Header from "./components/Header/index"
import { Section } from "./components/Section";


function App() {
  

  var theme = lightTheme

  return (
    <ThemeProvider theme={theme}>
   
      < Header />
      < Section />

  
      < GlobalStyle/>

   
    </ThemeProvider>
  );
}

export default App;
