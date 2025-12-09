import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import UserPage, { userLoader } from './pages/UserPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route 
            path="user/:id" 
            element={<UserPage />} 
            loader={userLoader}
            errorElement={<ErrorPage />}
          />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:query" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
