import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/Home/Home.jsx'
import About from './assets/AboutUs/About.jsx'
import Contact from './assets/ContactUs/Contact.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: "",
        element:<Home/>
      }, {
        path: "about",
        element:<About/>
      },
      {
        path: "contact",
        element:<Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
