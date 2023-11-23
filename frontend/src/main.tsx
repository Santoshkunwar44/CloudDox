import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>


    <Toaster 
    toastOptions={{
      style:{
        maxWidth:"500px"
      }
    }}/>
    <App />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
