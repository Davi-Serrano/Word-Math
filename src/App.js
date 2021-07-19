import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme} from "./styles/theme"
import  GlobalStyle from "./styles/global";

import Header from "./components/Header/index"


function App() {
  

  var theme = darkTheme

  return (
    <ThemeProvider theme={theme}>
   
      < Header />

      <button> ChageTheme</button>
      < GlobalStyle/>

   
    </ThemeProvider>
  );
}

export default App;
