import IndexPageProvider from "./Context/IndexPage";
import ShowMenuProvider from "./Context/Menu"

import { ThemeProvider } from "styled-components";
import {  lightTheme, darkTheme} from "./styles/theme"
import  GlobalStyle from "./styles/global";

import Header from "./components/Header/index"
import { Section } from "./components/Section";

import { useThemePage } from "./Context/ThemePage";

function App() {
 
  const { Theme } = useThemePage()
  
  return (
   
      <ThemeProvider theme={Theme === "ligth" ? lightTheme : darkTheme}>
            < IndexPageProvider>
              < ShowMenuProvider>
                  
                    <Header />
                    <Section />                  
                    <GlobalStyle/>
                  
              </ShowMenuProvider>
            </IndexPageProvider>
    
        </ThemeProvider>
 
  );
}

export default App;
