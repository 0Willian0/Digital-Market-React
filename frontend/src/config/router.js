import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, createRoutesFromElements, Route } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Home from '../components/home/Home';
import AdminPages from '../components/admin/AdminPages';
import App from '../App';
import ProductsByCategory from '../components/product/ProductByCategory';
// import ProductById from '../components/product/ProductById';
import Cart from '../components/cart/Cart';
import History from '../components/history/History';
// import HistoryProducts from '../components/history/HistoryProducts';
import Auth from '../components/auth/Auth';
import HistoryProducts from '../components/history/HistoryProducts';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user); // Pegue o usuário do estado do Redux

  if (!user?.admin) {
    return <Navigate to="/" />; // Redireciona se não for admin
  }

  return children; // Renderiza o componente filho se for admin
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O App contém o Menu, Header e o Outlet dentro do ContentComponent
    children: [
      {
        index: true, // Essa é a rota padrão
        element: <Home />, // Componente que será renderizado no Outlet
      },{
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminPages />
          </ProtectedRoute>
        ), 
      },{
        path: 'categories/:id/products',
        element: <ProductsByCategory />,
      },{
          path: 'cart',
          element: <Cart />,
      },{
          path: 'history',
          element: <History/>
      },{
          path: 'historyProducts',
          element: <HistoryProducts/>
      },{
          path: 'auth',
          element: <Auth />,
      }
    ],
  },
]);
      // Descomente as rotas abaixo conforme necessário:
      // 
      // {
      //   path: 'history',
      //   element: <History />,
      // },
      // {
      //   path: 'historyProducts/:dateBuyed',
      //   element: <HistoryProducts />,
      // },


export default router
