import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Home from './pages/Home.jsx'
import { Toaster } from 'react-hot-toast'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        // errorElement: <div>Error</div>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        // errorElement: <div>Error</div>,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
