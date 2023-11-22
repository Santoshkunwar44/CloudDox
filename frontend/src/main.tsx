import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
    import  { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>

    <Toaster 
    toastOptions={{
      style:{
        maxWidth:"500px"
      }
    }}/>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
