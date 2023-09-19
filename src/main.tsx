import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CSSReset />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
