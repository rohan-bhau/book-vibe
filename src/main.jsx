import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout/MainLayout'
import Homepage from './pages/Homepage/Homepage'
import Books from './pages/Books/Books'
import { router } from './Routes/router'
import BookProvider from './context/BookContext'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
);
