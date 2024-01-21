import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from './Error.jsx';
import { Body } from './App.jsx';
import { About } from './About.jsx';
import { Contact } from './About.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';

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
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>,
    },
  ],
    errorElement: <Error/>,
  },  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>
)
