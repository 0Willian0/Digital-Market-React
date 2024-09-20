import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import AdminPages from '../components/admin/AdminPages';
import App from '../App';
import ProductsByCategory from '../components/product/ProductByCategory';
// import ProductById from '../components/product/ProductById';
// import Cart from '../components/cart/Cart';
// import History from '../components/history/History';
// import HistoryProducts from '../components/history/HistoryProducts';
import Auth from '../components/auth/Auth';
import { userKey } from '../global';

const isAdmin = () => {
  const json = localStorage.getItem(userKey);
  const user = json ? JSON.parse(json) : null;
  return user && user.admin;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O App contém o Menu, Header e o Outlet dentro do ContentComponent
    children: [
      {
        index: true, // Essa é a rota padrão
        element: <Home />, // Componente que será renderizado no Outlet
      },
      {
        path:"/admin" ,
        element: isAdmin() ? <AdminPages /> : <Navigate to="/" /> , // Outra rota que será renderizada no Outlet
      },
      {
        path: 'categories/:id/products',
        element: <ProductsByCategory />,
      },
      {
          path: 'auth',
          element: <Auth />,
      }
    ],
  },
]);
      // Descomente as rotas abaixo conforme necessário:
      // {
      //   path: 'categories/:id/products',
      //   element: <ProductsByCategory />,
      // },
      // {
      //   path: 'products/:id',
      //   element: <ProductById />,
      // },
      // {
      //   path: 'cart',
      //   element: <Cart />,
      // },
      // {
      //   path: 'history',
      //   element: <History />,
      // },
      // {
      //   path: 'historyProducts/:dateBuyed',
      //   element: <HistoryProducts />,
      // },
      // {
      //   path: 'auth',
      //   element: <Auth />,
      // },



export default router;
