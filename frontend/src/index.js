import React from 'react';
import ReactDOM from 'react-dom/client';

// Importações de CSS e configurações
import 'font-awesome/css/font-awesome.css'; // FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import './config/axios'; // Configurações do Axios
import './config/mq'; // Configurações de Media Queries, se houver

// Importação de componentes e configuração de estado/roteamento

import { Provider } from 'react-redux'; // Provedor do Redux
import store from './config/store'; // Store configurado no Redux
import { RouterProvider, BrowserRouter as Router } from 'react-router-dom'; // RouterProvider para o createBrowserRouter
import router from './config/router'; // Importa o roteador criado no arquivo de roteamento
import App from './App';
import axios from './config/axios';
import 'react-toastify/dist/ReactToastify.css'; // Importa o CSS
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Use apenas o RouterProvider, pois você está usando createBrowserRouter */}
      <RouterProvider router={router} />
      
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      
    </Provider>
  </React.StrictMode>
);
