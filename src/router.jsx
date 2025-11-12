// src/router.jsx

import { createBrowserRouter } from 'react-router-dom';

import App from './App'; 

const router = createBrowserRouter([
  {
    path: "/",
  
    element: <App />, 
    errorElement: <div>¡Error 404! Página no encontrada.</div>, 
   
  },
]);

export default router;