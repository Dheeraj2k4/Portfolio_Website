import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

function ScrollToTopOnLoad() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollToTopOnLoad />
    <App />
  </StrictMode>,
)
