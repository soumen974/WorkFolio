import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FormResume from './Components/FormResume';
import Home from './Home';

const router=createBrowserRouter([
  {
    path: '/',
    element:<App/>,

    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/WorkFolio',
        element:<Home/>
      },
      {
        path:'/FormResume',
        element:<FormResume/>
      }
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);




