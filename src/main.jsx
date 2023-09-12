import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './components/loginPage.jsx'
import CustomerSignUp from './components/CustomerSignUp.jsx'
import ServiceSignUp from './components/ServiceSignUp.jsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/customerSignUp',
    element: <CustomerSignUp />
  },
  {
    path: '/serviceProviderSignUp',
    element: <ServiceSignUp />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
