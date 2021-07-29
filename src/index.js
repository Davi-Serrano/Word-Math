import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ThemePageProvider from "./Context/ThemePage";


ReactDOM.render(
  <React.StrictMode>
     <ThemePageProvider>
        <App />
     </ThemePageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


