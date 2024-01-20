import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from './Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <About/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>
)
