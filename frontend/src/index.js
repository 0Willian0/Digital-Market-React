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

// Configurações do React (não precisa do productionTip como no Vue)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Use apenas o RouterProvider, pois você está usando createBrowserRouter */}
      <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>
);
