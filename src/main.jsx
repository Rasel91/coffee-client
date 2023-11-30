import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Added from './components/Added.jsx';
import Update from './components/Update.jsx';
import Login from './Login.jsx';
import Coffee from './components/Coffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
       element:<Coffee></Coffee>
      },
      {
        path: "/added",
        element: <Added></Added>
      },
      {
        path: "/update",
        element: <Update></Update>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  }
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
