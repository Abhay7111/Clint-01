import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error404 from '/404.gif';
import './animation.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';

  const router = createBrowserRouter([
    {path:'/', element:<App/>,
      children:[
        {path:'', element:<Home/>,},
        {path:'contact', element:<Contact/>,},
        {path:'*', element:<img src={Error404} className='h-[80vh] w-full object-cover object-center'/>,}
      ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
