import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FormResume from './Components/FormResume';
import Home from './Home';
import Template from './Components/Template';
import Example from './Components/Example';
import About from './Components/About';
import Help from './Components/Help';

const router=createBrowserRouter([
  {
    path: '/',
    element:<App/>,

    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/WorkFolio',
        element:<Home/>
      },
      {
        path:'/FormResume',
        element:<FormResume/>
      },
      {
        path:'/Template',
        element:<Template/>
      },
      {
        path:'/Example',
        element:<Example/>
      },  
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Help',
        element:<Help/>
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




