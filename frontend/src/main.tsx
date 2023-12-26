import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Layout from './layout';
import AboutUs from './routes/about-us';
import Quotes from './routes/quotes/page';
import { Toaster } from 'react-hot-toast';
import Contact from './routes/contact';
import ErrorPage from './error-page';
import Portfolio from './routes/portfolio/page';
import Project  from './routes/portfolio/project/page';

const router = createBrowserRouter([
  {
      path: "/", 
      element: <Layout />,
      errorElement:<ErrorPage />,
      children:[{
        path:"/",
        element: <App />,
        
      },
      {
        path:"/about-us",
        element:<AboutUs />,
      },
      {
        path:"/quotes",
        element:<Quotes />,
        
      },
      {
        path:"/contact",
        element:<Contact />,
        
      },
      {
        path:"/portfolio",
        element:<Portfolio />
      },
      {
        path:"/portfolio/:projectid",
        element:<Project />,

      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Toaster />
      <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
