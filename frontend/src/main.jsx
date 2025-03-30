import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-f10vt2crej66q3h4.us.auth0.com"
    clientId="0smfFHZTTLzUhN1G86ZCFkUZMn257yzI"
    cacheLocation="localstorage" // This ensures the session is saved in localStorage, even after page refresh
    authorizationParams={{
      redirect_uri: `${window.location.origin}/home`
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)
