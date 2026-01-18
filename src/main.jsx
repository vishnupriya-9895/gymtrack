import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Tailwind MUST be after bootstrap


import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="683158835368-0psj1d9fgucsjuh7inci5a50tquj0uhj.apps.googleusercontent.com">
        <BrowserRouter>
     <App />
    </BrowserRouter>
      </GoogleOAuthProvider>
  </StrictMode>
)
