import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FireworkAnimationsProvider } from './contexts/FireworkAnimations'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FireworkAnimationsProvider>
      <App />
    </FireworkAnimationsProvider>
    
  </React.StrictMode>,
)
