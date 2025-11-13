// src/router.jsx

import { createBrowserRouter } from 'react-router-dom';

import App from './App'; 
import Home from './components/Home/Home'
const router = createBrowserRouter([
  {
    path: "/",
  
    element: <App />, 
    errorElement: <div>¡Error 404! Página no encontrada.</div>, 
   children:[
    {
      path:'/',
      element:<Home/>
    }
   ]
  },
]);

export default router;