// src/router.jsx

import { createBrowserRouter } from 'react-router-dom';

import App from './App'; 
import Home from './components/Home/Home'
import Servicios from './components/Servicios/Servicios';
const router = createBrowserRouter([
  {
    path: "/",
  
    element: <App />, 
    errorElement: <div>¡Error 404! Página no encontrada.</div>, 
   children:[
    {
      path:'/',
      element:<Home/>
    },
   ]
  },
    {
      path:'/servicios',
      element:<Servicios/>
    }
]);

export default router;