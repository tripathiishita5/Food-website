import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from './Error.jsx';
import { Body } from './App.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [{
      path: "/",
      element: <Body/>
    },
    {
      path: "/about",
      element: <About/>,
    },
  ],
    errorElement: <Error/>,
  },  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>
)
