import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,              // "/"
        element: <HomePage />,
      },
      {
        path: "user/:id",
        element: <UserPage />,
      },
      {
        path: "search/:query?",
        element: <SearchPage />,
      },
      {
        path: "*",                // 404
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
