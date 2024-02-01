import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './Styles/GlobalStyle.jsx'
import { GlobalProvider } from './Context/GloboContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
      <App/>
    </GlobalProvider>
    
  </React.StrictMode>
);
