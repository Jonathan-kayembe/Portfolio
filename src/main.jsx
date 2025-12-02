import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './i18n/config'
import './index.css'
import 'aos/dist/aos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/Portfolio">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)

